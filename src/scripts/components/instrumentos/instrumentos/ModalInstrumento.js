class ModalInstrumento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            prefijo: "",
            subtitulo: "",
            estado: 1,
            orden: 0,
            aplicado: 0,
            id: -1,
            estadoId: "",
            municipioId: "",
            comunidadId: "",
            grupoId: "",
            listaGruposSelected: [],
            loading:false,
          
        }
        getEstados("vacio", (response) => {

            if (response && response.data && response.data.d) {
                this.setState({listaEstados: response.data.d})
            }
        })

    }
    componentWillReceiveProps(nexProps){
        var props = nexProps
        if(props.id && props.show==true){
            var state = {
                nombre: "",
                prefijo: "",
                subtitulo: "",
                estado: 1,
                orden: 0,
                aplicado: 0,
                id: -1,
                estadoId: "",
                municipioId: "",
                comunidadId: "",
                grupoId: "",
                listaGruposSelected: [],
                loading:false,
              
            }
            this.setState(state)
            getInstrumentoById(props.id,(response)=>{
                if (response && response.data && response.data.d[0]) {
                    var {nombre,prefijo,subtitulo,estado,orden,aplicado,id,estadoId,municipioId,comunidadId,grupoId} = response.data.d[0];
                    var listaGruposSelected = []
                    this.setState({nombre,prefijo,subtitulo,estado,orden,aplicado,id,estadoId,municipioId,comunidadId,grupoId})
                    try {
                        if(response.data.d[0].grupos!="" ){
                            listaGruposSelected=  JSON.parse(response.data.d[0].grupos);
                            this.setState({listaGruposSelected})
                        }
                    } catch (error) {
                    }
                }
            })
        }

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
        this.setState({[mask]: valor}, ()=>{
            this.validar(this.state)
        });
        switch (mask) {
            case "estadoId":
                this.setState({municipioId: "", comunidadId: "", grupoId: ""});
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

                getGrupos(valor, (response) => {

                    if (response && response.data && response.data.d) {
                        this.setState({listaGrupos: response.data.d})
                    }
                });
                break;
            case "grupoId":

                break;

            default:
                break;
        }

    }
   
    renderGrupos() {
        if (this.state && this.state.listaGrupos) {
            const lista = this.state.listaGrupos;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdGrupo}>{item.NombreGrupo}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    renderComunidades() {
        if (this.state && this.state.listaComunidades) {
            const lista = this.state.listaComunidades;
            return lista.map((item, i) => <option key={i + "comunidad_select"} value={item.IdComunidad}>{item.NombreComunidad}</option>)
        }
        return <option value="">Seleccione</option>;
    }
    renderMunicipios() {
        if (this.state && this.state.listaMunicipios) {
            const lista = this.state.listaMunicipios;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdMunicipios}>{item.NombreMunicipio}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    renderEstados() {
        if (this.state && this.state.listaEstados) {
            const lista = this.state.listaEstados;
            return lista.map((item, i) => <option key={i + "estado_select"} value={item.IdEstado}>{item.NombreEstado}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    addGrupo = (e) => {
        e.preventDefault();
        var {listaGrupos, grupoId, listaGruposSelected} = this.state;
        var item = listaGrupos.find(x => x.IdGrupo == grupoId);
        if (item.IdGrupo && item.NombreGrupo) {
            if (listaGruposSelected.length != 0) {
                var exist = listaGruposSelected.findIndex(x => x.IdGrupo.toUpperCase() == grupoId.toUpperCase());
                if (exist == -1) {
                    listaGruposSelected.push({IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo});
                    this.setState({listaGruposSelected: listaGruposSelected, grupoId: ""})
                }

            } else if (listaGruposSelected.length == 0) {
                listaGruposSelected.push({IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo});
                this.setState({listaGruposSelected: listaGruposSelected, grupoId: ""})
            }
        }

    }
    validar(state){
        var errors = {}
        var isValid = true
        if(state.nombre==""){
            errors.nombre ="Falta por poner el nombre del instrumento";
            isValid = false
        }
        this.setState({loading:false, errors:errors})
       return isValid
    }
    save = (e) => {
        e.preventDefault();
        this.setState({loading:true})
        var state = this.state
        state.grupos = state.listaGruposSelected.map(g => g.IdGrupo);
        if(this.validar(state)){
            saveInstrumento (state, (response)=> {
                this.setState(this.state.init)
                window.location.href = "#/admin/instrumentos";
                
            })
        }

      

    }
    goInstrumentos = (e) => {
        e.preventDefault();
        this.setState(this.state.init)
        window.location.href = "#/admin/instrumentos";
    }

    render() {
        var listagruposRender = [];
        const {listaGruposSelected} = this.state
        if (listaGruposSelected && listaGruposSelected.length > 0) {
            listaGruposSelected.map((item, i) => {
                listagruposRender.push(
                    <div className="col-md-12">
                        <a key={i + "listagrupos_instrumentos"}>{item.NombreGrupo}</a>
                    </div>
                )

            })

        }
        const {errors}= this.state;
        return (
            <Modal show={this.props.show} dialogClassName="modal-dialog modal-md">

                <div className="modal-content">

                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            onClick={this.goInstrumentos}
                            >
                            <span >×</span>
                        </button>
                        <h4 className="modal-title"> {this.props.title}</h4>
                    </div>
                    <Modal.Body>
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
                                        {(errors && errors.nombre!="")?(<span className="errorMsg">{errors.nombre}</span>):("")}
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
                                        <option key={0 + "init_estado_select"} value={""}>{"Selecciona"}</option>

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
                                        <option key={0 + "init_Muni_select"} value={""}>{"Selecciona "}</option>
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
                                        <option key={0 + "init_comunidad_select"} value={""}>{"Selecciona "}</option>
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
                                        name="grupoId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_grupo_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderGrupos()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                {(this.state.grupoId != "")
                                    ? (
                                        <div >
                                           
                                                <Button bsSize="xsmall" onClick={this.addGrupo}>+ Agregar grupo</Button>

                                        </div>
                                    )
                                    : (undefined)}

                            </div>
                            <div className="col-md-12">
                                lista de grupos {listagruposRender}
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
                        </Modal.Body>
                    <Modal.Footer>
                                            {(this.state.loading)?( <div className="spinnerFixed" key={"spinnerInstrumentomodal_"}></div>):(<div><button className="btn btn-default" onClick={this.goInstrumentos}>Cancelar</button >
                        <button className="btn btn-primary" onClick={this.save}>Aceptar</button></div>)}
                   

                        
                        </Modal.Footer>

                </div>

            </Modal>
        )
    }
}
