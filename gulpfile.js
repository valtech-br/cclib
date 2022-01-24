/* eslint-disable no-console */

const gulp = require('gulp')
const fractal = require('./fractal.config')

/**
 * It will start the UI (fractal) servers.
 */
gulp.task('start:server', () => {
  const server = fractal.web.server({
    port: 3004,
    sync: true
  })

  return server.start().then(() => {
    console.log('UI server running on: http://localhost:3004')
  })
})

gulp.task('default', gulp.series('start:server'))
