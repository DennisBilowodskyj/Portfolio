import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'imprint', component: ImprintComponent }

];
