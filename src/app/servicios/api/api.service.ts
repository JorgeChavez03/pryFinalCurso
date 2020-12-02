import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import{actoresI} from '../../modelos/actores.interface';
import{peliculasI} from '../../modelos/peliculas.interface';


@Injectable()
export class ApiService{

    urlActores:string="http://localhost:3000/api/actores?x-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2YmZkOWU2MjJhOTMzZjQyM2QzODQiLCJpYXQiOjE2MDY4NjA3NjEsImV4cCI6MTYwNjkwMzk2MX0.eZoS_X0dSWmzomc3OMyuBJSeZngOvcXaO5vsIYjGAp4";

    urlPeliculas:string="http://localhost:3000/api/peliculas"

    constructor(private http: HttpClient){}

    getActores():Observable<actoresI[]>{
        let dir=this.urlActores;
        return this.http.get<actoresI[]>(dir);
    }

    getPeliculas():Observable<peliculasI[]>{
        let dir=this.urlPeliculas;
        return this.http.get<peliculasI[]>(dir);
    }


}