// minify: false

const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	output: {
		filename: 'rotive.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'var',
		library: 'Rotive',
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: 'style-loader', // inject CSS to page
					}, {
						loader: 'css-loader', // translates CSS into CommonJS modules
					}, {
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			}
		]
	}
}