module.exports = {
  getNamespace: () => 'molecules\night',
  compilerOptions: require('./tsconfig.json').compilerOptions,
  modules: {
    '@baidu/molecule': {
      required: true
    }
  }
}
