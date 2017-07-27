var getChildrends = function (id, callback) {
    const url = "APP.aspx/getSomatometria";
   
   var idGrupo = localStorage.getItem("UKAidGrupo")
    var params = {
        idGrupo: idGrupo,
        textoBusqueda:"",
        orden:"",
        fichaseguimiento:"NAR"

    };

    //string idGrupo, string textoBusqueda, string orden
    axios
        .post(url,params)
        .then(function (response) {
            debugger;
            callback(response)
        })
        .catch(function (error) {
            alert("No se pudo obtener datos de somatometria")
        });
}

