class PopupMsg extends React.Component {
    constructor(props) {
        super(props);
    }

    decition(a, e) {
        e.preventDefault();
        this.props.onChange({action: a});
    }
    render() {
        return (
            <Modal show={this.props.show} dialogClassName="modal-dialog modal-long">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="text-center">
                            {`Mensaje ${this.props.title}`}<br/><br/>
                        </div>
                        <div>

                            ¿Desea eliminar?

                        </div>

                        <div className="modal-footer">
                            <div className="col-w25"></div>
                            <div className="col-w25">
                                <button
                                    type="button"
                                    className="btn btn-center btn-gray"
                                    onClick={this
                                    .decition
                                    .bind(this, true)}>Aceptar</button>
                            </div>
                            <div className="col-w25">
                                <button
                                    type="button"
                                    className="btn btn-center btn-blue-alto"
                                    onClick={this
                                    .decition
                                    .bind(this, false)}>Rechazar</button>
                            </div>
                        </div>

                    </div>

                </div>
            </Modal>
        )
    }
}
