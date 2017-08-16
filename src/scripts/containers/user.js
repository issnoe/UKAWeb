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
    const url = "APP.aspx/getUser";
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

var getChildrends = function (callback) {
    const url = "APP.aspx/getSomatometria";
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
            // alert("No se pudo obtener datos de somatometria")
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
