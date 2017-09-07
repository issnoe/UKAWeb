

var gulp = require('gulp'),
concat = require('gulp-concat'),
 minify = require("gulp-babel-minify"),
babel = require('gulp-babel');


function logFileHelpers() {
  return through.obj((file, enc, cb) => {
      console.log(file.babel.usedHelpers);
      cb(null, file);
  });
}
gulp.task('compile', function () {
  gulp.src('./build/build.js')
  .pipe(babel({
    presets: ['env']
}))
.pipe(logFileHelpers())
  
  .pipe(gulp.dest('dist/'))
});

gulp.task('mini', function () {
  gulp.src('./build/build.js')
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  
  .pipe(gulp.dest('dist/'))
});



gulp.task('unify', function () {
    gulp.src([
      './containers/const.js',
      './containers/user.js',
      './containers/instrumentos.js',
      '/components/instrumentos/instrumentos/ModalCondition.js',
      '/components/instrumentos/modulos/PopupMsg.js',
      './components/instrumentos/modulos/Instrumentos.js',
      './components/instrumentos/modulos/Instrumento.js',
      './components/instrumentos/modulos/PopupItem.js',
      './components/instrumentos/modulos/ModuloItem.js',
      './components/instrumentos/modulos/Modulos.js',
       './components/instrumentos/modulos/PanelPreguntas.js',
      './components/instrumentos/modulos/Pregunta.js',
      './components/instrumentos/modulos/Reactivos.js',
      './components/instrumentos/modulos/Answer.js',
      './components/instrumentos/modulos/LinkedPanelQuestion.js',
      './components/instrumentos/modulos/LinkedQuestion.js',
      './components/instrumentos/modulos/Q.js',
      './components/instrumentos/modulos/Q.js',
      './components/instrumentos/modulos/Modulo.js',
      './components/instrumentos/instrumentos/ModalModulo.js',
      './components/instrumentos/instrumentos/ModalInstrumento.js',
      './components/instrumentos/instrumentos/Instrumentos.js',
      './components/instrumentos/instrumentos/RowModulo.js',
       './components/instrumentos/instrumentos/Instrumento.js',
       './components/rows/PDCListChildrens.js',
      './components/rows/FSChildrenNar.js',
      './components/rows/ManagerFilters.js',
      './components/NavigationState.js',
      './components/rows/FSRowChildren.js',
      './components/rows/FSListChildrens.js',
      './start.js'
    ])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('build/'))
  });


