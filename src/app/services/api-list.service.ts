import { Injectable } from '@angular/core';
import { SimplePokemon } from '../interfaces/SimplePokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {
  private pokemonUrl = 'http://localhost:3000/pokemons';
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<SimplePokemon[]> {
    return this.http.get<SimplePokemon[]>(this.pokemonUrl);
  }

  getById(id: number): Observable<SimplePokemon> {
    return this.http.get<SimplePokemon>(`${this.pokemonUrl}/${id}`);
  }

  removeById(arg0: any) {
    this.http.delete(`${this.pokemonUrl}/${arg0}`).subscribe();
  }
}
