moment.locale('es');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routerPath: "nar"
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
        var router = Router({'/nar': this.hangleHome});
        router.init('/');
    }

    hangleHome = () => {
        this.setState({routerPath: "nar"})
    }

    render() {
        var renderConteiner;
        switch (this.state.routerPath) {

            case "nar":
                renderConteiner = (
                    <div>
                        <FSManagerFilters/>
                        <FSListChildrens/>
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

            <NavigationState location={this.state.location} user={this.state.user}>
                {renderConteiner}
            </NavigationState>
        )

    }
}
ReactDOM.render(
    <App/>, document.getElementById('appUnkiloDeAyuda'));
