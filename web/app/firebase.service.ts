declare var require: any
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
var db = require("firebase");

const config = {
    apiKey: "AIzaSyA1XTR7awx5d-hkM5wXgXo-qZl69o1cTMA",
    authDomain: "testeapp-7e2b1.firebaseapp.com",
    databaseURL: "https://testeapp-7e2b1.firebaseio.com",
    storageBucket: "",
};
db.initializeApp(config);

@Injectable()
export class FirebaseService {
    public data_base;
    
    constructor(ref:string){
        this.data_base = db.database().ref(ref)
    }
    
 
}
