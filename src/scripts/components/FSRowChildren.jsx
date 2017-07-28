class FSRowChildren extends React.Component {

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
                                        <a href={"#/fichanar/"+this.props.child.id}>
                                                         <img src="/images/apply.svg" alt="Capturar ficha" height="18"/>
                                                         <strong> {this.props.child.ninoNombreCompleto}</strong>
                                                    </a>
                                       
                                    </div>
                                    <div className="col-md-4 col-sm-4 nino-inf">
                                        <span className="txt-sm">Fecha nac.</span><br/>
                                         {this.props.child.fechaNacimineto}
                     
                                    </div>
                                    <div className="col-md-5 col-sm-5 nino-inf">
                                        <span className="txt-sm">Edad en meses</span><br/>
                                          {this.props.child.edadMeses}
                     
                                    </div>
                                    <div className="col-md-3 col-sm-3 nino-inf">
                                        <span className="txt-sm">Sexo</span><br/>
                                       {this.props.child.sexo}
                                        
                     
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <div className="row">
                                   <div className="col-md-1 col-sm-1">
                                        3
                                       
                     
                                    </div>
                                    <div className="col-md-1 col-sm-2">
                                       {this.props.child.listaSomatometrias.length}
                                       
                     
                                    </div>
                                    <div className="col-md-3 col-sm-2">
                                      
                                        {this.props.nar.lastSomatometriaDate}
                                        
                     
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                       
                                         {this.props.nar.dxPE}
                                        
                     
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                         {this.props.nar.lastPeso} Kg
                                        
                     
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        {this.props.nar.difPeso}g
                     
                                    </div>
                                    <div className="col-md-1 col-sm-1">
                                       
                                           
                                   
                                    </div>
                                </div>
                            </div>
                        </div>

        )
    }
}