class Instrumento extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {isOpened:true }
        this.state.showModal = false
        this.state.showModalDelete = false
        
        var modulos = []
        try {
            modulos = JSON.parse(this.props.item.modulos)
        } catch (error) {}

        this.state.listaModulos = modulos

    
    }
    renderModulos() {
        if (this.state.listaModulos.length > 0) {;
            var listItems = this
                .state
                .listaModulos
                .map((item) => <ModuloInRow
                   
                    key={item.id+"_lista_modulo_"}
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
                        <div className="col-md-3 col-sm-3">{moment(this.props.item.fechaCreacion).format('MM DD YY, h:mm:ss')}</div>
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
                                    <a href={"#/admin/instrumentos/editar/" + this.props.item.id}><img
                                            src="../../../images/edit.svg"
                                            alt="Editar  instrumento"
                                            height="18"/>
                                            Editar</a>

                                       
                                    </li>
                                    <li>
                                        <a  href={"#/admin/instrumentos/modulos/nuevo/" + this.props.item.id}><img src="../../../images/add.svg" alt="Agregar módulo" height="18"/>
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

                            <div className="col-md-10 col-sm-10 modulos">
                                <div className="row header-modulos">
                                    <div className="col-md-4 col-sm-4">
                                        Nombre del módulo
                                    </div>
                                    <div className="col-md-2 col-sm-2 text-center">
                                        Prefijo
                                    </div>
                                    <div className="col-md-2 col-sm-2 text-center">
                                        Estado
                                    </div>
                                </div>
                                {this.renderModulos()}
                              
                            </div>

                        </div>

                    </Collapse>

                </div>

            </div>
        )

    }
}
