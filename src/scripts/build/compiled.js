"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URLUKA = "http://localhost:25585/";
//const URLUKA= "http://ukawebm.azurewebsites.net/";


var TIPOREACTIVO = [{
    id: 0,
    data: "Pregunta"
}, {
    id: 1,
    data: "Encabezado"
}];
var TIPOPREGUNTAS = [{
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
}];
var STATUS = [{
    id: 0,
    data: "Habilitado"
}, {
    id: 1,
    data: "Deshabilitado"
}];
var PERSONAS = [{
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
}];
var _ABIERTA = {
    "question": '',
    "answer": 'undefined'
};

var _MULTIPLES = {
    "question": '',
    "options": [{
        "option": "",
        "condition": '',
        "type": 'radio'
    }],
    "answer": 'undefined'
};
var _INDEXADA = {
    "question": '',
    "questions": [{
        "question": '',
        "options": [{
            "option": "",
            "condition": '',
            "type": 'radio'
        }],
        "answer": 'undefined'
    }],
    "answer": 'undefined'
};
var getLocation = function getLocation(callback) {
    var url = "APP.aspx/getlocation";
    var params = {
        idEstado: localStorage.getItem("UKAidEstado"),
        idMunicipio: localStorage.getItem("UKAidMunicipo"),
        idComunidad: localStorage.getItem("UKAidComunidad"),
        idGrupo: localStorage.getItem("UKAidGrupo")
    };
    axios.post(url, params).then(function (response) {

        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};
var getUser = function getUser(callback) {
    var url = "APP.aspx/getUser";
    var idu = localStorage.getItem("UKAidUsuario");
    var params = {
        id: idu
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};

var getChildrends = function getChildrends(filters, callback) {
    var url = "APP.aspx/getSomatometria";
    var idGrupo = localStorage.getItem("UKAidGrupo");
    var params = {
        idGrupo: idGrupo,
        textoBusqueda: "",
        orden: "Familia",
        fichaseguimiento: "NAR"

    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        debugger;
        var s = error;
        // alert("No se pudo obtener datos de la localidad")
    });
};

var getEstados = function getEstados(callback) {
    var url = "APP.aspx/getEstados";
    var params = {
        id: localStorage.getItem("UKAidUsuario")
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};
var getEstados = function getEstados(id, callback) {
    var url = "APP.aspx/getEstados";
    var params = {
        id: id
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};
var getMunicipios = function getMunicipios(id, callback) {
    var url = "APP.aspx/getMunicipios";
    var params = {
        id: id
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};
var getComunidades = function getComunidades(id, callback) {
    var url = "APP.aspx/getComunidades";
    var params = {
        id: id
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};
var getGrupos = function getGrupos(id, callback) {
    var url = "APP.aspx/getGrupos";
    var params = {
        id: id
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de la localidad")
    });
};

var getadminInstrumentos = function getadminInstrumentos(callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentos";
    var idGrupo = localStorage.getItem("UKAidGrupo");
    var params = {
        idGrupo: idGrupo
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};

var getInstrumentoById = function getInstrumentoById(id, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentoId";
    var params = {
        id: id
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};
var getModuloById = function getModuloById(id, callback) {

    var idd = parseInt(id);
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getReactivosbyModuloId";
    var params = {
        id: idd
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};

var deleteInstrumento = function deleteInstrumento(id, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/deleteIntrumento";
    var params = {
        id: id

    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};
var deleteModulo = function deleteModulo(id, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/deleteModulo";
    var params = {
        id: id

    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};

var saveInstrumento = function saveInstrumento(state, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/saveIntrumento";
    var params = {
        id: state.id,
        nombre: state.nombre,
        subtitulo: state.subtitulo,
        prefijo: state.prefijo,
        estado: state.estado,
        orden: state.orden,
        aplicado: state.aplicado,
        grupos: state.grupos
    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};

//int id, int id_instrumento, string modulo, string prefijo, string leyenda, int estado, int orden, List<string> grupos
var saveModulo = function saveModulo(state, callback) {

    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/saveModulo";
    var params = {
        id: state.id,
        id_instrumento: state.id_instrumento,
        modulo: state.modulo,
        prefijo: state.prefijo,
        leyenda: state.leyenda,
        estado: state.estado,
        orden: 0,
        grupos: state.grupos

    };
    axios.post(url, params).then(function (response) {
        callback(response);
    }).catch(function (error) {
        // alert("No se pudo obtener datos de somatometria")
    });
};

var FormMaster = function (_React$Component) {
    _inherits(FormMaster, _React$Component);

    function FormMaster(props) {
        _classCallCheck(this, FormMaster);

        var _this = _possibleConstructorReturn(this, (FormMaster.__proto__ || Object.getPrototypeOf(FormMaster)).call(this, props));

        _this.state = {};

        return _this;
    }

    _createClass(FormMaster, [{
        key: "renderStatus",
        value: function renderStatus() {
            return STATUS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_status_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderPersonas",
        value: function renderPersonas() {
            return PERSONAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_person_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderTipoPregunta",
        value: function renderTipoPregunta() {
            return TIPOPREGUNTAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_pregunta_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderTipoReativo",
        value: function renderTipoReativo() {
            return TIPOREACTIVO.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_pregunta_option_", value: i.id },
                    i.data
                );
            });
        }
    }]);

    return FormMaster;
}(React.Component);

var PopupModulo = function (_FormMaster) {
    _inherits(PopupModulo, _FormMaster);

    function PopupModulo(props) {
        _classCallCheck(this, PopupModulo);

        var _this2 = _possibleConstructorReturn(this, (PopupModulo.__proto__ || Object.getPrototypeOf(PopupModulo)).call(this, props));

        _this2.state = {
            "id": 0,
            "modulo": "",
            "prefijo": "",
            "leyenda": "",
            "estado": 1,
            "orden": 0,
            "id_instrumento": -1
        };

        return _this2;
    }

    _createClass(PopupModulo, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {

            if (nextProps.item && nextProps.show) {

                this.setState(nextProps.item);
            }
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            e.preventDefault();
            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "orden" || mask == "estado") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }
            this.setState(_defineProperty({}, mask, valor));
        }
    }, {
        key: "showModulos",
        value: function showModulos(a, e) {
            e.preventDefault();
            var g = this.state;
            g.id_instrumento = this.props.item.id_instrumento;

            if (a) {
                this.props.onChange(g);
            } else {
                this.props.onChange({});
            }
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                Modal,
                { show: this.props.show, dialogClassName: "modal-dialog modal-sm" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "button",
                            {
                                type: "button",
                                className: "close",
                                onClick: this.showModulos.bind(this, false) },
                            React.createElement(
                                "span",
                                null,
                                "\xD7"
                            )
                        ),
                        React.createElement(
                            "h4",
                            { className: "modal-title" },
                            "Agregar ",
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Nombre m\xF3dulo"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        placeholder: "Ej. intrumento A",
                                        type: "text",
                                        name: "modulo",
                                        value: this.state.modulo,
                                        onChange: this.handleInput.bind(this) })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Prefijo"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        placeholder: "Ej. IA",
                                        type: "text",
                                        name: "prefijo",
                                        value: this.state.prefijo,
                                        onChange: this.handleInput.bind(this) })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Estado del instrumento:"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.estado,
                                            name: "estado",
                                            onChange: this.handleInput.bind(this) },
                                        this.renderStatus()
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-footer" },
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-default",
                                onClick: this.showModulos.bind(this, false) },
                            "Cancelar"
                        ),
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-primary",
                                onClick: this.showModulos.bind(this, true) },
                            "Aceptar"
                        )
                    )
                )
            );
        }
    }]);

    return PopupModulo;
}(FormMaster);

var PopupInstrumento = function (_FormMaster2) {
    _inherits(PopupInstrumento, _FormMaster2);

    function PopupInstrumento(props) {
        _classCallCheck(this, PopupInstrumento);

        var _this3 = _possibleConstructorReturn(this, (PopupInstrumento.__proto__ || Object.getPrototypeOf(PopupInstrumento)).call(this, props));

        _this3.state = {
            "nombre": "",
            "prefijo": "",
            "subtitulo": "",
            "estado": 1,
            "orden": 0,
            "aplicado": 0,
            "id": -1
        };

        return _this3;
    }

    _createClass(PopupInstrumento, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.item && nextProps.item.id) {
                this.setState(nextProps.item);
            }
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            e.preventDefault();

            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "aplicado" || mask == "estado") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }
            this.setState(_defineProperty({}, mask, valor));
        }
    }, {
        key: "showModulos",
        value: function showModulos(a, e) {
            e.preventDefault();
            var g = this.state;
            if (a) {
                this.props.onChange(g);
            } else {
                this.props.onChange({});
            }
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                Modal,
                { show: this.props.show, dialogClassName: "modal-dialog modal-sm" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "button",
                            {
                                type: "button",
                                className: "close",
                                onClick: this.showModulos.bind(this, false) },
                            React.createElement(
                                "span",
                                null,
                                "\xD7"
                            )
                        ),
                        React.createElement(
                            "h4",
                            { className: "modal-title" },
                            "Agregar ",
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Nombre"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        placeholder: "Ej. intrumento A",
                                        type: "text",
                                        name: "nombre",
                                        value: this.state.nombre,
                                        onChange: this.handleInput.bind(this) })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Subt\xEDtulo"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        type: "text",
                                        value: this.state.subtitulo,
                                        placeholder: "Ej. Ni\xF1os con sobrepeso",
                                        name: "subtitulo",
                                        onChange: this.handleInput.bind(this) })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Aplica a:"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.aplicado,
                                            name: "aplicado",
                                            onChange: this.handleInput.bind(this) },
                                        this.renderPersonas()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Estado del instrumento:"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.estado,
                                            name: "estado",
                                            onChange: this.handleInput.bind(this) },
                                        this.renderStatus()
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-footer" },
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-default",
                                onClick: this.showModulos.bind(this, false) },
                            "Cancelar"
                        ),
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-primary",
                                onClick: this.showModulos.bind(this, true) },
                            "Aceptar"
                        )
                    )
                )
            );
        }
    }]);

    return PopupInstrumento;
}(FormMaster);

var Modulos = function (_React$Component2) {
    _inherits(Modulos, _React$Component2);

    function Modulos(props) {
        _classCallCheck(this, Modulos);

        var _this4 = _possibleConstructorReturn(this, (Modulos.__proto__ || Object.getPrototypeOf(Modulos)).call(this, props));

        _this4.state = {};
        _this4.state.showModal = false;
        _this4.state.listaModulos = [{
            "nombre": "",
            "prefijo": "",
            "estado": 1,
            "fechaCreacion": new Date()
        }];

        return _this4;
    }

    _createClass(Modulos, [{
        key: "handleState",
        value: function handleState(e) {}
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            ;
            //modulo

            var listItems = this.state.listaModulos.map(function (item) {
                return React.createElement(ModuloItem, { onChange: _this5.handleState, key: item.nombre + "_" + item.id + "_lista_", item: item });
            });
            return React.createElement(
                "div",
                null,
                listItems
            );
        }
    }]);

    return Modulos;
}(React.Component);

var LinkedQuestionManager = function (_React$Component3) {
    _inherits(LinkedQuestionManager, _React$Component3);

    function LinkedQuestionManager() {
        _classCallCheck(this, LinkedQuestionManager);

        return _possibleConstructorReturn(this, (LinkedQuestionManager.__proto__ || Object.getPrototypeOf(LinkedQuestionManager)).apply(this, arguments));
    }

    _createClass(LinkedQuestionManager, [{
        key: "renderOption",
        value: function renderOption() {
            // / siempre se optiene un arreglo con un solo objecto , si se quiere cambiar
            // solo hay que actualizar la funcion savenext en Modulo y aqui
            if (this.props.question && this.props.question.options) {

                var lista = this.props.question.options;
                var options = [];
                for (var index in lista) {
                    var option = lista[index].option;
                    var condition = lista[index].condition;
                    try {
                        if (condition) {

                            var popoverTop = React.createElement(
                                Popover,
                                { id: "popover-positioned-top", title: condition },
                                React.createElement(
                                    "a",
                                    { href: "#/search/" + condition + "/" + this.props.item.id_modulo + "/" + this.props.item.id_instrumento },
                                    "Ir a "
                                )
                            );
                            options.push(React.createElement(
                                "div",
                                {
                                    key: index + "_option_" + this.props.item.id,
                                    className: "col-md-4  col-sm-12 text-center" },
                                React.createElement(
                                    OverlayTrigger,
                                    { trigger: "click", rootClose: true, placement: "top", overlay: popoverTop },
                                    React.createElement(
                                        "label",
                                        { className: "lbl-id" },
                                        React.createElement("div", { className: "id-preg relacionada" }),
                                        React.createElement(
                                            "strong",
                                            null,
                                            parseInt(index) + 1,
                                            ")"
                                        ),
                                        option
                                    )
                                )
                            ));
                        } else {
                            options.push(React.createElement(
                                "div",
                                {
                                    key: index + "_option_linkedq" + this.props.item.id,
                                    className: "col-md-4  col-sm-12 text-center" },
                                React.createElement(
                                    "label",
                                    { className: "lbl-id" },
                                    React.createElement(
                                        "strong",
                                        null,
                                        parseInt(index) + 1,
                                        ")"
                                    ),
                                    option
                                )
                            ));
                        }
                    } catch (error) {
                        alert("existe una opcion que se repite en un reactivo");
                    }
                }
                return React.createElement(
                    "div",
                    { className: "row resp-reg" },
                    options
                );
            }
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "reg-preg preg-rel" },
                React.createElement(
                    "small",
                    null,
                    this.props.question.onlyTo ? "Para: " + this.props.question.onlyTo : ""
                ),
                React.createElement("br", null),
                this.props.question.question,
                React.createElement("br", null),
                React.createElement(
                    "small",
                    null,
                    this.props.question.note ? "Nota: " + this.props.question.note : ""
                ),
                React.createElement("br", null),
                React.createElement(
                    "small",
                    null,
                    this.props.question.nota
                ),
                this.renderOption()
            );
        }
    }]);

    return LinkedQuestionManager;
}(React.Component);

