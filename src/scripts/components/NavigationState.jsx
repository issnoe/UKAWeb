class NavigationState extends React.Component {
    render() {
        return (
              <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                           <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                <a href="/Miembros/MD/SubMenu">Medir y Diagnosticar </a>
                            </li>
                             <li >
                                Niños de Alto Riesgo
                            </li>
                        </ol>
                    </div>

                    </div>
                </div>
                < div className="bg-full padding-top-10">
                <div className="container">
                     {this.props.children}
                </div>
                 
                </div>

            </div>

        )
    }
}