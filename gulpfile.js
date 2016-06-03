var gulp = require("gulp"),
    mocha = require('gulp-mocha');

gulp.task('app', function() {
    var nodemon = require('gulp-nodemon');
    nodemon({
        stdout: false,
        script: 'index.js',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task("mocha", function () {
    return gulp.src('./test/index.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
        .once('error', function () {
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
});

gulp.task("test", ["app","mocha"]);
