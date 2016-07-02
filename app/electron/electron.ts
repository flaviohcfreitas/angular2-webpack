
import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core';
import {DashBoardComponent} from '../Component/dashboard.component';
import {enableProdMode} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

enableProdMode();

@Component({
    selector: 'myapp',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    template: `

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header mdl-layout__header--waterfall ">

            <div class="mdl-layout--large-screen-only mdl-layout__header-row"></div>

            <div class="mdl-layout--large-screen-only mdl-layout__header-row">
                <span class="mdl-layout-title">PROJETO INICIAL</span>
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                    <label class="mdl-button mdl-js-button mdl-button--icon"
                        for="waterfall-exp">
                    <i class="material-icons">search</i>
                    </label>
                    <div class="mdl-textfield__expandable-holder">
                        <input class="mdl-textfield__input" type="text" name="sample" id="waterfall-exp">
                    </div>
                </div>
            </div>

            <div class="mdl-layout--large-screen-only mdl-layout__header-row"></div>

            <div class="mdl-layout__header-row mdl-color--primary-dark">
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" [routerLink]="['Dash']" href="">Link</a>
                </nav>
            </div>


        </header>
        <main class="mdl-layout__content">
            <div id="page" class="mdl-layout__tab-panel is-active">
                <router-outlet></router-outlet>
            </div>
        </main>
    </div>
    
    
    `
    
    
})

@RouteConfig([
  {path: '/dash-board', name: 'Dash', component: DashBoardComponent, useAsDefault: true }
  // {
  //   path: '/detail/:id',
  //   name: 'HeroDetail',
  //   component: HeroDetailComponent
  // },
])
export class AppComponent {}
bootstrap(AppComponent)