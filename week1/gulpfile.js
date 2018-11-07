let gulp = require("gulp");
let webserver = require("gulp-webserver");
let browserify = require("gulp-browserify");
let sass = require("gulp-sass");
let sequence = require("gulp-sequence");
let htmlmin = require("gulp-htmlmin");


gulp.task("server", () => {
    gulp.src("./dist").pipe(sebserver({
        port: "8888",
        host: "127.0.0.1",
        open: "./dist/html/index.html",

    }))
})
gulp.task("jsMoudel", () => {
    gulp.src("./src/js/**/*.js").pipe(gulp.dest("./dist/js"))
})
gulp.task("sass", () => {
    console.log("sass")
    gulp.src("./src/sass/**/*.js").pipe(gulp.dest("./dist/css"))
})
gulp.task("htmlServer", ["sass"], () => {
    gulp.src("./src/html/**/*.html").pipe(gulp.dest("./dist/html"))
        .on("end", () => {
            sequence(["server"], () => {
                console.log("server start")
            })
        })
})

gulp.task("default", ["htmlServer"], () => {

})