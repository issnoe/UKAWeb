
var castJson = function(data){
    try {
        var preguntaJsonTrim = data.trim()
        var preguntaJsonTrimS = preguntaJsonTrim.split("\n");
        var preguntaDef = preguntaJsonTrimS;
        
    } catch (error) {
        console.log(error)
    }
    finally{
        return (JSON.parse(preguntaDef)[0]);
        
    }
  
    
}