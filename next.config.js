if (typeof require !== "undefined") {
    require.extensions[".less"] = () => {};
    require.extensions[".css"] = (file) => {};
}

// Example next.config.js for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/zeit/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: /flexboxgrid/
    })

/*
    config.module.rules.push(    {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
          include: /flexboxgrid/
        })

*/

    return config
  },
}
