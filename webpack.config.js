/// <binding />
"use strict";
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        'angular2': [
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
        ],
        "app" : ['./app/app']
    },

    output: {
        path: __dirname+"/www/dist",
        filename: "[name].js"
    },

    devServer: {
        hot: true,
        contentBase: ".",
        host: "localhost",
        port: 9000
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
        new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: 'common', filename: 'common.js' }),
    ]
};
