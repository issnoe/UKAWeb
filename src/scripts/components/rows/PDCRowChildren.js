class PDCRowChildren extends React.Component {

    renderEncuestasTerminadas() {
        if (this.props.child && this.props.child.listaSomatometrias) {
            var popoverTop = (
                <Popover id="popover-positioned-top" title="Encuestas terminadas">
                    {this.props.child.listaSomatometrias.map((i, index) =>< li key = {index + "lista_encuestas"} > 
                    {i.date} <a href = {"#/" + i.id} className = "btn btn-primary btn-xs" > Imprimir </a>
                        </li>)}
                </Popover>
            );

            var _render = (
                <OverlayTrigger trigger="click" rootClose placement="left" overlay={popoverTop}>
                    <div>
                    {(this.props.child && this.props.child.listaSomatometrias)?(this.props.child.listaSomatometrias.length+"  "):"0"}
                    <button className="btn btn-primary btn-xs">Ver</button>
                    </div>
                </OverlayTrigger >
            )
            return _render
        }
        return (
            <label>Sin encuestas</label>
        )
    }
    render() {
        //Falta evaluar datos de Visita con Somatometria
        return (
            <div className="row table-rw">
                <div className="col-md-1 col-sm-1">
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.child.numeroFamilia}
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2">
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.child.cuidadorNombreCompleto}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="row">
                        <div className="col-md-12">
                            <a href={"#/pdc/instrumentos/aplicar" + this.props._instrumentoId}>
                                <img src="/images/apply.svg" alt="Capturar ficha" height="18"/>
                                <strong>
                                    {this.props.child.ninoNombreCompleto}</strong>
                            </a>

                        </div>
                        <div className="col-md-4 col-sm-4 nino-inf">
                            <span className="txt-sm">Fecha nac.</span><br/> {this.props.child.fechaNacimineto}

                        </div>
                        <div className="col-md-5 col-sm-5 nino-inf">
                            <span className="txt-sm">Edad en meses</span><br/> {this.props.child.edadMeses}

                        </div>
                        <div className="col-md-3 col-sm-3 nino-inf">
                            <span className="txt-sm">Sexo</span><br/> {this.props.child.sexo}

                        </div>

                    </div>
                </div>
                <div className="col-md-5 col-sm-5">

                    <div className="row">
                        <div className="col-md-12">
                            <a href={"#/pdc/instrumentos/aplicar/" + this.props._instrumentoId}>

                                <strong>
                                    Encuesta INO</strong>
                            </a>

                        </div>
                        <div className="col-md-3 col-sm-3 nino-inf">
                            <span className="txt-sm">Estatus</span><br/>
                            Terminada

                        </div>
                        <div className="col-md-4 col-sm-4 nino-inf">
                            <span className="txt-sm">Última encuesta</span><br/>
                            -- / -- / --

                        </div>
                        <div className="col-md-5 col-sm-5 nino-inf">
                            <span className="txt-sm">Terminadas</span><br/> {this.renderEncuestasTerminadas()}

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}