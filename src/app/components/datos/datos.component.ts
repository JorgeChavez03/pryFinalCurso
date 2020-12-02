import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor() { }

  descripcion='Las mejores peliculas del 2020'

  ngOnInit(): void {
  }

}
