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
            idNinio: undefined,
          
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
                        this.setState({modalInstrumento: true})
                    },
                    on: () => {
                        this.setState({routerPath: "admininstrumentos"})
                    },
                    '/modulos': {
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
            '/nar': {
                on: () => {
                    this.setState({routerPath: "nar"})
                }
            },
            '/fichanar/:id': this.fichanar
        });

        router.init('/');
    }
    validUser = () => {
        getUser((response) => {
            if (response && response.data && response.data.d) {
                debugger;

            }
        });
    }
    helloWorld = () => {
        alert("se activa conteiner")
    }
    fichanar = (id) => {
        this.setState({routerPath: "fichanar"})
    }

     saveIntrumento(state) {
         debugger;
       this.setState({modalInstrumento: false})
       window.history.back();
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
                debugger
                renderConteiner = (
                    <div>
                         <PopupInstrumento
                            onChange={this
                            .saveIntrumento
                            .bind(this)}
                            item={this.state.modalInstrumento}
                            show={this.state.modalInstrumento}
                            title="instrumento"/>
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
