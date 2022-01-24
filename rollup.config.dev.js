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

export default [

  {
    input: 'src/main.js',
    output: {
      file: 'prototype/static/main.js',
      inlineDynamicImports: true,
      extend: true
    },
    plugins: [
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
        extract: true
      }),
      buble({
        transforms: { asyncAwait: false },
        objectAssign: 'Object.assign'
      }),
    ],
  }
]
