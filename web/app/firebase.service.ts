﻿declare var require: any
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
var firebase_s = require("firebase");

const config = {
    apiKey: "AIzaSyA1XTR7awx5d-hkM5wXgXo-qZl69o1cTMA",
    authDomain: "testeapp-7e2b1.firebaseapp.com",
    databaseURL: "https://testeapp-7e2b1.firebaseio.com",
    storageBucket: "",
};
firebase_s.initializeApp(config);

@Injectable()
export class FirebaseService {
    public db: any;
    public auth: any
    constructor() {
        this.db = firebase_s.database().ref('/');
        this.auth = firebase_s.auth();
    }
}