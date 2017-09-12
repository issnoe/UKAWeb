 class ModuloInRow extends  React.Component{
    constructor(props) {
        super(props);
        this.state={}
        this.state.showModalDelete = false;
       

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
                                        <a><img src="../../../images/enable.svg" alt="Activar instrumento" height="18"/>
                                            Activar</a>
                                    </li>
                                    <li>

                                        <a href={"#/admin/instrumentos/modulo/editar/" + this.props.item.id}><img
                                            src="../../../images/edit.svg"
                                            alt="Editar nombre del módulo"
                                            height="18"/>
                                            Editar</a>
                                    </li>
                                    
                                   
                                    <li>
                                        <a href={"#/admin/instrumentos/modulo/eliminar/" + this.props.item.id}><img
                                            src="../../../images/erase-gray.svg"
                                            alt="Eliminar el módulo"
                                            height="18"/>
                                            Eliminar</a>
                                    </li>
                                     <li>
                                        <a href={"#/admin/instrumentos/modulo/"+this.props.item.id}
                                            ><img src="../../../images/add.svg" alt="Agregar módulo" height="18"/>
                                            Agregar pregunta</a>
                                    </li>
                                </ul>
                            </div>
                </div>
            
                
            </div>

        )
    }
}
