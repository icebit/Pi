var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var dest = "Dest";

gulp.task("default", function(){
  gulp.run("engine");
  gulp.run("client");
  gulp.run("server");
});

gulp.task("engine", function(){
  gulp.src("Engine/**/*.js")
  .pipe(concat("engine.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest(dest));
});

gulp.task("client", function(){
  gulp.src("Client/js/*.js")
  .pipe(concat("client.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest(dest + "/View/js"));
  gulp.src("Client/*")
  .pipe(gulp.dest(dest + "/View"))
});

gulp.task("server", function(){
  gulp.src("Server/**/*.js")
  .pipe(uglify())
  .pipe(gulp.dest(dest + "/Server"));
});
