
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
                this.setState({ location: response.data.d })
            }
        }.bind(this));
        getUser((response) => {
            if (response && response.data && response.data.d) {
                this.setState({ user: response.data.d })
            }
        });

        var router = Router({
            '/admin': {
                on: this.validUser,
                '/instrumentos': {
                    on: () => {
                        this.setState({  controller: "admininstrumentos",listaModulos:undefined, modalCondition: undefined, _instrumentoId:undefined,_moduloId: undefined, modalInstrumento: undefined, modalModulo: undefined })
                    },
                    '/nuevo': () => {
                        this.setState({ modalInstrumento: true, controller: "admininstrumentos" })
                    },
                    '/eliminar/:id': (id) => {
                        var i = parseInt(id)
                        this.setState({ modalCondition: true, _instrumentoId: i, focusHandle: "instrumento", controller: "admininstrumentos" })
                    },
                    '/editar/:id': (id) => {
                        var i = parseInt(id);
                        this.setState({ _instrumentoId: i, modalInstrumento: true, controller: "admininstrumentos" })
                    },
                    '/simulacion/:id': (id) => {
                        var i = parseInt(id);
                        this.setState({ _instrumentoId: i, controller: "simulacion" })
                    },
                    '/search/:prefijo/:idModulo/:idInstrumento': (prefijo, idModulo, idInstrumento) => {

                        searchByPrefijo({ prefijo, idModulo, idInstrumento }, (response) => {
                            if (response && response.data) {
                                var lenghtData = response.data.d.length;
                                if (lenghtData > 1) {
                                    this.setState({ routerPath: "msg", mensaje: "Existe ambiguedad por el prefijo en estos instrumentos;", listIdsModulos: response.data.d })
                                    //alert("Existe un módulo con el mismo prefijo"+ids)
                                } else if (!response.data.d.length) {
                                    this.setState({ routerPath: "msg", mensaje: "No se encuentra ninguna referencia con este prefijo ;", listIdsModulos: undefined })

                                } else if (lenghtData == 1) {
                                    var onlyNumber = prefijo.split(/[A-Za-z]+/);
                                    var index = onlyNumber[1];
                                    if (index) {
                                        var idm = response.data.d[0].id
                                        window.location.href = '#/admin/instrumentos/modulo/' + idm;
                                    } else {
                                        var idm = response.data.d[0].id
                                        window.location.href = '#/admin/instrumentos/modulo/' + idm;
                                    }

                                }

                            }

                        })

                    },
                     '/modulos': {
                        '/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({ _instrumentoId: id, controller: "modulos" })
                        },
                    },
                    '/modulo': {
                        '/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({ _moduloId: id, controller: "modulo" })
                        },
                        '/nuevo/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({ modalModulo: true, _instrumentoId: i, controller: "admininstrumentos" })
                        },
                        '/eliminar/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({ modalCondition: true, _instrumentoId: i, focusHandle: "modulo", controller: "admininstrumentos" })
                        },
                        '/editar/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({ modalModulo: true, _instrumentoId: i, _moduloId: i, controller: "admininstrumentos" })
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
                    '/candidatos': {
                        '/:id': (id) => {
                            var i = parseInt(id);
                            this.setState({ _instrumentoId: i,listaModulos:undefined, controller: "candidatosEncuesta" })
                        },


                    },
                    '/aplicar/:id/': (id) => {
                        var i = parseInt(id);
                        this.setState({ _instrumentoId: i, controller: "aplicarEncuesta" })
                    },
                    on: () => {
                        this.setState({ controller: "instrumentos" })
                    }
                }
            },
            '/pdf': {
                '/fichas': {
                    '/nar': {
                        '/:id': this.fichanar,
                        on: () => {
                            this.setState({ controller: "nar" })
                        }
                    },
                    '/obesidad': () => {
                        this.setState({ controller: "nar" })
                    },
                    '/embarazo': () => {
                        this.setState({ controller: "nar" })
                    }
                },
                '/somatometria': () => {
                    this.setState({ controller: "nar" })
                },
                '/reporte': () => {
                    this.setState({ controller: "nar" })
                },
                '/grafica': () => {
                    this.setState({ controller: "nar" })
                }
            }
        });

        router.init('/');
        // router.configure({html5history: true});

    }
    validUser = () => {
        debugger
        getUser((response) => {
            if (response && response.data && response.data.d) { }
        });
    }
    helloWorld = () => {
        alert("se activa conteiner")
    }
    fichanar = (id) => {
        this.setState({ controller: "fichanar" })
    }
    saveIntrumento(state) {
        this.setState({ modalInstrumento: false })
        window
            .history
            .back();
    }
    handleChange() {
        //this.setState({_instrumentoId:undefined})
        window.location.href = "#/admin/instrumentos";
    }
    render() {
        var renderConteiner;
        var navigatorState = [
            {
                //0
                name: "Inicio",
                routing: "/Miembros/MenuPrincipal"
            }, {
                //1
                name: "Medir y Diagnosticar",
                routing: "/Miembros/MD/SubMenu"
            }, {
                //2
                name: "Niños de Alto Riesgo",
                routing: "#/nar"
            }, {
                //3
                name: "Fichas de niños de alto riesgo (NAR)",
                routing: "#/fichanar"
            },
            {
                //4
                name: "Administrador de instrumentos",
                routing: "#/admin/instrumentos"
            }
            , {
                //5
                name: "Instrumentos",
                routing: "#/pdc/instrumentos"
            },
            {
                //6
                name: "Candidatos",
                routing: "#/pdc/instrumentos/candidatos/" + this.state._instrumentoId
            },
            {
                //7
                name: "Aplicación",
                routing: "#/pdc/instrumentos/aplicar/" + this.state._instrumentoId
            },
            {
                //8
                name: "Modulos",
                routing: "#/pdc/instrumentos/modulo/" + this.state._instrumentoId
            },
            {
                //9
                name: "Simulación instrumento",
                routing: "#/pdc/instrumentos/simulacion/" + this.state._instrumentoId
            },
        ]
        var navigatorHistory = []
        switch (this.state.controller) {
            case "nar":
                navigatorHistory = navigatorState.slice(0, 3);
                renderConteiner = (
                    <div>
                        <FSManagerFilters />
                        <FSListChildrens />
                    </div>
                );
                break;
            case "fichanar":
                navigatorHistory = navigatorState.slice(0, 4);
                renderConteiner = (
                    <div>
                        <FSChildrenNar idNinio={this.state.idNinio} />
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
                                    <a key={"ambiguedad_" + index} href={"#/modulo/" + item.id} ><br />{item.modulo}   </a></div>
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
                                <button onClick={() => { window.history.back(); }}>Regresar</button>
                                <div className="modal-footer"></div>

                            </div>

                        </div>
                    </Modal>
                );
                break;

            case "candidatosEncuesta":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[1], navigatorState[6], navigatorState[7])
                /*
                switch (key) {
                    case value:

                        break;

                    default:
                        break;
                }*/

                renderConteiner = (
                    <div>
                        <PDCManagerFilters />
                        <PDCListChildrens {...this.state} />
                    </div>
                );
                break;

            case "modulo":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[4], navigatorState[8])
                renderConteiner = (
                    <div>
                        <Modulo id={this.state._moduloId}  />
                    </div>
                );
                break;
            case "aplicarEncuesta":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[1], navigatorState[6], navigatorState[7], navigatorState[8])
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
                            listaIdModulos.push(<Modulo key={index} id={item.id} simulation={true} />)
                        });
                } else {
                    axios
                        .post(url, params)
                        .then(function (response) {
                            if (response && response.data && response.data.d[0].modulos != "") {
                                var modulos = JSON.parse(response.data.d[0].modulos);
                                this.setState({ listaModulos: modulos })
                            } else {
                                this.setState({ listaModulos: [] })
                            }
                        }.bind(this))
                        .catch(function (error) {
                            alert("No se pudo obtener datos")
                        });
                }
                renderConteiner = (listaIdModulos);
                break;
            case "simulacion":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[4], navigatorState[4])
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
                            listaIdModulos.push(<Modulo key={index} id={item.id} simulation={true} />)
                        });
                } else {
                    axios
                        .post(url, params)
                        .then(function (response) {
                            if (response && response.data && response.data.d[0].modulos != "") {
                                var modulos = JSON.parse(response.data.d[0].modulos);
                                this.setState({ listaModulos: modulos })
                            } else {
                                this.setState({ listaModulos: [] })
                            }
                        }.bind(this))
                        .catch(function (error) {
                            alert("No se pudo obtener datos")
                        });
                }
                renderConteiner = (listaIdModulos);
                break;
            case "instrumentos":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[1], navigatorState[6])
                renderConteiner = (
                    <div>
                        <InstrumentosView />
                    </div>
                );
                break;
           
           
            case "modulos":
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
                            debugger
                            listaIdModulos.push(<Modulo key={index} id={item.id}/>)
                        });
                } else {
                    axios
                        .post(url, params)
                        .then(function (response) {
                            debugger
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
                    navigatorHistory = _.concat(navigatorState[0], navigatorState[4], navigatorState[8])
                renderConteiner = (
                    <div>
                        {listaIdModulos}
                    </div>
                );
            
            break;
            case "admininstrumentos":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[4])
                renderConteiner = (
                    <div>
                        <ModalCondition
                            id={this.state._instrumentoId}
                            focusHandle={this.state.focusHandle}
                            show={this.state.modalCondition}
                            handleChange={this.handleChange} />
                        <ModalInstrumento
                            id={this.state._instrumentoId}
                            show={this.state.modalInstrumento}
                            title="Instrumento"
                            handleChange={this.handleChange}
                        />
                        <ModalModulo
                            _instrumentoId={this.state._instrumentoId}
                            moduloId={this.state._moduloId}
                            show={this.state.modalModulo}
                            title="Modulo" />
                        <Instrumentos id={this.state._instrumentoId} />
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
    <App />, document.getElementById('appUnkiloDeAyuda'));
