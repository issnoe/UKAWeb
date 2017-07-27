moment.locale('es');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routerPath: "NAR"
        }
    }
    componentDidMount() {
        var router = Router({'/NAR': this.hangleHome});
        router.init('/');
    }

    hangleHome = () => {
        // getChildrends("", function(response){
        //     debugger;
        //     this;
        // }.bind(this));
        this.setState({routerPath: "NAR"})
    }

    render() {
        var renderConteiner;
        switch (this.state.routerPath) {

            case "NAR":
                renderConteiner = (
                    <Childrens/>
                );
                break;
            default:
                renderConteiner = (
                    <h1>URL no existe</h1>
                );

                break;
        }

        return (

            <NavigationState>
                {renderConteiner}
            </NavigationState>
        )

    }
}
ReactDOM.render(
    <App/>, document.getElementById('appUnkiloDeAyuda'));
