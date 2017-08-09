class FormMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    renderStatus() {
        return (STATUS.map(function (i) {
            return (
                <option key={i.id + "_status_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderPersonas() {
        return (PERSONAS.map(function (i) {
            return (
                <option key={i.id + "_person_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoPregunta() {
        return (TIPOPREGUNTAS.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoReativo() {
        return (TIPOREACTIVO.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }

}

class PopupModulo extends FormMaster {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            "id": 0,
            "modulo": "",
            "prefijo": "",
            "leyenda": "",
            "estado": 1,
            "orden": 0,
            "id_instrumento": -1
        }

    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.item && nextProps.show) {

            this.setState(nextProps.item)
        }

    }

    handleInput(e) {
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "orden" || mask == "estado") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this.setState({[mask]: valor});

    }

    showModulos(a, e) {
        e.preventDefault();
        var g = this.state;
        g.id_instrumento = this.props.item.id_instrumento;

        if (a) {
            this
                .props
                .onChange(g);
        } else {
            this
                .props
                .onChange({});
        }

    }

    render() {

        return (
            <Modal show={this.props.show} dialogClassName="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            onClick={this
                            .showModulos
                            .bind(this, false)}>
                            <span >×</span>
                        </button>
                        <h4 className="modal-title">Agregar {this.props.title}</h4>
                    </div>
                    <div className="modal-body">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label">Nombre módulo</label>

                                    <input
                                        className="form-control"
                                        placeholder="Ej. intrumento A"
                                        type="text"
                                        name="modulo"
                                        value={this.state.modulo}
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label">Prefijo</label>

                                    <input
                                        className="form-control"
                                        placeholder="Ej. IA"
                                        type="text"
                                        name="prefijo"
                                        value={this.state.prefijo}
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label">Estado del instrumento:</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estado}
                                        name="estado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderStatus()}
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-default"
                            onClick={this
                            .showModulos
                            .bind(this, false)}>Cancelar</button>
                        <button
                            className="btn btn-primary"
                            onClick={this
                            .showModulos
                            .bind(this, true)}>Aceptar</button>
                    </div>

                </div>
            </Modal>
        )
    }
}
class PopupInstrumento extends FormMaster {
    constructor(props) {
        super(props);
        this.state = {
            "nombre": "",
            "prefijo": "",
            "subtitulo": "",
            "estado": 1,
            "orden": 0,
            "aplicado": 0,
            "id": -1,
            estadoId: "",
            municipioId: "",
            comunidadId: "",
            grupoId: ""
        }
        getEstados("vacio", (response) => {

            if (response && response.data && response.data.d) {
                this.setState({listaEstados: response.data.d})
            }
        })

    }

    handleInput(e) {
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "aplicado" || mask == "estado") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this.setState({[mask]: valor});
        switch (mask) {
            case "estadoId":
                getMunicipios(valor, (response) => {
                    if (response && response.data && response.data.d) {
                        this.setState({listaMunicipios: response.data.d})
                    }
                });
                break;
                case "municipioId":
                getComunidades(valor, (response) => {
                    if (response && response.data && response.data.d) {
                        this.setState({listaComunidades: response.data.d})
                    }
                });
                break;
                case "comunidadId":
                debugger
                getGrupos(valor, (response) => {
                    debugger
                    if (response && response.data && response.data.d) {
                        this.setState({listaGrupos: response.data.d})
                    }
                });
                break;

            default:
                break;
        }
        

    }
    showModulos(a, e) {
        e.preventDefault();
        var g = this.state;
        if (a) {
            this
                .props
                .onChange(g);
        } else {
            this
                .props
                .onChange({});
        }

    }
    renderGrupos() {
        if (this.state && this.state.listaGrupos) {
            const lista = this.state.listaGrupos;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdGrupo}>{item.NombreGrupo}</option>)

        }
        return <option value="null">Seleccione</option>;
    }
     renderComunidades() {
        if (this.state && this.state.listaComunidades) {
            const lista = this.state.listaComunidades;
            return lista.map((item, i) => <option key={i + "comunidad_select"} value={item.IdComunidad}>{item.NombreComunidad}</option>)
        }
        return <option value="null">Seleccione</option>;
    }
    renderMunicipios() {
        if (this.state && this.state.listaMunicipios) {
            const lista = this.state.listaMunicipios;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdMunicipios}>{item.NombreMunicipio}</option>)

        }
        return <option value="null">Seleccione</option>;
    }
    renderEstados() {
        if (this.state && this.state.listaEstados) {
            const lista = this.state.listaEstados;
            return lista.map((item, i) => <option key={i + "estado_select"} value={item.IdEstado}>{item.NombreEstado}</option>)

        }
        return <option value="null">Seleccione</option>;
    }

    render() {

        return (
            <Modal show={this.props.show} dialogClassName="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            onClick={this
                            .showModulos
                            .bind(this, false)}>
                            <span >×</span>
                        </button>
                        <h4 className="modal-title">Agregar {this.props.title}</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Nombre</label>

                                    <input
                                        className="form-control"
                                        placeholder="Ej. intrumento A"
                                        type="text"
                                        name="nombre"
                                        value={this.state.nombre}
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Subtítulo</label>

                                    <input
                                        className="form-control"
                                        type="text"
                                        value={this.state.subtitulo}
                                        placeholder="Ej. Niños con sobrepeso"
                                        name="subtitulo"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Aplica a:</label>
                                    <select
                                        className="form-control"
                                        value={this.state.aplicado}
                                        name="aplicado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        {this.renderPersonas()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label">Estado</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estadoId}
                                        name="estadoId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderEstados()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Municipio</label>
                                    <select
                                        className="form-control"
                                        value={this.state.municipioId}
                                        name="municipioId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                         {this.renderMunicipios()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Comunidad</label>
                                    <select
                                        className="form-control"
                                        value={this.state.comunidadId}
                                        name="comunidadId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderComunidades()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Grupo</label>
                                    <select
                                        className="form-control"
                                        value={this.state.grupoId}
                                        value={this.state.grupoId}
                                        name="aplicado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderGrupos()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                lista de grupos
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Estado del instrumento:</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estado}
                                        name="estado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderStatus()}
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="modal-footer">

                        <button
                            className="btn btn-default"
                            onClick={this
                            .showModulos
                            .bind(this, false)}>Cancelar</button>
                        <button
                            className="btn btn-primary"
                            onClick={this
                            .showModulos
                            .bind(this, true)}>Aceptar</button>
                    </div>

                </div>

            </Modal>
        )
    }
}
