import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    SideBarComponent,
    HomePageComponent,
    CardListComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent,
    HomePageComponent
  ]
})
export class StickersModule { }