var QuestionManager = function (_React$Component4) {
    _inherits(QuestionManager, _React$Component4);

    function QuestionManager() {
        _classCallCheck(this, QuestionManager);

        return _possibleConstructorReturn(this, (QuestionManager.__proto__ || Object.getPrototypeOf(QuestionManager)).apply(this, arguments));
    }

    _createClass(QuestionManager, [{
        key: "renderLinkedQuestions",
        value: function renderLinkedQuestions() {
            this;
            if (this.props.castJsonPregunta && this.props.castJsonPregunta[0].questions) {

                var lista = this.props.castJsonPregunta[0].questions;
                var questions = [];
                for (var index in lista) {
                    questions.push(React.createElement(LinkedQuestionManager, {
                        key: index + "linked_qeustion_" + this.props.item.id,
                        item: this.props.item,
                        question: lista[index] }));
                }
                return React.createElement(
                    "div",
                    { className: "row resp-reg" },
                    questions
                );
            }
        }
    }, {
        key: "renderOption",
        value: function renderOption() {
            // / siempre se optiene un arreglo con un solo objecto , si se quiere cambiar
            // solo hay que actualizar la funcion savenext en Modulo y aqui

            if (this.props.castJsonPregunta && this.props.castJsonPregunta[0].options) {

                var lista = this.props.castJsonPregunta[0].options;
                var options = [];
                for (var index in lista) {
                    var option = lista[index].option;
                    var condition = lista[index].condition;
                    try {
                        if (condition) {
                            var popoverTop = React.createElement(
                                Popover,
                                { id: "popover-positioned-top", title: condition },
                                React.createElement(
                                    "a",
                                    { href: "#/search/" + condition + "/" + this.props.item.id_modulo + "/" + this.props.item.id_instrumento },
                                    "Ir a "
                                )
                            );
                            options.push(React.createElement(
                                "div",
                                {
                                    key: index + "_option_" + this.props.item.id,
                                    className: "col-md-4  col-sm-12 text-center" },
                                React.createElement(
                                    OverlayTrigger,
                                    { trigger: "click", rootClose: true, placement: "top", overlay: popoverTop },
                                    React.createElement(
                                        "label",
                                        { className: "lbl-id" },
                                        React.createElement("div", { className: "id-preg relacionada" }),
                                        React.createElement(
                                            "strong",
                                            null,
                                            parseInt(index) + 1,
                                            ")"
                                        ),
                                        option
                                    )
                                )
                            ));
                        } else {
                            options.push(React.createElement(
                                "div",
                                {
                                    key: index + "_option_" + this.props.item.id,
                                    className: "col-md-4  col-sm-12 text-center" },
                                React.createElement(
                                    "label",
                                    { className: "lbl-id" },
                                    React.createElement(
                                        "strong",
                                        null,
                                        parseInt(index) + 1,
                                        ")"
                                    ),
                                    option
                                )
                            ));
                        }
                    } catch (error) {
                        alert("existe una opcion que se repite en un reactivo");
                    }
                }
                return React.createElement(
                    "div",
                    { className: "row resp-reg" },
                    options
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "reg-preg" },
                this.props.simulation ? "" : React.createElement("input", {
                    type: "checkbox",
                    value: this.props.item.id,
                    checked: this.props.checked,
                    onClick: this.props.onDelete,
                    className: "check-preg" }),
                React.createElement(
                    "strong",
                    null,
                    this.props.prefijo + " "
                ),
                this.props.castJsonPregunta[0].question,
                React.createElement("br", null),
                React.createElement(
                    "small",
                    null,
                    this.props.item.nota
                ),
                this.renderOption(),
                this.renderLinkedQuestions()
            );
        }
    }]);

    return QuestionManager;
}(React.Component);

var PanelPreguntas = function (_React$Component5) {
    _inherits(PanelPreguntas, _React$Component5);

    function PanelPreguntas(props) {
        _classCallCheck(this, PanelPreguntas);

        var _this8 = _possibleConstructorReturn(this, (PanelPreguntas.__proto__ || Object.getPrototypeOf(PanelPreguntas)).call(this, props));

        _this8.state = {
            spinerLoad: true
        };
        _this8.state.listDetele = [];
        _this8.onDelete = _this8.onDelete.bind(_this8);
        return _this8;
    }

    _createClass(PanelPreguntas, [{
        key: "onDelete",
        value: function onDelete(e) {
            var id = parseInt(e.target.value);
            var ischecked = e.target.checked;
            var lista = this.state.listDetele;
            var index = lista.indexOf(id);
            //No esta en la lista  y esta activo-> agregar
            if (index == -1 && ischecked == true) {
                lista.push(id);
                this.setState({ listDetele: lista });
            }
            //Esta en la lista  y no esta activo-> eliminar
            if (index != -1 && ischecked == false) {
                lista.splice(index, 1);
                this.setState({ listDetele: lista });
            }
        }
    }, {
        key: "deleteAll",
        value: function deleteAll(e) {
            this.setState({ checkedAll: true });
        }
    }, {
        key: "renderReactivos",
        value: function renderReactivos() {
            var modulo = this.props.modulo;
            if (modulo == undefined) {
                return React.createElement("div", { className: "spinner", key: "spinerModulo " + this.props.modulo.id });
            }
            if (modulo && modulo.reactivos && modulo.reactivos.length > 0) {
                var lista = modulo.reactivos;
                var listaRender = [];
                for (var key in lista) {
                    var listaDelete = this.state.listDetele;
                    var preguntaJson = lista[key].dataJson;
                    var id = lista[key].id;
                    var prefijopregunta = modulo.prefijo + (parseInt(key) + 1);
                    var checkedItem = listaDelete.indexOf(id) != -1;
                    if (preguntaJson != "") {
                        try {
                            var preguntaJsonTrim = preguntaJson.trim();
                            var preguntaJsonTrimS = preguntaJsonTrim.split("\n");
                            var preguntaDef = preguntaJsonTrimS;
                            var castJsonPregunta = JSON.parse(preguntaDef);
                            var pregunta = React.createElement(QuestionManager, {
                                simulation: this.props.simulation,
                                key: lista[key].id,
                                item: lista[key],
                                checked: checkedItem,
                                prefijo: prefijopregunta,
                                onDelete: this.onDelete,
                                castJsonPregunta: castJsonPregunta });
                            listaRender.push(pregunta);
                        } catch (ex) {
                            console.log(ex);
                            alerta("301->Panel preguntas");
                        }
                    }
                }
                return React.createElement(
                    "div",
                    null,
                    listaRender
                );
            }
            if (modulo && modulo.reactivos == "") {
                return React.createElement(
                    "div",
                    null,
                    "Sin preguntas"
                );
            }
        }
    }, {
        key: "handleChecks",
        value: function handleChecks() {
            this.setState({ checkedAll: true });
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    this.props.simulation ? "" : React.createElement(
                        "div",
                        { className: "col-md-12 col-sm-12 text-right" },
                        React.createElement(
                            "a",
                            {
                                onClick: function onClick() {
                                    _this9.props.deleteSelected(_this9.state.listDetele);
                                } },
                            React.createElement("img", { src: "../../../images/erase-gray.svg", height: "18" }),
                            "Eliminar preguntas seleccionadas"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    {
                        className: this.props.simulation ? "" : "cont-reg-preg" },
                    this.renderReactivos()
                ),
                this.props.simulation ? "" : React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "label",
                        { className: "lbl-id" },
                        React.createElement("div", { className: "id-preg relacionada" }),
                        "Respueta relacionada"
                    ),
                    React.createElement(
                        "label",
                        { className: "lbl-id" },
                        React.createElement("div", { className: "id-preg " }),
                        "@TEXTO"
                    ),
                    React.createElement(
                        "label",
                        { className: "lbl-id" },
                        React.createElement("div", { className: "id-preg " }),
                        "@FECHA"
                    ),
                    React.createElement(
                        "label",
                        { className: "lbl-id" },
                        React.createElement("div", { className: "id-preg " }),
                        "@HORA"
                    )
                )
            );
        }
    }]);

    return PanelPreguntas;
}(React.Component);

var Respuestas = function (_React$Component6) {
    _inherits(Respuestas, _React$Component6);

    function Respuestas(props) {
        _classCallCheck(this, Respuestas);

        var _this10 = _possibleConstructorReturn(this, (Respuestas.__proto__ || Object.getPrototypeOf(Respuestas)).call(this, props));

        _this10.state = _this10.props.r;

        return _this10;
    }

    _createClass(Respuestas, [{
        key: "handleInput",
        value: function handleInput(e) {
            //Maneja la respuesta
            e.preventDefault();
            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "reactivo" || mask == "tipopregunta") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }
            this.setState({
                respuesta: valor
            }, function () {
                var state = this.state;
                this.props.onChange(state);
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                    "div",
                    { className: "reg-preg row" },
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Opci\xF3n"
                            ),
                            this.state.type == "checkbox" || this.state.type == "radio" ? React.createElement(
                                "div",
                                null,
                                React.createElement("input", { type: this.state.type }),
                                React.createElement("input", {
                                    type: "text",
                                    name: "respuesta",
                                    onChange: this.handleInput.bind(this),
                                    value: this.state.respuesta })
                            ) : React.createElement("input", {
                                type: this.state.type,
                                name: "respuesta",
                                onChange: this.handleInput.bind(this),
                                value: this.state.respuesta })
                        )
                    )
                )
            );
        }
    }]);

    return Respuestas;
}(React.Component);

var Pregunta = function (_React$Component7) {
    _inherits(Pregunta, _React$Component7);

    function Pregunta(props) {
        _classCallCheck(this, Pregunta);

        var _this11 = _possibleConstructorReturn(this, (Pregunta.__proto__ || Object.getPrototypeOf(Pregunta)).call(this, props));

        _this11.state = _this11.props.q;
        return _this11;
    }

    _createClass(Pregunta, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(next_props) {

            this;
            if (next_props.q && next_props.q.options) {
                this.setState({ options: next_props.q.options });
            } else if (next_props.q) {
                this.setState({ options: null });
            }
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            //Maneja la respuesta
            e.preventDefault();
            var valor = e.target.value;
            var mask = e.target.name;
            var valorTrim = valor.trim();
            this.setState(_defineProperty({}, mask, valorTrim), function () {
                this.props.onChange(this.state);
            }.bind(this));
        }
    }, {
        key: "handleRespuesta",
        value: function handleRespuesta(e) {
            // this this.setState({respuestas:e}, function(){      this             .props
            // .onChange(state) })
        }
    }, {
        key: "render",
        value: function render() {
            var _this12 = this;

            var listaRespuestas = React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "small",
                        null,
                        "Respuesta abierta"
                    )
                )
            );
            if (this.state && this.state.options) {

                listaRespuestas = this.state.options.map(function (item) {
                    return React.createElement(Respuestas, {
                        key: item.option + "__lista_respuesta_",
                        r: item,
                        onChange: _this12.handleRespuesta.bind(_this12) });
                });
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Pregunta"
                        ),
                        React.createElement("textarea", {
                            className: "form-control pregunta",
                            name: "question",
                            onChange: this.handleInput.bind(this),
                            value: this.state.question })
                    )
                ),
                listaRespuestas
            );
        }
    }]);

    return Pregunta;
}(React.Component);

var Preguntas = function (_FormMaster3) {
    _inherits(Preguntas, _FormMaster3);

    function Preguntas(props) {
        _classCallCheck(this, Preguntas);

        var _this13 = _possibleConstructorReturn(this, (Preguntas.__proto__ || Object.getPrototypeOf(Preguntas)).call(this, props));

        _this13.state = {
            "reactivo": 0,
            "tipopregunta": 0,
            "preguntaJson": [ABIERTA],
            "nota": ""
        };
        return _this13;
    }

    _createClass(Preguntas, [{
        key: "handlePregunta",
        value: function handlePregunta(e) {
            var listaPreguntas = [e];
            this.setState({
                preguntaJson: listaPreguntas
            }, function () {
                var state = this.state;
                this.props.onChange(state);
            }.bind(this));
        }
    }, {
        key: "handleType",
        value: function handleType(e) {
            e.preventDefault();

            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            valor = parseInt(valorAux);
            if (valor == 1) {
                this.setState(_defineProperty({
                    preguntaJson: [MULTIPLE]
                }, mask, valor), function () {});
            } else {
                this.setState(_defineProperty({ preguntaJson: [ABIERTA] }, mask, valor));
            }
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            e.preventDefault();
            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "reactivo" || mask == "tipopregunta") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }

            this.setState(_defineProperty({}, mask, valor), function () {

                var state = this.state;
                this.props.onChange(state);
            }.bind(this));
        }
    }, {
        key: "saveClose",
        value: function saveClose(e) {
            e.preventDefault();
            this;
        }
    }, {
        key: "saveNext",
        value: function saveNext(e) {
            e.preventDefault();
            this.props.saveNext(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4 " },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Reactivo"
                            ),
                            React.createElement(
                                "select",
                                {
                                    value: this.state.reactivo,
                                    className: "form-control",
                                    type: "text",
                                    name: "reactivo",
                                    onChange: this.handleInput.bind(this) },
                                this.renderTipoReativo()
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4 " },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Prefijo"
                        ),
                        React.createElement("input", { type: "text", className: "form-control", value: this.props.prefijoPregunta })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4 " },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Tipo de pregunta"
                            ),
                            React.createElement(
                                "select",
                                {
                                    value: this.state.tipopregunta,
                                    className: "form-control",
                                    name: "tipopregunta",
                                    onChange: this.handleType.bind(this) },
                                this.renderTipoPregunta()
                            )
                        )
                    ),
                    React.createElement(Pregunta, {
                        index: this.props.clean,
                        type: this.state.tipopregunta,
                        q: this.state.preguntaJson[0],
                        onChange: this.handlePregunta.bind(this) }),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Nota(s):"
                            ),
                            React.createElement("textarea", {
                                value: this.state.nota,
                                name: "nota",
                                placeholder: "Escribe una nota.",
                                onChange: this.handleInput.bind(this), className: "form-control pregunta" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                            "button",
                            {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: this.saveNext.bind(this) },
                            "Agregar siguiente"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                            "button",
                            {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: this.saveClose.bind(this) },
                            "Guardar y cerrar"
                        )
                    )
                )
            );
        }
    }]);

    return Preguntas;
}(FormMaster);

var Reactivos = function (_FormMaster4) {
    _inherits(Reactivos, _FormMaster4);

    function Reactivos(props) {
        _classCallCheck(this, Reactivos);

        var _this14 = _possibleConstructorReturn(this, (Reactivos.__proto__ || Object.getPrototypeOf(Reactivos)).call(this, props));

        _this14.state = {
            "reactivo": 0,
            "tipopregunta": 0,
            "preguntaJson": {},
            "nota": "Nota . . ."

        };

        return _this14;
    }

    _createClass(Reactivos, [{
        key: "handleJson",
        value: function handleJson(dataJson) {
            this.setState({ preguntaJson: dataJson }, function () {
                var state = this.state;
                this.props.onChange(state);
            });
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {

            e.preventDefault();
            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "reactivo" || mask == "tipopregunta") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }
            this.setState(_defineProperty({}, mask, valor), function () {

                var state = this.state;
                this.props.onChange(state);
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4 " },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Reactivo"
                            ),
                            React.createElement(
                                "select",
                                {
                                    value: this.state.reactivo,
                                    className: "form-control",
                                    type: "text",
                                    name: "reactivo",
                                    onChange: this.handleInput.bind(this) },
                                this.renderTipoReativo()
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4 " },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Prefijo"
                        ),
                        React.createElement("input", { type: "text", className: "form-control", value: "R2D2 1" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4 " },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Tipo de pregunta"
                            ),
                            React.createElement(
                                "select",
                                {
                                    value: this.state.tipopregunta,
                                    className: "form-control",
                                    name: "tipopregunta",
                                    onChange: this.handleInput.bind(this) },
                                this.renderTipoPregunta()
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(Preguntas, {
                            tipoPregunta: this.state.tipopregunta,
                            onChange: this.handleJson.bind(this) })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Nota(s):"
                            ),
                            React.createElement("textarea", { value: this.state.nota, name: "nota",
                                onChange: this.handleInput.bind(this), className: "form-control pregunta" })
                        )
                    )
                )
            );
        }
    }]);

    return Reactivos;
}(FormMaster);

var Answer = function (_React$Component8) {
    _inherits(Answer, _React$Component8);

    function Answer() {
        _classCallCheck(this, Answer);

        return _possibleConstructorReturn(this, (Answer.__proto__ || Object.getPrototypeOf(Answer)).apply(this, arguments));
    }

    _createClass(Answer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "col-md-8 col-sm-8" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("span", { className: "icon-trash", onClick: this.props.onDelete }),
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Opci\xF3n ",
                            parseInt(this.props.index) + 1
                        ),
                        React.createElement("input", {
                            type: "text",
                            className: "form-control",
                            name: "option",
                            onChange: this.props.onEdit,
                            value: this.props.option,
                            placeholder: "Opci\xF3n de respuesta" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-4" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Relaci\xF3n"
                        ),
                        React.createElement("input", {
                            type: "text",
                            name: "condition",
                            onChange: this.props.onEdit,
                            value: this.props.condition,
                            className: "form-control",
                            placeholder: "Prefijo" })
                    )
                )
            );
        }
    }]);

    return Answer;
}(React.Component);

