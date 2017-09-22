class PrintSubPregunta extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="col-md-12 col-sm-12 reg-preg preg-rel">
              {/* {this.props.prefijo +" "} */}
              {this.props.question}
              <div className="answerPrint">
              {": "+ this.props.answer}
            </div>
            </div>
        )
    }

}

class PrintReactivo extends React.Component {
    render() {
        
         var list =(this.props.q.questions)? this.props.q.questions.map((item, index)=>(<PrintSubPregunta key={"subpregunta"+index} {...item}/>)):[]
        return (
            <div className="reg-preg">
             <strong> {this.props.prefijo +" "}</strong>
              {this.props.q.question}
              
             <div className="row resp-reg">
                {list}
             </div>
              <div className="answerPrint">
                {": "+ this.props.q.answer}
              </div>
              {/* {"Respuesta: "+this.props.q.respuesta} */}
            </div>
        )
    }

}
class PrintAnswers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaReactivos:[],
            aplicacionReactivoInstrumento:""
        }
    }
    componentDidMount(){
        if( this.props._aplicacionId){
            getTreeReactivos({aplicacionIdCurrentEncuesta:this.props._aplicacionId},(response)=>{
                this.setState({listaReactivos:response.data.d})
            })
        }
    }
    
    renderReactivos(){
        var lista  = this.state.listaReactivos;
        if(lista.length>0){
            var lRender =[]
           _.map(_.uniqBy(lista, 'id_modulo'),(ob, i)=>{
                try {
                    var contadorPregunta = 0;
                    lista.map((item, index)=>{
                        
                        if (item.id_modulo==ob.id_modulo){
                            var props={}
                            props.prefijo = ob.prefijo+""+ (++contadorPregunta);
                            props.q = castJson(item.dataJson);
                            props.nota = item.nota;
                            props.respuesta = item.respuesta;
                            lRender.push(<PrintReactivo key={"reactivoPregunta"+index} {...props}/>)
                           
                        
                        }
                    })
                    
                } catch (error) {

                }
               
            })
           
           return (<div className="row">{lRender}</div>)
        }else{
            return  <div className="spinner" key={"spinnerInstrumento_panedl_impresion"}></div>
        }

    }
    print(e){
        e.preventDefault()
        window.print()
    }
   
        render() {
            //Falta evaluar datos de Visita con Somatometria
            return (
                // className="modalFull    "
               <div >
                <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                <button className="btn btn-primary  no-print " onClick={this.print.bind(this)}>Imprimir </button>
                </div>
                   <div className="col-md-12 col-sm-12">
                    {this.renderReactivos()}
                    </div>
                    <div className="col-md-12">
                    <small><strong>*Nota:</strong> El término saludable puede ser reemplazado según el contexto de cada país por: nutritiva, balanceada y/o equilibrada. Fuente: ELCSA armonizada en el Taller Regional de Cuernavaca, México, del 7 al 10 de septiembre 2010 (países participantes: El Salvador, Guatemala, Honduras, México y Nicaragua) fi nanciado por el programa EC/FAO Global Programme on Linking Information and Decision Making to Improve Food Secuirty. El modelo de la encuesta se realizó a partir de: Pérez-Escamilla R, Melgar-Quiñonez H, Nord M, Álvarez MC, Segall-Corrêa AM. Escala Latinoamericana y Caribeña de Seguridad Alimentaria (ELCSA). Memorias de la 1.ª Conferencia en América Latina y el Caribe sobre la medición de la seguridad alimentaria en el hogar. Perspectivas en Nutrición Humana, 2007.</small>
                    </div>
                </div>
            </div>
            )
        }
}
