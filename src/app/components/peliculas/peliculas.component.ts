import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [ApiService]
})
export class PeliculasComponent implements OnInit {

  pelis: any=[];

  constructor(private api: ApiService) { 
    this.getPelis()
  }

  ngOnInit(): void {
  }

  getPelis() {
    this.api.getPeliculas().subscribe(x => {
      this.pelis = x;
    })
  }

}
