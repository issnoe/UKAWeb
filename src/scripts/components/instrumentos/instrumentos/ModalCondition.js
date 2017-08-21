class ModalCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentWillReceiveProps(newProps) {
        if (newProps.show == true) {
            this.setState({show: true})
        }
    }

    goInstrumentos = (e) => {
        e.preventDefault();
        this.setState({show: false})
        window.location.href = "#/admin/instrumentos";
    }
    acept = (e) => {
        e.preventDefault();
        if(this.props.focusHandle=="modulo"){
            deleteModulo(this.props.id, (response)=>{
                this.setState({show: false})
                window.location.href = "#/admin/instrumentos";
            })
        }
        deleteInstrumento(this.props.id, (response)=>{
            this.setState({show: false})
            window.location.href = "#/admin/instrumentos";
        })


       
        
    }
    render() {
        return (
            <Modal show={this.state.show} dialogClassName="modal-dialog modal-md">

                <div className="modal-content">

                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.goInstrumentos}>
                            <span >×</span>
                        </button>
                        <h4 className="modal-title">
                            {" "}</h4>
                    </div>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="text-center">
                                    {` ${"¿Desea eliminar?"}`}<br/><br/>
                                </div>
                               
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        {(this.state.loading)
                            ? (
                                <div className="spinnerFixed" key={"spinnerInstrumentomodalcondotion_"}></div>
                            )
                            : (
                                <div>
                                    <button className="btn btn-default" onClick={this.goInstrumentos}>Cancelar</button >
                                    <button className="btn btn-primary" onClick={this.acept}>Aceptar</button>
                                </div>
                            )}

                    </Modal.Footer>
                </div>

            </Modal>
        )
    }
}
