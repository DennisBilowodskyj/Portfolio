import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Scrollen zur oberen Position der Seite, wenn das Impressum geladen wird
    window.scrollTo(0, 0);
  }

}

