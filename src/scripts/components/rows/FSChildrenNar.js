class FSChildrenNar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            key: 1
        }
    }
     componentDidMount() {
        $('.datepicker').datepicker();
    }
    onToogle(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }
    handleSelect(key) {
        alert('selected ' + key);
        this.setState({key});
    }
    render() {
        return (
            <div className="row">
                <div>
                    <div className="bg-full-width bg-grey">
                        <div className="container">
                            <div className=" row">
                                <div className="col-md-12">
                                    <div
                                        onClick={this
                                        .onToogle
                                        .bind(this)}>
                                        <span >
                                            <img src="../../../../../images/arrw-down.svg"/></span>
                                        <label>
                                            <strong >NICOLE SOSA SOSA</strong>
                                        </label>
                                    </div>
                                </div>
                                <div className="container">
                                    <Collapse isOpened={this.state.open}>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-3 icon-info">
                                                <span className="icon-bullet">
                                                    <img src="../../../../../images/inf.svg"/></span>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Fecha nacimiento</label>
                                                            <p className="form-control">16/04/2013</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Sexo</label>
                                                            <p className="form-control">Femenino</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">No. de familia</label>
                                                            <p className="form-control">12</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">NSS / SP</label>
                                                            <input name="ctl00$MainContent$numeross" type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 icon-info">
                                                <span className="icon-bullet">
                                                    <img src="../../../../../images/fisica.svg"/></span>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Peso al nacer</label>
                                                            <div className="input-group">
                                                                <input name="ctl00$MainContent$txtpesoInicial" className="form-control"/>
                                                                <div className="input-group-addon">Kg</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Tall al nacer</label>
                                                            <div className="input-group">
                                                                <input name="ctl00$MainContent$txttallaInicial" className="form-control"/>
                                                                <div className="input-group-addon">cm</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label">Diagnostico previo de sobrepeso / obesidad</label>
                                                            <input
                                                                name="ctl00$MainContent$txtDiagnosticoObesidad"
                                                                className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-5 icon-info">
                                                <span className="icon-bullet">
                                                    <img src="../../../../../images/loc.svg" alt=""/></span>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Estado</label>
                                                            <p className="form-control">ESTADO DE MÉXICO</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Municipio</label>
                                                            <p className="form-control">ACULCO</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Comunidad</label>
                                                            <p className="form-control">ACULCO</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">CEDIT</label>
                                                              <p className="form-control">ACULCO</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Domicilio</label>
                                                            <input name="domicilio" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Facilitador</label>
                                                            <span className="form-control">
                                                                admin
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 text-right">
                                                        <button className="btn btn-primary btn-sm">
                                                            Guardar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-grey-2 padding-top-20">
                        <div className="container-fluid">
                            <div className="row" id="Visit">
                                <div className="col-md-10 col-sm-10">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li>
                                            <a id="lnkbtnEditar" className="tabdev">Basal
                                            </a>
                                        </li>
                                        <li>
                                            <a id="lnkbtnEditar" className="tabdev">Visita 1
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-2 col-sm-2 text-right">
                                    <button className="btn btn-primary btn-sm">
                                        Nueva visita
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-top-10  bg-grey">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-sm-12  text-right">
                                    <button className="btn btn-default btn-sm">
                                        Eliminar
                                    </button>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <strong>
                                        <h1 className="marcado">Basal</h1>
                                    </strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 col-sm-2">
                                    <label className="label">Fecha de visita</label>
                                    <div className="form-group">
                                       <input type="text" className="datepicker" /> 
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label">Edad</label>
                                        <div className="input-group">

                                            <input name="edad"  className="aspNetDisabled form-control"/>
                                            <div className="input-group-addon">meses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h3>Estado de nutrición</h3>
                                </div>

                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label">Peso</label>
                                        <div className="input-group">

                                            <input name="peso" className="form-control"/>
                                            <div className="input-group-addon">kg</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label">Talla</label>
                                        <div className="input-group">

                                            <input name="talla" className="form-control"/>
                                            <div className="input-group-addon">cm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label" data-original-title="Índice de Masa Corporal">IMC</label>
                                        <input name="imc" className="form-control"/>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}