import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
// tslint:disable-next-line: eofline
];