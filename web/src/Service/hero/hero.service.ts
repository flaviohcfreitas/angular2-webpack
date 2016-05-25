import { Hero } from '../../models/hero/hero';
import { Injectable } from 'angular2/core';
import { HEROES } from '../../models/hero/mock-heroes';
import {FirebaseService} from '../../service/firebase.service'
import {Http} from 'angular2/http';

const ref = "/teste"

@Injectable()
export class HeroService {
  private dbContext ;
  private heroes:Hero[]
  
  constructor(){
    this.dbContext = new FirebaseService(ref).data_base;
  }

  setHeroes(){
    console.log("SET HEROES")
    this.dbContext.set(HEROES);
  }
  
  getHeroes() {
    this.setHeroes();

    var data ;
    this.dbContext.once("value", function(snapshot) {
      data = snapshot.val();
    });
    
    console.log("GET HEROES")
    console.log(data)
    this.heroes = data;
    return this.heroes  
  }
}