var LinkedPanelAnswer = function (_React$Component9) {
    _inherits(LinkedPanelAnswer, _React$Component9);

    function LinkedPanelAnswer(props) {
        _classCallCheck(this, LinkedPanelAnswer);

        var _this16 = _possibleConstructorReturn(this, (LinkedPanelAnswer.__proto__ || Object.getPrototypeOf(LinkedPanelAnswer)).call(this, props));

        _this16.state = _this16.props.question;
        return _this16;
    }

    _createClass(LinkedPanelAnswer, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState(nextProps.question);
        }
    }, {
        key: "onEdit",
        value: function onEdit(i, e) {
            var _this17 = this;

            e.preventDefault();
            var index = parseInt(i);
            var valor = e.target.value;
            var mask = e.target.name;
            var state = this.state;
            var listaOpciones = state.options;
            state.options[index][mask] = valor;
            this.setState(state, function () {
                _this17.props.handleLinkQueston(_this17.state);
            });
        }
    }, {
        key: "onDelete",
        value: function onDelete(i, e) {
            var _this18 = this;

            e.preventDefault();
            var index = parseInt(i);
            var state = this.state;
            var listaOpciones = state.options;
            listaOpciones.splice(index, 1);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this18.props.handleLinkQueston(_this18.state);
            });
        }
    }, {
        key: "addOption",
        value: function addOption(e) {
            var _this19 = this;

            e.preventDefault();
            this;
            var state = this.state;
            var listaOpciones = [];
            if (state.options) {
                listaOpciones = state.options;
            }
            var item = {
                "option": "",
                "condition": '',
                "type": 'radio'
            };
            listaOpciones.push(item);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this19.props.handleLinkQueston(_this19.state);
            });
        }
    }, {
        key: "renderOption",
        value: function renderOption() {

            if (this.state.options) {
                var lista = this.state.options;
                var options = [];
                for (var index in lista) {

                    try {
                        options.push(React.createElement(Answer, _extends({
                            key: index + "option_anidada" + this.props.index
                        }, lista[index], {
                            index: index,
                            onEdit: this.onEdit.bind(this, index),
                            onDelete: this.onDelete.bind(this, index) })));
                    } catch (error) {
                        alert("existe una opcion que se repite en un reactivo");
                    }
                }
                return options;
            }
        }
    }, {
        key: "renderOptions",
        value: function renderOptions() {
            return React.createElement(
                "div",
                null,
                this.renderOption(),
                React.createElement(
                    "div",
                    { className: "col-md-12 text-right" },
                    React.createElement(
                        "h5",
                        null,
                        React.createElement(
                            "a",
                            {
                                onClick: this.addOption.bind(this) },
                            "Agregar opci\xF3n",
                            React.createElement("img", { src: "../../../../images/add.svg" })
                        )
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "reg-preg row" },
                this.renderOptions()
            );
        }
    }]);

    return LinkedPanelAnswer;
}(React.Component);

var LinkedPanelQuestion = function (_React$Component10) {
    _inherits(LinkedPanelQuestion, _React$Component10);

    function LinkedPanelQuestion(props) {
        _classCallCheck(this, LinkedPanelQuestion);

        var _this20 = _possibleConstructorReturn(this, (LinkedPanelQuestion.__proto__ || Object.getPrototypeOf(LinkedPanelQuestion)).call(this, props));

        _this20.state = _this20.props.question;
        return _this20;
    }

    _createClass(LinkedPanelQuestion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState(nextProps.question);
        }
    }, {
        key: "handleTextQuestion",
        value: function handleTextQuestion(e) {
            var _this21 = this;

            var valor = e.target.value;
            var mask = e.target.name;
            this.setState(_defineProperty({}, mask, valor), function () {
                _this21.props.handleLinkQueston(_this21.state);
            });
        }
    }, {
        key: "onDelete",
        value: function onDelete(i, e) {
            var _this22 = this;

            e.preventDefault();
            var index = parseInt(i);
            var state = this.state;
            var listaOpciones = state.options;
            listaOpciones.splice(index, 1);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this22.props.handleLinkQueston(_this22.state);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "reg-preg row" },
                React.createElement(
                    "div",
                    { className: "col-md-1" },
                    React.createElement("span", { className: "icon-trash", onClick: this.props.onDelete })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Pregunta"
                        ),
                        React.createElement("textarea", {
                            name: "question",
                            value: this.state.question,
                            onChange: this.handleTextQuestion.bind(this),
                            className: "form-control pregunta" })
                    )
                )
            );
        }
    }]);

    return LinkedPanelQuestion;
}(React.Component);

var LinkedGroupQuestion = function (_React$Component11) {
    _inherits(LinkedGroupQuestion, _React$Component11);

    function LinkedGroupQuestion(props) {
        _classCallCheck(this, LinkedGroupQuestion);

        var _this23 = _possibleConstructorReturn(this, (LinkedGroupQuestion.__proto__ || Object.getPrototypeOf(LinkedGroupQuestion)).call(this, props));

        _this23.state = _this23.props.question;
        return _this23;
    }

    _createClass(LinkedGroupQuestion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState(nextProps.question);
        }
    }, {
        key: "handleTextQuestion",
        value: function handleTextQuestion(e) {
            var _this24 = this;

            var valor = e.target.value;
            var mask = e.target.name;
            this.setState(_defineProperty({}, mask, valor), function () {
                _this24.props.handleLinkQueston(_this24.state);
            });
        }
    }, {
        key: "onEdit",
        value: function onEdit(i, e) {
            var _this25 = this;

            e.preventDefault();
            var index = parseInt(i);
            var valor = e.target.value;
            var mask = e.target.name;
            var state = this.state;
            var listaOpciones = state.options;
            state.options[index][mask] = valor;
            this.setState(state, function () {
                _this25.props.handleLinkQueston(_this25.state);
            });
        }
    }, {
        key: "onDelete",
        value: function onDelete(i, e) {
            var _this26 = this;

            e.preventDefault();
            var index = parseInt(i);
            var state = this.state;
            var listaOpciones = state.options;
            listaOpciones.splice(index, 1);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this26.props.handleLinkQueston(_this26.state);
            });
        }
    }, {
        key: "addOption",
        value: function addOption(e) {
            var _this27 = this;

            e.preventDefault();
            this;
            var state = this.state;
            var listaOpciones = [];
            if (state.options) {
                listaOpciones = state.options;
            }
            var item = {
                "option": "",
                "condition": '',
                "type": 'radio'
            };
            listaOpciones.push(item);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this27.props.handleLinkQueston(_this27.state);
            });
        }
    }, {
        key: "renderOption",
        value: function renderOption() {

            if (this.state.options) {
                var lista = this.state.options;
                var options = [];
                for (var index in lista) {

                    try {
                        options.push(React.createElement(Answer, _extends({
                            key: index + "option_anidada" + this.props.index
                        }, lista[index], {
                            index: index,
                            onEdit: this.onEdit.bind(this, index),
                            onDelete: this.onDelete.bind(this, index) })));
                    } catch (error) {
                        alert("existe una opcion que se repite en un reactivo");
                    }
                }
                return options;
            }
        }
    }, {
        key: "renderOptions",
        value: function renderOptions() {
            return React.createElement(
                "div",
                null,
                this.renderOption(),
                React.createElement(
                    "div",
                    { className: "col-md-12 text-right" },
                    React.createElement(
                        "h5",
                        null,
                        React.createElement(
                            "a",
                            {
                                onClick: this.addOption.bind(this) },
                            "Agregar opci\xF3n",
                            React.createElement("img", { src: "../../../../images/add.svg" })
                        )
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "reg-preg row" },
                React.createElement(
                    "div",
                    { className: "col-md-1" },
                    React.createElement("span", { className: "icon-trash", onClick: this.props.onDelete })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Para"
                        ),
                        React.createElement("input", {
                            name: "onlyTo",
                            value: this.state.onlyTo,
                            onChange: this.handleTextQuestion.bind(this),
                            className: "form-control pregunta" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Pregunta"
                        ),
                        React.createElement("textarea", {
                            name: "question",
                            value: this.state.question,
                            onChange: this.handleTextQuestion.bind(this),
                            className: "form-control pregunta" })
                    )
                ),
                this.renderOptions(),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Nota"
                        ),
                        React.createElement("textarea", {
                            name: "nota",
                            value: this.state.nota,
                            onChange: this.handleTextQuestion.bind(this),
                            className: "form-control pregunta" })
                    )
                )
            );
        }
    }]);

    return LinkedGroupQuestion;
}(React.Component);

var LinkedQuestion = function (_React$Component12) {
    _inherits(LinkedQuestion, _React$Component12);

    function LinkedQuestion(props) {
        _classCallCheck(this, LinkedQuestion);

        var _this28 = _possibleConstructorReturn(this, (LinkedQuestion.__proto__ || Object.getPrototypeOf(LinkedQuestion)).call(this, props));

        _this28.state = _this28.props.question;
        return _this28;
    }

    _createClass(LinkedQuestion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState(nextProps.question);
        }
    }, {
        key: "handleTextQuestion",
        value: function handleTextQuestion(e) {
            var _this29 = this;

            var valor = e.target.value;
            var mask = e.target.name;
            this.setState(_defineProperty({}, mask, valor), function () {
                _this29.props.handleLinkQueston(_this29.state);
            });
        }
    }, {
        key: "onEdit",
        value: function onEdit(i, e) {
            var _this30 = this;

            e.preventDefault();
            var index = parseInt(i);
            var valor = e.target.value;
            var mask = e.target.name;
            var state = this.state;
            var listaOpciones = state.options;
            state.options[index][mask] = valor;
            this.setState(state, function () {
                _this30.props.handleLinkQueston(_this30.state);
            });
        }
    }, {
        key: "onDelete",
        value: function onDelete(i, e) {
            var _this31 = this;

            e.preventDefault();
            var index = parseInt(i);
            var state = this.state;
            var listaOpciones = state.options;
            listaOpciones.splice(index, 1);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this31.props.handleLinkQueston(_this31.state);
            });
        }
    }, {
        key: "addOption",
        value: function addOption(e) {
            var _this32 = this;

            e.preventDefault();
            this;
            var state = this.state;
            var listaOpciones = [];
            if (state.options) {
                listaOpciones = state.options;
            }
            var item = {
                "option": "",
                "condition": '',
                "type": 'radio'
            };
            listaOpciones.push(item);
            state.options = listaOpciones;
            this.setState(state, function () {
                _this32.props.handleLinkQueston(_this32.state);
            });
        }
    }, {
        key: "renderOption",
        value: function renderOption() {

            if (this.state.options) {
                var lista = this.state.options;
                var options = [];
                for (var index in lista) {

                    try {
                        options.push(React.createElement(Answer, _extends({
                            key: index + "option_anidada" + this.props.index
                        }, lista[index], {
                            index: index,
                            onEdit: this.onEdit.bind(this, index),
                            onDelete: this.onDelete.bind(this, index) })));
                    } catch (error) {
                        alert("existe una opcion que se repite en un reactivo");
                    }
                }
                return options;
            }
        }
    }, {
        key: "renderOptions",
        value: function renderOptions() {
            return React.createElement(
                "div",
                null,
                this.renderOption(),
                React.createElement(
                    "div",
                    { className: "col-md-12 text-right" },
                    React.createElement(
                        "h5",
                        null,
                        React.createElement(
                            "a",
                            {
                                onClick: this.addOption.bind(this) },
                            "Agregar opci\xF3n",
                            React.createElement("img", { src: "../../../../images/add.svg" })
                        )
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "reg-preg row" },
                React.createElement(
                    "div",
                    { className: "col-md-1" },
                    React.createElement("span", { className: "icon-trash", onClick: this.props.onDelete })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Pregunta"
                        ),
                        React.createElement("textarea", {
                            name: "question",
                            value: this.state.question,
                            onChange: this.handleTextQuestion.bind(this),
                            className: "form-control pregunta" })
                    )
                ),
                this.renderOptions()
            );
        }
    }]);

    return LinkedQuestion;
}(React.Component);

