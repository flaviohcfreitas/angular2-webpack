import { Hero } from '../Models/hero';
import { HEROES } from '../Models/mock-heroes';
import {FirebaseService} from './firebase.service'

const ref = "/teste"

export class HeroService extends FirebaseService{
  
    constructor(){
      super(ref)
    }

  setHeroes(){
    console.log("SET HEROES")
    this.db.set(HEROES);
  }
  
  getHeroes() {
    this.setHeroes();
    return this.db.once('value').then(data=>{
        return data.val()
    })
    
  }
}
