import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css'],
  providers: [ApiService]
})
export class ActoresComponent implements OnInit {

  actors: any=[];

  constructor(private api: ApiService) { 

    this.getActors()
  }

  ngOnInit(): void {
  }

  getActors() {
    this.api.getActores().subscribe(x => {
      this.actors = x;
    })
  }

}
