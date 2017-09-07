
class HandlePregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spinerLoad:true}
        

    }
    
    componentWillReceiveProps(newProps){
        if(newProps && newProps.aplicacionReactivoInstrumento){
            window.scrollTo(0,0);
            getReactivo({aplicacionReactivoInstrumento:newProps.aplicacionReactivoInstrumento},(response)=>{
               
                var p = response.data.d.dataJson.trim();
                var pS = p.split("\n");
                var rea = pS;
                var castting = JSON.parse(rea);
                debugger
                this.setState({reactivo:response.data.d,castReactivo:castting[0], spinerLoad:false})
            })
        }

     
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
    handleAnwer(e){
        //e.preventDefault();
        var name = e.target.name;
        var valu = e.target.value;
        var castReactivo = this.state.castReactivo;
        castReactivo.answer = valu;
        this.setState({castReactivo:castReactivo})
    }
    saveNext=()=>{
        
        var state = this.state;
        debugger

        var params = {
            aplicacionReactivoInstrumento:state.reactivo.aplicacionReactivoInstrumento,
            dataJson:JSON.stringify([state.castReactivo]),
            respuesta:state.castReactivo.answer
        }
        setReactivo(params, (response)=>{
            debugger

        })

    }
    rendeCastReactivo(){
       
        var castReactivo = this.state.castReactivo;
    
        if(castReactivo){
            debugger
            var question =(<p>{castReactivo.question}</p>);
            var anwser =(<div><input onChange={this.handleAnwer.bind(this)} value={castReactivo.answer} name="answer" /></div>);
            var control =(<div><button onClick={this.saveNext}>Continuar</button></div>)
            return (<div>{question} {anwser} {control}</div>)
        }
        return <h1></h1>
    }
   
      
        render() {
            if (this.state.spinerLoad == true) {
                return (
                    <div className="spinner" key={"spinnerInstrumento_panedl_"}></div>
                )
            }

            //Falta evaluar datos de Visita con Somatometria
            return (
                <div className="col-md-9 col-sm-12" id="handlePregunta">
                    {this.rendeHeader()}
                    {this.rendeCastReactivo()}
                   
                </div>
    
            )
        }
}