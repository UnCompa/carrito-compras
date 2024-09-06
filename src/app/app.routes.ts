import { Routes } from '@angular/router';
import { HomepageComponent } from './store/homepage/homepage.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tienda', component: HomepageComponent },
];
