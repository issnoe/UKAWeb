import React from 'react';
import ReactDOM from 'react-dom';

import {getadminInstrumentos} from "./scripts/containers/instrumentos";
import { getLocation, getUser} from "./scripts/containers/user";
import registerServiceWorker from './registerServiceWorker';
import "./scripts/containers/const";
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {_} from "lodash"

import "./index.css"
// import Instrumentos from "./scripts/components/Instrumentos";
import NavigationState from "./scripts/components/NavigationState";
const history = createBrowserHistory();
const HandleRoute = (props) => {
    debugger
   var  state={
       controller:"", 
        _instrumentoId:undefined
    }
    
    var renderConteiner;
    var navigatorState = [
        {
            //0
            name: "Inicio",
            routing: "/Miembros/MenuPrincipal"
        }, {
            //1
            name: "Medir y Diagnosticar",
            routing: "/Miembros/MD/SubMenu"
        }, {
            //2
            name: "Niños de Alto Riesgo",
            routing: "#/nar"
        }, {
            //3
            name: "Fichas de niños de alto riesgo (NAR)",
            routing: "#/fichanar"
        },
        {
            //4
            name: "Administrador de instrumentos",
            routing: "#/admin/instrumentos"
        }
        , {
            //5
            name: "Instrumentos",
            routing: "#/pdc/instrumentos"
        },
        {
            //6
            name: "Candidatos",
            routing: "#/pdc/instrumentos/candidatos/" + state._instrumentoId
        },
        {
            //7
            name: "Aplicación",
            routing: "#/pdc/instrumentos/aplicar/" + state._instrumentoId
        },
        {
            //8
            name: "Modulos",
            routing: "#/pdc/instrumentos/modulo/" + state._instrumentoId
        },
        {
            //9
            name: "Simulación instrumento",
            routing: "#/pdc/instrumentos/simulacion/" + state._instrumentoId
        },
    ]
    var navigatorHistory = []
    switch (state.controller) {
        
        case "admininstrumentos":
        debugger;
            navigatorHistory = _.concat(navigatorState[0], navigatorState[4])
            renderConteiner = (
                <div>
                    administrador 
                    {/* <ModalCondition
                        id={this.state._instrumentoId}
                        focusHandle={this.state.focusHandle}
                        show={this.state.modalCondition}
                        handleChange={this.handleChange} />
                    <ModalInstrumento
                        id={this.state._instrumentoId}
                        show={this.state.modalInstrumento}
                        title="Instrumento"
                        handleChange={this.handleChange}
                    />
                    <ModalModulo
                        _instrumentoId={this.state._instrumentoId}
                        moduloId={this.state._moduloId}
                        show={this.state.modalModulo}
                        title="Modulo" />
                </div> */}
                
                {/* <Instrumentos id={this.state._instrumentoId} /> */}
                </div>
            );
            break;
        default:

            renderConteiner = (
                <div className="container">
                      <h1>URL no existe</h1>
                </div>
              
            );
            break;
    }
    return (
        <NavigationState
            navigatorHistory={navigatorHistory}
            location={state.location}
            user={state.user}>
            {renderConteiner}
        </NavigationState>
    )
    
}
ReactDOM.render(<Switch><Route  exact  path="/admin" component={HandleRoute}/><Route path="/admin/:id" component={HandleRoute}/>
</Switch>, document.getElementById('appUnkiloDeAyuda'));
registerServiceWorker();
