import gulp from "gulp";
import changed from "gulp-changed";
import gulpAvif from "gulp-avif";
import gulpWebp from "gulp-webp";
import gulpImageMin from "gulp-imagemin";

const images = gulp.series(imgMin, imgToAvif, imgToWebp);

function imgToAvif() {
    return gulp.src(["images_src/**/*.*", "!images_src/**/*.svg"], {encoding: false, base: "images_src"})
        .pipe(changed("public/images", {extension: ".avif"}))
        .pipe(gulpAvif({
            quality: 50
        }))
        .pipe(gulp.dest("public/images"))
}

function imgToWebp() {
    return gulp.src(["images_src/**/*.*", "!images_src/**/*.svg"], {encoding: false, base: "images_src"})
        .pipe(changed("public/images", {extension: ".webp"}))
        .pipe(gulpWebp())
        .pipe(gulp.dest("public/images"))
}

function imgMin() {
    return gulp.src(["images_src/**/*.*"], {encoding: false, base: "images_src"})
        .pipe(changed("public/images"))
        .pipe(gulpImageMin())
        .pipe(gulp.dest("public/images"))
}

function watching() {
    gulp.watch(["images_src/**/*.*"], images)
}

function start() {
    images();
    watching();
}

export {images};

export default start;