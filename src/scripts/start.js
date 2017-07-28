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
            routerPath: "nar",
            idNinio: undefined
        }
        getLocation("", function (response) {
            if (response && response.data && response.data.d) {
                this.setState({location: response.data.d})
            }
        }.bind(this));
        getUser("", function (response) {
            if (response && response.data && response.data.d) {
                this.setState({user: response.data.d})
            }
        }.bind(this));

    }
    
    componentDidMount() {
        var router = Router({'/nar': this.hangleHome, '/fichanar/:id': this.routerFichaNAR});
        router.init('/');
    }
    routerFichaNAR = (id) => {
        this.setState({routerPath: "fichanar"})
    }

    hangleHome = () => {
        this.setState({routerPath: "nar"})
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
        var navigatorHistory=[];
        switch (this.state.routerPath) {

            case "nar":
                navigatorHistory=navigatorState.slice(0,3)
                renderConteiner = (
                    <div>
                        <FSManagerFilters/>
                        <FSListChildrens/>
                    </div>

                );
                break;
            case "fichanar":
            navigatorHistory=navigatorState.slice(0,4)
               
                renderConteiner = (
                    <div>

                        <FSChildrenNar idNinio={this.state.idNinio}/>
                    </div>

                );
                break;
            default:
                renderConteiner = (
                    <h1>URL no existe</h1>
                );

                break;
        }

        return (

            <NavigationState navigatorHistory={navigatorHistory} location={this.state.location} user={this.state.user}>
                {renderConteiner}
            </NavigationState>
        )

    }
}
ReactDOM.render(
    <App/>, document.getElementById('appUnkiloDeAyuda'));
