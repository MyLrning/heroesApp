import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }