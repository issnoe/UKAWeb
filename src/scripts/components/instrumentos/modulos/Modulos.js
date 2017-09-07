
class Modulos extends React.Component {
    constructor(props) {

        super(props);
        this.state = {}
        this.state.showModal = false
        this.state.listaModulos = [
            {
            "nombre": "",
            "prefijo": "",
            "estado": 1,
            "fechaCreacion": new Date()
        }
        ];
        
    }
  
    handleState(e) {
        
       
    }
    render() {
         ;
        //modulo

        const listItems = this
            .state
            .listaModulos
            .map((item) => <ModuloItem onChange={this.handleState} key={`${item.nombre}_${item.id}_lista_`} item={item}/>);
        return (
            <div>
                
                {listItems}
                
            </div>
        )
    }
}