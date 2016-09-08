'use strict';

module.exports = {
	entry: './src/entry.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	devtool: 'source-map',

	module: {
		loaders: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		}, {
			test: /\.scss$/,
			loader: 'style!css!sass'
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=8192'
		}, {
			test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
			loader: "file"
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	externals: {
  	 	"BMap": "BMap"
    }
};
