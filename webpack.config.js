const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,  // Cambiar de .less a .scss
        use: [
          'style-loader',  // Para inyectar los estilos en el DOM
          'css-loader',    // Para manejar los archivos CSS
          {
            loader: 'sass-loader',  // Para procesar SCSS
            options: {
              additionalData: `
                @import "src/variables.scss";
              `,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@ng-zorro-antd': path.resolve(__dirname, 'node_modules/ng-zorro-antd'),
    },
  },
};
