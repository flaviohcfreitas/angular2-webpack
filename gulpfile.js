/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('domain', function() {
    gulp.src('../../Domain/**/*.ts')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./app/Domain/'));
});

gulp.task('infra', function() {
    gulp.src('../../Infra/**/*.ts')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./app/Infra/'));
});

gulp.task('start:dev', function () {
  'domain'
  run('npm run start').exec()  // prints "Hello World\n". 
})

