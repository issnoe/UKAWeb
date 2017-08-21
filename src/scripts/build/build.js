const URLUKA= "http://localhost:25585/";
//const URLUKA= "http://ukawebm.azurewebsites.net/";
var Modal = ReactBootstrap.Modal;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Popover = ReactBootstrap.Popover;
const Panel = ReactBootstrap.Panel;
const Button = ReactBootstrap.Button;
const Fade = ReactBootstrap.Fade;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
const Collapse = ReactCollapse.Collapse;
moment.locale('es');


const TIPOREACTIVO = [
    {
        id: 0,
        data: "Pregunta"
    }, {
        id: 1,
        data: "Encabezado"
    }
];
const TIPOPREGUNTAS = [
    {
        id: 0,
        data: "Abierta"
    }, {
        id: 1,
        data: "Múltiple"
    }, {
        id: 2,
        data: "Anidada"
    }, {
        id: 3,
        data: "Anidada múltiple"
    }, {
        id: 4,
        data: "Grupal"
    }

];
const STATUS = [
    {
        id: 0,
        data: "Habilitado"
    }, {
        id: 1,
        data: "Deshabilitado"
    }
];
const PERSONAS = [
    {
        id: 0,
        data: "Ninguno"
    }, {
        id: 1,
        data: "Niños menores de tres años "
    }, {
        id: 2,
        data: "Niños mayores de tres años "
    }, {
        id: 3,
        data: "Hogares"
    }
];
const _ABIERTA = {
    "question": '',
    "answer": 'undefined'
}

const _MULTIPLES = {
    "question": '',
    "options": [
        {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
    ],
    "answer": 'undefined'
}
const _INDEXADA = {
    "question": '',
    "questions": [
        {
            "question": '',
            "options": [
                {
                    "option": "",
                    "condition": '',
                    "type": 'radio'
                }
            ],
            "answer": 'undefined'
        }
    ],
    "answer": 'undefined'
}
var getLocation = function (callback) {
    var url = "APP.aspx/getlocation";
    var params = {
        idEstado: localStorage.getItem("UKAidEstado"),
        idMunicipio: localStorage.getItem("UKAidMunicipo"),
        idComunidad: localStorage.getItem("UKAidComunidad"),
        idGrupo: localStorage.getItem("UKAidGrupo")
    };
    axios
        .post(url, params)
        .then(function (response) {

            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}
var getUser = function (callback) {
    var url = "APP.aspx/getUser";
    var idu= localStorage.getItem("UKAidUsuario")
    var params = {
        id: idu
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}

var getChildrends = function(filters,callback) {
    var url = "APP.aspx/getSomatometria";
    var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo,
        textoBusqueda: "",
        orden: "Familia",
        fichaseguimiento: "NAR"

    };
    axios
    .post(url, params)
    .then(function (response) {
        callback(response)
    })
    .catch(function (error) {
        debugger
        var s = error;
        // alert("No se pudo obtener datos de la localidad")
    });
}

var getEstados = function (callback) {
    const url = "APP.aspx/getEstados";
    var params = {
        id: localStorage.getItem("UKAidUsuario")
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}
var getEstados = function (id,callback) {
    const url = "APP.aspx/getEstados";
    var params = {
        id:id
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}
var getMunicipios = function (id,callback) {
    const url = "APP.aspx/getMunicipios";
    var params = {
        id
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}
var getComunidades = function (id,callback) {
    const url = "APP.aspx/getComunidades";
     var params = {
        id
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}
var getGrupos = function (id,callback) {
    const url = "APP.aspx/getGrupos";
    var params = {
        id
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de la localidad")
        });
}

var getadminInstrumentos = function (callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentos";
    var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}

var getInstrumentoById = function (id,callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentoId";
    var params = {
        id: id
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });
}
var getModuloById=function(id, callback){
    
    var idd= parseInt(id)
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getReactivosbyModuloId";
    var params = {
        id: idd
    };
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}


var deleteInstrumento = function (id, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/deleteIntrumento";
    var params = {
        id: id,
       
    }
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}
var deleteModulo = function (id, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/deleteModulo";
    var params = {
        id: id,
       
    }
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}



var saveInstrumento = function (state, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/saveIntrumento";
    var params = {
        id: state.id,
        nombre: state.nombre,
        subtitulo: state.subtitulo,
        prefijo: state.prefijo,
        estado: state.estado,
        orden: state.orden,
        aplicado: state.aplicado,
        grupos:state.grupos
    }
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}

//int id, int id_instrumento, string modulo, string prefijo, string leyenda, int estado, int orden, List<string> grupos
var saveModulo = function (state, callback) {
        
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/saveModulo";
    var params = {
        id: state.id,
        id_instrumento:state.id_instrumento,
        modulo:state.modulo,
        prefijo:state.prefijo,
        leyenda:state.leyenda,
        estado:state.estado,
        orden:0,
        grupos:state.grupos
        
    }
    axios
        .post(url, params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}





class LinkedQuestionManager extends React.Component {
    renderOption() {
        // / siempre se optiene un arreglo con un solo objecto , si se quiere cambiar
        // solo hay que actualizar la funcion savenext en Modulo y aqui
        if (this.props.question && this.props.question.options) {

            var lista = this.props.question.options
            var options = []
            for (var index in lista) {
                var option = lista[index].option;
                var condition = lista[index].condition;
                try {
                    if (condition) {
                       
                        var popoverTop = (
                            <Popover id="popover-positioned-top" title={condition}>
                                <a href={"#/search/" + condition+"/"+this.props.item.id_modulo+"/"+this.props.item.id_instrumento}>Ir a </a>
                            </Popover>
                        );
                        options.push(
                            <div
                                key={index + "_option_" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">

                                <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverTop}>
                                    <label className="lbl-id">

                                        <div className="id-preg relacionada"></div>
                                        <strong>{parseInt(index) + 1})</strong>
                                        {option}
                                    </label>
                                </OverlayTrigger>
                            </div>
                        )
                    } else {
                        options.push(
                            <div
                                key={index + "_option_linkedq" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">
                                <label className="lbl-id">
                                    <strong>{parseInt(index) + 1})</strong>

                                    {option}
                                </label>

                            </div>
                        )

                    }

                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return (
                <div className="row resp-reg">
                    {options}
                </div>
            );
        }

    }

    render() {
      
        return (
            <div className="reg-preg preg-rel">
                   <small >{(this.props.question.onlyTo)?"Para: "+this.props.question.onlyTo:""}</small><br/>
                {this.props.question.question}<br/>
                 <small >{(this.props.question.note)?"Nota: "+this.props.question.note:""}</small><br/>
                
                
                <small >{this.props.question.nota}</small>
                {this.renderOption()}

            </div>
        )
    }

}
class QuestionManager extends React.Component {
    renderLinkedQuestions() {
        this;
        if (this.props.castJsonPregunta && this.props.castJsonPregunta[0].questions) {

            var lista = this.props.castJsonPregunta[0].questions;
            var questions = []
            for (var index in lista) {
                questions.push(<LinkedQuestionManager
                    key={index + "linked_qeustion_" + this.props.item.id}
                    item={this.props.item}
                    question={lista[index]}/>)

            }
            return (
                <div className="row resp-reg">
                    {questions}
                </div>
            );
        }

    }
    renderOption() {
        // / siempre se optiene un arreglo con un solo objecto , si se quiere cambiar
        // solo hay que actualizar la funcion savenext en Modulo y aqui

        if (this.props.castJsonPregunta && this.props.castJsonPregunta[0].options) {

            var lista = this.props.castJsonPregunta[0].options;
            var options = []
            for (var index in lista) {
                var option = lista[index].option;
                var condition = lista[index].condition;
                try {
                    if (condition) {
                        var popoverTop = (
                            <Popover id="popover-positioned-top" title={condition}>
                                <a href={"#/search/" + condition+"/"+this.props.item.id_modulo+"/"+this.props.item.id_instrumento}>Ir a </a>
                                   
                            </Popover>
                        );
                        options.push(
                            <div
                                key={index + "_option_" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">

                                <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverTop}>
                                    <label className="lbl-id">

                                        <div className="id-preg relacionada"></div>
                                        <strong>{parseInt(index) + 1})</strong>
                                        {option}
                                    </label>
                                </OverlayTrigger>
                            </div>
                        )
                    } else {
                        options.push(
                            <div
                                key={index + "_option_" + this.props.item.id}
                                className="col-md-4  col-sm-12 text-center">
                                <label className="lbl-id">
                                    <strong>{parseInt(index) + 1})</strong>

                                    {option}
                                </label>

                            </div>
                        )

                    }

                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return (
                <div className="row resp-reg">
                    {options}
                </div>
            );
        }

    }

    render() {
        return (
            <div className="reg-preg">
                {(this.props.simulation)?(""):(<input
                    type="checkbox"
                    value={this.props.item.id}
                    checked={this.props.checked}
                    onClick={this.props.onDelete}
                    className="check-preg"/>)}
                
                <strong>
                    {this.props.prefijo + " "}</strong>
                {this.props.castJsonPregunta[0].question}<br/>
                <small >{this.props.item.nota}</small>
                {this.renderOption()}
                {this.renderLinkedQuestions()}
            </div>
        )
    }
}
class PanelPreguntas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinerLoad: true
        }
        this.state.listDetele = [];
        this.onDelete = this
            .onDelete
            .bind(this);
    }

    onDelete(e) {
        var id = parseInt(e.target.value);
        var ischecked = e.target.checked
        var lista = this.state.listDetele;
        var index = lista.indexOf(id);
        //No esta en la lista  y esta activo-> agregar
        if (index == -1 && ischecked == true) {
            lista.push(id)
            this.setState({listDetele: lista})
        }
        //Esta en la lista  y no esta activo-> eliminar
        if (index != -1 && ischecked == false) {
            lista.splice(index, 1);
            this.setState({listDetele: lista})
        }
    }
    deleteAll(e) {
        this.setState({checkedAll: true});
    }
    renderReactivos() {
        var modulo = this.props.modulo;
        if (modulo == undefined) {
            return (
                <div className="spinner" key={"spinerModulo "+this.props.modulo.id}></div>
            )
        }
        if (modulo && modulo.reactivos && modulo.reactivos.length > 0) {
            var lista = modulo.reactivos
            var listaRender = []
            for (var key in lista) {
                var listaDelete = this.state.listDetele;
                var preguntaJson = lista[key].dataJson
                var id = lista[key].id;
                var prefijopregunta = modulo.prefijo + (parseInt(key) + 1);
                var checkedItem = (listaDelete.indexOf(id) != -1);
                if (preguntaJson != "") {
                    try {
                        var preguntaJsonTrim = preguntaJson.trim()
                        var preguntaJsonTrimS = preguntaJsonTrim.split("\n");
                        var preguntaDef = preguntaJsonTrimS;
                        var castJsonPregunta = JSON.parse(preguntaDef);
                        var pregunta = (
                            <QuestionManager
                                simulation={this.props.simulation}
                                key={lista[key].id}
                                item={lista[key]}
                                checked={checkedItem}
                                prefijo={prefijopregunta}
                                onDelete={this.onDelete}
                                castJsonPregunta={castJsonPregunta}>
                               
                            </QuestionManager>
                        )
                        listaRender.push(pregunta);
                    } catch (ex) {
                        console.log(ex)
                        alerta("301->Panel preguntas")
                    }

                }

            }
            return (
                <div >{listaRender}</div>
            )
        }
        if (modulo && modulo.reactivos == "") {
            return (
                <div >Sin preguntas</div>
            )
        }
    }
    handleChecks() {
        this.setState({checkedAll: true});
    }

    render() {

        return (
            <div >
                <div className="row">
                    {/* <div className="col-md-6">
                        <input type="checkbox" onChange={this.handleChecks.bind(this)} className="check-preg"/>Seleccionar todas
                    </div> */}
                    {(this.props.simulation)
                        ? ("")
                        : (
                            <div className="col-md-12 col-sm-12 text-right">
                                <a
                                    onClick={() => {
                                    this
                                        .props
                                        .deleteSelected(this.state.listDetele)
                                }}><img src="../../../images/erase-gray.svg" height="18"/>
                                    Eliminar preguntas seleccionadas</a>
                            </div>
                        )}

                </div>
                <div
                    className={(this.props.simulation)
                    ? ""
                    : "cont-reg-preg"}>
                    {this.renderReactivos()}
                </div>
                {(this.props.simulation)
                    ? ("")
                    : (
                        <div>
                            <label className="lbl-id">
                                <div className="id-preg relacionada"></div>Respueta relacionada</label>
                            <label className="lbl-id">
                                <div className="id-preg "></div>@TEXTO</label>
                            <label className="lbl-id">
                                <div className="id-preg "></div>@FECHA</label>
                            <label className="lbl-id">
                                <div className="id-preg "></div>@HORA</label>
                        </div>
                    )}

            </div>
        )
    }
}
class Respuestas extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.r

    }
    handleInput(e) {
        //Maneja la respuesta
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "reactivo" || mask == "tipopregunta") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this
            .setState({
                respuesta: valor
            }, function () {
                var state = this.state;
                this
                    .props
                    .onChange(state)
            }.bind(this));

    }

    render() {
        return (
            <div className="col-md-12">
            <div className="reg-preg row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label className="label">Opción</label>
                        {(this.state.type == "checkbox" || this.state.type == "radio")
                            ? (
                                <div><input type={this.state.type}/><input
                                    type="text"
                                    name="respuesta"
                                    onChange={this
                                    .handleInput
                                    .bind(this)}
                                    value={this.state.respuesta}/></div>
                            )
                            : (<input
                                type={this.state.type}
                                name="respuesta"
                                onChange={this
                                .handleInput
                                .bind(this)}
                                value={this.state.respuesta}/>)
}

                    </div>

                </div>
            </div>
            </div>
        )

    }
}
class Pregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.q
    }
    componentWillReceiveProps(next_props) {

        this
        if (next_props.q && next_props.q.options) {
            this.setState({options: next_props.q.options});
        } else if (next_props.q) {
            this.setState({options: null});
        }

    }

    handleInput(e) {
        //Maneja la respuesta
        e.preventDefault();
        var valor = e.target.value
        var mask = e.target.name
        var valorTrim = valor.trim()
        this.setState({
            [mask]: valorTrim
        }, function () {
            this
                .props
                .onChange(this.state)
        }.bind(this));

    }

    handleRespuesta(e) {
        // this this.setState({respuestas:e}, function(){      this             .props
        // .onChange(state) })
    }

    render() {

        var listaRespuestas = (
            <div className="col-md-12">

                <div className="form-group">
                    <small>Respuesta abierta</small>
                </div>
            </div>
        );
        if (this.state && this.state.options) {

            listaRespuestas = this
                .state
                .options
                .map((item) => <Respuestas
                    key={item.option + "__lista_respuesta_"}
                    r={item}
                    onChange={this
                    .handleRespuesta
                    .bind(this)}/>);
        }

        return (

            <div >
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea
                            className="form-control pregunta"
                            name="question"
                            onChange={this
                            .handleInput
                            .bind(this)}
                            value={this.state.question}></textarea>
                    </div>
                </div>

                {listaRespuestas}
            </div>
        )
    }
}

