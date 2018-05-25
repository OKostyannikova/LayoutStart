global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require("./gulp/config/tasks.js")
    }
};

$.gulp.task("default", $.gulp.series(
    $.gulp.parallel("html", "styles", "scripts:lib", "scripts"),
    $.gulp.parallel("watch", "serve")
));