import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { Movies } from './services/movies.service'

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponent } from './my-movie-component/my-movie-component.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MyHomeComponent},
    {path: 'movie/:id', component: MyMovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Movies],
  bootstrap: [AppComponent]
})
export class AppModule { }
