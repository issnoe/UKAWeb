class Reactivos extends FormMaster {
    constructor(props) {
        super(props);
        this.state = {
            "reactivo": 0,
            "tipopregunta": 0,
            "preguntaJson": {},
            "nota": "Nota . . ."

        }

    }
     handleJson(dataJson) {
         this.setState({preguntaJson:dataJson}, function(){
            var state = this.state;
             this.props.onChange(state)  
         })
        

     }
    handleInput(e) {
        
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "reactivo" || mask == "tipopregunta") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this.setState({[mask]: valor},function(){
         
            var state = this.state;
             this.props.onChange(state)   
        }.bind(this));
        
    }

    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleInput
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 ">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value="R2D2 1"/>
                    </div>
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleInput
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                       
                        {<Preguntas
                            tipoPregunta = {this.state.tipopregunta}
                            onChange={this
                            .handleJson
                            .bind(this)}/>}
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea value={this.state.nota} name="nota"
                                onChange={this
                                .handleInput
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}