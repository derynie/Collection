import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { Injectable } from '@angular/core';
import { AnimeResources } from './anime.resources';
import { Anime } from '../shared/models/anime.model';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class AnimeService {

  private _animes: BehaviorSubject<Anime[]> = new BehaviorSubject<Anime[]>([]);

  get animes(): Anime[] {
    return this._animes.value;
  }

  set animes(animes: Anime[]) {
    this._animes.next(animes);
  }

  get animesAsObservable(): Observable<Anime[]> {
    return this._animes.asObservable();
  }

  constructor(private resources: AnimeResources) {
  }

  public init(): Promise<Anime[]> {
    return this.resources.getAnimes()
      .pipe(map((result: Anime[]) => {
        this.animes = result;
        return result;
      }), catchError((e) => {
        return throwError(null);
      })).toPromise();
  }
}
