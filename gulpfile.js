'use strict';

var gulp = require('gulp');
var bsync = require('browser-sync');
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');
var cssnano = require('cssnano');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();


gulp.task('js', function() {
  return gulp.src('./src/assets/js/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/assets/js/'))
    .pipe(bsync.reload({stream: true}));
});


gulp.task('views', function(){
  return gulp.src([
      '!./src/views/_*.pug',
      './src/views/*.pug'
    ])
    .pipe($.pug({pretty: true}))
    .on('error', $.util.log)
    .pipe(gulp.dest('./dist/'))
    .pipe(bsync.reload({stream: true, reloadDelay: 300}));
});


gulp.task('styles', function () {
  var browsers = [
    '> 1%',
    'last 2 versions',
    'Firefox ESR',
    'Opera 12.1'
  ];
  var sassOptions = {
    includePaths: [
      'node_modules/bootstrap/scss/',
    ]
   //,outputStyle: 'compressed'
  };
  var plugins = [
    autoprefixer({browsers: browsers}),
    cssnano({zindex: false})
  ];
  return gulp.src('./src/assets/styles/main.scss')
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe(bsync.reload({stream: true}));
});


gulp.task('images', function() {
  return gulp.src('./src/assets/images/**/*')
    .pipe($.imagemin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 4
    }))
    .pipe(gulp.dest('./dist/assets/images/'));
});

gulp.task('stuff', function() {
  return gulp.src('./src/_redirects')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('browser-sync', function() {
  bsync({
    server: {
      baseDir: './dist/'
    },
    ghostMode: true,
    notify: false
  });
});


gulp.task('watch', ['build'], function() {
  gulp.watch(['src/assets/images', 'src/assets/images/**/*'], ['images']);
  gulp.watch('src/assets/styles/*', ['styles']);
  gulp.watch('src/assets/js/*', ['js']);
  gulp.watch('src/views/**/*.pug', ['views']);
  gulp.start('browser-sync');
});


gulp.task('build', ['styles', 'views', 'images', 'js' ,'stuff']);


gulp.task('default', ['build'], function() {
  gulp.start('watch');
});
