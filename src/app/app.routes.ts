import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'skills', component: SkillsComponent }

];
