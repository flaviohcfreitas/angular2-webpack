/// <binding />
"use strict";
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "3-webapp" : ['./app/web/app'],
        '2-angular2': [
            'core-js',
            'zone.js',
            'rxjs',
            'reflect-metadata',
            'angular2-in-memory-web-api',
            "@angular/core",
            "@angular/common",
            "@angular/compiler",
            "@angular/core",
            "@angular/forms",
            "@angular/http",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router",
            "@angular/router-deprecated",
            "@angular/upgrade",
        ]
        
    },

    output: {
        path: __dirname+"/build",
        filename: "[name].js"
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: 'ts',
              exclude: [/node_modules/]
          }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({ name: '2-angular2', filename: '2-angular2.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: '1-common', filename: '1-common.js' }),
        new HtmlWebpackPlugin({
            template: './app/web/index.html', // Load a custom template (ejs by default but can be changed) 
            filename: 'index.html',
            inject: 'body', // Inject all scripts into the body (this is the default so you can skip it),
            chunksSortMode: function (a, b) {  //alphabetical order
                if (a.names[0] > b.names[0]) {
                    return 1;
                }
                if (a.names[0] < b.names[0]) {
                    return -1;
                }
                return 0;
                }
        })
    ]
};
