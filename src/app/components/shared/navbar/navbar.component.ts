import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../..//../servicios/heroes.service';
import { Router } from '@angular/router';
 import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {

  }

  buscarHeroe (termino:string){
    this.router.navigate(['/heroess',termino]);
  }

}
