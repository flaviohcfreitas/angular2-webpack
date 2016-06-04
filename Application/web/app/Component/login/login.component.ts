import {Component} from 'angular2/core';
import {FirebaseService} from '../../Domain/Service/firebase.service';

@Component({
    selector: 'hero-component',
    providers: [FirebaseService],
    template: `
        <div style="text-center;text-align: center;">
        <h2>Login {{logado}}</h2>
        <input type='text'[(ngModel)]="email" name='login' placeholder='Login' style="font-size: 22px;"/>
        <br/>
        <input type='password' [(ngModel)]="password"  name='login' placeholder='Password' style="font-size: 22px;" /> <br/><br/>
        <button (click)="login()">Login</button>  --- 
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


constructor(private _context: FirebaseService) {
    }
    login(){
        this._context.login_user(this.email,this.password)        
        
    }
    

}
