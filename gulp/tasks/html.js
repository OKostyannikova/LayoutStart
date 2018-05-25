module.exports = function () {
    $.gulp.task("html", function () {
        return $.gulp.src("src/html/views/*.html")
            .pipe($.gulp.dest("build"))
            .on('end', $.browserSync.reload)
    })
}