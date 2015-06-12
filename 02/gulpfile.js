var gulp         = require('gulp');
var browserSync  = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browserSync'], function() {
  gulp.watch(['./*.html', './*.css'], browserSync.reload);
});
