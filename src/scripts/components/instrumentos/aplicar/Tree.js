class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaReactivos:[],
            aplicacionReactivoInstrumento:""

        }
        

    }
    componentWillReceiveProps(newProps){
        if(newProps && newProps._aplicacionId){
            getTreeReactivos({aplicacionIdCurrentEncuesta:newProps._aplicacionId},(response)=>{
                this.setState({listaReactivos:response.data.d})
            })
        }

     
    }
    focusReactivo(i, e){
        this.props.setReactivoId(i)
    }
   
    renderTree(){
        var lista  = this.state.listaReactivos;
        if(lista.length>0){
             var listaModulos =[]
            var res =  _.map(_.uniqBy(lista, 'id_modulo'), function (ob,i) {
                var listaPreguntas = []
                var contadorPregunta = 0;
                lista.map((item, index)=>{
                
                    if(item.id_modulo==ob.id_modulo){
                        var prefijoPregunta = ob.prefijo+""+ (++contadorPregunta);
                        try {
                        listaPreguntas.push( <div key={"bure"+index+"de"}><button onClick={this.focusReactivo.bind(this, item.aplicacionReactivoInstrumento)}>{prefijoPregunta}</button></div>)
                        
                        } catch (error) {
                         console.log(error)
                        }
                    }
                }) 
               //var s =  ;
                listaModulos.push( <div key={"tree_modulo"+i+"de"}>
                    {(i==0)?( <h1>{ob.nombreInstrumento}</h1>):("")}
                     {ob.prefijo}<Collapse isOpened={true          }>
                    {listaPreguntas}
                   </Collapse></div>)
            }.bind(this));
           
            
            return listaModulos;

            
            
        }else{
            return "No hay"
        }

    }
  
      
        render() {
            var lista  = this.state.listaReactivos;


            //Falta evaluar datos de Visita con Somatometria
            return (
                <div className="col-md-3 col-sm-3">

                     No. preguntas: {(lista)?lista.length:"?"}
                   
                    {this.renderTree()}
                </div>
    
            )
        }
}
