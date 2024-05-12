import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../language-service/language-service.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) { } // Inject LanguageService

  switchLanguage(language: string) {
    this.languageService.translateTo(language); // Aufruf der translateTo-Methode des LanguageService
  }


  showBurgerMenu = false;

openBurgerMenu() {
  this.showBurgerMenu = !this.showBurgerMenu;
}

closeBurgerMenu(){
  this.showBurgerMenu = false;

}

}
