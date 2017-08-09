class LinkedQuestionManager extends React.Component {
    renderOption() {
        // / siempre se optiene un arreglo con un solo objecto , si se quiere cambiar
        // solo hay que actualizar la funcion savenext en Modulo y aqui
        if (this.props.question && this.props.question.options) {

            var lista = this.props.question.options
            var options = []
            for (var index in lista) {
                var option = lista[index].option;
                var condition = lista[index].condition;
                try {
                    if (condition) {
                       
                        var popoverTop = (
                            <Popover id="popover-positioned-top" title={condition}>
                                <a href={"#/search/" + condition+"/"+this.props.item.id_modulo+"/"+this.props.item.id_instrumento}>Ir a </a>
                            </Popover>
                        );
                        options.push(
                            <div
                                key={index + "_option_" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">

                                <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverTop}>
                                    <label className="lbl-id">

                                        <div className="id-preg relacionada"></div>
                                        <strong>{parseInt(index) + 1})</strong>
                                        {option}
                                    </label>
                                </OverlayTrigger>
                            </div>
                        )
                    } else {
                        options.push(
                            <div
                                key={index + "_option_linkedq" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">
                                <label className="lbl-id">
                                    <strong>{parseInt(index) + 1})</strong>

                                    {option}
                                </label>

                            </div>
                        )

                    }

                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return (
                <div className="row resp-reg">
                    {options}
                </div>
            );
        }

    }

    render() {
      
        return (
            <div className="reg-preg preg-rel">
                   <small >{(this.props.question.onlyTo)?"Para: "+this.props.question.onlyTo:""}</small><br/>
                {this.props.question.question}<br/>
                 <small >{(this.props.question.note)?"Nota: "+this.props.question.note:""}</small><br/>
                
                
                <small >{this.props.question.nota}</small>
                {this.renderOption()}

            </div>
        )
    }

}
class QuestionManager extends React.Component {
    renderLinkedQuestions() {
        this;
        if (this.props.castJsonPregunta && this.props.castJsonPregunta[0].questions) {

            var lista = this.props.castJsonPregunta[0].questions;
            var questions = []
            for (var index in lista) {
                questions.push(<LinkedQuestionManager
                    key={index + "linked_qeustion_" + this.props.item.id}
                    item={this.props.item}
                    question={lista[index]}/>)

            }
            return (
                <div className="row resp-reg">
                    {questions}
                </div>
            );
        }

    }
    renderOption() {
        // / siempre se optiene un arreglo con un solo objecto , si se quiere cambiar
        // solo hay que actualizar la funcion savenext en Modulo y aqui

        if (this.props.castJsonPregunta && this.props.castJsonPregunta[0].options) {

            var lista = this.props.castJsonPregunta[0].options;
            var options = []
            for (var index in lista) {
                var option = lista[index].option;
                var condition = lista[index].condition;
                try {
                    if (condition) {
                        var popoverTop = (
                            <Popover id="popover-positioned-top" title={condition}>
                                <a href={"#/search/" + condition+"/"+this.props.item.id_modulo+"/"+this.props.item.id_instrumento}>Ir a </a>
                                   
                            </Popover>
                        );
                        options.push(
                            <div
                                key={index + "_option_" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">

                                <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverTop}>
                                    <label className="lbl-id">

                                        <div className="id-preg relacionada"></div>
                                        <strong>{parseInt(index) + 1})</strong>
                                        {option}
                                    </label>
                                </OverlayTrigger>
                            </div>
                        )
                    } else {
                        options.push(
                            <div
                                key={index + "_option_" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">
                                <label className="lbl-id">
                                    <strong>{parseInt(index) + 1})</strong>

                                    {option}
                                </label>

                            </div>
                        )

                    }

                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return (
                <div className="row resp-reg">
                    {options}
                </div>
            );
        }

    }

    render() {
        return (
            <div className="reg-preg">
                {(this.props.simulation)?(""):(<input
                    type="checkbox"
                    value={this.props.item.id}
                    checked={this.props.checked}
                    onClick={this.props.onDelete}
                    className="check-preg"/>)}
                
                <strong>
                    {this.props.prefijo + " "}</strong>
                {this.props.castJsonPregunta[0].question}<br/>
                <small >{this.props.item.nota}</small>
                {this.renderOption()}
                {this.renderLinkedQuestions()}
            </div>
        )
    }
}
class PanelPreguntas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinerLoad: true
        }
        this.state.listDetele = [];
        this.onDelete = this
            .onDelete
            .bind(this);
    }

    onDelete(e) {
        var id = parseInt(e.target.value);
        var ischecked = e.target.checked
        var lista = this.state.listDetele;
        var index = lista.indexOf(id);
        //No esta en la lista  y esta activo-> agregar
        if (index == -1 && ischecked == true) {
            lista.push(id)
            this.setState({listDetele: lista})
        }
        //Esta en la lista  y no esta activo-> eliminar
        if (index != -1 && ischecked == false) {
            lista.splice(index, 1);
            this.setState({listDetele: lista})
        }
    }
    deleteAll(e) {
        this.setState({checkedAll: true});
    }
    renderReactivos() {
        var modulo = this.props.modulo;
        if (modulo == undefined) {
            return (
                <div className="spinner" key={"spinerModulo "+this.props.modulo.id}></div>
            )
        }
        if (modulo && modulo.reactivos && modulo.reactivos.length > 0) {
            var lista = modulo.reactivos
            var listaRender = []
            for (var key in lista) {
                var listaDelete = this.state.listDetele;
                var preguntaJson = lista[key].dataJson
                var id = lista[key].id;
                var prefijopregunta = modulo.prefijo + (parseInt(key) + 1);
                var checkedItem = (listaDelete.indexOf(id) != -1);
                if (preguntaJson != "") {
                    try {
                        var preguntaJsonTrim = preguntaJson.trim()
                        var preguntaJsonTrimS = preguntaJsonTrim.split("\n");
                        var preguntaDef = preguntaJsonTrimS;
                        var castJsonPregunta = JSON.parse(preguntaDef);
                        var pregunta = (
                            <QuestionManager
                                simulation={this.props.simulation}
                                key={lista[key].id}
                                item={lista[key]}
                                checked={checkedItem}
                                prefijo={prefijopregunta}
                                onDelete={this.onDelete}
                                castJsonPregunta={castJsonPregunta}>
                               
                            </QuestionManager>
                        )
                        listaRender.push(pregunta);
                    } catch (ex) {
                        console.log(ex)
                        alerta("301->Panel preguntas")
                    }

                }

            }
            return (
                <div >{listaRender}</div>
            )
        }
        if (modulo && modulo.reactivos == "") {
            return (
                <div >Sin preguntas</div>
            )
        }
    }
    handleChecks() {
        this.setState({checkedAll: true});
    }

    render() {

        return (
            <div >
                <div className="row">
                    {/* <div className="col-md-6">
                        <input type="checkbox" onChange={this.handleChecks.bind(this)} className="check-preg"/>Seleccionar todas
                    </div> */}
                    {(this.props.simulation)
                        ? ("")
                        : (
                            <div className="col-md-12 col-sm-12 text-right">
                                <a
                                    onClick={() => {
                                    this
                                        .props
                                        .deleteSelected(this.state.listDetele)
                                }}><img src="../../../images/erase-gray.svg" height="18"/>
                                    Eliminar preguntas seleccionadas</a>
                            </div>
                        )}

                </div>
                <div
                    className={(this.props.simulation)
                    ? ""
                    : "cont-reg-preg"}>
                    {this.renderReactivos()}
                </div>
                {(this.props.simulation)
                    ? ("")
                    : (
                        <div>
                            <label className="lbl-id">
                                <div className="id-preg relacionada"></div>Respueta relacionada</label>
                            <label className="lbl-id">
                                <div className="id-preg "></div>@TEXTO</label>
                            <label className="lbl-id">
                                <div className="id-preg "></div>@FECHA</label>
                            <label className="lbl-id">
                                <div className="id-preg "></div>@HORA</label>
                        </div>
                    )}

            </div>
        )
    }
}