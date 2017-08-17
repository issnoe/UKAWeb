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