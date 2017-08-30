class Instrumentos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.item = {}
       
        this.state.listaIntrumentos = [];
        this.state.spinerLoad = true
        getadminInstrumentos(this.setStatePromise.bind(this))
        // this.getIntrumentosWS()

    }
    componentWillReceiveProps(newProps){
        if(true){
            this.setState({spinerLoad:true})
            getadminInstrumentos(this.setStatePromise.bind(this))

        }
     
    }
  
    
    setStatePromise(resp) {
        var instrumentos = resp.data.d
        this.setState({listaIntrumentos: instrumentos, spinerLoad: false });
    }
    
   
    renderInstrumentos(){
        if(this.state.listaIntrumentos){
            var listaIntrumentos =[];

             this.state.listaIntrumentos.map((item)=>{
                 listaIntrumentos.push(<Instrumento key={item.nombre+item.id+"_lista_instrumentos_"} item={item} active={this.props.id}/>);
             });
             
            return listaIntrumentos;

        }
        else{
            return (<h1>No hay instrumentos</h1>)
        }
    }
  
    render() {
       
        if (this.state.spinerLoad == true) {
            return (
                <div className="spinner" key={"spinnerInstrumento_"}></div>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 col-sm-7">
                            <h1>Instrumentos</h1>
                        </div>
                        <div className="col-md-5 col-sm-5 text-right">
                            <div className="form-group">
                                <a href={"#/admin/instrumentos/nuevo"} className="btn btn-primary btn-sm" >Instrumento</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-full padding-top-10">
                    <div className="container">
                        <div className="row">
                            <div className="content-form col-md-12">
                                <div className="row header-intrumentos">
                                    <div className="col-md-4 col-sm-4">
                                        Nombre del instrumento
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        Última modificación
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        Aplicación a
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        Estado
                                    </div>
                                    <div></div>

                                </div>
                                <div className="panel-group instrumentos-l">
                                    
                                    {this.renderInstrumentos()}
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

class InstrumentosView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.item = {}
       
        this.state.listaIntrumentos = [];
        this.state.spinerLoad = true
        getadminInstrumentos(this.setStatePromise.bind(this))
        // this.getIntrumentosWS()

    }
    componentWillReceiveProps(newProps){
        if(newProps.id){
            this.setState({spinerLoad:true})
            getadminInstrumentos(this.setStatePromise.bind(this))

        }
     
    }
  
    
    setStatePromise(resp) {
        var instrumentos = resp.data.d
        this.setState({listaIntrumentos: instrumentos, spinerLoad: false });
    }
    
   
    renderInstrumentos(){
        if(this.state.listaIntrumentos){
            var listaIntrumentos =[];

             this.state.listaIntrumentos.map((item)=>{
                 listaIntrumentos.push(<InstrumentoView key={item.nombre+item.id+"_lista_instrumentos_"} item={item} active={this.props.id}/>);
             });
             
            return listaIntrumentos;

        }
        else{
            return (<h1>No hay instrumentos</h1>)
        }
    }
  
    render() {
       
        if (this.state.spinerLoad == true) {
            return (
                <div className="spinnerFixed" key={"spinnerInstrumento_"}></div>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 col-sm-7">
                            <h1>Instrumentos</h1>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-full padding-top-10">
                    <div className="container">
                        <div className="row">
                            <div className="content-form col-md-12">
                                <div className="row header-intrumentos">
                                    <div className="col-md-4 col-sm-4">
                                        Nombre del instrumento
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        Última modificación
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        Aplicación a
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        Estado
                                    </div>
                                    <div></div>

                                </div>
                                <div className="panel-group instrumentos-l">
                                    
                                    {this.renderInstrumentos()}
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

