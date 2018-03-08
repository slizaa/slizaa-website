var siteDir = '/site'
var srcAssets = '/src'
var targetAssets = siteDir + '/static'

module.exports = {

    // hugo configuration
    hugo: {
        src: siteDir,
        dest: siteDir + '/public',
        port: 1313,
        verbose: false
    },

    // less configuration
    less: {
        src: srcAssets + '/less/*.less',
        dest: targetAssets + '/css'
    }
}