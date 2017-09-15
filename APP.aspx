﻿<%@ Page Language="C#" AutoEventWireup="false" CodeBehind="APP.aspx.cs" Inherits="InfoKilo.WebApp.Miembros.WS.APP" %>

<!DOCTYPE html>
<html>
<head>
<title>UKA</title>
    <meta charset="utf-8">
   
    <meta name="viewport" content="width=device-width, initial-scale=1">

       <script src="../../Scripts/jquery.min.js"  ></script>
    <script src="../../Scripts/jquery-ui.min.js"  ></script>
    <script src="../../Scripts/bootstrap.min.js"  ></script>
    <script src="../../Scripts/moment-with-locales.js"  ></script>
    <script src="../../Scripts/src-react/prop-types.min.js"  ></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"  ></script>
    <script src="../../Scripts/src-react/react.js"  ></script>
    <script src="../../Scripts/src-react/react-dom.js"  ></script>
     <script src="../../Scripts/src-react/lodash.min.js" async ></script>
    <script src="../../Scripts/src-react/babel.min.js"  ></script>
    <link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
    <script src="../../Scripts/src-react/director.min.js"  ></script>
    <script src="../../Scripts/react-bootstrap.min.js"  ></script>
    <script src="../../../Scripts/src-react/react-motion.js"  ></script>
    <script src="../../Scripts/src-react/react-collapse.min.js"  ></script>
    <script src="../../Scripts/bootstrap-datetimepicker.min.js" async ></script>


    <link rel="stylesheet"  type="text/css" href="../../css/bootstrap.min.css" />
    <link rel="stylesheet"  href="../../css/bootstrap-theme.min.css">
    <link rel="stylesheet"  href="../../css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet"  type="text/css" href="../../css/icons.css" />
    <link rel="stylesheet"  type="text/css" href="../../css/flexslider.css" />
    <link rel="stylesheet"  type="text/css" href="../../css/style.css" />
     <link rel="stylesheet"  type="text/css" href="../../css/form.css" />
    <link rel="stylesheet"  type="text/css" href="../../css/xt.css" />
    <link rel="stylesheet"  type="text/css" href="./src/styles/zdev.css" />
    <link rel="stylesheet"  href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
     <link href="https://file.myfontastic.com/CrszDy9EX5PKEPWYeoAXdg/icons.css" rel="stylesheet"  />
   

   <style>
       #loadingScripts {
         
              background-color: #00AEEF;
              color:white;
            font-size: 18px;
            align-content: center;
            text-align: center;
       }
    
    
    .ocultar{
        display:none !important;

    }
   </style>
    <script>
        window.onload = function () {
            setTimeout(function () { document.getElementById("loadingScripts").className = "ocultar" }, 1000);
            
        }
    </script>
    
</head>
<body>

   
   <div id="loadingScripts">Cargando archivos . . .
       <div class="spinner"></div>
   </div>

    <div id="appUnkiloDeAyuda" ></div>
    <script type="text/javascript">
        if ('serviceWorker' in navigator) {
            
            navigator.serviceWorker.register('service-worker.js').then(reg => {
                reg.installing; // the installing worker, or undefined
                reg.waiting; // the waiting worker, or undefined
                reg.active; // the active worker, or undefined
              
                reg.addEventListener('updatefound', () => {
                  // A wild service worker has appeared in reg.installing!
                  const newWorker = reg.installing;
              
                  newWorker.state;
                  // "installing" - the install event has fired, but not yet complete
                  // "installed"  - install complete
                  // "activating" - the activate event has fired, but not yet complete
                  // "activated"  - fully active
                  // "redundant"  - discarded. Either failed install, or it's been
                  //                replaced by a newer version
              
                  newWorker.addEventListener('statechange', () => {
                    // newWorker.state has changed
                  });
                });
              });
          }
          
        //   document.querySelector('#show').addEventListener('click', () => {
        //     const iconUrl = document.querySelector('select').selectedOptions[0].value;
        //     let imgElement = document.createElement('img');
        //     imgElement.src = iconUrl;
        //     document.querySelector('#container').appendChild(imgElement);
        //   });
    </script>

    <script type="text/babel"  src="./src/scripts/containers/const.js"></script>
     <script type="text/babel"  src="./src/scripts/containers/user.js"></script>
     <script type="text/babel"  src="./src/scripts/containers/instrumentos.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/instrumentos/ModalCondition.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/PopupMsg.js"></script>
    <script type="text/babel" src="./src/scripts/components/instrumentos/modulos/PopupItem.js"></script>
   <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Modulos.js"></script>
     <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/PanelPreguntas.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Pregunta.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Reactivos.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Answer.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/LinkedPanelQuestion.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/LinkedQuestion.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Q.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Q.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/modulos/Modulo.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/instrumentos/ModalModulo.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/instrumentos/ModalInstrumento.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/instrumentos/Instrumentos.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/instrumentos/RowModulo.js"></script>
     <script type="text/babel"  src="./src/scripts/components/instrumentos/instrumentos/Instrumento.js"></script>
     <script type="text/babel"  src="./src/scripts/components/rows/PDCRowChildren.js"></script>
     <script type="text/babel"  src="./src/scripts/components/rows/PDCListChildrens.js"></script>
    <script type="text/babel"  src="./src/scripts/components/rows/FSChildrenNar.js"></script>
    <script type="text/babel"  src="./src/scripts/components/rows/ManagerFilters.js"></script>
    <script type="text/babel"  src="./src/scripts/components/NavigationState.js"></script>
    <script type="text/babel"  src="./src/scripts/components/rows/FSRowChildren.js"></script>
    <script type="text/babel"  src="./src/scripts/components/rows/FSListChildrens.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/aplicar/Tree.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/aplicar/AnswerWithOptions.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/aplicar/HandleSubPregunta.js"></script>
    <script type="text/babel"  src="./src/scripts/components/instrumentos/aplicar/HandlePregunta.js"></script>
    
  
    

    <script type="text/babel"  src="./src/scripts/start.js"></script>
    
   
    </body>
    </html>
     
    <!--


 <!DOCTYPE html><html lang="en">
     <head><meta charset="utf-8">
         <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
         
         <meta name="theme-color" content="#000000">
         <link rel="manifest" href="/manifest.json">
         <link rel="shortcut icon" href="/favicon.ico">
         <title>UKA</title>
         <link href="./app/build/static/css/main.cacbacc7.css" rel="stylesheet">

     </head><body>
         <noscript>You need to enable JavaScript to run this app.</noscript>
         <div id="root"></div>
         <script type="text/javascript" src="./app/build/static/js/main.9fdf0e48.js">

                              </script></body></html>
                            -->