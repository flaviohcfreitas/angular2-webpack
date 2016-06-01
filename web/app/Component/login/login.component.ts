import {Component} from 'angular2/core';
import {FirebaseService} from '../../firebase.service';

@Component({
    selector: 'hero-component',
    providers: [FirebaseService],
    template: `
        <div style="text-center;text-align: center;">
        <h2>Login {{logado}}</h2>
        <input type='text'[(ngModel)]="email" name='login' placeholder='Login' style="font-size: 22px;"/>
        <br/>
        <input type='password' [(ngModel)]="password"  name='login' placeholder='Password' style="font-size: 22px;" /> <br/><br/>
        <button (click)="login_user()">Login</button>  --- 
        <button (click)="logout_user()">Logout</button>
        <hr>
        <label>Result: {{ref}}</label><br/>
        </div>`
})

export class LoginComponent {
title = 'scotchy-scotch works!';
usuario: any;
email:string;
password: string;
logado : any;


constructor(private _data_base: FirebaseService) {
      this.usuario = this._data_base.auth;
    }
    
    get_auth(user){
      console.log(user);
    }
    
    create_user(){

        this.usuario.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode + errorMessage);
        
        // Tratar erros e acertos ... 
      });  
    }

    
    login_user(){

        this.usuario.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode + errorMessage);
        
        // Tratar erros e acertos ... 
      });  
       console.log(this.usuario);
    }
    
    logout_user(){
        // var credential = this.usuario.auth.EmailPasswordAuthProvider.credential(email, password);
        
        this.usuario.signOut().then(function() {
        // Sign-out successful.
        //console.log(this.usuario);
        console.log('funfa');
        }, function(error) {
        // An error happened.
        console.log('Erro ao deslogar.. srsr');
        });
        
    }
}
