// minify: false

const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	output: {
		filename: 'forms.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'var',
		library: 'Rotive',
	},
	plugins: [
		new webpack.DefinePlugin({
			   __VERSION__: JSON.stringify(require('./package.json').version)
		})	
	],
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
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name: '[name].[ext]',
					  outputPath: 'fonts/'
					}
				  }
				]
			}
		]
	}
}