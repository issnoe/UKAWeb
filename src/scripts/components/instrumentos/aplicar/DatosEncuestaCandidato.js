class DatosEncuestaCandidato extends React.Component {
    componentDidMount() {
        if (this.props._aplicacionId) {

            getAplicacionEncuestaEncuestadorById({aplicacionId:this.props._aplicacionId},(response)=>{
                    if (response && response.data && response.data.d) {
                        this.setState(response.data.d)
                    }
                })
            
        }
    }
    render() {
      const state = this.state;
      if(state){
          debugger
        return (
            <div className="row">
            <div className="col-md-12 col-sm-12 ">
            Encuestado: {state.NombreEncuestado}
            <br/>
            Clave:{state.Clave}
            <br/>
            Fecha de inicio :{state.fechaInicio}
            {/* <input type="date" value={state.fechaInicio}/> */}
            <br/>
            Fecha última modificación :{state.fechaModificacion}
            <br/>
            Fecha de termino :{state.fechaTermina}
            <br/>
            Estado : {state.status}

            </div>
            </div>
        )

      }
      return (
        <div className="row">
        <div className="col-md-12 col-sm-12 ">
            <div className="spinner" key={"spinnerInstrumento_panedl_dataencuestado"}></div>

        </div>
        </div>
    )
       
    }

}
