import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PrincipalComponent } from './pages/principal/principal.component';
export const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'principal', component: PrincipalComponent },
            { path: 'post/:id', component: PostComponent }
        ]
    },
    { path: '**', redirectTo: '' }
    // tslint:disable-next-line: eofline
];