import {Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translations';
import {BehaviorSubject} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class TranslateService {

  private currentLangSubject: BehaviorSubject<string>;
  // private _currentLang: string;

  public get currentLang() {
    return this.currentLangSubject.value;
  }

  // inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any) {
    this.currentLangSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentLang')));
  }

  public use(lang: string): void {
    // set current language
    localStorage.setItem('currentLang', JSON.stringify(lang));
    this.currentLangSubject.next(lang);
  }

  private translate(key: string): string {
    // private perform translation
    const translation = key;

    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
    }

    return translation;
  }

  public instant(key: string) {
    // call translation
    return this.translate(key);
  }
}
