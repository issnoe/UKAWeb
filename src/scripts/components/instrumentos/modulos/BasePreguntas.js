class BasePreguntas extends React.Component{
    constructor(props) {
        super(props); 
        this.state = this.props.item
        
        this.handleModalPregunta = this.handleModalPregunta.bind(this)
    }
    
  
    handleModalPregunta(e){
     
        //acciones alta borrar actualizar  
        //question O
       this.setState({showModalPregunta:false});
    }
}