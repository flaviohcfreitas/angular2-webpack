import {Component} from 'angular2/core';
import {HeroComponent} from './Component/hero/hero.component';
import {LoginComponent} from './Component/login/login.component';
import {DashBoardComponent} from './Component/dashboard/dashboard.component';
import {enableProdMode} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

enableProdMode();

//TODO Curso TypeScript https://www.youtube.com/watch?v=yD4w3PfWnvQ&list=PLTMuY7ptzFIS4usDcmCM_ukdIsmeuXNzD
//TODO Criar uma biblioteca Firebase - tiago 
//TODO criar autenticacao e angular material https://codelabs.developers.google.com/codelabs/firebase-web/#3
//TODO aprender a debugar TYPESCRIPT https://blogs.msdn.microsoft.com/jtarquino/2016/01/24/debugging-typescript-in-visual-studio-code-and-chrome/
//TODO criar gulp
//TODO Teste -- flavio
//TODO Rotas

@Component({
    selector: 'myapp',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS], 
    template: `
    <nav>
        <a [routerLink]="['Dash']">Home</a>
        <a [routerLink]="['Hero']">Heroes</a>
        <a [routerLink]="['Login']">Login</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
  {path: '/dash-board', name: 'Dash', component: DashBoardComponent, useAsDefault: true },
  {path: '/hero', name: 'Hero', component: HeroComponent },
  {path: '/login', name: 'Login', component: LoginComponent}
  // {
  //   path: '/detail/:id',
  //   name: 'HeroDetail',
  //   component: HeroDetailComponent
  // },
])
export class AppComponent {}
