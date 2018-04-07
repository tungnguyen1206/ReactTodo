/* Require webpack */
var webpack = require('webpack');
/* Require path */
var path = require('path');

module.exports = {
  // input files
  entry: [
    // Load using script-loader
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',

    './app/app.jsx'
  ],

  // 
  externals: {
    jquery: 'jQuery'
  },

  // Webpack automatic requires module when it meets some special sign
  plugins: [
    new webpack.ProvidePlugin({
      // Use $ sign means we use jQuery
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],

  // output path and files
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },


  resolve: {
    // Current folder as root
    root: __dirname,
    // Alias list
    alias: {
      TodoApp: 'app/components/TodoApp.jsx',
      TodoList: 'app/components/TodoList.jsx',
      Todo: 'app/components/Todo.jsx',
      AddTodo: 'app/components/AddTodo.jsx',
      
      applicationStyle: 'app/style/scss/style.scss',
    },
    // extensions support
    extensions: ['', '.js', '.jsx']
  },


  module: {
    loaders: [
      {
        // User babel to load files
        loader: 'babel-loader',
        // Pass them to react, get the output and
        // then run them to the es2015 as well
        query: {
          // Presets tells babel what to do
          // In this case is compile our code for react and es2015
          // Stage-0 brings us new ES6 features
          presets: ['react', 'es2015', 'stage-0']
        },
        // Which files to load
        tests: /\.jsx?$/,
        // Which folders to ignore
        exclude: /{node_modules | bower_components}/
      }
    ],
  },

  // Load sass files in foundation-sites module
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },


  // Short map for debugger
  devtool: 'cheap-module-eval-source-map',
};