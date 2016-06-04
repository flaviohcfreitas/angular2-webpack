declare var require: any
var firebase_s = require("firebase");

const config = {
    apiKey: "AIzaSyA1XTR7awx5d-hkM5wXgXo-qZl69o1cTMA",
    authDomain: "testeapp-7e2b1.firebaseapp.com",
    databaseURL: "https://testeapp-7e2b1.firebaseio.com",
    storageBucket: "",
};
firebase_s.initializeApp(config);

export class FirebaseService {
    public db: any;
    public auth: any
    constructor(ref:string) {
        this.db = firebase_s.database().ref(ref);
        this.auth = firebase_s.auth();
    }
    
    get_auth(user){
      console.log(user);
    }
    
    create_user(email:string, password:string){
        this.auth.usuario.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode + errorMessage);
            
            // Tratar erros e acertos ... 
        });  
    }
    
    login_user(email:string,password:string){

        this.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode + errorMessage);
        
        // Tratar erros e acertos ... 
      });  
       console.log(this.auth);
    }
    
    logout_user(){
        // var credential = this.usuario.auth.EmailPasswordAuthProvider.credential(email, password);
        
        this.auth.signOut().then(function() {
        // Sign-out successful.
        //console.log(this.usuario);
        console.log('funfa');
        }, function(error) {
        // An error happened.
        console.log('Erro ao deslogar.. srsr');
        });
        
    }
}