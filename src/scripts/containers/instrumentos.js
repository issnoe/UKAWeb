var getadminInstrumentos = function (callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentos";
    var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo,
         filterStatus:false
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
    var getInstrumentos = function (callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getInstrumentos";
    var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo,
        filterStatus:true
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


var getReactivosrespuestasbyModuloId=function(id, callback){
    
    var idd= parseInt(id)
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/getReactivosrespuestasbyModuloId";//";
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
//
var getCandidatos = function(filters,callback) {
    if(filters._instrumentoId){
    var url = "APP.aspx/getCandidatos";
    var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        instrumentoId:filters._instrumentoId,
        idGrupo: idGrupo,
        textoBusqueda: "",
        fechaAplicacion:"",
        isActivo:true,
        orden: "Familia"
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
}

var setReactivo = function (params,callback){
    var url = "APP.aspx/setReactivo";
    var params = {
        aplicacionIdCurrentEncuesta:params.aplicacionIdCurrentEncuesta,
        aplicacionReactivoInstrumento:params.aplicacionReactivoInstrumento,
        dataJson:params.dataJson,
        respuesta:params.respuesta
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

var getAplicacionInstrumento = function (params,callback){
    var url = "APP.aspx/getAplicacionInstrumento";
    var params = {
        aplicacionId:params.aplicacionId,
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

var getReactivo = function (params,callback){
    var url = "APP.aspx/getReactivo";
    var params = {
        aplicacionReactivoInstrumento:params.aplicacionReactivoInstrumento,
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

var getTreeReactivos = function (params,callback){
    var url = "APP.aspx/getTreeReactivos";
    var params = {
        aplicacionIdCurrentEncuesta:params.aplicacionIdCurrentEncuesta,
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
var handleGenerateAplicacionInstrumento = function(params,callback) {
    var url = "APP.aspx/handleGenerateAplicacionInstrumento";
    var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        aplicacionIdCurrentEncuesta:params.aplicacionIdCurrentEncuesta,
        candidato: params.candidato,
        instrumentoId: params.instrumentoId ,
        fechaInicio:"01/09/2017",
       
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



var deleteInstrumento = function (id, callback) {
    var url = URLUKA + "/Miembros/IN/Admin/AdminIN.aspx/deleteIntrumento";
    var params = {
        id: id
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