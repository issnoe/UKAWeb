const urlContex = "http://localhost:25585/Miembros/IN/Admin/AdminIN.aspx/";

var getInstrumentos = function () {
    const url = urlContex + "/getSomatometria";
    var idGrupo = localStorage.getItem("UKAidGrupo")
   
    axios
        .post(url)
        .then(function (response) {
            debugger
            callback(response)
        })
        .catch(function (error) {
            // alert("No se pudo obtener datos de somatometria")
        });

}