class Preguntas extends FormMaster {
    constructor(props) {
        super(props);
        this.state = {
            "reactivo": 0,
            "tipopregunta": 0,
            "preguntaJson": [ABIERTA],
            "nota": ""
        }
    }

    handlePregunta(e) {
        var listaPreguntas = [e];
        this.setState({
            preguntaJson: listaPreguntas
        }, function () {
            var state = this.state;
            this
                .props
                .onChange(state)
        }.bind(this))

    }
    handleType(e) {
        e.preventDefault();

        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        valor = parseInt(valorAux);
        if (valor == 1) {
            this
                .setState({
                    preguntaJson: [MULTIPLE],
                    [mask]: valor
                }, function () {})
        } else {
            this.setState({preguntaJson: [ABIERTA], [mask]: valor})
        }

    }
    handleInput(e) {
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "reactivo" || mask == "tipopregunta") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }

        this
            .setState({
                [mask]: valor
            }, function () {

                var state = this.state;
                this
                    .props
                    .onChange(state)
            }.bind(this));

    }
    saveClose(e) {
        e.preventDefault();
        this
    }
    saveNext(e) {
        e.preventDefault();
        this
            .props
            .saveNext(this.state)
    }
    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleInput
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 ">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value={this.props.prefijoPregunta}/>
                    </div>
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleType
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <Pregunta
                        index={this.props.clean}
                        type={this.state.tipopregunta}
                        q={this.state.preguntaJson[0]}
                        onChange={this
                        .handlePregunta
                        .bind(this)}/>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea
                                value={this.state.nota}
                                name="nota"
                                placeholder="Escribe una nota."
                                onChange={this
                                .handleInput
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .saveNext
                            .bind(this)}>Agregar siguiente</button>
                    </div>
                    <div className="col-md-6">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .saveClose
                            .bind(this)}>Guardar y cerrar</button>
                    </div>

                </div>
            </div>
        )
    }
}

