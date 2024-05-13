import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,RouterLink,RouterModule,RouterOutlet,  MainContentComponent, ImprintComponent,  FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'Portfolio';

}
