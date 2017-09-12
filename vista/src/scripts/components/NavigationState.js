import React from 'react';
class NavigationState extends React.Component {
    render() {
        var nav = []
        this
            .props
            .navigatorHistory
            .map((n, i) => {
                if (i == this.props.navigatorHistory.length - 1) {
                    nav.push(
                        <li key={"nav_h"+i}>
                            {n.name}
                        </li>
                    )
                } else {
                    nav.push(
                        <li key={"nav_h"+i}>
                            <a href={n.routing}>{n.name}</a>
                        </li>
                    )
                }

            })
        return (
            <div  >
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
                                    <span >{(this.props.location)
                                            ? this.props.location.municipio + ", "
                                            : ""}</span>
                                    {/* <span >{(this.props.location)?this.props.location.comunidad +", ":""}</span> */}
                                    <span >{(this.props.location)
                                            ? this.props.location.grupo
                                            : ""}</span><br/>
                                    <span >{(this.props.location)
                                            ? this.props.location.estado
                                            : ""}</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12  text-right no-print">

                                <div className="sesion no-print">
                                    <i className="icon-user"></i>
                                    <a href="/">{(this.props.user)
                                            ? this.props.user.username
                                            : ""}</a>
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

                                {nav}
                            </ol>
                        </div>

                    </div>
                </div>
                <div className="bg-full padding-top-10">
                    <div className="container">
                        {(this.props && this.props.children)?(this.props.children):(undefined)}
                    </div>

                </div>

                <footer>
                    &nbsp;
                </footer>
               

            </div>

        )
    }
}
NavigationState.propTypes = {
  children: React.PropTypes.element.isRequired
};
export default NavigationState;