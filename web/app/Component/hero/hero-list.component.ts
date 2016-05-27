import {Component} from 'angular2/core';
import { HeroService } from '../../Service/hero/hero.service'
import { Hero } from '../../Models/hero/hero';

@Component({
    selector: 'hero-list',
    providers: [HeroService],
    template: `
      <ul>
        <li *ngFor = "let hero of heroes">
          {{hero.name}}
        </li>
      </ul>
    `
})
export class HeroListComponent {
  
  heroes:Hero[];

  constructor(private heroService: HeroService) {
       this.heroes = this.heroService.getHeroes()
    }
}
