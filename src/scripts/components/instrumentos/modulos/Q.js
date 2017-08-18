class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactivo: 0,
            tipopregunta: 0,
            preguntaJson: _ABIERTA,
            nota: "",
            checkUnique: true
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

    componentWillUnmount() {

        this.setState({reactivo: 0, tipopregunta: 0, preguntaJson: _ABIERTA, nota: ""});
    }
    handleReactivoType(e) {

        var valor = parseInt(e.target.value)
        var mask = e.target.name
        this.setState({[mask]: valor});
    }
    handleQuestionType(e) {
        var valor = parseInt(e.target.value)
        var mask = e.target.name
        var valor;
        switch (valor) {
            case 0:
                var jsonQ = {
                    "question": '',
                    "answer": 'undefined'
                };
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;
            case 1:
                var jsonQ = {
                    "question": '',
                    "options": [
                        {
                            "option": "",
                            "condition": '',
                            "type": 'radio'
                        }
                    ],
                    "answer": 'undefined'
                }

                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;
            case 2:
                var jsonQ = {
                    "question": '',
                    "questions": [
                        {
                            "question": '',
                            "options": [
                                {
                                    "option": "",
                                    "condition": '',
                                    "type": 'radio'
                                }
                            ],
                            "answer": 'undefined'
                        }
                    ],
                    "answer": 'undefined'
                }
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;
                case 3:
                var jsonQ = {
                    "question": '',
                    "questions": [
                        {
                            "question": '',
                            "options": [
                                {
                                    "option": "",
                                    "condition": '',
                                    "type": 'radio'
                                }
                            ],
                            "answer": 'undefined'
                        }
                    ],
                    "answer": 'undefined'
                }
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                
                break;
            case 4:
                var jsonQ = {
                    "question": '',
                    "questions": [
                        {
                            "question": '',
                            "note":'',
                            "onlyTo":'',
                            "options": [
                                {
                                    "option": "",
                                    "condition": '',
                                    "type": 'radio'
                                }
                            ],
                            "answer": 'undefined'
                        }
                    ],
                    "repeat":1,
                    "answer": 'undefined'
                }
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;

            default:
                break;
        }

    }
    handleTextQuestion(e) {
        var valor = e.target.value
        var mask = e.target.name
        var question = this.state.preguntaJson
        question.question = valor;
        this.setState({[mask]: question});

    }
    handleText(e) {
        var valor = e.target.value
        var mask = e.target.name

        this.setState({[mask]: valor});

    }
    saveClose(e) {
        e.preventDefault();
        this
    }
    saveNext(e) {
        e.preventDefault();
        this
            .props
            .saveNext(this.state)
    }
    onEdit(i, e) {
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name
        var question = this.state.preguntaJson;
        var listaOpciones = question.options;
        question.options[index][mask] = valor;
        this.setState({preguntaJson: question})

    }
    onDelete(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var question = this.state.preguntaJson;
        var listaOpciones = question.options;
        listaOpciones.splice(index, 1)
        question.options = listaOpciones;
        this.setState({preguntaJson: question})

    }
    onDeleteIndexed(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var question = this.state.preguntaJson;
        var listaOpciones = question.questions;
        listaOpciones.splice(index, 1)
        question.questions = listaOpciones;
        this.setState({preguntaJson: question})

    }
    //##move to other
    renderOption() {

        if (this.state.preguntaJson && this.state.preguntaJson.options) {
            var lista = this.state.preguntaJson.options;
            var options = []
            for (var index in lista) {
                var item = lista[index].option;
                try {
                    options.push(<Answer
                        key={index + "option"}
                        {...lista[index]}
                        index={index}
                        onEdit={this
                        .onEdit
                        .bind(this, index)}
                        onDelete={this
                        .onDelete
                        .bind(this, index)}/>)
                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return options
        }

    }
    //Move other
    addOption(e) {
        e.preventDefault();
        var question = this.state.preguntaJson;
        var listaOpciones = question.options;
        var item = {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
        listaOpciones.push(item);
        question.options = listaOpciones;
        this.setState({preguntaJson: question, render: false})

    }
    handleChecUnique(e) {
        var ischecked = e.target.checked
        //Handle option types
        var typeHandle = (ischecked)
            ? "radio"
            : "checkbox";
        var question = this.state.preguntaJson;
        var opciones = question.options;
        opciones.map((i, index) => {
            opciones[index].type = typeHandle
        })
        question.options = opciones;
        this.setState({preguntaJson: question, render: false})
        this.setState({checkUnique: ischecked})

    }
    //## Move other
    renderOptions() {
        if (this.state.tipopregunta == 1) {

            return (
                <div>
                    {this.renderOption()}
                    <div className="col-md-6">
                        {(this.state.preguntaJson && this.state.preguntaJson && this.state.preguntaJson.options && this.state.preguntaJson.options.length > 1)
                            ? (
                                <span><input
                                    type="checkbox"
                                    checked={this.state.checkUnique}
                                    onClick={this
                                    .handleChecUnique
                                    .bind(this)}
                                    className="check-preg"/>Selección única</span>
                            )
                            : ""}

                    </div>
                    <div className="col-md-6 text-right">
                        <h5>
                            <a
                                onClick={this
                                .addOption
                                .bind(this)}>Agregar opción<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>

                </div>
            )

        }
    }

    addQuestionIndexed(e) {
        e.preventDefault()
        var list = this.state.preguntaJson.questions;
        var jsonQ = {
            "question": '',
            "questions": [
                {
                    "question": '',
                    "options": [
                        {
                            "option": "",
                            "condition": '',
                            "type": 'radio'
                        }
                    ],
                    "answer": 'undefined'
                }
            ],
            "answer": 'undefined'
        }
        list.push(jsonQ);
        var stateJson = this.state.preguntaJson;
        stateJson.questions = list;
        this.setState({preguntaJson: stateJson})
    }
    handleLinkQueston(index, question) {
        var preguntaJson = this.state.preguntaJson
        preguntaJson.questions[index] = question
        this.setState({preguntaJson});

    }
    handleLinkPanelQueston(question) {
       
        var preguntaJson = this.state.preguntaJson
        preguntaJson.questions.map((item,index)=>{
            preguntaJson.questions[index].options = question.options;
        })
        this.setState({preguntaJson});

    }
    
 renderAnidadaGroup() {

        if ( this.state.tipopregunta == 4 && this.state.preguntaJson.questions) {
            var listChildrens = [];
            try {
                this
                    .state
                    .preguntaJson
                    .questions
                    .map((index, i) => {
                        listChildrens.push(<LinkedGroupQuestion
                            key={i}
                            index={i}
                            question={index}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this, i)}
                            handleLinkQueston={this
                            .handleLinkQueston
                            .bind(this, i)}/>)
                    })

            } catch (error) {
                alert("Code:qr502")
            }

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        {listChildrens}
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>

                            <a
                                onClick={this
                                .addQuestionIndexed
                                .bind(this)}>Nueva pregunta<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    renderAnidada() {

        if ((this.state.tipopregunta == 2  )&& this.state.preguntaJson.questions) {
            var listChildrens = [];
            try {
                this
                    .state
                    .preguntaJson
                    .questions
                    .map((index, i) => {
                        listChildrens.push(<LinkedQuestion
                            key={i}
                            index={i}
                            question={index}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this, i)}
                            handleLinkQueston={this
                            .handleLinkQueston
                            .bind(this, i)}/>)
                    })

            } catch (error) {
                alert("Code:qr502")
            }

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        {listChildrens}
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>

                            <a
                                onClick={this
                                .addQuestionIndexed
                                .bind(this)}>Nueva pregunta<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    renderAnidadaMultiple(){
        if(this.state.tipopregunta == 3 &&this.state.preguntaJson.questions){
            var listQuestions
             var listChildrens = [];
             var listChildrensOptions = [];
            try {
                this
                    .state
                    .preguntaJson
                    .questions
                    .map((index, i) => {
                        listChildrens.push(<LinkedPanelQuestion
                            key={i}
                            index={i}
                            question={index}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this, i)}
                            handleLinkQueston={this
                            .handleLinkQueston
                            .bind(this, i)}/>)
                    })

            } catch (error) {
                alert("Code:QR502")
            }

            try {
                var optionsDefaultFirstQuestion = this.state.preguntaJson.questions[0];
                listChildrensOptions.push(
                    <LinkedPanelAnswer
                            question={optionsDefaultFirstQuestion}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this)}
                            handleLinkQueston={this
                            .handleLinkPanelQueston
                            .bind(this)}/>)

            } catch (error) {
                alert("Code:QRA502")
            }

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        {listChildrens}
                        {listChildrensOptions}
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>

                            <a
                                onClick={this
                                .addQuestionIndexed
                                .bind(this)}>Nueva pregunta<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleReactivoType
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value={this.props.prefijoPregunta}/>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleQuestionType
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Pregunta</label>
                            <textarea
                                className="form-control pregunta"
                                name="preguntaJson"
                                onChange={this
                                .handleTextQuestion
                                .bind(this)}></textarea>
                        </div>
                    </div>

                    {this.renderOptions()}
                    {this.renderAnidada()}
                    {this.renderAnidadaGroup()}
                    {this.renderAnidadaMultiple()}
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea
                                value={this.state.nota}
                                name="nota"
                                placeholder="Escribe una nota."
                                onChange={this
                                .handleText
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .saveNext
                            .bind(this)}>Guardar</button>
                    </div>

                </div>
            </div>

        )
    }
}