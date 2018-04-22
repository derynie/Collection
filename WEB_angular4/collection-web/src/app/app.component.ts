import { Component, OnInit } from '@angular/core';

import { AnimeService } from './anime.service'
import { Anime } from './anime'

import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  animes: Anime[] = [];
  pageSize: number;
  length: number;
  pageSizeOptions: number[] = [5];
  pageEvent: PageEvent;

  constructor(
    private animeService: AnimeService) { }

  getAnimes(page: number = 0): void {
    console.log("page = ", page);
    this.animeService.getAnimes(page).then(animes => {
      console.log("animes = ", animes);
      this.animes = animes;
      if (!this.pageSize)
        this.pageSize = 5;
      if (!this.length)
        this.length = animes[0].NbTotalPage;
    });
  }

  ngOnInit(): void {
    this.getAnimes();
  }

  setPageEvent(event) {
    this.pageEvent = event;
    this.getAnimes(event.pageIndex);
  }

}
