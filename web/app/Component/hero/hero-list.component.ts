import {Component} from 'angular2/core';
import {FirebaseService} from '../../firebase.service';
import { Hero } from '../../Models/hero/hero';

@Component({
    selector: 'hero-list',
    providers: [FirebaseService],
    template: `
      <ul>
        <li *ngFor= "let hero of heroes let idx=index ">
            {{idx}}: { id: {{ hero.id }} , name: '{{ hero.name}}' }
        </li>
      </ul>
    `
})

export class HeroListComponent {
  
  heroes: string[];
  usuario: any;

  constructor(private _data_base: FirebaseService) {
       this._data_base.db.child('teste').on('value', data => {
            this.heroes = data.val();
            console.log(this.heroes);
        });
    }
}

//Distribuir melhor essa chamada no init. e adicionar um Loading.