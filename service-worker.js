

  const version = 'v1';
  
  self.addEventListener('install', event => {
      console.log("Installing files to the aplicaction")
      self.skipWaiting();       
    event.waitUntil(
      caches.open(`static-${version}`)
        .then(cache => cache.addAll([
            './src/scripts/containers/const.js',
            './src/scripts/containers/user.js',
            './src/scripts/containers/instrumentos.js',
            './src/scripts/components/instrumentos/instrumentos/ModalCondition.js',
            './src/scripts/components/instrumentos/modulos/PopupMsg.js',
            './src/scripts/components/instrumentos/modulos/PopupItem.js',
            './src/scripts/components/instrumentos/modulos/Modulos.js',
            './src/scripts/components/instrumentos/modulos/PanelPreguntas.js',
            './src/scripts/components/instrumentos/modulos/Pregunta.js',
            './src/scripts/components/instrumentos/modulos/Reactivos.js',
            './src/scripts/components/instrumentos/modulos/Answer.js',
            './src/scripts/components/instrumentos/modulos/LinkedPanelQuestion.js',
            './src/scripts/components/instrumentos/modulos/LinkedQuestion.js',
            './src/scripts/components/instrumentos/modulos/Q.js',
            './src/scripts/components/instrumentos/modulos/Q.js',
            './src/scripts/components/instrumentos/modulos/Modulo.js',
            './src/scripts/components/instrumentos/instrumentos/ModalModulo.js',
            './src/scripts/components/instrumentos/instrumentos/ModalInstrumento.js',
            './src/scripts/components/instrumentos/instrumentos/Instrumentos.js',
            './src/scripts/components/instrumentos/instrumentos/RowModulo.js',
            './src/scripts/components/instrumentos/instrumentos/Instrumento.js',
            './src/scripts/components/rows/PDCRowChildren.js',
            './src/scripts/components/rows/PDCListChildrens.js',
            './src/scripts/components/rows/FSChildrenNar.js',
            './src/scripts/components/rows/ManagerFilters.js',
            './src/scripts/components/NavigationState.js',
            './src/scripts/components/rows/FSRowChildren.js',
            './src/scripts/components/rows/FSListChildrens.js',
            './src/scripts/components/instrumentos/aplicar/Tree.js',
            './src/scripts/components/instrumentos/aplicar/AnswerWithOptions.js',
            './src/scripts/components/instrumentos/aplicar/HandleSubPregunta.js',
            './src/scripts/components/instrumentos/aplicar/HandlePregunta.js',
            './src/scripts/start.js'
        ]))
    );
  });

  self.addEventListener('activate', event => {
        
    console.log('V1 now ready to handle fetches!');
  });

self.addEventListener('fetch', event => {
    
    console.log("fetch lista de archivos en cache")
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});