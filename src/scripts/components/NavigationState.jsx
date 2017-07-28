class NavigationState extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container-fluid no-print">
                        <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="logo no-print">
                                    <a href="/Miembros/MenuPrincipal" id="lnkLogo">
                                        <img className="logo no-print" src="/images/login-logo.png"/>
                                    </a>
                                </div>

                                <div className="tit-sis no-print">
                                     <span >MEDIR Y DIAGNOSTICAR</span><br/>
                                    <span >{(this.props.location)?this.props.location.municipio +", ":""}</span>
                                    {/* <span >{(this.props.location)?this.props.location.comunidad +", ":""}</span> */}
                                    <span >{(this.props.location)?this.props.location.grupo:""}</span><br/>
                                    <span >{(this.props.location)?this.props.location.estado:""}</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12  text-right no-print">

                                <div className="sesion no-print">
                                    <i className="icon-user"></i>
                                    <a href="/">{(this.props.user)?this.props.user.username:""}</a>
                                    |
                                    <a href="/">Cerrar Sesión</a>
                                </div>

                            </div>
                            <div className="col-sm-6 col-sm-offset-6"></div>
                        </div>
                    </div>

                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <ol className="breadcrumb">
                                <li>
                                    <a href="/Miembros/MenuPrincipal">Inicio</a>
                                </li>
                                <li >
                                    <a href="/Miembros/MD/SubMenu">Medir y Diagnosticar
                                    </a>
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
                
    <footer>
        &nbsp;
    </footer>

            </div>

        )
    }
}