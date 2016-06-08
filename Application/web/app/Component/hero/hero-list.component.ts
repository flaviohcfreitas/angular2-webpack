import {Component,OnInit} from 'angular2/core';
import {HeroService} from '../../Domain/Service/hero.service';

@Component({
    selector: 'hero-list',
    providers: [HeroService],
    template: `
      <ul>
        <li *ngFor= "let hero of heroes let idx=index ">
            {{idx}}: { id: {{ hero.id }} , name: '{{ hero.name}}' }
        </li>
      </ul>
    `
})

export class HeroListComponent implements OnInit {
  
  heroes: string[];
  usuario: any;

  constructor(private _context: HeroService) {

    }
    
    ngOnInit() {
        this._context.getHeroes().then(data=>{
            this.heroes = data
        })   
    }
    
    
}

//Distribuir melhor essa chamada no init. e adicionar um Loading.