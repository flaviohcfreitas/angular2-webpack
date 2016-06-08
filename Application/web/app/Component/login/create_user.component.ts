import {Component} from 'angular2/core';
import {FirebaseService} from '../../Domain/Service/firebase.service';

@Component({
    selector: 'hero-component',
    providers: [FirebaseService],
    template: `
    <div style="text-center;text-align: center;">
    <div id="login_user">
        <h2>Login {{logado}}</h2>
        <input type='text'[(ngModel)]="email" name='login' placeholder='Login' style="font-size: 22px;"/>
        <br/>
        <input type='password' [(ngModel)]="password"  name='login' placeholder='Password' style="font-size: 22px;" /> <br/><br/>
        <button (click)="login()">Login</button>
        <a href="#">Esqueceu a Senha ?</a> <br>
    </div>           
        <hr>
        <label>Ainda não tenho cadastro,</label>
        
        <a href="#">Criar Conta</a> <br>
    </div>
    
    `
})

export class LoginComponent {
title = 'scotchy-scotch works!';
usuario: any;
email:string;
password: string;
logado : any;

constructor(private _context: FirebaseService) {
    }
    login(){
        this._context.login_user(this.email,this.password)        
    }
    
    logout(){
        this._context.logout_user();
    }
    loging_user(){
        console.log(this._context.auth.currentUser.uid)
    }

}
