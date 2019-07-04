import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { Anime } from '../shared/models/anime.model';
import {catchError, map} from 'rxjs/operators';
import {TranslateService} from '../translate';

@Injectable()
export class AnimeResources {

  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  public getAnimes(): Observable<Anime[]> {
    const apiPath = 'http://localhost:3004/animes';

    return this.http
      .get(apiPath, { params: {lang: this.translateService.currentLang}})
      .pipe(map((response: any) => {
        const animes: Anime[] = Anime.NewFromArray(response.Animes);
        return animes;
      }), catchError((e) => {
        return throwError(null);
      }));
  }
}
