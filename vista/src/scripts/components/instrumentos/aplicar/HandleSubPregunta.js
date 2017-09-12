
class HandleSubPregunta extends React.Component {
  
    renderOptions(){
        if (this.props.question && this.props.question.options && this.props.question.options.length >0) {
            
            var lista = this.props.question.options;
            var options = []
            for (var index in lista) {
                var item = lista[index].option;
                try {
                    options.push(<AnswerWithOptions
                        key={index + "option_sub_opcion"}
                        selectOption = {this.props.selectOptionSub}
                        {...lista[index]}
                        index={index}
                       />)
                } catch (error) {
                    console.log("#12JDFU37635WF")
                    alert("Error al render opcion multiple")
                }
            }
            return options
        }
        return undefined
        
    }
    render() {
        var question  = this.props.question;
        var opciones = (<div className="col-md-12">{this.renderOptions()}</div>);
        var answer =(<input className="answerInput" onChange={this.props.handleAnwerSub} value={question.answer} name="answer" />);
        
        return (
            <div className="reg-preg preg-rel" >
                <div className="resp-reg">
                {question.question} <br/>
                {question.anexo} 
                {opciones}
                {answer}
                </div>
                
            </div>

        )
    }
}