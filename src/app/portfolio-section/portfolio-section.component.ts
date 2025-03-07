import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectdataService } from '../services/projectdata.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

  projectdata = inject(ProjectdataService)

}
