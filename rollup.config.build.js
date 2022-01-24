import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
// import nodeGlobals from 'rollup-plugin-node-globals'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import { uglify } from 'rollup-plugin-uglify'

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  builtins(),
  alias({
    entries: [
      { find: '@', replacement: './src' },
      { find: 'vue', replacement: 'vue/dist/vue.esm.js' }
    ]
  }),
  nodeResolve({
    browser: true
  }),
  commonjs({
    include: 'node_modules/**',
    transformMixedEsModules: true
  }),
  // nodeGlobals(),
  nodePolyfills(),
  babel({ babelHelpers: 'bundled' }),
  vue({
    css: true,
    compileTemplate: true,
  }),
  postcss({
    extract: 'cclib.css',
    minimize: isProduction
  }),
  buble({
    transforms: { asyncAwait: false },
    objectAssign: 'Object.assign'
  }),
]

export default [

  {
    input: 'src/wrapper.js',
    plugins,
    output: [
      {
        name: 'CommonComponents',
        format: 'umd',
        dir: 'dist/js',
        entryFileNames: 'cclib.min.js',
        exports: 'named',
        esModule: false,
        sourcemap: true,
        plugins: [
          isProduction && uglify(),
        ]
      },
      {
        format: 'esm',
        dir: 'dist/js',
        entryFileNames: 'cclib.esm.js',
        exports: 'named',
        sourcemap: true,
      },
      {
        format: 'cjs',
        dir: 'dist/js',
        entryFileNames: 'cclib.cjs.js',
        exports: 'named',
        sourcemap: true,
      },
    ]
  }

]
