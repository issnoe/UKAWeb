
class HandlePregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spinerLoad:true}
        

    }

    componentDidMount(){
        window.scrollTo(0,0);
        const initState ={};
        this.setState(initState)
        
    }
    componentWillReceiveProps(newProps){
      
        if(newProps && newProps.aplicacionReactivoInstrumento &&  newProps.aplicacionReactivoInstrumento!="END" ){
            window.scrollTo(0,0);
            getReactivo({aplicacionReactivoInstrumento:newProps.aplicacionReactivoInstrumento},(response)=>{
                var p = response.data.d.dataJson.trim();
                var pS = p.split("\n");
                var rea = pS;
                var castting = JSON.parse(rea);
                var castT = castting[0];
                castT.answer = (castT.answer=="undefined")?"":castT.answer;
                this.setState({reactivo:response.data.d,castReactivo:castT, spinerLoad:false})
            })
        }
        if(newProps.aplicacionReactivoInstrumento=="END"){
            // alert("Confirme la fecha de aplicación");
            getAplicacionInstrumento({aplicacionId:this.props._aplicacionId}, (response)=>{
                this.setState({spinerLoad:false})
            })
            


        }

     
    }
    saveNext=()=>{
        var state = this.state;
        var params = {
            aplicacionIdCurrentEncuesta:state.reactivo.aplicacionIdCurrentEncuesta,
            aplicacionReactivoInstrumento:state.reactivo.aplicacionReactivoInstrumento,
            dataJson:JSON.stringify([state.castReactivo]),
            respuesta:state.castReactivo.answer
        }
        setReactivo(params, (response)=>{
            var state = this.state;
            var instrumentoId = parseInt(state.reactivo.id_instrumento);
            window.location.href = "#/pdc/instrumentos/aplicar/"+instrumentoId +"/"+state.reactivo.aplicacionIdCurrentEncuesta+"/" + response.data.d[0]

        })

    }
    
  
    handleAnwerSub(subQuestion, index , e){
        var valor = e.target.value;
        var castReactivo = this.state.castReactivo;
        castReactivo.questions[index].answer = valor;
        this.setState({castReactivo:castReactivo})

    }
    handleAnwer(e){
        var name = e.target.name;
        var valu = e.target.value;
        var castReactivo = this.state.castReactivo;
        castReactivo.answer = valu;
        this.setState({castReactivo:castReactivo})
    }
  
    selectOptionSub(subQuestion, index , e){
        var valorIndex = parseInt(e.target.name);
        var castReactivo = this.state.castReactivo;
        castReactivo.questions[index].answer = subQuestion.options[valorIndex].option;
        this.setState({castReactivo:castReactivo})

    }
    selectOption =(e)=>{
        var isChecked = e.target.checked
        var valu = e.target.value;
        var ex = e.target.name;
        var castReactivo = this.state.castReactivo;
        castReactivo.answer = valu;
        this.setState({castReactivo:castReactivo})
    }

      
    rendeHeader(){
        var reactivo = this.state.reactivo;
        if(reactivo.aplicacionReactivoInstrumento){
            var fath = (<div>{reactivo.nombreInstrumento+ "---"+reactivo.nombreModulos}</div>            );
            var nota = (<small>{reactivo.nota}</small>)
            return (<div>{nota}</div>)
        }
        return <h1>sin pregunta</h1>
    }
    renderOptions(){
        if (this.state.castReactivo && this.state.castReactivo.options) {
            var lista = this.state.castReactivo.options;
            var options = []
            for (var index in lista) {
                var item = lista[index].option;
                try {
                    options.push(<AnswerWithOptions
                        key={index + "option"}
                        selectOption = {this.selectOption}
                        {...lista[index]}
                        index={index}
                       />)
                } catch (error) {
                    console.log("#12JDFU37635WF")
                    alert("Error al render opcion multiple")
                }
            }
            return options
        }else{
            return "";
        }
        
    }
    renderQuestions(){
        if(this.state.castReactivo && this.state.castReactivo.questions){
            var listaPregunas =[]
            var lista = this.state.castReactivo.questions;
            lista.map((item, index)=>{
                listaPregunas.push(<HandleSubPregunta key={"pregunta_"+index} selectOptionSub={this.selectOptionSub.bind(this, item,index)} handleAnwerSub={this.handleAnwerSub.bind(this,item, index)} question={item}/>);
            })
            return (listaPregunas)
        }
        return (undefined);
    }
    rendeCastReactivo(){
        var castReactivo = this.state.castReactivo;
        if(castReactivo){
           var questions  =  (<div className="col-md-12 resp-reg">{this.renderQuestions()}</div>);
            var opciones = (<div className="col-md-12">{this.renderOptions()}</div>);
            var question =(<div className="col-md-12 col-sm-12">{(castReactivo.question!="" )?castReactivo.question:"Escribe: vacio y click en continuar"}</div>);
            var anwser =(<div className="col-md-12 col-sm-12 itemAnswer"><input className="answerInput" onChange={this.handleAnwer.bind(this)} value={castReactivo.answer} name="answer" /></div>);
            var control =(<div className="col-md-12 col-sm-12 itemAnswer"><button className="btn btn-primary btn-md" onClick={this.saveNext}>Continuar</button></div>)
            return (<div className="row">{question} {questions} {opciones} {anwser} {control} </div>)
        }
        return <h1></h1>
    }
   
      
        render() {
            
            if (this.props.aplicacionReactivoInstrumento=="END") {
                return (
                    <div className="emptyContainer"><img src="./src/img/flag.png"/><p className="">INSTRUMENTO TERMINADO</p><p>Confirme la fecha de aplicación</p></div>
                )
            }
            if (this.state.spinerLoad == true) {
                return (
                    <div className="spinner" key={"spinnerInstrumento_panedl_"}></div>
                )
            }

            
            //Falta evaluar datos de Visita con Somatometria
            return (
                <div className="col-md-12 col-sm-12" id="handlePregunta">
                    <div className="reg-preg">
            
                
           
                    {this.rendeHeader()}
                    {this.rendeCastReactivo()}
                    </div>
                   
                </div>
    
            )
        }
}