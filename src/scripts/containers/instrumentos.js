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

var searchByPrefijo = function(params , callback){
    

                        debugger
                        //Obtener solo el prefijo 
                        var onlyText =params.prefijo.split(/[0-9]+/);
                        var params = {
                            prefijo: onlyText[0],
                            id_modulo: parseInt(params.idModulo),
                            id_instrumento: parseInt(params.idInstrumento)
                        };
                        var url = URLUKA+"/Miembros/IN/Admin/AdminIN.aspx/searchByPrefijo";
                        axios
                            .post(url, params)
                            .then(function (response) {
                                callback(response)


                            }.bind(this))
                            .catch(function (error) {
                                alert("No se pudo obtener datos de ese prefijo")
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