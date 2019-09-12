require('dotenv').config()
const withCSS = require('@zeit/next-css')

/*
if (typeof require !== "undefined") {
    require.extensions[".less"] = () => {};
    require.extensions[".css"] = (file) => {};
}
*/


// Example next.config.js for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/zeit/next.js/tree/canary/packages/next-mdx
module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    }
});
