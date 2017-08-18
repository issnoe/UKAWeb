class Instrumento extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.state.showModal = false
        this.state.showModalDelete = false

        this.state.isOpened = false;
        this.state.item = {}
        this.state.itemModulo = {}

        var modulos = []
        try {
            modulos = JSON.parse(this.props.item.modulos)
        } catch (error) {}

        this.state.listaModulos = modulos

    }

    /*Medodos WS */
    getModulosWS(id, callback) {
        var params = `{id:${id}}`;

        const url = "AdminIN.aspx/getInstrumentoId";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onloadend = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataResp = JSON.parse(xhr.responseText);
                return callback(dataResp)
            }
        }
        xhr.send(params);
    }
    saveModuloWS(item, callback) {
        var params = `{id:${item.id},id_instrumento:${item.id_instrumento}, modulo:"${item.modulo}",prefijo:"${item.prefijo}", leyenda:"${item.subtitulo}", estado:${item.estado}, orden:${item.orden}}`;
        const url = "AdminIN.aspx/saveModulo";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.onloadend = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataResp = JSON.parse(xhr.responseText);
                return callback(dataResp)
            }
        }
        xhr.send(params);
    }
    deleteModuloWS(id, callback) {
        var params = `{id:${id}}`;
        const url = "AdminIN.aspx/deleteModulo";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.onloadend = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataResp = JSON.parse(xhr.responseText);
                return callback(dataResp)
            }
        }
        xhr.send(params);
    }
    setStatePromise(resp) {;
        // var instrumentos = resp.d this.setState({listaIntrumentos: instrumentos,
        // spinerLoad: false,showModal: false});
    }
    /*fin  WS */

    handleModalDelete(decition) {

        if (decition.action) {
            this
                .props
                .onChange({action: "delete", itemModulo: this.props.item})
            this.setState({showModalDelete: false})
        } else {
            this.setState({showModalDelete: false})
        }

    }
    saveModulo(state) {

        if (state.modulo) {
            this
                .saveModuloWS(state, function (data) {
                    this
                        .getModulosWS(this.props.item.id, function (data) {

                            if (data.d[0].modulos != "") {
                                var modulos = JSON.parse(data.d[0].modulos);
                                this.setState({listaModulos: modulos})
                            } else {
                                this.setState({listaModulos: []})
                            }

                        }.bind(this))

                }.bind(this))
        }
        this.setState({showModal: false})
    }
    handleState(e) {
        switch (e.action) {
            case "delete":
                this.deleteModuloWS(e.item.id, function (data) {

                    this
                        .getModulosWS(this.props.item.id, function (data) {

                            if (data.d[0].modulos != "") {
                                var modulos = JSON.parse(data.d[0].modulos);
                                this.setState({listaModulos: modulos})
                            } else {
                                this.setState({listaModulos: []})
                            }

                        }.bind(this))

                }.bind(this));
                break;
            case "update":

                this.setState({showModal: true, itemModulo: e.item});
                break;

        }
    }
    renderModulos() {
        if (this.state.listaModulos.length > 0) {;
            var listItems = this
                .state
                .listaModulos
                .map((item) => <ModuloItem
                    onChange={this
                    .handleState
                    .bind(this)}
                    key={`${item.id}_lista_modulo_`}
                    item={item}/>);
            return listItems;
        }
        return (
            <h3>No cuenta con modulos</h3>
        )

    }
    render() {
        var isOpened = this.state.isOpened;

        return (
            <div className="panel panel-default">

                <PopupMsg
                    onChange={this
                    .handleModalDelete
                    .bind(this)}
                    show={this.state.showModalDelete}
                    title="eliminar"/>
                <PopupModulo
                    onChange={this
                    .saveModulo
                    .bind(this)}
                    item={this.state.itemModulo}
                    show={this.state.showModal}
                    title="modulo"/>
                <div className="panel-heading">
                    <div className="row">
                        <div
                            className="panel-title long-txt col-md-4 col-sm-4"
                            onClick={() => (this.setState({
                            isOpened: !this.state.isOpened
                        }))}>
                            <a
                                className={(!this.state.isOpened)
                                ? "collapsed"
                                : ""}>
                                <span><img
                                    src={(isOpened)
                ? "../../../images/arrw-down.svg"
                : "../../../images/arrw-down.svg"}
                                    className="rotate2"/></span>
                                {`${this.props.item.nombre} / ${this.props.item.subtitulo} / ${this.props.item.prefijo}`}
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-3">{moment(this.props.item.fechaCreacion).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        <div className="col-md-2 col-sm-2 long-txt">{(this.props.item.aplicado)
                                ? PERSONAS[this.props.item.aplicado].data
                                : "No asigando"}</div>
                        <div className="col-md-2 col-sm-2 ">{(this.props.item.estado != null)
                                ? STATUS[this.props.item.estado].data
                                : "Sin estado"}</div>
                        <div className="col-md-1 col-sm-1 text-right">

                            <div className="dropdown">
                                <a data-toggle="dropdown">
                                    <img src="../../../images/menu.svg" alt="Acciones" height="28"/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">

                                    <li>
                                        <a href=""><img src="../../../images/enable.svg" alt="Activar instrumento" height="18"/>
                                            Activar</a>
                                    </li>
                                    <li>
                                        <a href={"#/instrumento/" + this.props.item.id}><img src="../../../images/add.svg" alt="Agregar pregunta" height="18"/>
                                            Agregar pregunta</a>
                                    </li>
                                    <li>
                                        <a href={"#/simulacion/" + this.props.item.id}><img src="../../../images/enable.svg" alt="Visualizar instrumento" height="18"/>
                                            Visualizar</a>
                                    </li>
                                    <li>

                                        <a
                                            onClick={() => {
                                            this
                                                .props
                                                .onChange({action: "update", item: this.props.item})
                                        }}><img
                                            src="../../../images/edit.svg"
                                            alt="Editar nombre del instrumento"
                                            height="18"/>
                                            Editar</a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                            {/*var itemM = {} itemM.id_instrumento:this.props.item.id;*/
                                            }
                                            this.setState({
                                                showModal: true,
                                                itemModulo: {
                                                    id_instrumento: this.props.item.id,
                                                    id: 0,
                                                    modulo: "",
                                                    prefijo: "",
                                                    estado: 1,
                                                    leyenda: ""
                                                }
                                            })
                                        }}><img src="../../../images/add.svg" alt="Agregar módulo" height="18"/>
                                            Agregar módulo</a>
                                    </li>

                                    <li>
                                        <a
                                            onClick={() => {
                                            this.setState({showModalDelete: true})
                                        }}><img
                                            src="../../../images/erase-gray.svg"
                                            alt="Eliminar el instrumento"
                                            height="18"/>
                                            Eliminar</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="panel-collapse ">
                    <Collapse isOpened={isOpened}>

                        <div className="panel-body">

                            <div className="col-md-8 modulos">
                                <div className="row header-modulos">
                                    <div className="col-md-4 col-sm-4">
                                        Nombre del módulo
                                    </div>
                                    <div className="col-md-2 col-sm-2 text-center">
                                        Prefijo
                                    </div>
                                    <div className="col-md-1 col-sm-1 text-center">
                                        Estado
                                    </div>
                                </div>
                                {this.renderModulos()}

                                {/*{listItems}*/}
                            </div>

                        </div>

                    </Collapse>

                </div>

            </div>
        )

    }
}
