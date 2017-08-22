
var Modal = ReactBootstrap.Modal;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Popover = ReactBootstrap.Popover;
const Panel = ReactBootstrap.Panel;
const Button = ReactBootstrap.Button;
const Fade = ReactBootstrap.Fade;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
const Collapse = ReactCollapse.Collapse;
moment.locale('es');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controller: "/",
            modalInstrumento: false,
            modalModulo: false,
            idNinio: undefined,
            modalCondition: false
        }
        
    }
    componentDidMount() {

        getLocation(function (response) {
            if (response && response.data && response.data.d) {
                this.setState({location: response.data.d})
            }
        }.bind(this));
        getUser((response) => {
            if (response && response.data && response.data.d) {
                this.setState({user: response.data.d})
            }
        });
        var router = Router({
            '/admin': {
                on: this.validUser,
                '/instrumentos': {
                    on: () => {
                        this.setState({controller: "admininstrumentos", modalCondition: undefined, moduloId: undefined, modalInstrumento: undefined, modalModulo: undefined})
                    },
                    '/nuevo': () => {
                        this.setState({modalInstrumento: true, controller: "admininstrumentos"})
                    },
                    '/eliminar/:id': (id) => {
                        var i = parseInt(id)
                        this.setState({modalCondition: true, _instrumentoId: i, controller: "admininstrumentos"})
                    },
                    '/editar/:id': (id) => {
                        var i = parseInt(id);
                        this.setState({_instrumentoId: i, modalInstrumento: true, controller: "admininstrumentos"})
                    },
                    '/simulacion/:id': (id) => {
                        var i = parseInt(id);
                        this.setState({_instrumentoId: i, controller: "simulacion"})
                    },
                    '/modulos': {
                        '/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({id: id, controller: "modulo"})
                        },
                        '/nuevo/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({modalModulo: true, _instrumentoId: i, controller: "admininstrumentos"})
                        },
                        '/eliminar/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({modalCondition: true, _instrumentoId: i, focusHandle: "modulo", controller: "admininstrumentos"})
                        },
                        '/editar/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({modalModulo: true, _instrumentoId: i, moduloId: i, controller: "admininstrumentos"})
                        },
                        on: this.helloWorld,
                        'reactivos/': {
                            on: this.helloWorld
                        }
                    }
                }
            },
            '/pdc/': {
                '/instrumentos': {
                    '/candidatos':{
                       '/:id' : (id) => {
                            var i = parseInt(id);
                            this.setState({_instrumentoId: i,controller: "candidatosEncuesta"})
                        },
                        
                        
                    },
                    '/aplicar/:id/':(id) => {
                        debugger;
                        var i = parseInt(id);
                        this.setState({_instrumentoId: i, controller: "aplicarEncuesta"})
                    },
                    on: () => {
                        this.setState({controller: "instrumentos"})
                    }
                }
            },
            '/pdf': {
                '/fichas': {
                    '/nar': {
                        '/:id': this.fichanar,
                        on: () => {
                            this.setState({controller: "nar"})
                        }
                    },
                    '/obesidad': () => {
                        this.setState({controller: "nar"})
                    },
                    '/embarazo': () => {
                        this.setState({controller: "nar"})
                    }
                },
                '/somatometria': () => {
                    this.setState({controller: "nar"})
                },
                '/reporte': () => {
                    this.setState({controller: "nar"})
                },
                '/grafica': () => {
                    this.setState({controller: "nar"})
                }
            }
        });

        router.init('/');
        // router.configure({html5history: true});

    }
    validUser = () => {
        getUser((response) => {
            if (response && response.data && response.data.d) {}
        });
    }
    helloWorld = () => {
        alert("se activa conteiner")
    }
    fichanar = (id) => {
        this.setState({controller: "fichanar"})
    }
    saveIntrumento(state) {
        this.setState({modalInstrumento: false})
        window
            .history
            .back();
    }
    render() {
        var renderConteiner;
        var navigatorState = [
            {
                name: "Inicio",
                routing: "/Miembros/MenuPrincipal"
            }, {
                name: "Medir y Diagnosticar",
                routing: "/Miembros/MD/SubMenu"
            }, {
                name: "Niños de Alto Riesgo",
                routing: "#/nar"
            }, {
                name: "Fichas de niños de alto riesgo (NAR)",
                routing: "#/fichanar"
            },, {
                name: "Administrador de instrumentos",
                routing: "#/admin/instrumentos"
            }
            , {
                name: "Instrumentos",
                routing: "#/pdc/instrumentos"
            },
            {
                name: "Candidatos",
                routing: "#/pdc/instrumentos/candidatos/"+this.state._instrumentoId
            },
            {
                name: "Aplicación",
                routing: "#/pdc/instrumentos/aplicar/"+this.state._instrumentoId
            },
        ]
        var navigatorHistory =[]
        switch (this.state.controller) {
            case "nar":
                navigatorHistory = navigatorState.slice(0, 3);
                renderConteiner = (
                    <div>
                        <FSManagerFilters/>
                        <FSListChildrens/>
                    </div>
                );
                break;
            case "fichanar":
                navigatorHistory = navigatorState.slice(0, 4);
                renderConteiner = (
                    <div>
                        <FSChildrenNar idNinio={this.state.idNinio}/>
                    </div>
                );
                break;

            case "candidatosEncuesta":
                navigatorHistory =  _.concat(navigatorState[0], navigatorState[1],navigatorState[6],navigatorState[7])
                /*
                switch (key) {
                    case value:

                        break;

                    default:
                        break;
                }*/
                
                renderConteiner = (
                    <div>
                        <PDCManagerFilters/>
                        <PDCListChildrens {...this.state}/>
                    </div>
                );
                break;

            case "modulo":
                renderConteiner = (
                    <div>
                        <Modulo id={this.state.id}/>
                    </div>
                );
                break;
                case "aplicarEncuesta":
                navigatorHistory =  _.concat(navigatorState[0], navigatorState[1],navigatorState[6],navigatorState[7],navigatorState[8])
                var params = {
                    id: this.state._instrumentoId
                };
                var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentoId";
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
                break;
            case "simulacion":
                var params = {
                    id: this.state._instrumentoId
                };
                var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentoId";
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
                break;
            case "instrumentos":
                navigatorHistory = _.concat(navigatorState[0],navigatorState[1], navigatorState[6])
                renderConteiner = (
                    <div>
                        <InstrumentosView/>
                    </div>
                );
                break;
            case "admininstrumentos":
                renderConteiner = (
                    <div>
                        <ModalCondition
                            id={this.state._instrumentoId}
                            focusHandle={this.state.focusHandle}
                            show={this.state.modalCondition}/>
                        <ModalInstrumento
                            id={this.state._instrumentoId}
                            show={this.state.modalInstrumento}
                            title="Instrumento"/>
                        <ModalModulo
                            _instrumentoId={this.state._instrumentoId}
                            moduloId={this.state.moduloId}
                            show={this.state.modalModulo}
                            title="Modulo"/>
                        <Instrumentos id={this.state._instrumentoId}/>
                    </div>
                );
                break;

                initModalInstrumento
            default:

                renderConteiner = (
                    <h1>URL no existe</h1>
                );
                break;
        }
        return (
            <NavigationState
                navigatorHistory={navigatorHistory}
                location={this.state.location}
                user={this.state.user}>
                {renderConteiner}
            </NavigationState>
        )

    }
}
ReactDOM.render(
    <App/>, document.getElementById('appUnkiloDeAyuda'));
