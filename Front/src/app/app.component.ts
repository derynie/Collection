import {Component, OnInit} from '@angular/core';
import {UserService} from './shared/user.service';
import {TranslateService} from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;
  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private userService: UserService,
              public translateService: TranslateService) {}

  public ngOnInit(): void {
    this.supportedLanguages = [
      { display: 'English', value: 'us' },
      { display: 'Français', value: 'fr' }
    ];

    console.log('current anguage = ', this.translateService.currentLang);
    if (this.translateService.currentLang === null) {
      this.translateService.use('us');
    }

    this.refreshText();
  }

  public logout() {
    this.userService.logout();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this.translateService.instant('hello world');
  }

}
