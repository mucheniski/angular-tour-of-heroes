import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(receivedHeroes => this.heroes = receivedHeroes);
  }

  add(name: string): void {
    name = name.trim();
    
    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);

    /**
     * There's really nothing for the component to do with the Observable returned by heroService.delete() but it must subscribe anyway.
     * If you neglect to subscribe(), the service will not send the delete request to the server. 
     * As a rule, an Observable does nothing until something subscribes.
     */
    this.heroService.deleteHero(hero).subscribe();
  }

  // https://angular.io/tutorial/toh-pt6#search-by-name

}