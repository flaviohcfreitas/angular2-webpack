webpackJsonp([1,2],{

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./app/app */1095);


/***/ },

/***/ 1095:
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1024);
	const core_1 = __webpack_require__(/*! @angular/core */ 674);
	const dashboard_component_1 = __webpack_require__(/*! ./Component/dashboard.component */ 1096);
	const core_2 = __webpack_require__(/*! @angular/core */ 674);
	const router_deprecated_1 = __webpack_require__(/*! @angular/router-deprecated */ 1055);
	core_2.enableProdMode();
	//TODO Curso TypeScript https://www.youtube.com/watch?v=yD4w3PfWnvQ&list=PLTMuY7ptzFIS4usDcmCM_ukdIsmeuXNzD
	//TODO Criar uma biblioteca Firebase - tiago 
	//TODO criar autenticacao e angular material https://codelabs.developers.google.com/codelabs/firebase-web/#3
	//TODO aprender a debugar TYPESCRIPT https://blogs.msdn.microsoft.com/jtarquino/2016/01/24/debugging-typescript-in-visual-studio-code-and-chrome/
	//TODO criar gulp
	//TODO Teste -- flavio
	//TODO Rotas
	let AppComponent = class AppComponent {
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'myapp',
	        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
	        providers: [router_deprecated_1.ROUTER_PROVIDERS],
	        template: `
	    <nav>
	        <a [routerLink]="['Dash']">Home</a>
	    </nav>
	    <router-outlet></router-outlet>
	    `
	    }),
	    router_deprecated_1.RouteConfig([
	        { path: '/dash-board', name: 'Dash', component: dashboard_component_1.DashBoardComponent, useAsDefault: true }
	    ]), 
	    __metadata('design:paramtypes', [])
	], AppComponent);
	exports.AppComponent = AppComponent;
	platform_browser_dynamic_1.bootstrap(AppComponent);


/***/ },

/***/ 1096:
/*!**********************************************!*\
  !*** ./app/Component/dashboard.component.ts ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(/*! @angular/core */ 674);
	let DashBoardComponent = class DashBoardComponent {
	};
	DashBoardComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: `
	        <h1>HOME</h1>
	
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], DashBoardComponent);
	exports.DashBoardComponent = DashBoardComponent;


/***/ }

});
//# sourceMappingURL=app.js.map