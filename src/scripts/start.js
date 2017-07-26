moment.locale('es');

var App = React.createClass({
    getInitialState: function () {
        return {routerPath: "NAR"};
    },

    hangleHome: function () {
        this.setState({routerPath: "NAR"})
    },
    componentDidMount: function () {
        //agregar modulos
        var router = Router({'/NAR': this.hangleHome});
        router.init('/');
    },
    render: function () {
        var renderConteiner;
        switch (this.state.routerPath) {

            case "NAR":
                renderConteiner = (
                    <h1>Esto es nar</h1>
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
});

ReactDOM.render(
    <App/>, document.getElementById('appUnkiloDeAyuda'));