var Question = function (_React$Component13) {
    _inherits(Question, _React$Component13);

    function Question(props) {
        _classCallCheck(this, Question);

        var _this33 = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));

        _this33.state = {
            reactivo: 0,
            tipopregunta: 0,
            preguntaJson: _ABIERTA,
            nota: "",
            checkUnique: true
        };
        return _this33;
    }

    _createClass(Question, [{
        key: "renderStatus",
        value: function renderStatus() {
            return STATUS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_status_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderPersonas",
        value: function renderPersonas() {
            return PERSONAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_person_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderTipoPregunta",
        value: function renderTipoPregunta() {
            return TIPOPREGUNTAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_pregunta_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderTipoReativo",
        value: function renderTipoReativo() {
            return TIPOREACTIVO.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_pregunta_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {

            this.setState({ reactivo: 0, tipopregunta: 0, preguntaJson: _ABIERTA, nota: "" });
        }
    }, {
        key: "handleReactivoType",
        value: function handleReactivoType(e) {

            var valor = parseInt(e.target.value);
            var mask = e.target.name;
            this.setState(_defineProperty({}, mask, valor));
        }
    }, {
        key: "handleQuestionType",
        value: function handleQuestionType(e) {
            var valor = parseInt(e.target.value);
            var mask = e.target.name;
            var valor;
            switch (valor) {
                case 0:
                    var jsonQ = {
                        "question": '',
                        "answer": 'undefined'
                    };
                    this.setState({ preguntaJson: jsonQ, tipopregunta: valor });
                    break;
                case 1:
                    var jsonQ = {
                        "question": '',
                        "options": [{
                            "option": "",
                            "condition": '',
                            "type": 'radio'
                        }],
                        "answer": 'undefined'
                    };

                    this.setState({ preguntaJson: jsonQ, tipopregunta: valor });
                    break;
                case 2:
                    var jsonQ = {
                        "question": '',
                        "questions": [{
                            "question": '',
                            "options": [{
                                "option": "",
                                "condition": '',
                                "type": 'radio'
                            }],
                            "answer": 'undefined'
                        }],
                        "answer": 'undefined'
                    };
                    this.setState({ preguntaJson: jsonQ, tipopregunta: valor });
                    break;
                case 3:
                    var jsonQ = {
                        "question": '',
                        "questions": [{
                            "question": '',
                            "options": [{
                                "option": "",
                                "condition": '',
                                "type": 'radio'
                            }],
                            "answer": 'undefined'
                        }],
                        "answer": 'undefined'
                    };
                    this.setState({ preguntaJson: jsonQ, tipopregunta: valor });

                    break;
                case 4:
                    var jsonQ = {
                        "question": '',
                        "questions": [{
                            "question": '',
                            "note": '',
                            "onlyTo": '',
                            "options": [{
                                "option": "",
                                "condition": '',
                                "type": 'radio'
                            }],
                            "answer": 'undefined'
                        }],
                        "repeat": 1,
                        "answer": 'undefined'
                    };
                    this.setState({ preguntaJson: jsonQ, tipopregunta: valor });
                    break;

                default:
                    break;
            }
        }
    }, {
        key: "handleTextQuestion",
        value: function handleTextQuestion(e) {
            var valor = e.target.value;
            var mask = e.target.name;
            var question = this.state.preguntaJson;
            question.question = valor;
            this.setState(_defineProperty({}, mask, question));
        }
    }, {
        key: "handleText",
        value: function handleText(e) {
            var valor = e.target.value;
            var mask = e.target.name;

            this.setState(_defineProperty({}, mask, valor));
        }
    }, {
        key: "saveClose",
        value: function saveClose(e) {
            e.preventDefault();
            this;
        }
    }, {
        key: "saveNext",
        value: function saveNext(e) {
            e.preventDefault();
            this.props.saveNext(this.state);
        }
    }, {
        key: "onEdit",
        value: function onEdit(i, e) {
            var index = parseInt(i);
            var valor = e.target.value;
            var mask = e.target.name;
            var question = this.state.preguntaJson;
            var listaOpciones = question.options;
            question.options[index][mask] = valor;
            this.setState({ preguntaJson: question });
        }
    }, {
        key: "onDelete",
        value: function onDelete(i, e) {
            e.preventDefault();
            var index = parseInt(i);
            var question = this.state.preguntaJson;
            var listaOpciones = question.options;
            listaOpciones.splice(index, 1);
            question.options = listaOpciones;
            this.setState({ preguntaJson: question });
        }
    }, {
        key: "onDeleteIndexed",
        value: function onDeleteIndexed(i, e) {
            e.preventDefault();
            var index = parseInt(i);
            var question = this.state.preguntaJson;
            var listaOpciones = question.questions;
            listaOpciones.splice(index, 1);
            question.questions = listaOpciones;
            this.setState({ preguntaJson: question });
        }
        //##move to other

    }, {
        key: "renderOption",
        value: function renderOption() {

            if (this.state.preguntaJson && this.state.preguntaJson.options) {
                var lista = this.state.preguntaJson.options;
                var options = [];
                for (var index in lista) {
                    var item = lista[index].option;
                    try {
                        options.push(React.createElement(Answer, _extends({
                            key: index + "option"
                        }, lista[index], {
                            index: index,
                            onEdit: this.onEdit.bind(this, index),
                            onDelete: this.onDelete.bind(this, index) })));
                    } catch (error) {
                        alert("existe una opcion que se repite en un reactivo");
                    }
                }
                return options;
            }
        }
        //Move other

    }, {
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var question = this.state.preguntaJson;
            var listaOpciones = question.options;
            var item = {
                "option": "",
                "condition": '',
                "type": 'radio'
            };
            listaOpciones.push(item);
            question.options = listaOpciones;
            this.setState({ preguntaJson: question, render: false });
        }
    }, {
        key: "handleChecUnique",
        value: function handleChecUnique(e) {
            var ischecked = e.target.checked;
            //Handle option types
            var typeHandle = ischecked ? "radio" : "checkbox";
            var question = this.state.preguntaJson;
            var opciones = question.options;
            opciones.map(function (i, index) {
                opciones[index].type = typeHandle;
            });
            question.options = opciones;
            this.setState({ preguntaJson: question, render: false });
            this.setState({ checkUnique: ischecked });
        }
        //## Move other

    }, {
        key: "renderOptions",
        value: function renderOptions() {
            if (this.state.tipopregunta == 1) {

                return React.createElement(
                    "div",
                    null,
                    this.renderOption(),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        this.state.preguntaJson && this.state.preguntaJson && this.state.preguntaJson.options && this.state.preguntaJson.options.length > 1 ? React.createElement(
                            "span",
                            null,
                            React.createElement("input", {
                                type: "checkbox",
                                checked: this.state.checkUnique,
                                onClick: this.handleChecUnique.bind(this),
                                className: "check-preg" }),
                            "Selecci\xF3n \xFAnica"
                        ) : ""
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6 text-right" },
                        React.createElement(
                            "h5",
                            null,
                            React.createElement(
                                "a",
                                {
                                    onClick: this.addOption.bind(this) },
                                "Agregar opci\xF3n",
                                React.createElement("img", { src: "../../../../images/add.svg" })
                            )
                        )
                    )
                );
            }
        }
    }, {
        key: "addQuestionIndexed",
        value: function addQuestionIndexed(e) {
            e.preventDefault();
            var list = this.state.preguntaJson.questions;
            var jsonQ = {
                "question": '',
                "questions": [{
                    "question": '',
                    "options": [{
                        "option": "",
                        "condition": '',
                        "type": 'radio'
                    }],
                    "answer": 'undefined'
                }],
                "answer": 'undefined'
            };
            list.push(jsonQ);
            var stateJson = this.state.preguntaJson;
            stateJson.questions = list;
            this.setState({ preguntaJson: stateJson });
        }
    }, {
        key: "handleLinkQueston",
        value: function handleLinkQueston(index, question) {
            var preguntaJson = this.state.preguntaJson;
            preguntaJson.questions[index] = question;
            this.setState({ preguntaJson: preguntaJson });
        }
    }, {
        key: "handleLinkPanelQueston",
        value: function handleLinkPanelQueston(question) {

            var preguntaJson = this.state.preguntaJson;
            preguntaJson.questions.map(function (item, index) {
                preguntaJson.questions[index].options = question.options;
            });
            this.setState({ preguntaJson: preguntaJson });
        }
    }, {
        key: "renderAnidadaGroup",
        value: function renderAnidadaGroup() {
            var _this34 = this;

            if (this.state.tipopregunta == 4 && this.state.preguntaJson.questions) {
                var listChildrens = [];
                try {
                    this.state.preguntaJson.questions.map(function (index, i) {
                        listChildrens.push(React.createElement(LinkedGroupQuestion, {
                            key: i,
                            index: i,
                            question: index,
                            onDelete: _this34.onDeleteIndexed.bind(_this34, i),
                            handleLinkQueston: _this34.handleLinkQueston.bind(_this34, i) }));
                    });
                } catch (error) {
                    alert("Code:qr502");
                }

                var renderIndexed = React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        listChildrens
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12 text-right" },
                        React.createElement(
                            "h5",
                            null,
                            React.createElement(
                                "a",
                                {
                                    onClick: this.addQuestionIndexed.bind(this) },
                                "Nueva pregunta",
                                React.createElement("img", { src: "../../../../images/add.svg" })
                            )
                        )
                    )
                );
                return renderIndexed;
            }
        }
    }, {
        key: "renderAnidada",
        value: function renderAnidada() {
            var _this35 = this;

            if (this.state.tipopregunta == 2 && this.state.preguntaJson.questions) {
                var listChildrens = [];
                try {
                    this.state.preguntaJson.questions.map(function (index, i) {
                        listChildrens.push(React.createElement(LinkedQuestion, {
                            key: i,
                            index: i,
                            question: index,
                            onDelete: _this35.onDeleteIndexed.bind(_this35, i),
                            handleLinkQueston: _this35.handleLinkQueston.bind(_this35, i) }));
                    });
                } catch (error) {
                    alert("Code:qr502");
                }

                var renderIndexed = React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        listChildrens
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12 text-right" },
                        React.createElement(
                            "h5",
                            null,
                            React.createElement(
                                "a",
                                {
                                    onClick: this.addQuestionIndexed.bind(this) },
                                "Nueva pregunta",
                                React.createElement("img", { src: "../../../../images/add.svg" })
                            )
                        )
                    )
                );
                return renderIndexed;
            }
        }
    }, {
        key: "renderAnidadaMultiple",
        value: function renderAnidadaMultiple() {
            var _this36 = this;

            if (this.state.tipopregunta == 3 && this.state.preguntaJson.questions) {
                var listQuestions;
                var listChildrens = [];
                var listChildrensOptions = [];
                try {
                    this.state.preguntaJson.questions.map(function (index, i) {
                        listChildrens.push(React.createElement(LinkedPanelQuestion, {
                            key: i,
                            index: i,
                            question: index,
                            onDelete: _this36.onDeleteIndexed.bind(_this36, i),
                            handleLinkQueston: _this36.handleLinkQueston.bind(_this36, i) }));
                    });
                } catch (error) {
                    alert("Code:QR502");
                }

                try {
                    var optionsDefaultFirstQuestion = this.state.preguntaJson.questions[0];
                    listChildrensOptions.push(React.createElement(LinkedPanelAnswer, {
                        question: optionsDefaultFirstQuestion,
                        onDelete: this.onDeleteIndexed.bind(this),
                        handleLinkQueston: this.handleLinkPanelQueston.bind(this) }));
                } catch (error) {
                    alert("Code:QRA502");
                }

                var renderIndexed = React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        listChildrens,
                        listChildrensOptions
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12 text-right" },
                        React.createElement(
                            "h5",
                            null,
                            React.createElement(
                                "a",
                                {
                                    onClick: this.addQuestionIndexed.bind(this) },
                                "Nueva pregunta",
                                React.createElement("img", { src: "../../../../images/add.svg" })
                            )
                        )
                    )
                );
                return renderIndexed;
            }
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-4" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Reactivo"
                            ),
                            React.createElement(
                                "select",
                                {
                                    value: this.state.reactivo,
                                    className: "form-control",
                                    type: "text",
                                    name: "reactivo",
                                    onChange: this.handleReactivoType.bind(this) },
                                this.renderTipoReativo()
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-4" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Prefijo"
                        ),
                        React.createElement("input", { type: "text", className: "form-control", value: this.props.prefijoPregunta })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-4" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Tipo de pregunta"
                            ),
                            React.createElement(
                                "select",
                                {
                                    value: this.state.tipopregunta,
                                    className: "form-control",
                                    name: "tipopregunta",
                                    onChange: this.handleQuestionType.bind(this) },
                                this.renderTipoPregunta()
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Pregunta"
                            ),
                            React.createElement("textarea", {
                                className: "form-control pregunta",
                                name: "preguntaJson",
                                onChange: this.handleTextQuestion.bind(this) })
                        )
                    ),
                    this.renderOptions(),
                    this.renderAnidada(),
                    this.renderAnidadaGroup(),
                    this.renderAnidadaMultiple(),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "label" },
                                "Nota(s):"
                            ),
                            React.createElement("textarea", {
                                value: this.state.nota,
                                name: "nota",
                                placeholder: "Escribe una nota.",
                                onChange: this.handleText.bind(this), className: "form-control pregunta" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "button",
                            {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: this.saveNext.bind(this) },
                            "Guardar"
                        )
                    )
                )
            );
        }
    }]);

    return Question;
}(React.Component);

var Modulo = function (_React$Component14) {
    _inherits(Modulo, _React$Component14);

    function Modulo(props) {
        _classCallCheck(this, Modulo);

        var _this37 = _possibleConstructorReturn(this, (Modulo.__proto__ || Object.getPrototypeOf(Modulo)).call(this, props));

        _this37.state = {
            spinerLoad: true,
            modulo: {}

        };
        _this37._getReactivos();

        return _this37;
    }

    _createClass(Modulo, [{
        key: "_getReactivos",
        value: function _getReactivos() {
            var _this38 = this;

            getModuloById(this.props.id, function (response) {
                if (response.data && response.data.d[0]) {
                    var respRequest = response.data.d[0];
                    try {
                        var castJsonReactivosAux = respRequest.reactivos;
                        var reactivos = JSON.parse(castJsonReactivosAux);
                        respRequest.reactivos = reactivos;
                    } catch (e) {}
                    _this38.setState({ modulo: respRequest, spinerLoad: false });
                }
            });
        }
    }, {
        key: "deleteSelected",
        value: function deleteSelected(list) {
            this.setState({ spinerLoad: true });
            list.map(function (id) {

                var couter = 0;
                var params = {
                    id: id
                };
                var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/deleteReactivo";
                axios.post(url, params).then(function (response) {
                    this.setState({ spinerLoad: true });
                    if (response && response.status == 200) {
                        this._getReactivos();
                    }
                }.bind(this)).catch(function (error) {
                    alert("No se pudo eliminar el  reactivo");
                });
            }.bind(this));
        }
    }, {
        key: "saveNext",
        value: function saveNext(question) {
            this.setState({ spinerLoad: true });
            var obj = [question.preguntaJson];
            var data = JSON.stringify(obj);
            var item = {};
            item.id = -1;
            item.id_instrumento = parseInt(this.state.modulo.id_instrumento);
            item.id_modulo = parseInt(this.state.modulo.id);
            item.dataJson = data; //;
            item.tipopregunta = question.tipopregunta;
            item.nota = question.nota;
            item.estilo = "l";
            item.estado = parseInt(0);
            item.orden = 0;
            var params = item;
            var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/saveReactivos";
            axios.post(url, params).then(function (response) {
                if (response && response.status == 200) {
                    this._getReactivos();
                }
            }.bind(this)).catch(function (error) {
                alert("No se pudo guardar el  reactivo");
            });
        }
    }, {
        key: "saveClose",
        value: function saveClose(e) {}
    }, {
        key: "render",
        value: function render() {
            if (this.state.spinerLoad == true) {
                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement("div", { className: "spinner", key: "spinnerModulo" + this.state.modulo.id })
                );
            }
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12" },
                            React.createElement(
                                "strong",
                                null,
                                this.state.modulo && this.state.modulo.modulo ? this.state.modulo.prefijo + "-" + this.state.modulo.modulo : ""
                            )
                        )
                    )
                ),
                this.props.simulation ? React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "col-md-12 col-sm-12" },
                        React.createElement(PanelPreguntas, {
                            simulation: this.props.simulation,
                            modulo: this.state.modulo,
                            deleteSelected: this.deleteSelected.bind(this) })
                    )
                ) : React.createElement(
                    "div",
                    { className: "container" },
                    this.state.modulo && this.state.modulo.reactivos ? React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { className: "col-md-5  col-sm-12 pregunta-div" },
                            React.createElement(Question, {
                                prefijoPregunta: this.state.modulo.prefijo + "." + (this.state.modulo.reactivos.length + 1),
                                saveClose: this.saveClose.bind(this),
                                saveNext: this.saveNext.bind(this) })
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-7 col-sm-12" },
                            React.createElement(PanelPreguntas, {
                                modulo: this.state.modulo,
                                deleteSelected: this.deleteSelected.bind(this) })
                        )
                    ) : ""
                )
            );
        }
    }]);

    return Modulo;
}(React.Component);

