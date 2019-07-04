import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service';
import { Anime } from '../shared/models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: 'anime.component.html',
  styleUrls: ['./anime.component.scss']
})

export class AnimeComponent implements OnInit {

  public animes: Anime[];


  constructor(
    private animeService: AnimeService
  ) {
  }

  public ngOnInit() {
    this.animeService.init().then(
      () => {
        this.animeService.animesAsObservable.subscribe(
          (animes) => {
            this.animes = animes;
          }
        );
      }
    );
  }

  public leftScroll() {
    document.querySelector('div.outer_container').scrollLeft -= 500;
  }

  public rightScroll() {
    document.querySelector('div.outer_container').scrollLeft += 500;
  }
}
