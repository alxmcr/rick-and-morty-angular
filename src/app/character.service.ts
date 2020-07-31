import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiRoot: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get(`${this.apiRoot}`);
  }
}
