const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Adding resolve root to standard folders
  storybookBaseConfig.resolve = {
    root: path.resolve(__dirname, '../src'),
    extensions: ['', '.js', '.jsx', '.json']
  }

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.loaders.push({
    test: /.scss$/,
    loaders: ["style", "css", "sass"],
    include: path.resolve(__dirname, '../')
  });

  storybookBaseConfig.module.loaders.push({
    test: /\.svg(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  });

  storybookBaseConfig.module.loaders.push({
    test: /\.(png|jpg)$/,
    loader: 'url?limit=8192'
  });

  // Return the altered config
  return storybookBaseConfig;
};