var ModalModulo = function (_React$Component15) {
    _inherits(ModalModulo, _React$Component15);

    function ModalModulo(props) {
        _classCallCheck(this, ModalModulo);

        var _this39 = _possibleConstructorReturn(this, (ModalModulo.__proto__ || Object.getPrototypeOf(ModalModulo)).call(this, props));

        _this39.addGrupo = function (e) {
            e.preventDefault();
            var _this39$state = _this39.state,
                listaGrupos = _this39$state.listaGrupos,
                grupoId = _this39$state.grupoId,
                listaGruposSelected = _this39$state.listaGruposSelected;

            var item = listaGrupos.find(function (x) {
                return x.IdGrupo == grupoId;
            });
            if (item.IdGrupo && item.NombreGrupo) {
                if (listaGruposSelected.length != 0) {
                    var exist = listaGruposSelected.findIndex(function (x) {
                        return x.IdGrupo.toUpperCase() == grupoId.toUpperCase();
                    });
                    if (exist == -1) {
                        listaGruposSelected.push({ IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo });
                        _this39.setState({ listaGruposSelected: listaGruposSelected, grupoId: "" });
                    }
                } else if (listaGruposSelected.length == 0) {
                    listaGruposSelected.push({ IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo });
                    _this39.setState({ listaGruposSelected: listaGruposSelected, grupoId: "" });
                }
            }
        };

        _this39.save = function (e) {
            e.preventDefault();
            _this39.setState({ loading: true });
            var state = _this39.state;
            state.grupos = state.listaGruposSelected.map(function (g) {
                return g.IdGrupo;
            });
            if (_this39.validar(state)) {
                saveModulo(state, function (response) {
                    window.location.href = "#/admin/instrumentos";
                });
            }
        };

        _this39.goInstrumentos = function (e) {
            e.preventDefault();
            _this39.setState(_this39.state.init);
            window.location.href = "#/admin/instrumentos";
        };

        _this39.state = {
            id: -1,
            modulo: "",
            prefijo: "",
            leyenda: "",
            estado: 1,
            orden: 0,
            id_instrumento: _this39.props.instrumentoId ? _this39.props.instrumentoId : 0,
            estadoId: "",
            municipioId: "",
            comunidadId: "",
            grupoId: "",
            listaGruposSelected: [],
            loading: false
        };
        getEstados("vacio", function (response) {

            if (response && response.data && response.data.d) {
                _this39.setState({ listaEstados: response.data.d });
            }
        });

        return _this39;
    }

    _createClass(ModalModulo, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nexProps) {
            var _this40 = this;

            var id = nexProps.moduloId;
            if (id != undefined && nexProps.show == true && nexProps.instrumentoId == undefined) {

                getModuloById(id, function (response) {
                    if (id && response.data.d[0]) {
                        var _response$data$d$ = response.data.d[0],
                            modulo = _response$data$d$.modulo,
                            _id = _response$data$d$.id,
                            id_instrumento = _response$data$d$.id_instrumento,
                            state = _response$data$d$.state,
                            orden = _response$data$d$.orden,
                            prefijo = _response$data$d$.prefijo,
                            grupos = _response$data$d$.grupos;


                        _this40.setState({ modulo: modulo, id: _id, id_instrumento: id_instrumento, state: state, orden: orden, prefijo: prefijo, grupos: grupos });
                    }
                });
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
    }, {
        key: "renderStatus",
        value: function renderStatus() {
            return STATUS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_status_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderPersonas",
        value: function renderPersonas() {
            return PERSONAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_person_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderTipoPregunta",
        value: function renderTipoPregunta() {
            return TIPOPREGUNTAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_pregunta_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderTipoReativo",
        value: function renderTipoReativo() {
            return TIPOREACTIVO.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_pregunta_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            var _this41 = this;

            e.preventDefault();
            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "aplicado" || mask == "estado") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }
            this.setState(_defineProperty({}, mask, valor), function () {
                _this41.validar(_this41.state);
            });
            switch (mask) {
                case "estadoId":
                    this.setState({ municipioId: "", comunidadId: "", grupoId: "" });
                    getMunicipios(valor, function (response) {
                        if (response && response.data && response.data.d) {
                            _this41.setState({ listaMunicipios: response.data.d });
                        }
                    });
                    break;
                case "municipioId":
                    getComunidades(valor, function (response) {
                        if (response && response.data && response.data.d) {
                            _this41.setState({ listaComunidades: response.data.d });
                        }
                    });
                    break;
                case "comunidadId":

                    getGrupos(valor, function (response) {

                        if (response && response.data && response.data.d) {
                            _this41.setState({ listaGrupos: response.data.d });
                        }
                    });
                    break;
                case "grupoId":

                    break;

                default:
                    break;
            }
        }
    }, {
        key: "renderGrupos",
        value: function renderGrupos() {
            if (this.state && this.state.listaGrupos) {
                var lista = this.state.listaGrupos;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "municiipo_select", value: item.IdGrupo },
                        item.NombreGrupo
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "renderComunidades",
        value: function renderComunidades() {
            if (this.state && this.state.listaComunidades) {
                var lista = this.state.listaComunidades;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "comunidad_select", value: item.IdComunidad },
                        item.NombreComunidad
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "renderMunicipios",
        value: function renderMunicipios() {
            if (this.state && this.state.listaMunicipios) {
                var lista = this.state.listaMunicipios;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "municiipo_select", value: item.IdMunicipios },
                        item.NombreMunicipio
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "renderEstados",
        value: function renderEstados() {
            if (this.state && this.state.listaEstados) {
                var lista = this.state.listaEstados;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "estado_select", value: item.IdEstado },
                        item.NombreEstado
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "validar",
        value: function validar(state) {
            var errors = {};
            var isValid = true;
            if (state.nombre == "") {
                errors.nombre = "Falta por poner el nombre del instrumento";
                isValid = false;
            }
            this.setState({ loading: false, errors: errors, id_instrumento: this.props.instrumentoId });
            return isValid;
        }
    }, {
        key: "render",
        value: function render() {
            var listagruposRender = [];
            var listaGruposSelected = this.state.listaGruposSelected;

            if (listaGruposSelected && listaGruposSelected.length > 0) {
                listaGruposSelected.map(function (item, i) {
                    listagruposRender.push(React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "a",
                            { key: i + "listagrupos_instrumentos" },
                            item.NombreGrupo
                        )
                    ));
                });
            }
            var errors = this.state.errors;

            return React.createElement(
                Modal,
                { show: this.props.show, dialogClassName: "modal-dialog modal-md" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "button",
                            { type: "button", className: "close", onClick: this.goInstrumentos },
                            React.createElement(
                                "span",
                                null,
                                "\xD7"
                            )
                        ),
                        React.createElement(
                            "h4",
                            { className: "modal-title" },
                            this.props.title
                        )
                    ),
                    React.createElement(
                        Modal.Body,
                        null,
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Nombre del  m\xF3dulo"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        placeholder: "Ej. m\xF3dulo A",
                                        type: "text",
                                        name: "modulo",
                                        value: this.state.modulo,
                                        onChange: this.handleInput.bind(this) }),
                                    " ",
                                    errors && errors.nombre != "" ? React.createElement(
                                        "span",
                                        { className: "errorMsg" },
                                        errors.nombre
                                    ) : ""
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Prefijo"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        placeholder: "Ej. IA",
                                        type: "text",
                                        name: "prefijo",
                                        value: this.state.prefijo,
                                        onChange: this.handleInput.bind(this) })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Estado"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.estadoId,
                                            name: "estadoId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_estado_select", value: "" },
                                            "Selecciona"
                                        ),
                                        this.renderEstados()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Municipio"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.municipioId,
                                            name: "municipioId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_Muni_select", value: "" },
                                            "Selecciona "
                                        ),
                                        this.renderMunicipios()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Comunidad"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.comunidadId,
                                            name: "comunidadId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_comunidad_select", value: "" },
                                            "Selecciona "
                                        ),
                                        this.renderComunidades()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Grupo"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.grupoId,
                                            name: "grupoId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_grupo_select", value: "" },
                                            "Selecciona "
                                        ),
                                        this.renderGrupos()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4 col-sm-12" },
                                this.state.grupoId != "" ? React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        Button,
                                        { bsSize: "xsmall", onClick: this.addGrupo },
                                        "+ Agregar grupo"
                                    )
                                ) : undefined
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                "lista de grupos ",
                                listagruposRender
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Estado del instrumento:"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.estado,
                                            name: "estado",
                                            onChange: this.handleInput.bind(this) },
                                        this.renderStatus()
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        Modal.Footer,
                        null,
                        this.state.loading ? React.createElement("div", { className: "spinnerFixed", key: "spinnerInstrumentomodal_" }) : React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "button",
                                { className: "btn btn-default", onClick: this.goInstrumentos },
                                "Cancelar"
                            ),
                            React.createElement(
                                "button",
                                { className: "btn btn-primary", onClick: this.save },
                                "Aceptar"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ModalModulo;
}(React.Component);

var ModalInstrumento = function (_React$Component16) {
    _inherits(ModalInstrumento, _React$Component16);

    function ModalInstrumento(props) {
        _classCallCheck(this, ModalInstrumento);

        var _this42 = _possibleConstructorReturn(this, (ModalInstrumento.__proto__ || Object.getPrototypeOf(ModalInstrumento)).call(this, props));

        _this42.addGrupo = function (e) {
            e.preventDefault();
            var _this42$state = _this42.state,
                listaGrupos = _this42$state.listaGrupos,
                grupoId = _this42$state.grupoId,
                listaGruposSelected = _this42$state.listaGruposSelected;

            var item = listaGrupos.find(function (x) {
                return x.IdGrupo == grupoId;
            });
            if (item.IdGrupo && item.NombreGrupo) {
                if (listaGruposSelected.length != 0) {
                    var exist = listaGruposSelected.findIndex(function (x) {
                        return x.IdGrupo.toUpperCase() == grupoId.toUpperCase();
                    });
                    if (exist == -1) {
                        listaGruposSelected.push({ IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo });
                        _this42.setState({ listaGruposSelected: listaGruposSelected, grupoId: "" });
                    }
                } else if (listaGruposSelected.length == 0) {
                    listaGruposSelected.push({ IdGrupo: item.IdGrupo, NombreGrupo: item.NombreGrupo });
                    _this42.setState({ listaGruposSelected: listaGruposSelected, grupoId: "" });
                }
            }
        };

        _this42.save = function (e) {
            e.preventDefault();
            _this42.setState({ loading: true });
            var state = _this42.state;
            state.grupos = state.listaGruposSelected.map(function (g) {
                return g.IdGrupo;
            });
            if (_this42.validar(state)) {
                saveInstrumento(state, function (response) {
                    _this42.setState(_this42.state.init);
                    window.location.href = "#/admin/instrumentos";
                });
            }
        };

        _this42.goInstrumentos = function (e) {
            e.preventDefault();
            _this42.setState(_this42.state.init);
            window.location.href = "#/admin/instrumentos";
        };

        _this42.state = {
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
            loading: false

        };
        getEstados("vacio", function (response) {

            if (response && response.data && response.data.d) {
                _this42.setState({ listaEstados: response.data.d });
            }
        });

        return _this42;
    }

    _createClass(ModalInstrumento, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nexProps) {
            var _this43 = this;

            var props = nexProps;
            if (props.id && props.show == true) {
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
                    loading: false

                };
                this.setState(state);
                getInstrumentoById(props.id, function (response) {
                    if (response && response.data && response.data.d[0]) {
                        var _response$data$d$2 = response.data.d[0],
                            nombre = _response$data$d$2.nombre,
                            prefijo = _response$data$d$2.prefijo,
                            subtitulo = _response$data$d$2.subtitulo,
                            estado = _response$data$d$2.estado,
                            orden = _response$data$d$2.orden,
                            aplicado = _response$data$d$2.aplicado,
                            id = _response$data$d$2.id,
                            estadoId = _response$data$d$2.estadoId,
                            municipioId = _response$data$d$2.municipioId,
                            comunidadId = _response$data$d$2.comunidadId,
                            grupoId = _response$data$d$2.grupoId;

                        var listaGruposSelected = [];
                        _this43.setState({ nombre: nombre, prefijo: prefijo, subtitulo: subtitulo, estado: estado, orden: orden, aplicado: aplicado, id: id, estadoId: estadoId, municipioId: municipioId, comunidadId: comunidadId, grupoId: grupoId });
                        try {
                            if (response.data.d[0].grupos != "") {
                                listaGruposSelected = JSON.parse(response.data.d[0].grupos);
                                _this43.setState({ listaGruposSelected: listaGruposSelected });
                            }
                        } catch (error) {}
                    }
                });
            }
        }
    }, {
        key: "renderStatus",
        value: function renderStatus() {
            return STATUS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_status_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "renderPersonas",
        value: function renderPersonas() {
            return PERSONAS.map(function (i) {
                return React.createElement(
                    "option",
                    { key: i.id + "_person_option_", value: i.id },
                    i.data
                );
            });
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            var _this44 = this;

            e.preventDefault();
            var valorAux = e.target.value;
            var mask = e.target.name;
            var valor;
            if (mask == "aplicado" || mask == "estado") {
                valor = parseInt(valorAux);
            } else {
                valor = valorAux;
            }
            this.setState(_defineProperty({}, mask, valor), function () {
                _this44.validar(_this44.state);
            });
            switch (mask) {
                case "estadoId":
                    this.setState({ municipioId: "", comunidadId: "", grupoId: "" });
                    getMunicipios(valor, function (response) {
                        if (response && response.data && response.data.d) {
                            _this44.setState({ listaMunicipios: response.data.d });
                        }
                    });
                    break;
                case "municipioId":
                    getComunidades(valor, function (response) {
                        if (response && response.data && response.data.d) {
                            _this44.setState({ listaComunidades: response.data.d });
                        }
                    });
                    break;
                case "comunidadId":

                    getGrupos(valor, function (response) {

                        if (response && response.data && response.data.d) {
                            _this44.setState({ listaGrupos: response.data.d });
                        }
                    });
                    break;
                case "grupoId":

                    break;

                default:
                    break;
            }
        }
    }, {
        key: "renderGrupos",
        value: function renderGrupos() {
            if (this.state && this.state.listaGrupos) {
                var lista = this.state.listaGrupos;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "municiipo_select", value: item.IdGrupo },
                        item.NombreGrupo
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "renderComunidades",
        value: function renderComunidades() {
            if (this.state && this.state.listaComunidades) {
                var lista = this.state.listaComunidades;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "comunidad_select", value: item.IdComunidad },
                        item.NombreComunidad
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "renderMunicipios",
        value: function renderMunicipios() {
            if (this.state && this.state.listaMunicipios) {
                var lista = this.state.listaMunicipios;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "municiipo_select", value: item.IdMunicipios },
                        item.NombreMunicipio
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "renderEstados",
        value: function renderEstados() {
            if (this.state && this.state.listaEstados) {
                var lista = this.state.listaEstados;
                return lista.map(function (item, i) {
                    return React.createElement(
                        "option",
                        { key: i + "estado_select", value: item.IdEstado },
                        item.NombreEstado
                    );
                });
            }
            return React.createElement(
                "option",
                { value: "" },
                "Seleccione"
            );
        }
    }, {
        key: "validar",
        value: function validar(state) {
            var errors = {};
            var isValid = true;
            if (state.nombre == "") {
                errors.nombre = "Falta por poner el nombre del instrumento";
                isValid = false;
            }
            this.setState({ loading: false, errors: errors });
            return isValid;
        }
    }, {
        key: "render",
        value: function render() {
            var listagruposRender = [];
            var listaGruposSelected = this.state.listaGruposSelected;

            if (listaGruposSelected && listaGruposSelected.length > 0) {
                listaGruposSelected.map(function (item, i) {
                    listagruposRender.push(React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "a",
                            { key: i + "listagrupos_instrumentos" },
                            item.NombreGrupo
                        )
                    ));
                });
            }
            var errors = this.state.errors;

            return React.createElement(
                Modal,
                { show: this.props.show, dialogClassName: "modal-dialog modal-md" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "button",
                            {
                                type: "button",
                                className: "close",
                                onClick: this.goInstrumentos
                            },
                            React.createElement(
                                "span",
                                null,
                                "\xD7"
                            )
                        ),
                        React.createElement(
                            "h4",
                            { className: "modal-title" },
                            " ",
                            this.props.title
                        )
                    ),
                    React.createElement(
                        Modal.Body,
                        null,
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Nombre"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        placeholder: "Ej. intrumento A",
                                        type: "text",
                                        name: "nombre",
                                        value: this.state.nombre,
                                        onChange: this.handleInput.bind(this) }),
                                    errors && errors.nombre != "" ? React.createElement(
                                        "span",
                                        { className: "errorMsg" },
                                        errors.nombre
                                    ) : ""
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Subt\xEDtulo"
                                    ),
                                    React.createElement("input", {
                                        className: "form-control",
                                        type: "text",
                                        value: this.state.subtitulo,
                                        placeholder: "Ej. Ni\xF1os con sobrepeso",
                                        name: "subtitulo",
                                        onChange: this.handleInput.bind(this) })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Aplica a:"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.aplicado,
                                            name: "aplicado",
                                            onChange: this.handleInput.bind(this) },
                                        this.renderPersonas()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Estado"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.estadoId,
                                            name: "estadoId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_estado_select", value: "" },
                                            "Selecciona"
                                        ),
                                        this.renderEstados()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Municipio"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.municipioId,
                                            name: "municipioId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_Muni_select", value: "" },
                                            "Selecciona "
                                        ),
                                        this.renderMunicipios()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Comunidad"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.comunidadId,
                                            name: "comunidadId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_comunidad_select", value: "" },
                                            "Selecciona "
                                        ),
                                        this.renderComunidades()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Grupo"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.grupoId,
                                            name: "grupoId",
                                            onChange: this.handleInput.bind(this) },
                                        React.createElement(
                                            "option",
                                            { key: 0 + "init_grupo_select", value: "" },
                                            "Selecciona "
                                        ),
                                        this.renderGrupos()
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4 col-sm-12" },
                                this.state.grupoId != "" ? React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        Button,
                                        { bsSize: "xsmall", onClick: this.addGrupo },
                                        "+ Agregar grupo"
                                    )
                                ) : undefined
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-12" },
                                "lista de grupos ",
                                listagruposRender
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Estado del instrumento:"
                                    ),
                                    React.createElement(
                                        "select",
                                        {
                                            className: "form-control",
                                            value: this.state.estado,
                                            name: "estado",
                                            onChange: this.handleInput.bind(this) },
                                        this.renderStatus()
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        Modal.Footer,
                        null,
                        this.state.loading ? React.createElement("div", { className: "spinnerFixed", key: "spinnerInstrumentomodal_" }) : React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "button",
                                { className: "btn btn-default", onClick: this.goInstrumentos },
                                "Cancelar"
                            ),
                            React.createElement(
                                "button",
                                { className: "btn btn-primary", onClick: this.save },
                                "Aceptar"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ModalInstrumento;
}(React.Component);

