import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-imprint',
    standalone: true,
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
    imports: [CommonModule, RouterLink, TranslateModule, HeaderComponent, FooterComponent]
})
export class ImprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

