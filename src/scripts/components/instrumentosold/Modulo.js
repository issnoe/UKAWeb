class Modulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinerLoad: true,
            modulo: {}

        }
        this._getReactivos()

    }
    _getReactivos() {
        var params = {
            id: this.props.id
        };
        const url = "AdminIN.aspx/getReactivosbyModuloId";
        axios
            .post(url, params)
            .then(function (response) {
                if (response.data && response.data.d[0]) {
                    var respRequest = response.data.d[0]
                    try {
                        var castJsonReactivosAux = respRequest.reactivos
                        var reactivos = JSON.parse(castJsonReactivosAux);
                        respRequest.reactivos = reactivos;
                    } catch (e) {}
                    this.setState({modulo: respRequest, spinerLoad: false})
                }
            }.bind(this))
            .catch(function (error) {
                alert("No se pudo obtener datos")
            });

    }
    deleteSelected(list) {
        this.setState({spinerLoad: true})
        list.map(function (id) {

            var couter = 0;
            var params = {
                id: id
            }
            const url = "AdminIN.aspx/deleteReactivo";
            axios
                .post(url, params)
                .then(function (response) {
                    this.setState({spinerLoad: true})
                    if (response && response.status == 200) {
                        this._getReactivos()
                    }
                }.bind(this))
                .catch(function (error) {
                    alert("No se pudo eliminar el  reactivo")
                });
        }.bind(this));
    }
    saveNext(question) {
        this.setState({spinerLoad: true})
        var obj = [question.preguntaJson]
        var data = JSON.stringify(obj)
        var item = {}
        item.id = -1;
        item.id_instrumento = parseInt(this.state.modulo.id_instrumento);
        item.id_modulo = parseInt(this.state.modulo.id);
        item.dataJson = data //;
        item.tipopregunta = question.tipopregunta;
        item.nota = question.nota;
        item.estilo = "l";
        item.estado = parseInt(0);
        item.orden = 0;
        var params = item;
        const url = "AdminIN.aspx/saveReactivos";
        axios
            .post(url, params)
            .then(function (response) {
                if (response && response.status == 200) {
                    this._getReactivos()
                }
            }.bind(this))
            .catch(function (error) {
                alert("No se pudo guardar el  reactivo")
            });

    }
    saveClose(e) {}
    render() {
        if (this.state.spinerLoad == true) {
            return (
                <div className="container">
                    <div className="spinner" key={"spinnerModulo"+this.state.modulo.id}></div>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <strong>{(this.state.modulo && this.state.modulo.modulo)
                                    ? (this.state.modulo.prefijo + "-" + this.state.modulo.modulo)
                                    : ""}</strong>
                        </div>
                    </div>
                </div>
                {(this.props.simulation)
                    ? (
                        <div className="container">
                            <div className="col-md-12 col-sm-12">
                                <PanelPreguntas
                                    simulation={this.props.simulation}
                                    modulo={this.state.modulo}
                                    deleteSelected={this
                                    .deleteSelected
                                    .bind(this)}/>
                            </div>
                        </div>
                    )
                    : (
                        <div className="container">

                            <div className="col-md-5  col-sm-12 pregunta-div">
                                <Question
                                    prefijoPregunta={this.state.modulo.prefijo + "." + (this.state.modulo.reactivos.length + 1)}
                                    saveClose={this
                                    .saveClose
                                    .bind(this)}
                                    saveNext={this
                                    .saveNext
                                    .bind(this)}/>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <PanelPreguntas
                                    modulo={this.state.modulo}
                                    deleteSelected={this
                                    .deleteSelected
                                    .bind(this)}/>
                            </div>
                        </div>
                    )}

            </div>
        )
    }
}