var Instrumentos = function (_React$Component17) {
    _inherits(Instrumentos, _React$Component17);

    function Instrumentos(props) {
        _classCallCheck(this, Instrumentos);

        var _this45 = _possibleConstructorReturn(this, (Instrumentos.__proto__ || Object.getPrototypeOf(Instrumentos)).call(this, props));

        _this45.state = {};
        _this45.state.item = {};

        _this45.state.listaIntrumentos = [];
        _this45.state.spinerLoad = true;
        getadminInstrumentos(_this45.setStatePromise.bind(_this45));
        // this.getIntrumentosWS()

        return _this45;
    }

    _createClass(Instrumentos, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            if (newProps.id) {
                this.setState({ spinerLoad: true });
                getadminInstrumentos(this.setStatePromise.bind(this));
            }
        }
    }, {
        key: "setStatePromise",
        value: function setStatePromise(resp) {
            var instrumentos = resp.data.d;
            this.setState({ listaIntrumentos: instrumentos, spinerLoad: false });
        }
    }, {
        key: "renderInstrumentos",
        value: function renderInstrumentos() {
            var _this46 = this;

            if (this.state.listaIntrumentos) {
                var listaIntrumentos = [];

                this.state.listaIntrumentos.map(function (item) {
                    listaIntrumentos.push(React.createElement(Instrumento, { key: item.nombre + item.id + "_lista_instrumentos_", item: item, active: _this46.props.id }));
                });

                return listaIntrumentos;
            } else {
                return React.createElement(
                    "h1",
                    null,
                    "No hay instrumentos"
                );
            }
        }
    }, {
        key: "render",
        value: function render() {

            if (this.state.spinerLoad == true) {
                return React.createElement("div", { className: "spinner", key: "spinnerInstrumento_" });
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-7 col-sm-7" },
                            React.createElement(
                                "h1",
                                null,
                                "Instrumentos"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-5 col-sm-5 text-right" },
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "a",
                                    { href: "#/admin/instrumentos/nuevo", className: "btn btn-primary btn-sm" },
                                    "Instrumento"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "bg-full padding-top-10" },
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "content-form col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "row header-intrumentos" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-4 col-sm-4" },
                                        "Nombre del instrumento"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-3 col-sm-3" },
                                        "\xDAltima modificaci\xF3n"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 col-sm-2" },
                                        "Aplicaci\xF3n a"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 col-sm-2" },
                                        "Estado"
                                    ),
                                    React.createElement("div", null)
                                ),
                                React.createElement(
                                    "div",
                                    { className: "panel-group instrumentos-l" },
                                    this.renderInstrumentos()
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Instrumentos;
}(React.Component);

