module.exports = {
    parser: '@babel/eslint-parser',
    plugins: ['flowtype'],
    extends: [
        'plugin:flowtype/recommended',
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['.eslintrc.js'],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": false
        }
    }
};