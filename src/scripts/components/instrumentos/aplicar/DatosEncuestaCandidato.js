class DatosEncuestaCandidato extends React.Component {
    componentDidMount() {
        if (this.props._aplicacionId && this.props._aplicacionId != "na") {
            getAplicacionEncuestaEncuestadorById({ aplicacionId: this.props._aplicacionId }, (response) => {
                if (response && response.data && response.data.d) {
                    this.setState(response.data.d)
                }
            })
        }
    }
    handleText = (e) => {
        var valor = e.target.value;
        var nombre = e.target.name;
        this.setState({ [nombre]: valor });
    }

    saveData = (e) => {
        var params = {
            domicilio: this.state.domicilio,
            fechaTermina: this.state.fechaTermina,
            fechaInicio: this.state.fechaInicio,
            aplicacionId: this.state.aplicacionId
        }
        saveAplicacionEncuestaEncuestador(params, function (response) {
        })
    }
    watchState() {
        if (this.props._aplicacionId && this.props._aplicacionId != "na") {
            getAplicacionEncuestaEncuestadorById({ aplicacionId: this.props._aplicacionId }, (response) => {
                if (response && response.data && response.data.d) {
                    this.setState(response.data.d)
                }
            })
        }
    }
    locationRef(e) {
        e.preventDefault()
        window.location.href = "#/pdc/instrumentos/imprimir/" + this.props._aplicacionId;
    }
    render() {
        const state = this.state;
        const onlyRead = this.props.onlyRead
        if (state) {
            return (
                <div className="row">

                    <div className="col-md-12 col-sm-12 ">
                        Encuestado: {state.NombreEncuestado}
                        <br />
                        Clave:{state.Clave}
                        <br />
                        Fecha de inicio :
            {(onlyRead) ? (state.fechaInicio) : (<input type="date" onChange={this.handleText} name="fechaInicio" value={state.fechaInicio} />)}
                        <br />
                        Fecha última modificación :{state.fechaModificacion}
                        <br />
                        Fecha de termino :
            {(onlyRead) ? (state.fechaTermina) : (<input type="date" onChange={this.handleText} name="fechaTermina" value={state.fechaTermina} />)}
                        <br />

                        Domicilio:
            {(onlyRead) ? (state.domicilio) : (<input type="text" placeholder="Sin domicilio" onChange={this.handleText} name="domicilio" value={state.domicilio} />)}
                    </div>
                    <br/>
                    <div className="col-md-12 col-sm-12 text-rigrh">
                    {(onlyRead) ? (onlyRead) : (<button className="btn btn-primary btn-xs" onClick={this.saveData}>Guardar cambios</button>)}
                    <button className={(!onlyRead) ? "btn btn-primary btn-xs" : "hh"} onClick={this.locationRef.bind(this)}>Ver respuestas</button>
                    </div>
                </div>
            )

        }
        this.watchState()


        return (
            <div className="row">

            </div>
        )

    }

}
