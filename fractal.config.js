const fs = require('fs')
const path = require('path')
const { Fractal } = require('@frctl/fractal')
const handlebars = require('@frctl/handlebars')

const fractal = new Fractal()

// Set the title of the project.
fractal.set('project.title', 'Common Components')

// Change components tree title.
fractal.components.set('label', 'Projects')

// Where the components will live.
fractal.components.set('path', path.join(__dirname, './prototype/components'))

// Where the documentation pages will live.
fractal.docs.set('path', path.join(__dirname, './prototype/documentation'))

// Specify a directory of static assets.
fractal.web.set('static.path', path.join(__dirname, './prototype/static'))

// Set the static HTML build destination.
fractal.web.set('builder.dest', path.join(__dirname, './temporary/fractal'))

// Add custom handlebars helpers.
fractal.components.engine(handlebars({
  helpers: {
    /**
     * It will embed the contents of the source file.
     * Caution: It is important to remember that very large files can cause
     * unexpected errors.
     *
     * @param {String} source
     * @returns {String}
     */
    embed(source) {
      const target = path.join(__dirname, './prototype/static', source)

      if (!fs.existsSync(target)) {
        return `ERROR: Could not embed the file "${target}", because it does not exist.`
      }

      return fs.readFileSync(target, 'utf8')
    },
    /**
     * Converts a JavaScript object or value to a JSON string.
     *
     * @param {Object} data
     * @returns {String}
     */
    json(data) {
      try {
        return JSON.stringify(data)
      } catch (error) {
        return 'ERROR: Is it not possible to stringify (JSON).'
      }
    }
  }
}))

module.exports = fractal
