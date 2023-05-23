const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // ...otras configuraciones de Webpack...

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'postcss-loader',
          // otros loaders para procesar CSS
        ],
      },
      // otras reglas de carga de archivos
    ],
		plugins:[
			new CleanWebpackPlugin(),
		]
  },

  // ...otras configuraciones de Webpack...
};