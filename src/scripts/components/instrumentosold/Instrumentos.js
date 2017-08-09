class Instrumentos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.item = {}
        this.state.showModal = false
        this.state.listaIntrumentos = [];
        this.state.spinerLoad = true
         this.getIntrumentosWS(this.setStatePromise.bind(this))

    }
    /*Medodos WS */
    getIntrumentosWS(callback) {
        const url = "AdminIN.aspx/getInstrumentos";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onloadend = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataResp = JSON.parse(xhr.responseText);
                return callback(dataResp)
            }
        }
        xhr.send();
    }
    saveIntrumentoWS(item, callback) {
        var params = `{id:${item.id}, nombre:"${item.nombre}", subtitulo:"${item.subtitulo}",prefijo:"${item.prefijo}", estado:${item.estado}, orden:${item.orden}, aplicado:${item.aplicado}}`;
        const url = "AdminIN.aspx/saveIntrumento";
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
    deleteIntrumentoWS(id, callback) {
        var params = `{id:${id}}`;
        const url = "AdminIN.aspx/deleteIntrumento";
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
    setStatePromise(resp) {
        var instrumentos = resp.d
        this.setState({listaIntrumentos: instrumentos, spinerLoad: false,showModal: false});
    }
    /*fin  WS */
    
    
    saveIntrumento(state) {
        if (state.nombre) {
            this.saveIntrumentoWS(state, function(data){
                this.getIntrumentosWS(this.setStatePromise.bind(this))
            }.bind(this))
        } else {
            this.setState({showModal: false})
        }
    }
    handleState(e) {
       
        switch (e.action) {
            case "delete":
              
               this.deleteIntrumentoWS(e.itemModulo.id,function(data){
                    this.getIntrumentosWS(this.setStatePromise.bind(this))
                }.bind(this));
                break;
          case "update":
               this.setState({showModal: true, item:e.item })
                break;

        }
    }
    render() {
        const listItems = this
            .state
            .listaIntrumentos
            .map((item) => <Instrumento
                onChange={this
                .handleState
                .bind(this)}
               
                key={`${item.nombre}_${item.id}_lista_instrumentos_`}
                item={item}/>);
        if (this.state.spinerLoad == true) {
            return (
                <div className="spinner" key={"spinnerInstrumento_"}></div>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 col-sm-7">
                            <h1>Instrumentos</h1>
                        </div>
                        <div className="col-md-5 col-sm-5 text-right">
                            <div className="form-group">

                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => {
                                    var itemAux = this.state.item;
                                    itemAux.id =-1

                                    this.setState({showModal: true,item:itemAux})
                                }}>Agregar instrumento</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-full padding-top-10">
                    <div className="container">
                        
                        <PopupInstrumento
                            onChange={this
                            .saveIntrumento
                            .bind(this)}
                          
                            item={this.state.item}
                            show={this.state.showModal}
                            title="instrumento"/>

                        <div className="row">
                            <div className="content-form col-md-12">
                                <div className="row header-intrumentos">
                                    <div className="col-md-4 col-sm-4">
                                        Nombre del instrumento
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        Fecha de creación
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        Aplicación a
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        Estado
                                    </div>
                                    <div></div>

                                </div>
                                <div className="panel-group instrumentos-l">
                                    
                                    {listItems}
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}
