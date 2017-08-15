var Modal = ReactBootstrap.Modal;

const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Popover = ReactBootstrap.Popover;
const Button = ReactBootstrap.Button;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
const Collapse = ReactCollapse;


moment.locale('es');

var App = React.createClass({
    getInitialState: function () {
        return {routerPath: "home", idModulo: undefined, idInstrumento: undefined};
    },
    hangleModulo: function (id) {
        var idM = parseInt(id)
        this.setState({routerPath: "modulo", idModulo: idM, listaModulos: undefined})
    },
    hangleHome: function () {
        this.setState({routerPath: "home", idModulo: undefined, listaModulos: undefined})
    },
    hangleInstrumento: function (id) {
        this.setState({routerPath: "instrumento", idInstrumento: id, listaModulos: undefined})
    },
    hanglePreInstrumento: function (id) {
        this.setState({routerPath: "simulacion", idInstrumento: id, listaModulos: undefined})
    },
    hangleSearchPrefijo: function (prefijo, idModulo, idInstrumento) {
        //Obtener solo el prefijo 
       var onlyText= prefijo.split(/[0-9]+/);
        var params = {
            prefijo: onlyText[0],
            id_modulo: parseInt(idModulo),
            id_instrumento: parseInt(idInstrumento)
        };
        var url = "AdminIN.aspx/searchByPrefijo";
        axios
            .post(url, params)
            .then(function (response) {
                if(response && response.data){
                     var lenghtData = response.data.d.length;
                if (lenghtData > 1) {
                    this.setState({routerPath: "msg", mensaje: "Existe ambiguedad por el prefijo en estos instrumentos;", listIdsModulos: response.data.d})
                    //alert("Existe un módulo con el mismo prefijo"+ids)
                } else if (!response.data.d.length) {
                    this.setState({routerPath: "msg", mensaje: "No se encuentra ninguna referencia con este prefijo ;", listIdsModulos: undefined})

                } else if (lenghtData == 1) {
                      var onlyNumber= prefijo.split(/[A-Za-z]+/);
                      var index = onlyNumber[1];
                      if(index){
                         var idm = response.data.d[0].id
                          window.location.href = '#/modulo/'+idm;
                      }else{
                          var idm = response.data.d[0].id
                          window.location.href = '#/modulo/'+idm;
                      }
                
                }

                }
               
                
            }.bind(this))
            .catch(function (error) {
                alert("No se pudo obtener datos de ese prefijo")
            });

    },
    componentDidMount: function () {
        //agregar modulos
        var router = Router({'/': this.hangleHome, '/instrumento/:id': this.hangleInstrumento, '/search/:prefijo/:idModulo/:idInstrumento': this.hangleSearchPrefijo, '/simulacion/:id': this.hanglePreInstrumento, '/modulo/:id': this.hangleModulo});
        router.init('/');
    },
    render: function () {

        var renderConteiner;
        var renderNavigator;
        switch (this.state.routerPath) {
            case "home":
                renderConteiner = (<Instrumentos/>);
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                Administrador de Instrumentos
                            </li>

                        </ol>
                    </div>
                );
                break;
            case "modulo":
                renderConteiner = (<Modulo id={this.state.idModulo}/>);
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                <a href="#">Administrador de Instrumentos</a>
                            </li>
                            <li >
                                Módulo
                            </li>
                        </ol>
                    </div>
                );
                break;
            case "instrumento":
                var params = {
                    id: this.state.idInstrumento
                };
                var url = "AdminIN.aspx/getInstrumentoId";

                var listaIdModulos = []
                if (this.state.listaModulos) {
                    this
                        .state
                        .listaModulos
                        .map((item, index) => {
                            listaIdModulos.push(<Modulo key={index} id={item.id}/>)
                        });

                } else {
                    axios
                        .post(url, params)
                        .then(function (response) {
                            if (response && response.data && response.data.d[0].modulos != "") {
                                var modulos = JSON.parse(response.data.d[0].modulos);
                                this.setState({listaModulos: modulos})
                            } else {
                                this.setState({listaModulos: []})
                            }
                        }.bind(this))
                        .catch(function (error) {
                            alert("No se pudo obtener datos")
                        });
                }

                renderConteiner = (listaIdModulos);
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                <a href="#">Administrador de Instrumentos</a>
                            </li>
                            <li >
                                Instrumento
                            </li>
                        </ol>
                    </div>
                );
                break;
            case "msg":
                var ids = [];
                if (this.state.listIdsModulos) {
                    this
                        .state
                        .listIdsModulos
                        .map((item, index) => {
                            ids.push(
                                <div>
                                    <a key={"ambiguedad_" + index} href={"#/modulo/"+item.id} ><br/>{item.modulo}   </a></div>
                            )
                        });
                }

                renderConteiner = (
                    <Modal show={true} dialogClassName="modal-dialog modal-long">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="text-center">
                                    {this.state.mensaje}
                                </div>
                                {ids}
                                <button onClick={()=>{window.history.back();}}>Regresar</button>
                                <div className="modal-footer"></div>

                            </div>

                        </div>
                    </Modal>
                );
                break;
            case "simulacion":
                var params = {
                    id: this.state.idInstrumento
                };
                var url = "AdminIN.aspx/getInstrumentoId";

                var listaIdModulos = []
                if (this.state.listaModulos) {
                    this
                        .state
                        .listaModulos
                        .map((item, index) => {
                            listaIdModulos.push(<Modulo key={index} id={item.id} simulation={true}/>)
                        });

                } else {
                    axios
                        .post(url, params)
                        .then(function (response) {
                            if (response && response.data && response.data.d[0].modulos != "") {
                                var modulos = JSON.parse(response.data.d[0].modulos);
                                this.setState({listaModulos: modulos})
                            } else {
                                this.setState({listaModulos: []})
                            }
                        }.bind(this))
                        .catch(function (error) {
                            alert("No se pudo obtener datos")
                        });
                }

                renderConteiner = (listaIdModulos);
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                <a href="#">Administrador de Instrumentos</a>
                            </li>
                            <li >
                                Instrumento
                            </li>
                        </ol>
                    </div>
                );
                break;
            default:
                renderConteiner = (
                    <h1>URL no existe</h1>
                );
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li >
                                <a href="#">Administrador de Instrumentos</a>
                            </li>
                        </ol>
                    </div>
                );
                break;
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {renderNavigator}

                    </div>
                </div>
                < div className="bg-full padding-top-10">
                    {renderConteiner}
                </div>

            </div>
        )

    }
});

ReactDOM.render(
    <App/>, document.getElementById('reactIntrumentsApp'));
