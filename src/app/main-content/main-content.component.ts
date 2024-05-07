import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, HeaderComponent,AboveTheFoldComponent, AboutMeComponent, SkillsComponent, PortfolioSectionComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
