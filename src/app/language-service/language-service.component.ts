import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  translateTo(language: string) {
    this.translate.use(language); // Übersetzen in die angegebene Sprache
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang; // Aktuelle Sprache abrufen
  }
}