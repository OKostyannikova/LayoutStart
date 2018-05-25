module.exports = function () {
    $.gulp.task("watch", function () {
        $.gulp.watch("src/**/*.scss", $.gulp.series("styles"));
        $.gulp.watch("src/html/**/*.html", $.gulp.series("html"));
        $.gulp.watch("src/js/**/*.js", $.gulp.series("scripts"));
    });
}