module.exports = {
    getNamespace: () => 'molecules\gogo',
    compilerOptions: require('./tsconfig.json').compilerOptions,
    modules: {
        '@baidu/molecule': {
            required: true
        }
    }
};
