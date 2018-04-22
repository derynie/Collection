import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Anime } from './anime'


import 'rxjs/add/operator/toPromise';

@Injectable()

export class AnimeService {
  private AnimeUrl = 'http://localhost:3004/api/animes/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAnimes(page: number): Promise<Anime[]> {
    page++;
    return this.http.get(this.AnimeUrl + page)
      .toPromise()
      .then(response => response.json().Animes as Anime[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
