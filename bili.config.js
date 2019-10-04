module.exports = {
  input: {
    'vue-burger': 'src/index.js',
  },
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'VBurger',
  },
  postcss: {
    extract: true,
  },
  plugins: {
    vue: true,
    babel: {
      runtimeHelpers: true,
      sourceMap: true,
      extensions: ['.js', '.vue'],
    },
  },
};