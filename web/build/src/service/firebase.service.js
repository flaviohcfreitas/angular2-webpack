"use strict";
var firebase = require("firebase");
var core_1 = require('angular2/core');
core_1.enableProdMode();
var config = {
    apiKey: "AIzaSyBcZrXH9hZlxiDPclBWNztmEhWVUTIMloI",
    authDomain: "flyfood-44c46.firebaseapp.com",
    databaseURL: "https://flyfood-44c46.firebaseio.com",
    storageBucket: "flyfood-44c46.appspot.com",
};
var FirebaseService = (function () {
    function FirebaseService() {
        firebase.initializeApp(config);
    }
    FirebaseService.prototype.setUser = function (firstName, lastName) {
    };
    FirebaseService.prototype.getUser = function () {
    };
    FirebaseService.prototype.getDataBase = function () {
        return firebase.database();
    };
    FirebaseService.prototype.ref = function (ref) {
        var database = this.getDataBase();
        return database.ref(ref);
    };
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
