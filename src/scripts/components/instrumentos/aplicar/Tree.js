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
        var idFocus = this.props._aplicacionReactivoInstrumento;
        if(lista.length>0){
             var listaModulos =[]
            var res =  _.map(_.uniqBy(lista, 'id_modulo'), function (ob,i) {
                var listaPreguntas = []
                var contadorPregunta = 0;
                lista.map((item, index)=>{
                    if(item.id_modulo==ob.id_modulo){
                        var prefijoPregunta = ob.prefijo+""+ (++contadorPregunta);
                        var classStyle = (idFocus == item.aplicacionReactivoInstrumento)?"focusreactivo":"";
                        try {
                        listaPreguntas.push( <div key={"bure"+index+"de"}><button className={classStyle} onClick={this.focusReactivo.bind(this, item.aplicacionReactivoInstrumento)}>{prefijoPregunta}</button></div>)
                        
                        } catch (error) {
                         console.log(error)
                        }
                    }
                }) 
               //var s =  ;
                listaModulos.push( <div key={"tree_modulo"+i+"de"}>
                   {/*  {(i==0)?( <h1>{ob.nombreInstrumento}</h1>):("")} */}
                     {ob.prefijo}<Collapse isOpened={true          }>
                    {listaPreguntas}
                   </Collapse></div>)
            }.bind(this));
            return listaModulos;
        }

    }
        render() {
            var lista  = this.state.listaReactivos;
            //Falta evaluar datos de Visita con Somatometria
            return (
                <div className="row">
                   <div className="col-md-2 col-sm-2">
                   No. preguntas: {(lista)?lista.length:"?"}
                   {this.renderTree()}
                   </div>
                    <div className="col-md-10 col-sm-10">
                    {this.props.children}
                    </div>
                </div>
            )
        }
}
