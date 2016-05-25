import {Component} from 'angular2/core';
import { HeroService } from '../../Service/hero/hero.service'
import { Hero } from '../../Models/hero/hero';

@Component({
    selector: 'app-component',
    providers: [HeroService],
    template: `
    <h1>HEROES</h1>
      <ul>
        <li *ngFor = "let hero of heroes">
          {{hero.name}}
        </li>
      </ul>
    `
})
export class HeroComponent {
  
  heroes:Hero[];

  constructor(private heroService: HeroService) {
       this.heroes = this.heroService.getHeroes()
    }
}
