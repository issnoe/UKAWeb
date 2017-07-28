var getLocation = function (id, callback) {
    const url = "APP.aspx/getlocation";
    var params = {
        idEstado: localStorage.getItem("UKAidEstado"),
        idMunicipio: localStorage.getItem("UKAidMunicipo"),
        idComunidad: localStorage.getItem("UKAidComunidad"),
        idGrupo: localStorage.getItem("UKAidGrupo"),
    };
    axios
        .post(url,params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
           // alert("No se pudo obtener datos de la localidad")
        });
}
    var getUser = function (id, callback) {
    const url = "APP.aspx/getUser";
    var params = {
        id: localStorage.getItem("UKAidUsuario"),
       
    };
    axios
        .post(url,params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
           // alert("No se pudo obtener datos de la localidad")
        });
}

var getChildrends = function (id, callback) {
    const url = "APP.aspx/getSomatometria";
   var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo,
        textoBusqueda:"",
        orden:"Familia",
        fichaseguimiento:"NAR"

    };
    axios
        .post(url,params)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
           // alert("No se pudo obtener datos de somatometria")
        });
}

