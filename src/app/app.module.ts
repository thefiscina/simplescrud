import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';

import { SwiperModule, SwiperDirective } from 'ngx-swiper-wrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { appRoutes } from './routes';

//PAGINAS
import { HomeComponent } from './pages/home/home.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PostsRecentesComponent } from './components/posts-recentes/posts-recentes.component';
import { PostDestaqueComponent } from './components/post-destaque/post-destaque.component';
import { MaisLidosComponent } from './components/mais-lidos/mais-lidos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PostsDestaquesComponent } from './components/posts-destaques/posts-destaques.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { PrincipalComponent } from './pages/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeaderComponent,
    SideMenuComponent,
    PostsRecentesComponent,
    PostDestaqueComponent,
    MaisLidosComponent,
    CategoriasComponent,
    PostsDestaquesComponent,
    FooterComponent,
    PostsComponent,
    PostComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
