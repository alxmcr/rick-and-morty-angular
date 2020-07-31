import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiRoot: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  // si incluimos despues de ${username} el /repos, me traeria la lista de repositorios
  getApi(username: string) {
    return this.http.get(`${this.apiRoot}${username}/repos`);
  }
}
