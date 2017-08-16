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
            routerPath: "/",
            modalInstrumento: false,
            modalModulo: false,
            idNinio: undefined
        }
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
    }
    componentDidMount() {
        var router = Router({
            '/admin': {
                on: this.validUser,
                '/instrumentos': {
                    '/nuevo': () => {
                        this.setState({modalInstrumento: true, routerPath: "admininstrumentos"})
                    },
                    
                    '/editar/:id': this.editarInstrumento,

                    on: () => {

                        this.setState({routerPath: "admininstrumentos", modalInstrumento: false,modalModulo: false})
                    },
                    '/modulos': {
                        '/nuevo/:id': (id) => {
                            this.setState({modalModulo: true,instrumentoId:parseInt(id), routerPath: "admininstrumentos"})
                        },
                        on: this.helloWorld,
                        'reactivos/': {
                            on: this.helloWorld
                        }
                    }
                }
            },
            '/instrumentos': {
                on: this.helloWorld
            },
            '/pdf': {
                '/fichas': {
                    '/nar': {
                        '/:id': this.fichanar,
                        on: () => {
                            this.setState({routerPath: "nar"})
                        }
                    },
                    '/obesidad': () => {
                        this.setState({routerPath: "nar"})
                    },
                    '/embarazo': () => {
                        this.setState({routerPath: "nar"})
                    }
                },
                '/somatometria': () => {
                    this.setState({routerPath: "nar"})
                },
                '/reporte': () => {
                    this.setState({routerPath: "nar"})
                },
                '/grafica': () => {
                    this.setState({routerPath: "nar"})
                }
            }
        });

        router.init('/');
    }
    validUser = () => {
        getUser((response) => {
            if (response && response.data && response.data.d) {}
        });
    }
    editarInstrumento = (id) => {
        var i = parseInt(id);
        this.setState({instrumentoId: i, modalInstrumento: true, routerPath: "admininstrumentos"})
    }
    helloWorld = () => {
        alert("se activa conteiner")
    }
    fichanar = (id) => {
        this.setState({routerPath: "fichanar"})
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
            }
        ]
        var navigatorHistory = [];
        switch (this.state.routerPath) {
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
            case "admininstrumentos":

                renderConteiner = (
                    <div>
                        <ModalInstrumento
                            id={this.state.instrumentoId}
                            show={this.state.modalInstrumento}
                            title="instrumento"/>
                        <ModalModulo
                            instrumentoId={this.state.instrumentoId}
                            show={this.state.modalModulo}
                            title="modulo"/>
                        <Instrumentos/>
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
