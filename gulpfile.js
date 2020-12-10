let project_folder = 'dist';
let source_folder = 'src';

let fs = require('fs');

let path = {
  build: {
    fonts: project_folder + '/assets/fonts/',
  },
  src: {
    fonts: source_folder + '/assets/fonts/*.ttf',
  },
  clean: './' + project_folder + '/',
};

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  del = require('del'),
  ttf2woff = require('gulp-ttf2woff'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  fonter = require('gulp-fonter');

function fonts() {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(source_folder + '/assets/fonts/'));
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(source_folder + '/assets/fonts/'));
}

function fontsStyle() {
  let file_content = fs.readFileSync(source_folder + '/assets/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/assets/scss/fonts.scss', '', cb);
    return fs.readdir(source_folder + '/assets/fonts/', function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              source_folder + '/assets/scss/fonts.scss',
              '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n\n',
              cb,
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function cb() {}

function watchFiles() {
  gulp.watch;
}

function clean() {
  return del(path.clean);
}

gulp.task('otf2ttf', function () {
  return src([source_folder + '/assets/fonts/*.otf'])
    .pipe(
      fonter({
        formats: ['ttf'],
      }),
    )
    .pipe(dest(source_folder + '/assets/fonts/'));
});

let build = gulp.series(clean, gulp.parallel(fonts), fontsStyle);
let watch = gulp.parallel(build);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.build = build;
exports.watch = watch;
exports.default = watch;

gulp.watch;
