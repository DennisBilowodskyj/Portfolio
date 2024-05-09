import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MainContentComponent,
    ImprintComponent,
    RouterLink,
    FooterComponent,
    HeaderComponent,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateHttpLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
      ]
})





export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}











export class AppComponent {
  title = 'Portfolio';
}
