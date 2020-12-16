import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  /*
    The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent will bind to it like this.
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  */
 @Input() hero: Hero;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    const id = +this.activateRoute.snapshot.paramMap.get('id');

    this.heroService.getHeroes(id).subscribe(returnedHero => this.hero = returnedHero);
  }

  gotBack(): void {
    this.location.back();
  }

}
