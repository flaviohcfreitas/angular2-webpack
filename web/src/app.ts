import {Component} from 'angular2/core';
import {HeroComponent} from './Component/hero/hero.component.ts'
import {enableProdMode} from "angular2/core";

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
    directives: [HeroComponent],
    template: `
      <app-component></app-component>
    `
})
export class AppComponent {}
