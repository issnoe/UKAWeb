import { URLUKA } from "./Const"
var axios = require('axios');
export var getLocation = function (callback) {
    var url = URLUKA + "/Miembros/WS/APP.aspx/getlocation";
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
export var getUser = function (callback) {
    var url = URLUKA + "/Miembros/WS/APP.aspx/getUser";
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
    var url = URLUKA + "/Miembros/WS/APP.aspx/getSomatometria";
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
        var s = error;
        // alert("No se pudo obtener datos de la localidad")
    });
}

var getEstados = function (callback) {
    const url = URLUKA + "/Miembros/WS/APP.aspx/getEstados";
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
    const url = URLUKA + "/Miembros/WS/APP.aspx/getEstados";
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
    const url = URLUKA + "/Miembros/WS/APP.aspx/getMunicipios";
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
    const url = URLUKA + "/Miembros/WS/APP.aspx/getComunidades";
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
    const url = URLUKA + "/Miembros/WS/APP.aspx/getGrupos";
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
