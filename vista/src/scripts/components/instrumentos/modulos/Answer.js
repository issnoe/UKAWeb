class Answer extends React.Component {
    
    render() {
        return (
            <div >

                <div className="col-md-8 col-sm-8">

                    <div className="form-group">
                        <span className="icon-trash" onClick={this.props.onDelete}></span>
                        <label className="label">Opción {parseInt(this.props.index) + 1}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="option"
                            onChange={this.props.onEdit}
                            value={this.props.option}
                            placeholder="Opción de respuesta"/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <label className="label">Relación</label>
                        <input
                            type="text"
                            name="condition"
                            onChange={this.props.onEdit}
                            value={this.props.condition}
                            className="form-control"
                            placeholder="Prefijo"/>
                    </div>
                </div>
            </div>

        )
    }
}