var InstrumentosView = function (_React$Component18) {
    _inherits(InstrumentosView, _React$Component18);

    function InstrumentosView(props) {
        _classCallCheck(this, InstrumentosView);

        var _this47 = _possibleConstructorReturn(this, (InstrumentosView.__proto__ || Object.getPrototypeOf(InstrumentosView)).call(this, props));

        _this47.state = {};
        _this47.state.item = {};

        _this47.state.listaIntrumentos = [];
        _this47.state.spinerLoad = true;
        getadminInstrumentos(_this47.setStatePromise.bind(_this47));
        // this.getIntrumentosWS()

        return _this47;
    }

    _createClass(InstrumentosView, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            if (newProps.id) {
                this.setState({ spinerLoad: true });
                getadminInstrumentos(this.setStatePromise.bind(this));
            }
        }
    }, {
        key: "setStatePromise",
        value: function setStatePromise(resp) {
            var instrumentos = resp.data.d;
            this.setState({ listaIntrumentos: instrumentos, spinerLoad: false });
        }
    }, {
        key: "renderInstrumentos",
        value: function renderInstrumentos() {
            var _this48 = this;

            if (this.state.listaIntrumentos) {
                var listaIntrumentos = [];

                this.state.listaIntrumentos.map(function (item) {
                    listaIntrumentos.push(React.createElement(InstrumentoView, { key: item.nombre + item.id + "_lista_instrumentos_", item: item, active: _this48.props.id }));
                });

                return listaIntrumentos;
            } else {
                return React.createElement(
                    "h1",
                    null,
                    "No hay instrumentos"
                );
            }
        }
    }, {
        key: "render",
        value: function render() {

            if (this.state.spinerLoad == true) {
                return React.createElement("div", { className: "spinner", key: "spinnerInstrumento_" });
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-7 col-sm-7" },
                            React.createElement(
                                "h1",
                                null,
                                "Instrumentos"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "bg-full padding-top-10" },
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "content-form col-md-12" },
                                React.createElement(
                                    "div",
                                    { className: "row header-intrumentos" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-4 col-sm-4" },
                                        "Nombre del instrumento"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-3 col-sm-3" },
                                        "\xDAltima modificaci\xF3n"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 col-sm-2" },
                                        "Aplicaci\xF3n a"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 col-sm-2" },
                                        "Estado"
                                    ),
                                    React.createElement("div", null)
                                ),
                                React.createElement(
                                    "div",
                                    { className: "panel-group instrumentos-l" },
                                    this.renderInstrumentos()
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return InstrumentosView;
}(React.Component);

var ModuloInRow = exports.ModuloInRow = function (_React$Component19) {
    _inherits(ModuloInRow, _React$Component19);

    function ModuloInRow(props) {
        _classCallCheck(this, ModuloInRow);

        var _this49 = _possibleConstructorReturn(this, (ModuloInRow.__proto__ || Object.getPrototypeOf(ModuloInRow)).call(this, props));

        _this49.state = {};
        _this49.state.showModalDelete = false;

        return _this49;
    }

    _createClass(ModuloInRow, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "row table-rw-2" },
                React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-4 long-txt" },
                    this.props.item.modulo
                ),
                React.createElement(
                    "div",
                    { className: "col-md-2 col-sm-2 text-center" },
                    this.props.item.prefijo
                ),
                React.createElement(
                    "div",
                    { className: "col-md-2 col-sm-2 text-center" },
                    this.props.item.estado != null ? STATUS[this.props.item.estado].data : "Sin estado"
                ),
                React.createElement(
                    "div",
                    { className: "col-md-1 col-sm-1 " },
                    React.createElement(
                        "div",
                        { className: "dropdown" },
                        React.createElement(
                            "a",
                            { "data-toggle": "dropdown" },
                            React.createElement("img", { src: "../../../images/menu.svg", alt: "Acciones", height: "28" })
                        ),
                        React.createElement(
                            "ul",
                            { className: "dropdown-menu", "aria-labelledby": "dropdownMenu1" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    null,
                                    React.createElement("img", { src: "../../../images/enable.svg", alt: "Activar instrumento", height: "18" }),
                                    "Activar"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#/admin/instrumentos/modulos/editar/" + this.props.item.id },
                                    React.createElement("img", {
                                        src: "../../../images/edit.svg",
                                        alt: "Editar nombre del m\xF3dulo",
                                        height: "18" }),
                                    "Editar"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#/admin/instrumentos/modulos/eliminar/" + this.props.item.id },
                                    React.createElement("img", {
                                        src: "../../../images/erase-gray.svg",
                                        alt: "Eliminar el m\xF3dulo",
                                        height: "18" }),
                                    "Eliminar"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#/admin/instrumentos/modulos/" + this.props.item.id
                                    },
                                    React.createElement("img", { src: "../../../images/add.svg", alt: "Agregar m\xF3dulo", height: "18" }),
                                    "Agregar pregunta"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ModuloInRow;
}(React.Component);

var Instrumento = function (_React$Component20) {
    _inherits(Instrumento, _React$Component20);

    function Instrumento(props) {
        _classCallCheck(this, Instrumento);

        var _this50 = _possibleConstructorReturn(this, (Instrumento.__proto__ || Object.getPrototypeOf(Instrumento)).call(this, props));

        _this50.state = { isOpened: false };
        _this50.state.showModal = false;
        _this50.state.showModalDelete = false;

        var modulos = [];
        try {
            modulos = JSON.parse(_this50.props.item.modulos);
        } catch (error) {}

        _this50.state.listaModulos = modulos;

        return _this50;
    }

    _createClass(Instrumento, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.active && nextProps.item && nextProps.item.id == nextProps.active) {
                this.setState({ isOpened: true });
            }
        }
    }, {
        key: "renderModulos",
        value: function renderModulos() {
            if (this.state.listaModulos.length > 0) {
                ;
                var listItems = this.state.listaModulos.map(function (item) {
                    return React.createElement(ModuloInRow, {

                        key: item.id + "_lista_modulo_",
                        item: item });
                });
                return listItems;
            }
            return React.createElement(
                "h3",
                null,
                "No cuenta con modulos"
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this51 = this;

            var isOpened = this.state.isOpened;

            return React.createElement(
                "div",
                { className: "panel panel-default" },
                React.createElement(
                    "div",
                    { className: "panel-heading" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            {
                                className: "panel-title long-txt col-md-4 col-sm-4",
                                onClick: function onClick() {
                                    return _this51.setState({
                                        isOpened: !_this51.state.isOpened
                                    });
                                } },
                            React.createElement(
                                "a",
                                {
                                    className: !this.state.isOpened ? "collapsed" : "" },
                                React.createElement(
                                    "span",
                                    null,
                                    React.createElement("img", {
                                        src: isOpened ? "../../../images/arrw-down.svg" : "../../../images/arrw-down.svg",
                                        className: "rotate2" })
                                ),
                                this.props.item.nombre + " / " + this.props.item.subtitulo + " / " + this.props.item.prefijo
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-3 col-sm-3" },
                            moment(this.props.item.fechaCreacion).format('MM/DD/YYYY, h:mm:ss')
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2 long-txt" },
                            this.props.item.aplicado ? PERSONAS[this.props.item.aplicado].data : "No asigando"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2 " },
                            this.props.item.estado != null ? STATUS[this.props.item.estado].data : "Sin estado"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-1 col-sm-1 text-right" },
                            React.createElement(
                                "div",
                                { className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { "data-toggle": "dropdown" },
                                    React.createElement("img", { src: "../../../images/menu.svg", alt: "Acciones", height: "28" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown-menu", "aria-labelledby": "dropdownMenu1" },
                                    React.createElement(
                                        "li",
                                        { className: "dropdown-header" },
                                        "Instrumento"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#/admin/instrumentos/editar/" + this.props.item.id },
                                            React.createElement("img", { src: "../../../images/enable.svg", alt: "Activar instrumento", height: "18" }),
                                            "Activar"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#/admin/instrumentos/editar/" + this.props.item.id },
                                            React.createElement("img", {
                                                src: "../../../images/edit.svg",
                                                alt: "Editar  instrumento",
                                                height: "18" }),
                                            "Editar"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#/admin/instrumentos/eliminar/" + this.props.item.id },
                                            React.createElement("img", {
                                                src: "../../../images/erase-gray.svg",
                                                alt: "Eliminar el instrumento",
                                                height: "18" }),
                                            "Eliminar"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "dropdown-header" },
                                        "Modulo"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#/admin/instrumentos/modulos/nuevo/" + this.props.item.id },
                                            React.createElement("img", { src: "../../../images/add.svg", alt: "Agregar m\xF3dulo", height: "18" }),
                                            "Agregar m\xF3dulo"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "dropdown-header" },
                                        "Preguntas"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#/instrumento/" + this.props.item.id },
                                            React.createElement("img", { src: "../../../images/add.svg", alt: "Agregar pregunta", height: "18" }),
                                            "Agregar pregunta"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#/admin/instrumentos/simulacion/" + this.props.item.id },
                                            React.createElement("img", { src: "../../../images/enable.svg", alt: "Visualizar instrumento", height: "18" }),
                                            "Visualizar"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "panel-collapse " },
                    React.createElement(
                        Collapse,
                        { isOpened: isOpened },
                        React.createElement(
                            "div",
                            { className: "panel-body" },
                            React.createElement(
                                "div",
                                { className: "col-md-10 col-sm-10 modulos" },
                                React.createElement(
                                    "div",
                                    { className: "row header-modulos" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-4 col-sm-4" },
                                        "Nombre del m\xF3dulo"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 col-sm-2 text-center" },
                                        "Prefijo"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2 col-sm-2 text-center" },
                                        "Estado"
                                    )
                                ),
                                this.renderModulos()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Instrumento;
}(React.Component);

var InstrumentoView = function (_React$Component21) {
    _inherits(InstrumentoView, _React$Component21);

    function InstrumentoView(props) {
        _classCallCheck(this, InstrumentoView);

        var _this52 = _possibleConstructorReturn(this, (InstrumentoView.__proto__ || Object.getPrototypeOf(InstrumentoView)).call(this, props));

        _this52.state = { isOpened: false };
        _this52.state.showModal = false;
        _this52.state.showModalDelete = false;

        var modulos = [];
        try {
            modulos = JSON.parse(_this52.props.item.modulos);
        } catch (error) {}

        _this52.state.listaModulos = modulos;

        return _this52;
    }

    _createClass(InstrumentoView, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.active && nextProps.item && nextProps.item.id == nextProps.active) {
                this.setState({ isOpened: true });
            }
        }
    }, {
        key: "renderModulos",
        value: function renderModulos() {
            if (this.state.listaModulos.length > 0) {
                ;
                var listItems = this.state.listaModulos.map(function (item) {
                    return React.createElement(ModuloInRow, {

                        key: item.id + "_lista_modulo_",
                        item: item });
                });
                return listItems;
            }
            return React.createElement(
                "h3",
                null,
                "No cuenta con modulos"
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this53 = this;

            var isOpened = this.state.isOpened;

            return React.createElement(
                "div",
                { className: "panel panel-default" },
                React.createElement(
                    "div",
                    { className: "panel-heading" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            {
                                className: "panel-title long-txt col-md-4 col-sm-4",
                                onClick: function onClick() {
                                    return _this53.setState({
                                        isOpened: !_this53.state.isOpened
                                    });
                                } },
                            React.createElement(
                                "a",
                                {
                                    className: !this.state.isOpened ? "collapsed" : "" },
                                this.props.item.nombre + " / " + this.props.item.subtitulo + " / " + this.props.item.prefijo
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-3 col-sm-3" },
                            moment(this.props.item.fechaCreacion).format('MM/DD/YYYY, h:mm:ss')
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2 long-txt" },
                            this.props.item.aplicado ? PERSONAS[this.props.item.aplicado].data : "No asigando"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2 " },
                            this.props.item.estado != null ? STATUS[this.props.item.estado].data : "Sin estado"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-1 col-sm-1 text-right" },
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "a",
                                    { href: "#/pdc/instrumentos/aplicar/" + this.props.item.aplicado, className: "btn btn-primary btn-sm" },
                                    "Aplicar"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return InstrumentoView;
}(React.Component);

var PDCListChildrens = function (_React$Component22) {
    _inherits(PDCListChildrens, _React$Component22);

    function PDCListChildrens(props) {
        _classCallCheck(this, PDCListChildrens);

        var _this54 = _possibleConstructorReturn(this, (PDCListChildrens.__proto__ || Object.getPrototypeOf(PDCListChildrens)).call(this, props));

        _this54.state = {
            childrends: [],
            countList: 0,
            loading: false
        };
        getChildrends("", function (response) {
            debugger;
            if (response && response.data && response.data.d && response.data.d.length > 0) {
                var list = response.data.d;
                console.log();
                this.setState({ childrends: list, loading: false });
            }
        }.bind(_this54));

        return _this54;
    }

    _createClass(PDCListChildrens, [{
        key: "renderChildrendsCandidateNAR",
        value: function renderChildrendsCandidateNAR() {

            var childrends = this.state.childrends;
            debugger;
            if (childrends.length > 0) {
                var renderList = [];
                var countList = 0;
                childrends.map(function (child, index) {
                    var lastSomatometria = child.listaSomatometrias[0];
                    if (lastSomatometria.dxPE == "MODERADO" || lastSomatometria.dxPE == "GRAVE") {
                        countList++;
                        var nar = {};
                        nar.lastSomatometriaDate = lastSomatometria.date;
                        nar.dxPE = lastSomatometria.dxPE;
                        nar.lastPeso = lastSomatometria.peso;
                        var almostlast = child.listaSomatometrias[1];
                        if (almostlast) {
                            nar.difPeso = Math.abs(lastSomatometria.peso - almostlast.peso);
                        } else {
                            nar.difPeso = 0;
                        }
                        renderList.push(React.createElement(FSRowChildren, { key: "chillistnar" + index, child: child, nar: nar }));
                    }
                });
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        null,
                        "Total:",
                        countList
                    ),
                    React.createElement(
                        "div",
                        { className: "row table-header" },
                        React.createElement(
                            "div",
                            { className: "col-md-1 col-sm-1" },
                            "No. fam."
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-3" },
                            "Socia"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4 col-sm-3" },
                            "Ni\xF1o"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-5 col-sm-5" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-1 col-sm-2" },
                                    "#V. NAR"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-1 col-sm-2" },
                                    "#V. ANT"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-3 col-sm-2" },
                                    "\xDAltima medici\xF3n"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    "Dx P/E"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    "\xDAltimo peso(Kg)"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    "Dif. de peso (gr)"
                                )
                            )
                        )
                    ),
                    renderList
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loading == true) {
                return React.createElement("div", { className: "spinner", key: "spinnerInstrumento_" });
            }
            return React.createElement(
                "div",
                null,
                this.renderChildrendsCandidateNAR()
            );
        }
    }]);

    return PDCListChildrens;
}(React.Component);

var FSChildrenNar = function (_React$Component23) {
    _inherits(FSChildrenNar, _React$Component23);

    function FSChildrenNar(props) {
        _classCallCheck(this, FSChildrenNar);

        var _this55 = _possibleConstructorReturn(this, (FSChildrenNar.__proto__ || Object.getPrototypeOf(FSChildrenNar)).call(this, props));

        _this55.state = {
            open: false,
            key: 1
        };
        return _this55;
    }

    _createClass(FSChildrenNar, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            $('.datepicker').datepicker();
        }
    }, {
        key: "onToogle",
        value: function onToogle(e) {
            e.preventDefault();
            this.setState({
                open: !this.state.open
            });
        }
    }, {
        key: "handleSelect",
        value: function handleSelect(key) {
            alert('selected ' + key);
            this.setState({ key: key });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "bg-full-width bg-grey" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: " row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-12" },
                                    React.createElement(
                                        "div",
                                        {
                                            onClick: this.onToogle.bind(this) },
                                        React.createElement(
                                            "span",
                                            null,
                                            React.createElement("img", { src: "../../../../../images/arrw-down.svg" })
                                        ),
                                        React.createElement(
                                            "label",
                                            null,
                                            React.createElement(
                                                "strong",
                                                null,
                                                "NICOLE SOSA SOSA"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "container" },
                                    React.createElement(
                                        Collapse,
                                        { isOpened: this.state.open },
                                        React.createElement(
                                            "div",
                                            { className: "row" },
                                            React.createElement(
                                                "div",
                                                { className: "col-md-3 col-sm-3 icon-info" },
                                                React.createElement(
                                                    "span",
                                                    { className: "icon-bullet" },
                                                    React.createElement("img", { src: "../../../../../images/inf.svg" })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-6 col-sm-6" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Fecha nacimiento"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "16/04/2013"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-6 col-sm-6" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Sexo"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "Femenino"
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-6 col-sm-6" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "No. de familia"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "12"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-6 col-sm-6" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "NSS / SP"
                                                            ),
                                                            React.createElement("input", { name: "ctl00$MainContent$numeross", type: "text", className: "form-control" })
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "col-md-4 col-sm-4 icon-info" },
                                                React.createElement(
                                                    "span",
                                                    { className: "icon-bullet" },
                                                    React.createElement("img", { src: "../../../../../images/fisica.svg" })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-6 col-sm-6" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Peso al nacer"
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "input-group" },
                                                                React.createElement("input", { name: "ctl00$MainContent$txtpesoInicial", className: "form-control" }),
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "input-group-addon" },
                                                                    "Kg"
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-6 col-sm-6" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Tall al nacer"
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "input-group" },
                                                                React.createElement("input", { name: "ctl00$MainContent$txttallaInicial", className: "form-control" }),
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "input-group-addon" },
                                                                    "cm"
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-12" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Diagnostico previo de sobrepeso / obesidad"
                                                            ),
                                                            React.createElement("input", {
                                                                name: "ctl00$MainContent$txtDiagnosticoObesidad",
                                                                className: "form-control" })
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "col-md-5 col-sm-5 icon-info" },
                                                React.createElement(
                                                    "span",
                                                    { className: "icon-bullet" },
                                                    React.createElement("img", { src: "../../../../../images/loc.svg", alt: "" })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-4" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Estado"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "ESTADO DE M\xC9XICO"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-4" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Municipio"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "ACULCO"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-4" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Comunidad"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "ACULCO"
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-4" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "CEDIT"
                                                            ),
                                                            React.createElement(
                                                                "p",
                                                                { className: "form-control" },
                                                                "ACULCO"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-4" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Domicilio"
                                                            ),
                                                            React.createElement("input", { name: "domicilio", className: "form-control" })
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-4" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { className: "label" },
                                                                "Facilitador"
                                                            ),
                                                            React.createElement(
                                                                "span",
                                                                { className: "form-control" },
                                                                "admin"
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-12 text-right" },
                                                        React.createElement(
                                                            "button",
                                                            { className: "btn btn-primary btn-sm" },
                                                            "Guardar"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "bg-grey-2 padding-top-20" },
                        React.createElement(
                            "div",
                            { className: "container-fluid" },
                            React.createElement(
                                "div",
                                { className: "row", id: "Visit" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-10 col-sm-10" },
                                    React.createElement(
                                        "ul",
                                        { className: "nav nav-tabs", role: "tablist" },
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { id: "lnkbtnEditar", className: "tabdev" },
                                                "Basal"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { id: "lnkbtnEditar", className: "tabdev" },
                                                "Visita 1"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2 text-right" },
                                    React.createElement(
                                        "button",
                                        { className: "btn btn-primary btn-sm" },
                                        "Nueva visita"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "padding-top-10  bg-grey" },
                        React.createElement(
                            "div",
                            { className: "container-fluid" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-12 col-sm-12  text-right" },
                                    React.createElement(
                                        "button",
                                        { className: "btn btn-default btn-sm" },
                                        "Eliminar"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-12 col-sm-12" },
                                    React.createElement(
                                        "strong",
                                        null,
                                        React.createElement(
                                            "h1",
                                            { className: "marcado" },
                                            "Basal"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    React.createElement(
                                        "label",
                                        { className: "label" },
                                        "Fecha de visita"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement("input", { type: "text", className: "datepicker" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement(
                                            "label",
                                            { className: "label" },
                                            "Edad"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "input-group" },
                                            React.createElement("input", { name: "edad", className: "aspNetDisabled form-control" }),
                                            React.createElement(
                                                "div",
                                                { className: "input-group-addon" },
                                                "meses"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-12 col-sm-12" },
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Estado de nutrici\xF3n"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement(
                                            "label",
                                            { className: "label" },
                                            "Peso"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "input-group" },
                                            React.createElement("input", { name: "peso", className: "form-control" }),
                                            React.createElement(
                                                "div",
                                                { className: "input-group-addon" },
                                                "kg"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement(
                                            "label",
                                            { className: "label" },
                                            "Talla"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "input-group" },
                                            React.createElement("input", { name: "talla", className: "form-control" }),
                                            React.createElement(
                                                "div",
                                                { className: "input-group-addon" },
                                                "cm"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement(
                                            "label",
                                            { className: "label", "data-original-title": "\xCDndice de Masa Corporal" },
                                            "IMC"
                                        ),
                                        React.createElement("input", { name: "imc", className: "form-control" })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FSChildrenNar;
}(React.Component);

var FSManagerFilters = function (_React$Component24) {
    _inherits(FSManagerFilters, _React$Component24);

    function FSManagerFilters(props) {
        _classCallCheck(this, FSManagerFilters);

        var _this56 = _possibleConstructorReturn(this, (FSManagerFilters.__proto__ || Object.getPrototypeOf(FSManagerFilters)).call(this, props));

        _this56.state = {
            fsOrden: "NumFamilia",
            fsEstado: "0",
            fsTexto: "" };
        return _this56;
    }

    _createClass(FSManagerFilters, [{
        key: "sendFilters",
        value: function sendFilters(e) {
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row table-control" },
                React.createElement(
                    "div",
                    { className: "col-md-2 col-sm-2" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "select",
                            {
                                name: "fsOrden",
                                className: "form-control",
                                placeholder: "Selecciona el orden" },
                            React.createElement(
                                "option",
                                { value: "NumFamilia" },
                                "No. Familia"
                            ),
                            React.createElement(
                                "option",
                                { value: "NombreCuidador" },
                                "Nombre socia"
                            ),
                            React.createElement(
                                "option",
                                { value: "NombreNinio" },
                                "Nombre ninio"
                            ),
                            React.createElement(
                                "option",
                                { value: "FechaNacimiento" },
                                "Fecha de nacimiento"
                            ),
                            React.createElement(
                                "option",
                                { value: "Genero" },
                                "Sexo"
                            ),
                            React.createElement(
                                "option",
                                { value: "DiagnosticoPesoEdad" },
                                "Dx P/E"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-2  col-sm-2" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "select",
                            {
                                name: "fsEstado",
                                className: "form-control",
                                placeholder: "Selecciona el orden" },
                            React.createElement(
                                "option",
                                { value: "0" },
                                "Activo"
                            ),
                            React.createElement(
                                "option",
                                { value: "1" },
                                "Inactivo"
                            ),
                            React.createElement(
                                "option",
                                { value: "2" },
                                "Todos"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-4" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "div",
                            { className: "input-group" },
                            React.createElement("input", {
                                name: "fsTexto",
                                type: "text",
                                className: "form-control",
                                placeholder: "Buscar por nombre" }),
                            React.createElement(
                                "span",
                                { className: "input-group-btn" },
                                React.createElement("input", {
                                    onClick: this.sendFilters.bind(this),
                                    type: "button",
                                    value: "Buscar",
                                    className: "btn btn-default" })
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-4 text-right" },
                    React.createElement("input", {
                        type: "button",
                        value: "Descargar excel",
                        id: "MainContent_Button1",
                        className: "btn btn-primary btn-sm"
                    })
                )
            );
        }
    }]);

    return FSManagerFilters;
}(React.Component);

var PDCManagerFilters = function (_React$Component25) {
    _inherits(PDCManagerFilters, _React$Component25);

    function PDCManagerFilters(props) {
        _classCallCheck(this, PDCManagerFilters);

        var _this57 = _possibleConstructorReturn(this, (PDCManagerFilters.__proto__ || Object.getPrototypeOf(PDCManagerFilters)).call(this, props));

        _this57.state = {
            fsOrden: "NumFamilia",
            fsEstado: "0",
            fsTexto: "" };
        return _this57;
    }

    _createClass(PDCManagerFilters, [{
        key: "sendFilters",
        value: function sendFilters(e) {
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row table-control" },
                React.createElement(
                    "div",
                    { className: "col-md-2 col-sm-2" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "select",
                            {
                                name: "fsOrden",
                                className: "form-control",
                                placeholder: "Selecciona el orden" },
                            React.createElement(
                                "option",
                                { value: "NumFamilia" },
                                "No. Familia"
                            ),
                            React.createElement(
                                "option",
                                { value: "NombreCuidador" },
                                "Nombre socia"
                            ),
                            React.createElement(
                                "option",
                                { value: "NombreNinio" },
                                "Nombre ninio"
                            ),
                            React.createElement(
                                "option",
                                { value: "FechaNacimiento" },
                                "Fecha de nacimiento"
                            ),
                            React.createElement(
                                "option",
                                { value: "Genero" },
                                "Sexo"
                            ),
                            React.createElement(
                                "option",
                                { value: "DiagnosticoPesoEdad" },
                                "Dx P/E"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-2  col-sm-2" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "select",
                            {
                                name: "fsEstado",
                                className: "form-control",
                                placeholder: "Selecciona el orden" },
                            React.createElement(
                                "option",
                                { value: "0" },
                                "Activo"
                            ),
                            React.createElement(
                                "option",
                                { value: "1" },
                                "Inactivo"
                            ),
                            React.createElement(
                                "option",
                                { value: "2" },
                                "Todos"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-4" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "div",
                            { className: "input-group" },
                            React.createElement("input", {
                                name: "fsTexto",
                                type: "text",
                                className: "form-control",
                                placeholder: "Buscar por nombre" }),
                            React.createElement(
                                "span",
                                { className: "input-group-btn" },
                                React.createElement("input", {
                                    onClick: this.sendFilters.bind(this),
                                    type: "button",
                                    value: "Buscar",
                                    className: "btn btn-default" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PDCManagerFilters;
}(React.Component);

var NavigationState = function (_React$Component26) {
    _inherits(NavigationState, _React$Component26);

    function NavigationState() {
        _classCallCheck(this, NavigationState);

        return _possibleConstructorReturn(this, (NavigationState.__proto__ || Object.getPrototypeOf(NavigationState)).apply(this, arguments));
    }

    _createClass(NavigationState, [{
        key: "render",
        value: function render() {
            var _this59 = this;

            var nav = [];
            this.props.navigatorHistory.map(function (n, i) {
                if (i == _this59.props.navigatorHistory.length - 1) {
                    nav.push(React.createElement(
                        "li",
                        { key: "nav_h" + i },
                        n.name
                    ));
                } else {
                    nav.push(React.createElement(
                        "li",
                        { key: "nav_h" + i },
                        React.createElement(
                            "a",
                            { href: n.routing },
                            n.name
                        )
                    ));
                }
            });
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "header",
                    null,
                    React.createElement(
                        "div",
                        { className: "container-fluid no-print" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-8 col-sm-8 col-xs-12" },
                                React.createElement(
                                    "div",
                                    { className: "logo no-print" },
                                    React.createElement(
                                        "a",
                                        { href: "/Miembros/MenuPrincipal", id: "lnkLogo" },
                                        React.createElement("img", { className: "logo no-print", src: "/images/login-logo.png" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "tit-sis no-print" },
                                    React.createElement(
                                        "span",
                                        null,
                                        "MEDIR Y DIAGNOSTICAR"
                                    ),
                                    React.createElement("br", null),
                                    React.createElement(
                                        "span",
                                        null,
                                        this.props.location ? this.props.location.municipio + ", " : ""
                                    ),
                                    React.createElement(
                                        "span",
                                        null,
                                        this.props.location ? this.props.location.grupo : ""
                                    ),
                                    React.createElement("br", null),
                                    React.createElement(
                                        "span",
                                        null,
                                        this.props.location ? this.props.location.estado : ""
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-4 col-sm-4 col-xs-12  text-right no-print" },
                                React.createElement(
                                    "div",
                                    { className: "sesion no-print" },
                                    React.createElement("i", { className: "icon-user" }),
                                    React.createElement(
                                        "a",
                                        { href: "/" },
                                        this.props.user ? this.props.user.username : ""
                                    ),
                                    "|",
                                    React.createElement(
                                        "a",
                                        { href: "/" },
                                        "Cerrar Sesi\xF3n"
                                    )
                                )
                            ),
                            React.createElement("div", { className: "col-sm-6 col-sm-offset-6" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12 col-sm-12" },
                            React.createElement(
                                "ol",
                                { className: "breadcrumb" },
                                nav
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "bg-full padding-top-10" },
                    React.createElement(
                        "div",
                        { className: "container" },
                        this.props && this.props.children ? this.props.children : undefined
                    )
                ),
                React.createElement(
                    "footer",
                    null,
                    "\xA0"
                )
            );
        }
    }]);

    return NavigationState;
}(React.Component);

NavigationState.propTypes = {
    children: React.PropTypes.element.isRequired
};

var FSRowChildren = function (_React$Component27) {
    _inherits(FSRowChildren, _React$Component27);

    function FSRowChildren() {
        _classCallCheck(this, FSRowChildren);

        return _possibleConstructorReturn(this, (FSRowChildren.__proto__ || Object.getPrototypeOf(FSRowChildren)).apply(this, arguments));
    }

    _createClass(FSRowChildren, [{
        key: "render",
        value: function render() {
            //Falta evaluar datos de Visita con Somatometria
            return React.createElement(
                "div",
                { className: "row table-rw" },
                React.createElement(
                    "div",
                    { className: "col-md-1 col-sm-1" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12" },
                            this.props.child.numeroFamilia
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-2 col-sm-2" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12" },
                            this.props.child.cuidadorNombreCompleto
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-4" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12" },
                            React.createElement(
                                "a",
                                { href: "#/fichanar/" + this.props.child.id },
                                React.createElement("img", { src: "/images/apply.svg", alt: "Capturar ficha", height: "18" }),
                                React.createElement(
                                    "strong",
                                    null,
                                    " ",
                                    this.props.child.ninoNombreCompleto
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4 col-sm-4 nino-inf" },
                            React.createElement(
                                "span",
                                { className: "txt-sm" },
                                "Fecha nac."
                            ),
                            React.createElement("br", null),
                            this.props.child.fechaNacimineto
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-5 col-sm-5 nino-inf" },
                            React.createElement(
                                "span",
                                { className: "txt-sm" },
                                "Edad en meses"
                            ),
                            React.createElement("br", null),
                            this.props.child.edadMeses
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-3 col-sm-3 nino-inf" },
                            React.createElement(
                                "span",
                                { className: "txt-sm" },
                                "Sexo"
                            ),
                            React.createElement("br", null),
                            this.props.child.sexo
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-5 col-sm-5" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-1 col-sm-1" },
                            "3"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-1 col-sm-2" },
                            this.props.child.listaSomatometrias.length
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-3 col-sm-2" },
                            this.props.nar.lastSomatometriaDate
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2" },
                            this.props.nar.dxPE
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2" },
                            this.props.nar.lastPeso,
                            " Kg"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-2" },
                            this.props.nar.difPeso,
                            "g"
                        ),
                        React.createElement("div", { className: "col-md-1 col-sm-1" })
                    )
                )
            );
        }
    }]);

    return FSRowChildren;
}(React.Component);

var FSListChildrens = function (_React$Component28) {
    _inherits(FSListChildrens, _React$Component28);

    function FSListChildrens(props) {
        _classCallCheck(this, FSListChildrens);

        var _this61 = _possibleConstructorReturn(this, (FSListChildrens.__proto__ || Object.getPrototypeOf(FSListChildrens)).call(this, props));

        _this61.state = {
            childrends: [],
            countList: 0,
            loading: true
        };
        getChildrends("", function (response) {
            if (response && response.data && response.data.d) {
                this.setState({ childrends: response.data.d, loading: false });
            }
        }.bind(_this61));
        return _this61;
    }

    _createClass(FSListChildrens, [{
        key: "renderChildrendsCandidateNAR",
        value: function renderChildrendsCandidateNAR() {
            var childrends = this.state.childrends;
            if (childrends) {
                var renderList = [];
                var countList = 0;
                childrends.map(function (child, index) {
                    var lastSomatometria = child.listaSomatometrias[0];
                    if (lastSomatometria.dxPE == "MODERADO" || lastSomatometria.dxPE == "GRAVE") {
                        countList++;
                        var nar = {};
                        nar.lastSomatometriaDate = lastSomatometria.date;
                        nar.dxPE = lastSomatometria.dxPE;
                        nar.lastPeso = lastSomatometria.peso;
                        var almostlast = child.listaSomatometrias[1];
                        if (almostlast) {
                            nar.difPeso = Math.abs(lastSomatometria.peso - almostlast.peso);
                        } else {
                            nar.difPeso = 0;
                        }
                        renderList.push(React.createElement(FSRowChildren, { key: "chillistnar" + index, child: child, nar: nar }));
                    }
                });
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        null,
                        "Total:",
                        countList
                    ),
                    React.createElement(
                        "div",
                        { className: "row table-header" },
                        React.createElement(
                            "div",
                            { className: "col-md-1 col-sm-1" },
                            "No. fam."
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-2 col-sm-3" },
                            "Socia"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4 col-sm-3" },
                            "Ni\xF1o"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-5 col-sm-5" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-1 col-sm-2" },
                                    "#V. NAR"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-1 col-sm-2" },
                                    "#V. ANT"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-3 col-sm-2" },
                                    "\xDAltima medici\xF3n"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    "Dx P/E"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    "\xDAltimo peso(Kg)"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 col-sm-2" },
                                    "Dif. de peso (gr)"
                                )
                            )
                        )
                    ),
                    renderList
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loading == false) {
                return React.createElement("div", { className: "spinner", key: "spinnerInstrumento_" });
            }
            return React.createElement(
                "div",
                null,
                this.renderChildrendsCandidateNAR()
            );
        }
    }]);

    return FSListChildrens;
}(React.Component);

var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Popover = ReactBootstrap.Popover;
var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button;
var Fade = ReactBootstrap.Fade;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
var Collapse = ReactCollapse.Collapse;
moment.locale('es');

var App = function (_React$Component29) {
    _inherits(App, _React$Component29);

    function App(props) {
        _classCallCheck(this, App);

        var _this62 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this62.validUser = function () {
            getUser(function (response) {
                if (response && response.data && response.data.d) {}
            });
        };

        _this62.helloWorld = function () {
            alert("se activa conteiner");
        };

        _this62.fichanar = function (id) {
            _this62.setState({ controller: "fichanar" });
        };

        _this62.state = {
            controller: "/",
            modalInstrumento: false,
            modalModulo: false,
            idNinio: undefined,
            modalCondition: false
        };
        getLocation(function (response) {
            if (response && response.data && response.data.d) {
                this.setState({ location: response.data.d });
            }
        }.bind(_this62));
        getUser(function (response) {
            if (response && response.data && response.data.d) {
                _this62.setState({ user: response.data.d });
            }
        });
        return _this62;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this63 = this;

            var router = Router({
                '/admin': {
                    on: this.validUser,
                    '/instrumentos': {
                        on: function on() {
                            _this63.setState({ controller: "admininstrumentos", modalCondition: undefined, moduloId: undefined, modalInstrumento: undefined, modalModulo: undefined });
                        },
                        '/nuevo': function nuevo() {
                            _this63.setState({ modalInstrumento: true, controller: "admininstrumentos" });
                        },
                        '/eliminar/:id': function eliminarId(id) {
                            var i = parseInt(id);
                            _this63.setState({ modalCondition: true, instrumentoId: i, controller: "admininstrumentos" });
                        },
                        '/editar/:id': function editarId(id) {
                            var i = parseInt(id);
                            _this63.setState({ instrumentoId: i, modalInstrumento: true, controller: "admininstrumentos" });
                        },
                        '/simulacion/:id': function simulacionId(id) {
                            var i = parseInt(id);
                            _this63.setState({ instrumentoId: i, controller: "simulacion" });
                        },
                        '/modulos': {
                            '/:id': function id(_id2) {
                                var i = parseInt(_id2);
                                _this63.setState({ id: _id2, controller: "modulo" });
                            },
                            '/nuevo/:id': function nuevoId(id) {
                                var i = parseInt(id);
                                _this63.setState({ modalModulo: true, instrumentoId: i, controller: "admininstrumentos" });
                            },
                            '/eliminar/:id': function eliminarId(id) {
                                var i = parseInt(id);
                                _this63.setState({ modalCondition: true, instrumentoId: i, focusHandle: "modulo", controller: "admininstrumentos" });
                            },
                            '/editar/:id': function editarId(id) {
                                var i = parseInt(id);
                                _this63.setState({ modalModulo: true, instrumentoId: i, moduloId: i, controller: "admininstrumentos" });
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
                        '/aplicar/:id': function aplicarId(id) {
                            _this63.setState({ controller: "aplicarInstrumento" });
                        },
                        on: function on() {
                            _this63.setState({ controller: "instrumentos" });
                        }
                    }
                },
                '/pdf': {
                    '/fichas': {
                        '/nar': {
                            '/:id': this.fichanar,
                            on: function on() {
                                _this63.setState({ controller: "nar" });
                            }
                        },
                        '/obesidad': function obesidad() {
                            _this63.setState({ controller: "nar" });
                        },
                        '/embarazo': function embarazo() {
                            _this63.setState({ controller: "nar" });
                        }
                    },
                    '/somatometria': function somatometria() {
                        _this63.setState({ controller: "nar" });
                    },
                    '/reporte': function reporte() {
                        _this63.setState({ controller: "nar" });
                    },
                    '/grafica': function grafica() {
                        _this63.setState({ controller: "nar" });
                    }
                }
            });

            router.init('/');
            // router.configure({html5history: true});
        }
    }, {
        key: "saveIntrumento",
        value: function saveIntrumento(state) {
            this.setState({ modalInstrumento: false });
            window.history.back();
        }
    }, {
        key: "render",
        value: function render() {
            var renderConteiner;
            var navigatorState = [{
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
            }, {
                name: "Instrumentos",
                routing: "#/pdc/instrumentos"
            }, {
                name: "Candidatos",
                routing: "#/pdc/instrumentos/aplicar/"
            }];
            var navigatorHistory = [];
            switch (this.state.controller) {
                case "nar":
                    navigatorHistory = navigatorState.slice(0, 3);
                    renderConteiner = React.createElement(
                        "div",
                        null,
                        React.createElement(FSManagerFilters, null),
                        React.createElement(FSListChildrens, null)
                    );
                    break;
                case "fichanar":
                    navigatorHistory = navigatorState.slice(0, 4);
                    renderConteiner = React.createElement(
                        "div",
                        null,
                        React.createElement(FSChildrenNar, { idNinio: this.state.idNinio })
                    );
                    break;

                case "aplicarInstrumento":
                    navigatorHistory = _.concat(navigatorState[0], navigatorState[6], navigatorState[7]);
                    /*
                    switch (key) {
                        case value:
                              break;
                          default:
                            break;
                    }*/
                    renderConteiner = React.createElement(
                        "div",
                        null,
                        React.createElement(PDCManagerFilters, null),
                        React.createElement(PDCListChildrens, null)
                    );
                    break;

                case "modulo":
                    renderConteiner = React.createElement(
                        "div",
                        null,
                        React.createElement(Modulo, { id: this.state.id })
                    );
                    break;
                case "simulacion":
                    var params = {
                        id: this.state.instrumentoId
                    };
                    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentoId";
                    var listaIdModulos = [];
                    if (this.state.listaModulos) {
                        this.state.listaModulos.map(function (item, index) {
                            listaIdModulos.push(React.createElement(Modulo, { key: index, id: item.id, simulation: true }));
                        });
                    } else {
                        axios.post(url, params).then(function (response) {
                            if (response && response.data && response.data.d[0].modulos != "") {
                                var modulos = JSON.parse(response.data.d[0].modulos);
                                this.setState({ listaModulos: modulos });
                            } else {
                                this.setState({ listaModulos: [] });
                            }
                        }.bind(this)).catch(function (error) {
                            alert("No se pudo obtener datos");
                        });
                    }
                    renderConteiner = listaIdModulos;
                    break;
                case "instrumentos":
                    navigatorHistory = _.concat(navigatorState[0], navigatorState[6]);
                    renderConteiner = React.createElement(
                        "div",
                        null,
                        React.createElement(InstrumentosView, null)
                    );
                    break;
                case "admininstrumentos":
                    renderConteiner = React.createElement(
                        "div",
                        null,
                        React.createElement(ModalCondition, {
                            id: this.state.instrumentoId,
                            focusHandle: this.state.focusHandle,
                            show: this.state.modalCondition }),
                        React.createElement(ModalInstrumento, {
                            id: this.state.instrumentoId,
                            show: this.state.modalInstrumento,
                            title: "Instrumento" }),
                        React.createElement(ModalModulo, {
                            instrumentoId: this.state.instrumentoId,
                            moduloId: this.state.moduloId,
                            show: this.state.modalModulo,
                            title: "Modulo" }),
                        React.createElement(Instrumentos, { id: this.state.instrumentoId })
                    );
                    break;

                    initModalInstrumento;
                default:

                    renderConteiner = React.createElement(
                        "h1",
                        null,
                        "URL no existe"
                    );
                    break;
            }
            return React.createElement(
                NavigationState,
                {
                    navigatorHistory: navigatorHistory,
                    location: this.state.location,
                    user: this.state.user },
                renderConteiner
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('appUnkiloDeAyuda'));