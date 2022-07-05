import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  private api: string = environment.api;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.api }/heroes`);
  }

  getHeroById( id: string ): Observable<Hero> {
    return this.http.get<Hero>(`${ this.api }/heroes/${ id }`);
  }

  getSuggestions( term: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.api }/heroes?q=${ term }&_limit=3`); 
  }
}
