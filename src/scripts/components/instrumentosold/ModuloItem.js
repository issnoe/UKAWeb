class ModuloItem extends BasePreguntas {
    constructor(props) {
        super(props);
        this.state={}
        this.state.showModalDelete = false;
       

    }
     handleModal(decition) {
        
        if (decition.action) {

             this
            .props
            .onChange({action: "delete", item: this.props.item})
            this.setState({showModalDelete: false})
        } else {
            this.setState({showModalDelete: false})
        }
       

    }
    showDetails(e) {
        e.preventDefault();
        this
            .props
            .onChange(this.props);
    }

    render() {

        return (
            <div className="row table-rw-2">
                <div className="col-md-4 col-sm-4 long-txt">
                    {this.props.item.modulo}
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                    {this.props.item.prefijo}
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                    {(this.props.item.estado != null)
                                ? STATUS[this.props.item.estado].data
                                : "Sin estado"}
                </div>
                <div className="col-md-1 col-sm-1 ">
                     <div className="dropdown">
                                <a data-toggle="dropdown">
                                    <img src="../../../images/menu.svg" alt="Acciones" height="28"/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li>
                                        <a href=""><img src="../../../images/enable.svg" alt="Activar instrumento" height="18"/>
                                            Activar</a>
                                    </li>
                                    <li>

                                        <a
                                            onClick={() => {
                                            this
                                                .props
                                                .onChange({action: "update", item: this.props.item})
                                        }}><img
                                            src="../../../images/edit.svg"
                                            alt="Editar nombre del instrumento"
                                            height="18"/>
                                            Editar</a>
                                    </li>
                                    
                                   
                                    <li>
                                        <a
                                            onClick={() => {
                                            this.setState({showModalDelete: true})
                                        }}><img
                                            src="../../../images/erase-gray.svg"
                                            alt="Eliminar el instrumento"
                                            height="18"/>
                                            Eliminar</a>
                                    </li>
                                     <li>
                                        <a href={"#/modulo/"+this.props.item.id}
                                            ><img src="../../../images/add.svg" alt="Agregar módulo" height="18"/>
                                            Agregar pregunta</a>
                                    </li>
                                </ul>
                            </div>
                </div>
            
                 <PopupMsg
                    onChange={this
                    .handleModal
                    .bind(this)}
                    show={this.state.showModalDelete}
                    title="Eliminar"/>
            </div>

        )
    }
}
