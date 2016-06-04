import {Component} from 'angular2/core';
import {HeroListComponent} from './hero-list.component'

@Component({
    selector: 'hero-component',
    directives: [HeroListComponent],
    template: `
    <h1>HEROES</h1>
    <hero-list></hero-list>
    `
})
export class HeroComponent {

}
