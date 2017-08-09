
var getadminInstrumentos = function (callback) {
    const url = URLUKA+"/Miembros/IN/Admin/AdminIN.aspx/getInstrumentos";
   var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo,
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