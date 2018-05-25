module.exports = function () {
    $.gulp.task("styles", function () {
        return $.gulp.src("src/scss/main.scss")
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                "include css": true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ["last 2 versions"]
            }))
            .on("error", $.gp.notify.onError({
                title: "style"
            }))
            .pipe($.gp.csso({
                restructure: false
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest("build/styles"))
            .pipe($.browserSync.reload({
                stream: true
            }))
    });
}