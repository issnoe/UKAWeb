class FSManagerFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        fsOrden:"NumFamilia",
        fsEstado:"0",
        fsTexto:""}
    }
    sendFilters(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="row table-control">

                <div className="col-md-2 col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsOrden"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option value="NumFamilia">No. Familia</option>
                            <option value="NombreCuidador">Nombre socia</option>
                            <option value="NombreNinio">Nombre ninio</option>
                            <option value="FechaNacimiento">Fecha de nacimiento</option>
                            <option value="Genero">Sexo</option>
                            <option value="DiagnosticoPesoEdad">Dx P/E</option>

                        </select>
                    </div>
                </div>
                <div className="col-md-2  col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsEstado"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option  value="0">Activo</option>
                            <option value="1">Inactivo</option>
                            <option value="2">Todos</option>

                        </select>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                name="fsTexto"
                                type="text"
                                className="form-control"
                                placeholder="Buscar por nombre"/>
                            <span className="input-group-btn">
                                <input
                                    onClick={this.sendFilters.bind(this)}
                                    type="button"
                                    value="Buscar"
                                    className="btn btn-default"/>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 text-right">

                    <input
                        type="button"
                        value="Descargar excel"
                        id="MainContent_Button1"
                        className="btn btn-primary btn-sm"
                       />
                </div>

            </div>

        )
    }
}

class PDCManagerFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        fsOrden:"NumFamilia",
        fsEstado:"0",
        fsTexto:""}
    }
    sendFilters(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="row table-control">

                <div className="col-md-2 col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsOrden"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option value="NumFamilia">No. Familia</option>
                            <option value="NombreCuidador">Nombre socia</option>
                            <option value="NombreNinio">Nombre ninio</option>
                            <option value="FechaNacimiento">Fecha de nacimiento</option>
                            <option value="Genero">Sexo</option>
                            <option value="DiagnosticoPesoEdad">Dx P/E</option>

                        </select>
                    </div>
                </div>
                <div className="col-md-2  col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsEstado"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option  value="0">Activo</option>
                            <option value="1">Inactivo</option>
                            <option value="2">Todos</option>

                        </select>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                name="fsTexto"
                                type="text"
                                className="form-control"
                                placeholder="Buscar por nombre"/>
                            <span className="input-group-btn">
                                <input
                                    onClick={this.sendFilters.bind(this)}
                                    type="button"
                                    value="Buscar"
                                    className="btn btn-default"/>

                            </span>
                        </div>
                    </div>
                </div>

               

            </div>

        )
    }
}