class Reactivos extends FormMaster {
    constructor(props) {
        super(props);
        this.state = {
            "reactivo": 0,
            "tipopregunta": 0,
            "preguntaJson": {},
            "nota": "Nota . . ."

        }

    }
     handleJson(dataJson) {
         this.setState({preguntaJson:dataJson}, function(){
            var state = this.state;
             this.props.onChange(state)  
         })
        

     }
    handleInput(e) {
        
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "reactivo" || mask == "tipopregunta") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this.setState({[mask]: valor},function(){
         
            var state = this.state;
             this.props.onChange(state)   
        }.bind(this));
        
    }

    render() {
        return (
            <div >
                <div className="row">
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleInput
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 ">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value="R2D2 1"/>
                    </div>
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleInput
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                       
                        {<Preguntas
                            tipoPregunta = {this.state.tipopregunta}
                            onChange={this
                            .handleJson
                            .bind(this)}/>}
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea value={this.state.nota} name="nota"
                                onChange={this
                                .handleInput
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
class Answer extends React.Component {
    
    render() {
        return (
            <div >

                <div className="col-md-8 col-sm-8">

                    <div className="form-group">
                        <span className="icon-trash" onClick={this.props.onDelete}></span>
                        <label className="label">Opción {parseInt(this.props.index) + 1}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="option"
                            onChange={this.props.onEdit}
                            value={this.props.option}
                            placeholder="Opción de respuesta"/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <label className="label">Relación</label>
                        <input
                            type="text"
                            name="condition"
                            onChange={this.props.onEdit}
                            value={this.props.condition}
                            className="form-control"
                            placeholder="Prefijo"/>
                    </div>
                </div>
            </div>

        )
    }
}

class LinkedPanelAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question
    }
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.question)
    }
    onEdit(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name
        var state = this.state;
        var listaOpciones = state.options;
        state.options[index][mask] = valor;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }
    onDelete(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var state = this.state;
        var listaOpciones = state.options;
        listaOpciones.splice(index, 1)
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }

    addOption(e) {
        e.preventDefault();
        this
        var state = this.state;
        var listaOpciones = []
        if (state.options) {
            listaOpciones = state.options;

        }
        var item = {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
        listaOpciones.push(item);
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }
    renderOption() {

        if (this.state.options) {
            var lista = this.state.options;
            var options = []
            for (var index in lista) {

                try {
                    options.push(<Answer
                        key={index + "option_anidada" + this.props.index}
                        {...lista[index]}
                        index={index}
                        onEdit={this
                        .onEdit
                        .bind(this, index)}
                        onDelete={this
                        .onDelete
                        .bind(this, index)}/>)
                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return options
        }

    }
     renderOptions() {
        return (
            <div>
                {this.renderOption()}
                <div className="col-md-12 text-right">
                    <h5>
                        <a
                            onClick={this
                            .addOption
                            .bind(this)}>Agregar opción<img src="../../../../images/add.svg"/></a>
                    </h5>
                </div>

            </div>
        )

    }
       render() {
        return (
            <div className="reg-preg row">
                {this.renderOptions()}
            </div>
        )
    }
}
class LinkedPanelQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.question
    }
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.question)
    }

    handleTextQuestion(e) {
        var valor = e.target.value
        var mask = e.target.name
        this.setState({
            [mask]: valor
        }, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });
    }
   
    onDelete(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var state = this.state;
        var listaOpciones = state.options;
        listaOpciones.splice(index, 1)
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }

    render() {
        return (
            <div className="reg-preg row">
                <div className="col-md-1">
                    <span className="icon-trash" onClick={this.props.onDelete}></span>

                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea
                            name="question"
                            value={this.state.question}
                            onChange={this
                            .handleTextQuestion
                            .bind(this)}
                            className="form-control pregunta"></textarea>
                    </div>
                </div>

            </div>
        )
    }
}
class LinkedGroupQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.question
    }
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.question)
    }

    handleTextQuestion(e) {
      
        var valor = e.target.value
        var mask = e.target.name
        this.setState({
            [mask]: valor
        }, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });
    }
    onEdit(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name
        var state = this.state;
        var listaOpciones = state.options;
        state.options[index][mask] = valor;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }
    onDelete(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var state = this.state;
        var listaOpciones = state.options;
        listaOpciones.splice(index, 1)
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }

    addOption(e) {
        e.preventDefault();
        this
        var state = this.state;
        var listaOpciones = []
        if (state.options) {
            listaOpciones = state.options;

        }
        var item = {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
        listaOpciones.push(item);
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }
    renderOption() {

        if (this.state.options) {
            var lista = this.state.options;
            var options = []
            for (var index in lista) {

                try {
                    options.push(<Answer
                        key={index + "option_anidada" + this.props.index}
                        {...lista[index]}
                        index={index}
                        onEdit={this
                        .onEdit
                        .bind(this, index)}
                        onDelete={this
                        .onDelete
                        .bind(this, index)}/>)
                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return options
        }

    }
    renderOptions() {
        return (
            <div>
                {this.renderOption()}
                <div className="col-md-12 text-right">
                    <h5>
                        <a
                            onClick={this
                            .addOption
                            .bind(this)}>Agregar opción<img src="../../../../images/add.svg"/></a>
                    </h5>
                </div>

            </div>
        )

    }

    render() {
        return (
            <div className="reg-preg row">
                <div className="col-md-1">
                    <span className="icon-trash" onClick={this.props.onDelete}></span>

                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Para</label>
                        <input
                            name="onlyTo"
                            value={this.state.onlyTo}
                            onChange={this
                            .handleTextQuestion
                            .bind(this)}
                            className="form-control pregunta"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea
                            name="question"
                            value={this.state.question}
                            onChange={this
                            .handleTextQuestion
                            .bind(this)}
                            className="form-control pregunta"></textarea>
                    </div>
                </div>

                {this.renderOptions()}
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Nota</label>
                        <textarea
                            name="nota"
                            value={this.state.nota}
                            onChange={this
                            .handleTextQuestion
                            .bind(this)}
                            className="form-control pregunta"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
class LinkedQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.question
    }
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.question)
    }

    handleTextQuestion(e) {
        var valor = e.target.value
        var mask = e.target.name
        this.setState({
            [mask]: valor
        }, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });
    }
    onEdit(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name
        var state = this.state;
        var listaOpciones = state.options;
        state.options[index][mask] = valor;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }
    onDelete(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var state = this.state;
        var listaOpciones = state.options;
        listaOpciones.splice(index, 1)
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }

    addOption(e) {
        e.preventDefault();
        this
        var state = this.state;
        var listaOpciones = []
        if (state.options) {
            listaOpciones = state.options;

        }
        var item = {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
        listaOpciones.push(item);
        state.options = listaOpciones;
        this.setState(state, () => {
            this
                .props
                .handleLinkQueston(this.state)
        });

    }
    renderOption() {

        if (this.state.options) {
            var lista = this.state.options;
            var options = []
            for (var index in lista) {

                try {
                    options.push(<Answer
                        key={index + "option_anidada" + this.props.index}
                        {...lista[index]}
                        index={index}
                        onEdit={this
                        .onEdit
                        .bind(this, index)}
                        onDelete={this
                        .onDelete
                        .bind(this, index)}/>)
                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return options
        }

    }
    renderOptions() {
        return (
            <div>
                {this.renderOption()}
                <div className="col-md-12 text-right">
                    <h5>
                        <a
                            onClick={this
                            .addOption
                            .bind(this)}>Agregar opción<img src="../../../../images/add.svg"/></a>
                    </h5>
                </div>

            </div>
        )

    }

    render() {
        return (
            <div className="reg-preg row">
                <div className="col-md-1">
                    <span className="icon-trash" onClick={this.props.onDelete}></span>

                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea
                            name="question"
                            value={this.state.question}
                            onChange={this
                            .handleTextQuestion
                            .bind(this)}
                            className="form-control pregunta"></textarea>
                    </div>
                </div>

                {this.renderOptions()}
            </div>
        )
    }
}
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactivo: 0,
            tipopregunta: 0,
            preguntaJson: _ABIERTA,
            nota: "",
            checkUnique: true
        }
    }

    renderStatus() {
        return (STATUS.map(function (i) {
            return (
                <option key={i.id + "_status_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderPersonas() {
        return (PERSONAS.map(function (i) {
            return (
                <option key={i.id + "_person_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoPregunta() {
        return (TIPOPREGUNTAS.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoReativo() {
        return (TIPOREACTIVO.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }

    componentWillUnmount() {

        this.setState({reactivo: 0, tipopregunta: 0, preguntaJson: _ABIERTA, nota: ""});
    }
    handleReactivoType(e) {

        var valor = parseInt(e.target.value)
        var mask = e.target.name
        this.setState({[mask]: valor});
    }
    handleQuestionType(e) {
        var valor = parseInt(e.target.value)
        var mask = e.target.name
        var valor;
        switch (valor) {
            case 0:
                var jsonQ = {
                    "question": '',
                    "answer": 'undefined'
                };
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;
            case 1:
                var jsonQ = {
                    "question": '',
                    "options": [
                        {
                            "option": "",
                            "condition": '',
                            "type": 'radio'
                        }
                    ],
                    "answer": 'undefined'
                }

                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;
            case 2:
                var jsonQ = {
                    "question": '',
                    "questions": [
                        {
                            "question": '',
                            "options": [
                                {
                                    "option": "",
                                    "condition": '',
                                    "type": 'radio'
                                }
                            ],
                            "answer": 'undefined'
                        }
                    ],
                    "answer": 'undefined'
                }
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;
                case 3:
                var jsonQ = {
                    "question": '',
                    "questions": [
                        {
                            "question": '',
                            "options": [
                                {
                                    "option": "",
                                    "condition": '',
                                    "type": 'radio'
                                }
                            ],
                            "answer": 'undefined'
                        }
                    ],
                    "answer": 'undefined'
                }
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                
                break;
            case 4:
                var jsonQ = {
                    "question": '',
                    "questions": [
                        {
                            "question": '',
                            "note":'',
                            "onlyTo":'',
                            "options": [
                                {
                                    "option": "",
                                    "condition": '',
                                    "type": 'radio'
                                }
                            ],
                            "answer": 'undefined'
                        }
                    ],
                    "repeat":1,
                    "answer": 'undefined'
                }
                this.setState({preguntaJson: jsonQ, tipopregunta: valor});
                break;

            default:
                break;
        }

    }
    handleTextQuestion(e) {
        var valor = e.target.value
        var mask = e.target.name
        var question = this.state.preguntaJson
        question.question = valor;
        this.setState({[mask]: question});

    }
    handleText(e) {
        var valor = e.target.value
        var mask = e.target.name

        this.setState({[mask]: valor});

    }
    saveClose(e) {
        e.preventDefault();
        this
    }
    saveNext(e) {
        e.preventDefault();
        this
            .props
            .saveNext(this.state)
    }
    onEdit(i, e) {
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name
        var question = this.state.preguntaJson;
        var listaOpciones = question.options;
        question.options[index][mask] = valor;
        this.setState({preguntaJson: question})

    }
    onDelete(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var question = this.state.preguntaJson;
        var listaOpciones = question.options;
        listaOpciones.splice(index, 1)
        question.options = listaOpciones;
        this.setState({preguntaJson: question})

    }
    onDeleteIndexed(i, e) {
        e.preventDefault()
        var index = parseInt(i)
        var question = this.state.preguntaJson;
        var listaOpciones = question.questions;
        listaOpciones.splice(index, 1)
        question.questions = listaOpciones;
        this.setState({preguntaJson: question})

    }
    //##move to other
    renderOption() {

        if (this.state.preguntaJson && this.state.preguntaJson.options) {
            var lista = this.state.preguntaJson.options;
            var options = []
            for (var index in lista) {
                var item = lista[index].option;
                try {
                    options.push(<Answer
                        key={index + "option"}
                        {...lista[index]}
                        index={index}
                        onEdit={this
                        .onEdit
                        .bind(this, index)}
                        onDelete={this
                        .onDelete
                        .bind(this, index)}/>)
                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return options
        }

    }
    //Move other
    addOption(e) {
        e.preventDefault();
        var question = this.state.preguntaJson;
        var listaOpciones = question.options;
        var item = {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
        listaOpciones.push(item);
        question.options = listaOpciones;
        this.setState({preguntaJson: question, render: false})

    }
    handleChecUnique(e) {
        var ischecked = e.target.checked
        //Handle option types
        var typeHandle = (ischecked)
            ? "radio"
            : "checkbox";
        var question = this.state.preguntaJson;
        var opciones = question.options;
        opciones.map((i, index) => {
            opciones[index].type = typeHandle
        })
        question.options = opciones;
        this.setState({preguntaJson: question, render: false})
        this.setState({checkUnique: ischecked})

    }
    //## Move other
    renderOptions() {
        if (this.state.tipopregunta == 1) {

            return (
                <div>
                    {this.renderOption()}
                    <div className="col-md-6">
                        {(this.state.preguntaJson && this.state.preguntaJson && this.state.preguntaJson.options && this.state.preguntaJson.options.length > 1)
                            ? (
                                <span><input
                                    type="checkbox"
                                    checked={this.state.checkUnique}
                                    onClick={this
                                    .handleChecUnique
                                    .bind(this)}
                                    className="check-preg"/>Selección única</span>
                            )
                            : ""}

                    </div>
                    <div className="col-md-6 text-right">
                        <h5>
                            <a
                                onClick={this
                                .addOption
                                .bind(this)}>Agregar opción<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>

                </div>
            )

        }
    }

    addQuestionIndexed(e) {
        e.preventDefault()
        var list = this.state.preguntaJson.questions;
        var jsonQ = {
            "question": '',
            "questions": [
                {
                    "question": '',
                    "options": [
                        {
                            "option": "",
                            "condition": '',
                            "type": 'radio'
                        }
                    ],
                    "answer": 'undefined'
                }
            ],
            "answer": 'undefined'
        }
        list.push(jsonQ);
        var stateJson = this.state.preguntaJson;
        stateJson.questions = list;
        this.setState({preguntaJson: stateJson})
    }
    handleLinkQueston(index, question) {
        var preguntaJson = this.state.preguntaJson
        preguntaJson.questions[index] = question
        this.setState({preguntaJson});

    }
    handleLinkPanelQueston(question) {
       
        var preguntaJson = this.state.preguntaJson
        preguntaJson.questions.map((item,index)=>{
            preguntaJson.questions[index].options = question.options;
        })
        this.setState({preguntaJson});

    }
    
 renderAnidadaGroup() {

        if ( this.state.tipopregunta == 4 && this.state.preguntaJson.questions) {
            var listChildrens = [];
            try {
                this
                    .state
                    .preguntaJson
                    .questions
                    .map((index, i) => {
                        listChildrens.push(<LinkedGroupQuestion
                            key={i}
                            index={i}
                            question={index}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this, i)}
                            handleLinkQueston={this
                            .handleLinkQueston
                            .bind(this, i)}/>)
                    })

            } catch (error) {
                alert("Code:qr502")
            }

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        {listChildrens}
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>

                            <a
                                onClick={this
                                .addQuestionIndexed
                                .bind(this)}>Nueva pregunta<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    renderAnidada() {

        if ((this.state.tipopregunta == 2  )&& this.state.preguntaJson.questions) {
            var listChildrens = [];
            try {
                this
                    .state
                    .preguntaJson
                    .questions
                    .map((index, i) => {
                        listChildrens.push(<LinkedQuestion
                            key={i}
                            index={i}
                            question={index}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this, i)}
                            handleLinkQueston={this
                            .handleLinkQueston
                            .bind(this, i)}/>)
                    })

            } catch (error) {
                alert("Code:qr502")
            }

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        {listChildrens}
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>

                            <a
                                onClick={this
                                .addQuestionIndexed
                                .bind(this)}>Nueva pregunta<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    renderAnidadaMultiple(){
        if(this.state.tipopregunta == 3 &&this.state.preguntaJson.questions){
            var listQuestions
             var listChildrens = [];
             var listChildrensOptions = [];
            try {
                this
                    .state
                    .preguntaJson
                    .questions
                    .map((index, i) => {
                        listChildrens.push(<LinkedPanelQuestion
                            key={i}
                            index={i}
                            question={index}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this, i)}
                            handleLinkQueston={this
                            .handleLinkQueston
                            .bind(this, i)}/>)
                    })

            } catch (error) {
                alert("Code:QR502")
            }

            try {
                var optionsDefaultFirstQuestion = this.state.preguntaJson.questions[0];
                listChildrensOptions.push(
                    <LinkedPanelAnswer
                            question={optionsDefaultFirstQuestion}
                            onDelete={this
                            .onDeleteIndexed
                            .bind(this)}
                            handleLinkQueston={this
                            .handleLinkPanelQueston
                            .bind(this)}/>)

            } catch (error) {
                alert("Code:QRA502")
            }

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        {listChildrens}
                        {listChildrensOptions}
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>

                            <a
                                onClick={this
                                .addQuestionIndexed
                                .bind(this)}>Nueva pregunta<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleReactivoType
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value={this.props.prefijoPregunta}/>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleQuestionType
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Pregunta</label>
                            <textarea
                                className="form-control pregunta"
                                name="preguntaJson"
                                onChange={this
                                .handleTextQuestion
                                .bind(this)}></textarea>
                        </div>
                    </div>

                    {this.renderOptions()}
                    {this.renderAnidada()}
                    {this.renderAnidadaGroup()}
                    {this.renderAnidadaMultiple()}
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea
                                value={this.state.nota}
                                name="nota"
                                placeholder="Escribe una nota."
                                onChange={this
                                .handleText
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .saveNext
                            .bind(this)}>Guardar</button>
                    </div>

                </div>
            </div>

        )
    }
}
class Modulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinerLoad: true,
            modulo: {}

        }
        this._getReactivos()

    }
    _getReactivos() {
        getModuloById(this.props.id, (response) => {
            if (response.data && response.data.d[0]) {
                var respRequest = response.data.d[0]
                try {
                    var castJsonReactivosAux = respRequest.reactivos
                    var reactivos = JSON.parse(castJsonReactivosAux);
                    respRequest.reactivos = reactivos;
                } catch (e) {}
                this.setState({modulo: respRequest, spinerLoad: false})
            }

        })

    }
    deleteSelected(list) {
        this.setState({spinerLoad: true})
        list.map(function (id) {

            var couter = 0;
            var params = {
                id: id
            }
            const url = URLUKA+"/Miembros/IN/Admin/AdminIN.aspx/deleteReactivo";
            axios
                .post(url, params)
                .then(function (response) {
                    this.setState({spinerLoad: true})
                    if (response && response.status == 200) {
                        this._getReactivos()
                    }
                }.bind(this))
                .catch(function (error) {
                    alert("No se pudo eliminar el  reactivo")
                });
        }.bind(this));
    }
    saveNext(question) {
        this.setState({spinerLoad: true})
        var obj = [question.preguntaJson]
        var data = JSON.stringify(obj)
        var item = {}
        item.id = -1;
        item.id_instrumento = parseInt(this.state.modulo.id_instrumento);
        item.id_modulo = parseInt(this.state.modulo.id);
        item.dataJson = data //;
        item.tipopregunta = question.tipopregunta;
        item.nota = question.nota;
        item.estilo = "l";
        item.estado = parseInt(0);
        item.orden = 0;
        var params = item;
        const url = URLUKA+"/Miembros/IN/Admin/AdminIN.aspx/saveReactivos";
        axios
            .post(url, params)
            .then(function (response) {
                if (response && response.status == 200) {
                    this._getReactivos()
                }
            }.bind(this))
            .catch(function (error) {
                alert("No se pudo guardar el  reactivo")
            });

    }
    saveClose(e) {}
    render() {
        if (this.state.spinerLoad == true) {
            return (
                <div className="container">
                    <div className="spinner" key={"spinnerModulo" + this.state.modulo.id}></div>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <strong>{(this.state.modulo && this.state.modulo.modulo)
                                    ? (this.state.modulo.prefijo + "-" + this.state.modulo.modulo)
                                    : ""}</strong>
                        </div>
                    </div>
                </div>
                {(this.props.simulation)
                    ? (
                        <div className="container">
                            <div className="col-md-12 col-sm-12">
                                <PanelPreguntas
                                    simulation={this.props.simulation}
                                    modulo={this.state.modulo}
                                    deleteSelected={this
                                    .deleteSelected
                                    .bind(this)}/>
                            </div>
                        </div>
                    )
                    : (

                        <div className="container">
                            {(this.state.modulo && this.state.modulo.reactivos)
                                ? (
                                    <div>
                                        <div className="col-md-5  col-sm-12 pregunta-div">
                                            <Question
                                                prefijoPregunta={this.state.modulo.prefijo + "." + (this.state.modulo.reactivos.length + 1)}
                                                saveClose={this
                                                .saveClose
                                                .bind(this)}
                                                saveNext={this
                                                .saveNext
                                                .bind(this)}/>
                                        </div>
                                        <div className="col-md-7 col-sm-12">
                                            <PanelPreguntas
                                                modulo={this.state.modulo}
                                                deleteSelected={this
                                                .deleteSelected
                                                .bind(this)}/>
                                        </div>
                                    </div>
                                )
                                : ("")}

                        </div>
                    )}

            </div>
        )
    }
}

class ModalModulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            modulo: "",
            prefijo: "",
            leyenda: "",
            estado: 1,
            orden: 0,
            id_instrumento: (this.props.instrumentoId)?this.props.instrumentoId:0,
            estadoId: "",
            municipioId: "",
            comunidadId: "",
            grupoId: "",
            listaGruposSelected: [],
            loading: false
        }
        getEstados("vacio", (response) => {

            if (response && response.data && response.data.d) {
                this.setState({listaEstados: response.data.d})
            }
        })

    }
    componentWillReceiveProps(nexProps) {
        var id = nexProps.moduloId;
        if(id!=undefined && nexProps.show==true && nexProps.instrumentoId==undefined){
           
            getModuloById(id, (response)=>{
                if (id && response.data.d[0]) {
                    const {modulo,id, id_instrumento,state,orden,prefijo,grupos} = response.data.d[0]

                    this.setState( {modulo,id, id_instrumento,state,orden,prefijo,grupos})
                }

            })
        }

        
       /*
        var props = nexProps
        if (props.id && props.show == true && nexProps.id_instrumento) {
            var state = {
                id: -1,
                modulo: "",
                prefijo: "",
                leyenda: "",
                estado: 1,
                orden: 0,
                id_instrumento: nexProps.instrumentoId,
                estadoId: "",
                municipioId: "",
                comunidadId: "",
                grupoId: "",
                listaGruposSelected: [],
                loading: false
            }
            this.setState(state)
           
            getInstrumentoById(props.id, (response) => {
                if (response && response.data && response.data.d[0]) {
                    var {
                        nombre,
                        prefijo,
                        subtitulo,
                        estado,
                        orden,
                        aplicado,
                        id,
                        estadoId,
                        municipioId,
                        comunidadId,
                        grupoId
                    } = response.data.d[0];
                    var listaGruposSelected = []
                    this.setState({
                        nombre,
                        prefijo,
                        subtitulo,
                        estado,
                        orden,
                        aplicado,
                        id,
                        estadoId,
                        municipioId,
                        comunidadId,
                        grupoId
                    })
                    try {
                        if (response.data.d[0].grupos != "") {
                            listaGruposSelected = JSON.parse(response.data.d[0].grupos);
                            this.setState({listaGruposSelected})
                        }
                    } catch (error) {}
                }
            })
        }
        */

    }

    renderStatus() {
        return (STATUS.map(function (i) {
            return (
                <option key={i.id + "_status_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderPersonas() {
        return (PERSONAS.map(function (i) {
            return (
                <option key={i.id + "_person_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoPregunta() {
        return (TIPOPREGUNTAS.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoReativo() {
        return (TIPOREACTIVO.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }

    handleInput(e) {
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "aplicado" || mask == "estado") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this.setState({
            [mask]: valor
        }, () => {
            this.validar(this.state)
        });
        switch (mask) {
            case "estadoId":
                this.setState({municipioId: "", comunidadId: "", grupoId: ""});
                getMunicipios(valor, (response) => {
                    if (response && response.data && response.data.d) {
                        this.setState({listaMunicipios: response.data.d})
                    }
                });
                break;
            case "municipioId":
                getComunidades(valor, (response) => {
                    if (response && response.data && response.data.d) {
                        this.setState({listaComunidades: response.data.d})
                    }
                });
                break;
            case "comunidadId":

                getGrupos(valor, (response) => {

                    if (response && response.data && response.data.d) {
                        this.setState({listaGrupos: response.data.d})
                    }
                });
                break;
            case "grupoId":

                break;

            default:
                break;
        }

    }

    renderGrupos() {
        if (this.state && this.state.listaGrupos) {
            const lista = this.state.listaGrupos;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdGrupo}>{item.NombreGrupo}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    renderComunidades() {
        if (this.state && this.state.listaComunidades) {
            const lista = this.state.listaComunidades;
            return lista.map((item, i) => <option key={i + "comunidad_select"} value={item.IdComunidad}>{item.NombreComunidad}</option>)
        }
        return <option value="">Seleccione</option>;
    }
    renderMunicipios() {
        if (this.state && this.state.listaMunicipios) {
            const lista = this.state.listaMunicipios;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdMunicipios}>{item.NombreMunicipio}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    renderEstados() {
        if (this.state && this.state.listaEstados) {
            const lista = this.state.listaEstados;
            return lista.map((item, i) => <option key={i + "estado_select"} value={item.IdEstado}>{item.NombreEstado}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    addGrupo = (e) => {
        e.preventDefault();
        var {listaGrupos, grupoId, listaGruposSelected} = this.state;
        var item = listaGrupos.find(x => x.IdGrupo == grupoId);
        if (item.IdGrupo && item.NombreGrupo) {
            if (listaGruposSelected.length != 0) {
                var exist = listaGruposSelected.findIndex(x => x.IdGrupo.toUpperCase() == grupoId.toUpperCase());
                if (exist == -1) {
                    listaGruposSelected.push({IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo});
                    this.setState({listaGruposSelected: listaGruposSelected, grupoId: ""})
                }
            } else if (listaGruposSelected.length == 0) {
                listaGruposSelected.push({IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo});
                this.setState({listaGruposSelected: listaGruposSelected, grupoId: ""})
            }
        }
    }
    validar(state) {
        var errors = {}
        var isValid = true
        if (state.nombre == "") {
            errors.nombre = "Falta por poner el nombre del instrumento";
            isValid = false
        }
        this.setState({loading: false, errors: errors, id_instrumento:this.props.instrumentoId})
        return isValid
    }
    save = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        var state = this.state
        state.grupos = state
            .listaGruposSelected
            .map(g => g.IdGrupo);
        if (this.validar(state)) {
            saveModulo(state, (response) => {
                window.location.href = "#/admin/instrumentos";
            })
        }
    }
    goInstrumentos = (e) => {
        e.preventDefault();
        this.setState(this.state.init)
        window.location.href = "#/admin/instrumentos";
    }
    render() {
        var listagruposRender = [];
        const {listaGruposSelected} = this.state
        if (listaGruposSelected && listaGruposSelected.length > 0) {
            listaGruposSelected.map((item, i) => {
                listagruposRender.push(
                    <div className="col-md-12">
                        <a key={i + "listagrupos_instrumentos"}>{item.NombreGrupo}</a>
                    </div>
                )
            })
        }
        const {errors} = this.state;
        return (
            <Modal show={this.props.show} dialogClassName="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.goInstrumentos}>
                            <span >×</span>
                        </button>
                        <h4 className="modal-title">{this.props.title}</h4>
                    </div>
                    <Modal.Body>
                    <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Nombre del  módulo</label>
                                    <input
                                        className="form-control"
                                        placeholder="Ej. módulo A"
                                        type="text"
                                        name="modulo"
                                        value={this.state.modulo}
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/> {(errors && errors.nombre != "")
                                        ? (
                                            <span className="errorMsg">{errors.nombre}</span>
                                        )
                                        : ("")}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Prefijo</label>
                                    <input
                                        className="form-control"
                                        placeholder="Ej. IA"
                                        type="text"
                                        name="prefijo"
                                        value={this.state.prefijo}
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label">Estado</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estadoId}
                                        name="estadoId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_estado_select"} value={""}>{"Selecciona"}</option>
                                        {this.renderEstados()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Municipio</label>
                                    <select
                                        className="form-control"
                                        value={this.state.municipioId}
                                        name="municipioId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_Muni_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderMunicipios()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Comunidad</label>
                                    <select
                                        className="form-control"
                                        value={this.state.comunidadId}
                                        name="comunidadId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_comunidad_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderComunidades()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Grupo</label>
                                    <select
                                        className="form-control"
                                        value={this.state.grupoId}
                                        name="grupoId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_grupo_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderGrupos()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                {(this.state.grupoId != "")
                                    ? (
                                        <div >
                                            <Button bsSize="xsmall" onClick={this.addGrupo}>+ Agregar grupo</Button>
                                        </div>
                                    )
                                    : (undefined)}
                            </div>
                            <div className="col-md-12">
                                lista de grupos {listagruposRender}
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Estado del instrumento:</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estado}
                                        name="estado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderStatus()}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        {(this.state.loading)
                            ? (
                                <div className="spinnerFixed" key={"spinnerInstrumentomodal_"}></div>
                            )
                            : (
                                <div>
                                    <button className="btn btn-default" onClick={this.goInstrumentos}>Cancelar</button >
                                    <button className="btn btn-primary" onClick={this.save}>Aceptar</button>
                                </div>
                            )}

                    </Modal.Footer>

                </div>

            </Modal>
        )
    }
}

class ModalInstrumento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            prefijo: "",
            subtitulo: "",
            estado: 1,
            orden: 0,
            aplicado: 0,
            id: -1,
            estadoId: "",
            municipioId: "",
            comunidadId: "",
            grupoId: "",
            listaGruposSelected: [],
            loading:false,
          
        }
        getEstados("vacio", (response) => {

            if (response && response.data && response.data.d) {
                this.setState({listaEstados: response.data.d})
            }
        })

    }
    componentWillReceiveProps(nexProps){
        var props = nexProps
        if(props.id && props.show==true){
            var state = {
                nombre: "",
                prefijo: "",
                subtitulo: "",
                estado: 1,
                orden: 0,
                aplicado: 0,
                id: -1,
                estadoId: "",
                municipioId: "",
                comunidadId: "",
                grupoId: "",
                listaGruposSelected: [],
                loading:false,
              
            }
            this.setState(state)
            getInstrumentoById(props.id,(response)=>{
                if (response && response.data && response.data.d[0]) {
                    var {nombre,prefijo,subtitulo,estado,orden,aplicado,id,estadoId,municipioId,comunidadId,grupoId} = response.data.d[0];
                    var listaGruposSelected = []
                    this.setState({nombre,prefijo,subtitulo,estado,orden,aplicado,id,estadoId,municipioId,comunidadId,grupoId})
                    try {
                        if(response.data.d[0].grupos!="" ){
                            listaGruposSelected=  JSON.parse(response.data.d[0].grupos);
                            this.setState({listaGruposSelected})
                        }
                    } catch (error) {
                    }
                }
            })
        }

    }
  
    renderStatus() {
        return (STATUS.map(function (i) {
            return (
                <option key={i.id + "_status_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderPersonas() {
        return (PERSONAS.map(function (i) {
            return (
                <option key={i.id + "_person_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }

    handleInput(e) {
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "aplicado" || mask == "estado") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this.setState({[mask]: valor}, ()=>{
            this.validar(this.state)
        });
        switch (mask) {
            case "estadoId":
                this.setState({municipioId: "", comunidadId: "", grupoId: ""});
                getMunicipios(valor, (response) => {
                    if (response && response.data && response.data.d) {
                        this.setState({listaMunicipios: response.data.d})
                    }
                });
                break;
            case "municipioId":
                getComunidades(valor, (response) => {
                    if (response && response.data && response.data.d) {
                        this.setState({listaComunidades: response.data.d})
                    }
                });
                break;
            case "comunidadId":

                getGrupos(valor, (response) => {

                    if (response && response.data && response.data.d) {
                        this.setState({listaGrupos: response.data.d})
                    }
                });
                break;
            case "grupoId":

                break;

            default:
                break;
        }

    }
   
    renderGrupos() {
        if (this.state && this.state.listaGrupos) {
            const lista = this.state.listaGrupos;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdGrupo}>{item.NombreGrupo}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    renderComunidades() {
        if (this.state && this.state.listaComunidades) {
            const lista = this.state.listaComunidades;
            return lista.map((item, i) => <option key={i + "comunidad_select"} value={item.IdComunidad}>{item.NombreComunidad}</option>)
        }
        return <option value="">Seleccione</option>;
    }
    renderMunicipios() {
        if (this.state && this.state.listaMunicipios) {
            const lista = this.state.listaMunicipios;
            return lista.map((item, i) => <option key={i + "municiipo_select"} value={item.IdMunicipios}>{item.NombreMunicipio}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    renderEstados() {
        if (this.state && this.state.listaEstados) {
            const lista = this.state.listaEstados;
            return lista.map((item, i) => <option key={i + "estado_select"} value={item.IdEstado}>{item.NombreEstado}</option>)

        }
        return <option value="">Seleccione</option>;
    }
    addGrupo = (e) => {
        e.preventDefault();
        var {listaGrupos, grupoId, listaGruposSelected} = this.state;
        var item = listaGrupos.find(x => x.IdGrupo == grupoId);
        if (item.IdGrupo && item.NombreGrupo) {
            if (listaGruposSelected.length != 0) {
                var exist = listaGruposSelected.findIndex(x => x.IdGrupo.toUpperCase() == grupoId.toUpperCase());
                if (exist == -1) {
                    listaGruposSelected.push({IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo});
                    this.setState({listaGruposSelected: listaGruposSelected, grupoId: ""})
                }

            } else if (listaGruposSelected.length == 0) {
                listaGruposSelected.push({IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo});
                this.setState({listaGruposSelected: listaGruposSelected, grupoId: ""})
            }
        }

    }
    validar(state){
        var errors = {}
        var isValid = true
        if(state.nombre==""){
            errors.nombre ="Falta por poner el nombre del instrumento";
            isValid = false
        }
        this.setState({loading:false, errors:errors})
       return isValid
    }
    save = (e) => {
        e.preventDefault();
        this.setState({loading:true})
        var state = this.state
        state.grupos = state.listaGruposSelected.map(g => g.IdGrupo);
        if(this.validar(state)){
            saveInstrumento (state, (response)=> {
                this.setState(this.state.init)
                window.location.href = "#/admin/instrumentos";
                
            })
        }

      

    }
    goInstrumentos = (e) => {
        e.preventDefault();
        this.setState(this.state.init)
        window.location.href = "#/admin/instrumentos";
    }

    render() {
        var listagruposRender = [];
        const {listaGruposSelected} = this.state
        if (listaGruposSelected && listaGruposSelected.length > 0) {
            listaGruposSelected.map((item, i) => {
                listagruposRender.push(
                    <div className="col-md-12">
                        <a key={i + "listagrupos_instrumentos"}>{item.NombreGrupo}</a>
                    </div>
                )

            })

        }
        const {errors}= this.state;
        return (
            <Modal show={this.props.show} dialogClassName="modal-dialog modal-md">

                <div className="modal-content">

                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            onClick={this.goInstrumentos}
                            >
                            <span >×</span>
                        </button>
                        <h4 className="modal-title"> {this.props.title}</h4>
                    </div>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Nombre</label>

                                    <input
                                        className="form-control"
                                        placeholder="Ej. intrumento A"
                                        type="text"
                                        name="nombre"
                                        value={this.state.nombre}
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                        {(errors && errors.nombre!="")?(<span className="errorMsg">{errors.nombre}</span>):("")}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Subtítulo</label>

                                    <input
                                        className="form-control"
                                        type="text"
                                        value={this.state.subtitulo}
                                        placeholder="Ej. Niños con sobrepeso"
                                        name="subtitulo"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Aplica a:</label>
                                    <select
                                        className="form-control"
                                        value={this.state.aplicado}
                                        name="aplicado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        {this.renderPersonas()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label">Estado</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estadoId}
                                        name="estadoId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_estado_select"} value={""}>{"Selecciona"}</option>

                                        {this.renderEstados()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Municipio</label>
                                    <select
                                        className="form-control"
                                        value={this.state.municipioId}
                                        name="municipioId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_Muni_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderMunicipios()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Comunidad</label>
                                    <select
                                        className="form-control"
                                        value={this.state.comunidadId}
                                        name="comunidadId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_comunidad_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderComunidades()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Grupo</label>
                                    <select
                                        className="form-control"
                                        value={this.state.grupoId}
                                        name="grupoId"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>
                                        <option key={0 + "init_grupo_select"} value={""}>{"Selecciona "}</option>
                                        {this.renderGrupos()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                {(this.state.grupoId != "")
                                    ? (
                                        <div >
                                           
                                                <Button bsSize="xsmall" onClick={this.addGrupo}>+ Agregar grupo</Button>

                                        </div>
                                    )
                                    : (undefined)}

                            </div>
                            <div className="col-md-12">
                                lista de grupos {listagruposRender}
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="label">Estado del instrumento:</label>
                                    <select
                                        className="form-control"
                                        value={this.state.estado}
                                        name="estado"
                                        onChange={this
                                        .handleInput
                                        .bind(this)}>

                                        {this.renderStatus()}
                                    </select>
                                </div>
                            </div>

                        </div>
                        </Modal.Body>
                    <Modal.Footer>
                                            {(this.state.loading)?( <div className="spinnerFixed" key={"spinnerInstrumentomodal_"}></div>):(<div><button className="btn btn-default" onClick={this.goInstrumentos}>Cancelar</button >
                        <button className="btn btn-primary" onClick={this.save}>Aceptar</button></div>)}
                   

                        
                        </Modal.Footer>

                </div>

            </Modal>
        )
    }
}

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


export class ModuloInRow extends  React.Component{
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

                                        <a href={"#/admin/instrumentos/modulos/editar/" + this.props.item.id}><img
                                            src="../../../images/edit.svg"
                                            alt="Editar nombre del módulo"
                                            height="18"/>
                                            Editar</a>
                                    </li>
                                    
                                   
                                    <li>
                                        <a href={"#/admin/instrumentos/modulos/eliminar/" + this.props.item.id}><img
                                            src="../../../images/erase-gray.svg"
                                            alt="Eliminar el módulo"
                                            height="18"/>
                                            Eliminar</a>
                                    </li>
                                     <li>
                                        <a href={"#/admin/instrumentos/modulos/"+this.props.item.id}
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

class Instrumento extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {isOpened:false }
        this.state.showModal = false
        this.state.showModalDelete = false
        
        var modulos = []
        try {
            modulos = JSON.parse(this.props.item.modulos)
        } catch (error) {}

        this.state.listaModulos = modulos

      

    
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.active && nextProps.item && nextProps.item.id==nextProps.active){
            this.setState({isOpened:true})
        }

    }
    renderModulos() {
        if (this.state.listaModulos.length > 0) {;
            var listItems = this
                .state
                .listaModulos
                .map((item) => <ModuloInRow
                   
                    key={item.id+"_lista_modulo_"}
                    item={item}/>);
            return listItems;
        }
        return (
            <h3>No cuenta con modulos</h3>
        )

    }

   
    render() {
        var isOpened = this.state.isOpened;
       
        

        return (
            <div className="panel panel-default">

              
                <div className="panel-heading">
                    <div className="row">
                        <div
                            className="panel-title long-txt col-md-4 col-sm-4"
                            onClick={() => (this.setState({
                            isOpened: !this.state.isOpened
                        }))}>
                            <a
                                className={(!this.state.isOpened)
                                ? "collapsed"
                                : ""}>
                                <span><img
                                    src={(isOpened)
                ? "../../../images/arrw-down.svg"
                : "../../../images/arrw-down.svg"}
                                    className="rotate2"/></span>
                                {`${this.props.item.nombre} / ${this.props.item.subtitulo} / ${this.props.item.prefijo}`}
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-3">{moment(this.props.item.fechaCreacion).format('MM/DD/YYYY, h:mm:ss')}</div>
                        <div className="col-md-2 col-sm-2 long-txt">{(this.props.item.aplicado)
                                ? PERSONAS[this.props.item.aplicado].data
                                : "No asigando"}</div>
                        <div className="col-md-2 col-sm-2 ">{(this.props.item.estado != null)
                                ? STATUS[this.props.item.estado].data
                                : "Sin estado"}</div>
                        <div className="col-md-1 col-sm-1 text-right">

                            <div className="dropdown">
                                <a data-toggle="dropdown">
                                    <img src="../../../images/menu.svg" alt="Acciones" height="28"/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li className="dropdown-header">Instrumento</li>
                                    <li>
                                        <a href={"#/admin/instrumentos/editar/" + this.props.item.id}><img src="../../../images/enable.svg" alt="Activar instrumento" height="18"/>
                                            Activar</a>
                                    </li>
                                    <li>
                                    <a href={"#/admin/instrumentos/editar/" + this.props.item.id}><img
                                            src="../../../images/edit.svg"
                                            alt="Editar  instrumento"
                                            height="18"/>
                                            Editar</a>
                                    </li>
                                    <li>
                                        <a href={"#/admin/instrumentos/eliminar/" + this.props.item.id}><img
                                            src="../../../images/erase-gray.svg"
                                            alt="Eliminar el instrumento"
                                            height="18"/>
                                            Eliminar</a>
                                    </li>
                                    <li className="dropdown-header">Modulo</li>
                                    <li>
                                        <a  href={"#/admin/instrumentos/modulos/nuevo/" + this.props.item.id}><img src="../../../images/add.svg" alt="Agregar módulo" height="18"/>
                                            Agregar módulo</a>
                                    </li>
                                    <li className="dropdown-header">Preguntas</li>
                                    <li>
                                        <a href={"#/instrumento/" + this.props.item.id}><img src="../../../images/add.svg" alt="Agregar pregunta" height="18"/>
                                            Agregar pregunta</a>
                                    </li>
                                    <li>
                                        <a href={"#/admin/instrumentos/simulacion/" + this.props.item.id}><img src="../../../images/enable.svg" alt="Visualizar instrumento" height="18"/>
                                            Visualizar</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="panel-collapse ">
                    <Collapse isOpened={isOpened}>

                        <div className="panel-body">

                            <div className="col-md-10 col-sm-10 modulos">
                                <div className="row header-modulos">
                                    <div className="col-md-4 col-sm-4">
                                        Nombre del módulo
                                    </div>
                                    <div className="col-md-2 col-sm-2 text-center">
                                        Prefijo
                                    </div>
                                    <div className="col-md-2 col-sm-2 text-center">
                                        Estado
                                    </div>
                                </div>
                                {this.renderModulos()}
                              
                            </div>

                        </div>

                    </Collapse>

                </div>

            </div>
        )

    }
}
class InstrumentoView extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {isOpened:false }
        this.state.showModal = false
        this.state.showModalDelete = false
        
        var modulos = []
        try {
            modulos = JSON.parse(this.props.item.modulos)
        } catch (error) {}

        this.state.listaModulos = modulos

      

    
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.active && nextProps.item && nextProps.item.id==nextProps.active){
            this.setState({isOpened:true})
        }

    }
    renderModulos() {
        if (this.state.listaModulos.length > 0) {;
            var listItems = this
                .state
                .listaModulos
                .map((item) => <ModuloInRow
                   
                    key={item.id+"_lista_modulo_"}
                    item={item}/>);
            return listItems;
        }
        return (
            <h3>No cuenta con modulos</h3>
        )

    }

   
    render() {
        var isOpened = this.state.isOpened;
       
        

        return (
            <div className="panel panel-default">

              
                <div className="panel-heading">
                    <div className="row">
                        <div
                            className="panel-title long-txt col-md-4 col-sm-4"
                            onClick={() => (this.setState({
                            isOpened: !this.state.isOpened
                        }))}>
                            <a
                                className={(!this.state.isOpened)
                                ? "collapsed"
                                : ""}>
                               
                                {`${this.props.item.nombre} / ${this.props.item.subtitulo} / ${this.props.item.prefijo}`}
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-3">{moment(this.props.item.fechaCreacion).format('MM/DD/YYYY, h:mm:ss')}</div>
                        <div className="col-md-2 col-sm-2 long-txt">{(this.props.item.aplicado)
                                ? PERSONAS[this.props.item.aplicado].data
                                : "No asigando"}</div>
                        <div className="col-md-2 col-sm-2 ">{(this.props.item.estado != null)
                                ? STATUS[this.props.item.estado].data
                                : "Sin estado"}</div>
                        <div className="col-md-1 col-sm-1 text-right">
                            <div className="form-group">
                                <a href={"#/pdc/instrumentos/aplicar/" + this.props.item.aplicado} className="btn btn-primary btn-sm" >Aplicar</a>
                            </div>
                      
                        </div> 

                    </div>

                </div>

               

            </div>
        )

    }
}



class PDCListChildrens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childrends: [],
            countList: 0,
            loading: false
        }
        getChildrends("",  function (response) {
            debugger
            if (response && response.data && response.data.d && response.data.d.length>0) {
                var list = response.data.d;
                console.log()
                this.setState({childrends: list, loading: false})
            }
        }.bind(this));
      
        
    }

   
    renderChildrendsCandidateNAR() {
        
        var childrends = this.state.childrends;
        debugger
        if (childrends.length>0) {
            var renderList = [];
            var countList = 0;
            childrends.map((child, index) => {
                var lastSomatometria = child.listaSomatometrias[0];
                if (lastSomatometria.dxPE == "MODERADO" || lastSomatometria.dxPE == "GRAVE") {
                    countList++;
                    var nar = {}
                    nar.lastSomatometriaDate = lastSomatometria.date;
                    nar.dxPE = lastSomatometria.dxPE;
                    nar.lastPeso = lastSomatometria.peso;
                    var almostlast = child.listaSomatometrias[1]
                    if(almostlast){
                        nar.difPeso = Math.abs(lastSomatometria.peso - (almostlast.peso))
                    }else{
                        nar.difPeso =0;
                    }
                    renderList.push(<FSRowChildren key={"chillistnar" + index} child={child} nar={nar}/>)
                }
            })
            return (
                <div>
                    <div>
                        Total:{countList}
                    </div>
                    <div className="row table-header">
                        <div className="col-md-1 col-sm-1">
                            No. fam.
                        </div>
                        <div className="col-md-2 col-sm-3">
                            Socia
                        </div>
                        <div className="col-md-4 col-sm-3">
                            Niño
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <div className="row">
                                <div className="col-md-1 col-sm-2">
                                    #V. NAR

                                </div>
                                <div className="col-md-1 col-sm-2">
                                    #V. ANT

                                </div>

                                <div className="col-md-3 col-sm-2">
                                    Última medición

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    Dx P/E

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    Último peso(Kg)

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    Dif. de peso (gr)

                                </div>
                            </div>
                        </div>
                    </div>
                    {renderList}</div>
            )
        }
    }
    render() {
        if (this.state.loading == true) {
            return (
                <div className="spinner" key={"spinnerInstrumento_"}></div>
            )
        }
        return (
            <div>
                {this.renderChildrendsCandidateNAR()}
            </div>
        )
    }
}
class FSChildrenNar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            key: 1
        }
    }
     componentDidMount() {
        $('.datepicker').datepicker();
    }
    onToogle(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }
    handleSelect(key) {
        alert('selected ' + key);
        this.setState({key});
    }
    render() {
        return (
            <div className="row">
                <div>
                    <div className="bg-full-width bg-grey">
                        <div className="container">
                            <div className=" row">
                                <div className="col-md-12">
                                    <div
                                        onClick={this
                                        .onToogle
                                        .bind(this)}>
                                        <span >
                                            <img src="../../../../../images/arrw-down.svg"/></span>
                                        <label>
                                            <strong >NICOLE SOSA SOSA</strong>
                                        </label>
                                    </div>
                                </div>
                                <div className="container">
                                    <Collapse isOpened={this.state.open}>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-3 icon-info">
                                                <span className="icon-bullet">
                                                    <img src="../../../../../images/inf.svg"/></span>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Fecha nacimiento</label>
                                                            <p className="form-control">16/04/2013</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Sexo</label>
                                                            <p className="form-control">Femenino</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">No. de familia</label>
                                                            <p className="form-control">12</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">NSS / SP</label>
                                                            <input name="ctl00$MainContent$numeross" type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 icon-info">
                                                <span className="icon-bullet">
                                                    <img src="../../../../../images/fisica.svg"/></span>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Peso al nacer</label>
                                                            <div className="input-group">
                                                                <input name="ctl00$MainContent$txtpesoInicial" className="form-control"/>
                                                                <div className="input-group-addon">Kg</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="label">Tall al nacer</label>
                                                            <div className="input-group">
                                                                <input name="ctl00$MainContent$txttallaInicial" className="form-control"/>
                                                                <div className="input-group-addon">cm</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label">Diagnostico previo de sobrepeso / obesidad</label>
                                                            <input
                                                                name="ctl00$MainContent$txtDiagnosticoObesidad"
                                                                className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-5 icon-info">
                                                <span className="icon-bullet">
                                                    <img src="../../../../../images/loc.svg" alt=""/></span>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Estado</label>
                                                            <p className="form-control">ESTADO DE MÉXICO</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Municipio</label>
                                                            <p className="form-control">ACULCO</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Comunidad</label>
                                                            <p className="form-control">ACULCO</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">CEDIT</label>
                                                              <p className="form-control">ACULCO</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Domicilio</label>
                                                            <input name="domicilio" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <label className="label">Facilitador</label>
                                                            <span className="form-control">
                                                                admin
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 text-right">
                                                        <button className="btn btn-primary btn-sm">
                                                            Guardar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-grey-2 padding-top-20">
                        <div className="container-fluid">
                            <div className="row" id="Visit">
                                <div className="col-md-10 col-sm-10">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li>
                                            <a id="lnkbtnEditar" className="tabdev">Basal
                                            </a>
                                        </li>
                                        <li>
                                            <a id="lnkbtnEditar" className="tabdev">Visita 1
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-2 col-sm-2 text-right">
                                    <button className="btn btn-primary btn-sm">
                                        Nueva visita
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-top-10  bg-grey">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-sm-12  text-right">
                                    <button className="btn btn-default btn-sm">
                                        Eliminar
                                    </button>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <strong>
                                        <h1 className="marcado">Basal</h1>
                                    </strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 col-sm-2">
                                    <label className="label">Fecha de visita</label>
                                    <div className="form-group">
                                       <input type="text" className="datepicker" /> 
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label">Edad</label>
                                        <div className="input-group">

                                            <input name="edad"  className="aspNetDisabled form-control"/>
                                            <div className="input-group-addon">meses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h3>Estado de nutrición</h3>
                                </div>

                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label">Peso</label>
                                        <div className="input-group">

                                            <input name="peso" className="form-control"/>
                                            <div className="input-group-addon">kg</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label">Talla</label>
                                        <div className="input-group">

                                            <input name="talla" className="form-control"/>
                                            <div className="input-group-addon">cm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="form-group">
                                        <label className="label" data-original-title="Índice de Masa Corporal">IMC</label>
                                        <input name="imc" className="form-control"/>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class FSManagerFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        fsOrden:"NumFamilia",
        fsEstado:"0",
        fsTexto:""}
    }
    sendFilters(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="row table-control">

                <div className="col-md-2 col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsOrden"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option value="NumFamilia">No. Familia</option>
                            <option value="NombreCuidador">Nombre socia</option>
                            <option value="NombreNinio">Nombre ninio</option>
                            <option value="FechaNacimiento">Fecha de nacimiento</option>
                            <option value="Genero">Sexo</option>
                            <option value="DiagnosticoPesoEdad">Dx P/E</option>

                        </select>
                    </div>
                </div>
                <div className="col-md-2  col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsEstado"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option  value="0">Activo</option>
                            <option value="1">Inactivo</option>
                            <option value="2">Todos</option>

                        </select>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                name="fsTexto"
                                type="text"
                                className="form-control"
                                placeholder="Buscar por nombre"/>
                            <span className="input-group-btn">
                                <input
                                    onClick={this.sendFilters.bind(this)}
                                    type="button"
                                    value="Buscar"
                                    className="btn btn-default"/>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 text-right">

                    <input
                        type="button"
                        value="Descargar excel"
                        id="MainContent_Button1"
                        className="btn btn-primary btn-sm"
                       />
                </div>

            </div>

        )
    }
}

class PDCManagerFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        fsOrden:"NumFamilia",
        fsEstado:"0",
        fsTexto:""}
    }
    sendFilters(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="row table-control">

                <div className="col-md-2 col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsOrden"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option value="NumFamilia">No. Familia</option>
                            <option value="NombreCuidador">Nombre socia</option>
                            <option value="NombreNinio">Nombre ninio</option>
                            <option value="FechaNacimiento">Fecha de nacimiento</option>
                            <option value="Genero">Sexo</option>
                            <option value="DiagnosticoPesoEdad">Dx P/E</option>

                        </select>
                    </div>
                </div>
                <div className="col-md-2  col-sm-2">
                    <div className="form-group">
                        <select
                            name="fsEstado"
                            className="form-control"
                            placeholder="Selecciona el orden">
                            <option  value="0">Activo</option>
                            <option value="1">Inactivo</option>
                            <option value="2">Todos</option>

                        </select>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                name="fsTexto"
                                type="text"
                                className="form-control"
                                placeholder="Buscar por nombre"/>
                            <span className="input-group-btn">
                                <input
                                    onClick={this.sendFilters.bind(this)}
                                    type="button"
                                    value="Buscar"
                                    className="btn btn-default"/>

                            </span>
                        </div>
                    </div>
                </div>

               

            </div>

        )
    }
}


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
                < div className="bg-full padding-top-10">
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
class FSRowChildren extends React.Component {

    render() {
        //Falta evaluar datos de Visita con Somatometria
        return (
              <div className="row table-rw">
                            <div className="col-md-1 col-sm-1">
                                <div className="row">
                                    <div className="col-md-12">
                                      {this.props.child.numeroFamilia}
                                    </div>  
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="row">
                                    <div className="col-md-12">
                                        {this.props.child.cuidadorNombreCompleto}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <a href={"#/fichanar/"+this.props.child.id}>
                                                         <img src="/images/apply.svg" alt="Capturar ficha" height="18"/>
                                                         <strong> {this.props.child.ninoNombreCompleto}</strong>
                                                    </a>
                                       
                                    </div>
                                    <div className="col-md-4 col-sm-4 nino-inf">
                                        <span className="txt-sm">Fecha nac.</span><br/>
                                         {this.props.child.fechaNacimineto}
                     
                                    </div>
                                    <div className="col-md-5 col-sm-5 nino-inf">
                                        <span className="txt-sm">Edad en meses</span><br/>
                                          {this.props.child.edadMeses}
                     
                                    </div>
                                    <div className="col-md-3 col-sm-3 nino-inf">
                                        <span className="txt-sm">Sexo</span><br/>
                                       {this.props.child.sexo}
                                        
                     
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <div className="row">
                                   <div className="col-md-1 col-sm-1">
                                        3
                                       
                     
                                    </div>
                                    <div className="col-md-1 col-sm-2">
                                       {this.props.child.listaSomatometrias.length}
                                       
                     
                                    </div>
                                    <div className="col-md-3 col-sm-2">
                                      
                                        {this.props.nar.lastSomatometriaDate}
                                        
                     
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                       
                                         {this.props.nar.dxPE}
                                        
                     
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                         {this.props.nar.lastPeso} Kg
                                        
                     
                                    </div>
                                    <div className="col-md-2 col-sm-2">
                                        {this.props.nar.difPeso}g
                     
                                    </div>
                                    <div className="col-md-1 col-sm-1">
                                       
                                           
                                   
                                    </div>
                                </div>
                            </div>
                        </div>

        )
    }
}
class FSListChildrens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childrends: [],
            countList: 0,
            loading: true
        }
        getChildrends("", function (response) {
            if (response && response.data && response.data.d) {
                this.setState({childrends: response.data.d, loading: false})
            }
        }.bind(this));
    }
    renderChildrendsCandidateNAR() {
        const childrends = this.state.childrends;
        if (childrends) {
            var renderList = [];
            var countList = 0;
            childrends.map((child, index) => {
                var lastSomatometria = child.listaSomatometrias[0];
                if (lastSomatometria.dxPE == "MODERADO" || lastSomatometria.dxPE == "GRAVE") {
                    countList++;
                    var nar = {}
                    nar.lastSomatometriaDate = lastSomatometria.date;
                    nar.dxPE = lastSomatometria.dxPE;
                    nar.lastPeso = lastSomatometria.peso;
                    var almostlast = child.listaSomatometrias[1]
                    if(almostlast){
                        nar.difPeso = Math.abs(lastSomatometria.peso - (almostlast.peso))
                    }else{
                        nar.difPeso =0;
                    }
                    renderList.push(<FSRowChildren key={"chillistnar" + index} child={child} nar={nar}/>)
                }
            })
            return (
                <div>
                    <div>
                        Total:{countList}
                    </div>
                    <div className="row table-header">
                        <div className="col-md-1 col-sm-1">
                            No. fam.
                        </div>
                        <div className="col-md-2 col-sm-3">
                            Socia
                        </div>
                        <div className="col-md-4 col-sm-3">
                            Niño
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <div className="row">
                                <div className="col-md-1 col-sm-2">
                                    #V. NAR

                                </div>
                                <div className="col-md-1 col-sm-2">
                                    #V. ANT

                                </div>

                                <div className="col-md-3 col-sm-2">
                                    Última medición

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    Dx P/E

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    Último peso(Kg)

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    Dif. de peso (gr)

                                </div>
                            </div>
                        </div>
                    </div>
                    {renderList}</div>
            )
        }
    }
    render() {
        if (this.state.loading == false) {
            return (
                <div className="spinner" key={"spinnerInstrumento_"}></div>
            )
        }
        return (
            <div>
                {this.renderChildrendsCandidateNAR()}
            </div>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controller: "/",
            modalInstrumento: false,
            modalModulo: false,
            idNinio: undefined,
            modalCondition: false
        }
        getLocation(function (response) {
            if (response && response.data && response.data.d) {
                this.setState({location: response.data.d})
            }
        }.bind(this));
        getUser((response) => {
            if (response && response.data && response.data.d) {
                this.setState({user: response.data.d})
            }
        });
    }
    componentDidMount() {
        var router = Router({
            '/admin': {
                on: this.validUser,
                '/instrumentos': {
                    on: () => {
                        this.setState({controller: "admininstrumentos", modalCondition: undefined, moduloId: undefined, modalInstrumento: undefined, modalModulo: undefined})
                    },
                    '/nuevo': () => {
                        this.setState({modalInstrumento: true, controller: "admininstrumentos"})
                    },
                    '/eliminar/:id': (id) => {
                        var i = parseInt(id)
                        this.setState({modalCondition: true, instrumentoId: i, controller: "admininstrumentos"})
                    },
                    '/editar/:id': (id) => {
                        var i = parseInt(id);
                        this.setState({instrumentoId: i, modalInstrumento: true, controller: "admininstrumentos"})
                    },
                    '/simulacion/:id': (id) => {
                        var i = parseInt(id);
                        this.setState({instrumentoId: i, controller: "simulacion"})
                    },
                    '/modulos': {
                        '/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({id: id, controller: "modulo"})
                        },
                        '/nuevo/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({modalModulo: true, instrumentoId: i, controller: "admininstrumentos"})
                        },
                        '/eliminar/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({modalCondition: true, instrumentoId: i, focusHandle: "modulo", controller: "admininstrumentos"})
                        },
                        '/editar/:id': (id) => {
                            var i = parseInt(id)
                            this.setState({modalModulo: true, instrumentoId: i, moduloId: i, controller: "admininstrumentos"})
                        },
                        on: this.helloWorld,
                        'reactivos/': {
                            on: this.helloWorld
                        }
                    }
                }
            },
            '/pdc/': {
                '/instrumentos': {
                    '/aplicar/:id': (id) => {
                        this.setState({controller: "aplicarInstrumento"})
                    },
                    on: () => {
                        this.setState({controller: "instrumentos"})
                    }
                }
            },
            '/pdf': {
                '/fichas': {
                    '/nar': {
                        '/:id': this.fichanar,
                        on: () => {
                            this.setState({controller: "nar"})
                        }
                    },
                    '/obesidad': () => {
                        this.setState({controller: "nar"})
                    },
                    '/embarazo': () => {
                        this.setState({controller: "nar"})
                    }
                },
                '/somatometria': () => {
                    this.setState({controller: "nar"})
                },
                '/reporte': () => {
                    this.setState({controller: "nar"})
                },
                '/grafica': () => {
                    this.setState({controller: "nar"})
                }
            }
        });

        router.init('/');
        // router.configure({html5history: true});

    }
    validUser = () => {
        getUser((response) => {
            if (response && response.data && response.data.d) {}
        });
    }
    helloWorld = () => {
        alert("se activa conteiner")
    }
    fichanar = (id) => {
        this.setState({controller: "fichanar"})
    }
    saveIntrumento(state) {
        this.setState({modalInstrumento: false})
        window
            .history
            .back();
    }
    render() {
        var renderConteiner;
        var navigatorState = [
            {
                name: "Inicio",
                routing: "/Miembros/MenuPrincipal"
            }, {
                name: "Medir y Diagnosticar",
                routing: "/Miembros/MD/SubMenu"
            }, {
                name: "Niños de Alto Riesgo",
                routing: "#/nar"
            }, {
                name: "Fichas de niños de alto riesgo (NAR)",
                routing: "#/fichanar"
            },, {
                name: "Administrador de instrumentos",
                routing: "#/admin/instrumentos"
            }
            , {
                name: "Instrumentos",
                routing: "#/pdc/instrumentos"
            },
            {
                name: "Candidatos",
                routing: "#/pdc/instrumentos/aplicar/"
            },
        ]
        var navigatorHistory =[]
        switch (this.state.controller) {
            case "nar":
                navigatorHistory = navigatorState.slice(0, 3);
                renderConteiner = (
                    <div>
                        <FSManagerFilters/>
                        <FSListChildrens/>
                    </div>
                );
                break;
            case "fichanar":
                navigatorHistory = navigatorState.slice(0, 4);
                renderConteiner = (
                    <div>
                        <FSChildrenNar idNinio={this.state.idNinio}/>
                    </div>
                );
                break;

            case "aplicarInstrumento":
                navigatorHistory =  _.concat(navigatorState[0], navigatorState[6],navigatorState[7])
                /*
                switch (key) {
                    case value:

                        break;

                    default:
                        break;
                }*/
                renderConteiner = (
                    <div>
                        <PDCManagerFilters/>
                        <PDCListChildrens/>
                    </div>
                );
                break;

            case "modulo":
                renderConteiner = (
                    <div>
                        <Modulo id={this.state.id}/>
                    </div>
                );
                break;
            case "simulacion":
                var params = {
                    id: this.state.instrumentoId
                };
                var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentoId";
                var listaIdModulos = []
                if (this.state.listaModulos) {
                    this
                        .state
                        .listaModulos
                        .map((item, index) => {
                            listaIdModulos.push(<Modulo key={index} id={item.id} simulation={true}/>)
                        });
                } else {
                    axios
                        .post(url, params)
                        .then(function (response) {
                            if (response && response.data && response.data.d[0].modulos != "") {
                                var modulos = JSON.parse(response.data.d[0].modulos);
                                this.setState({listaModulos: modulos})
                            } else {
                                this.setState({listaModulos: []})
                            }
                        }.bind(this))
                        .catch(function (error) {
                            alert("No se pudo obtener datos")
                        });
                }
                renderConteiner = (listaIdModulos);
                break;
            case "instrumentos":
                navigatorHistory = _.concat(navigatorState[0], navigatorState[6])
                renderConteiner = (
                    <div>
                        <InstrumentosView/>
                    </div>
                );
                break;
            case "admininstrumentos":
                renderConteiner = (
                    <div>
                        <ModalCondition
                            id={this.state.instrumentoId}
                            focusHandle={this.state.focusHandle}
                            show={this.state.modalCondition}/>
                        <ModalInstrumento
                            id={this.state.instrumentoId}
                            show={this.state.modalInstrumento}
                            title="Instrumento"/>
                        <ModalModulo
                            instrumentoId={this.state.instrumentoId}
                            moduloId={this.state.moduloId}
                            show={this.state.modalModulo}
                            title="Modulo"/>
                        <Instrumentos id={this.state.instrumentoId}/>
                    </div>
                );
                break;

                initModalInstrumento
            default:

                renderConteiner = (
                    <h1>URL no existe</h1>
                );
                break;
        }
        return (
            <NavigationState
                navigatorHistory={navigatorHistory}
                location={this.state.location}
                user={this.state.user}>
                {renderConteiner}
            </NavigationState>
        )

    }
}
ReactDOM.render(
    <App/>, document.getElementById('appUnkiloDeAyuda'));
