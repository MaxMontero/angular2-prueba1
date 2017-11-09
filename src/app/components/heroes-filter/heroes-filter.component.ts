import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styleUrls: ['./heroes-filter.component.css']
})
export class HeroesFilterComponent implements OnInit {
  heroes:any[]=[];


  constructor(private _heroesService:HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe (params => {
    this.heroes = this._heroesService.buscarHeroes(params['termino']);
  });
  }

}
