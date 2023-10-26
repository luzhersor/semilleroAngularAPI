import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StickersModule } from './stickers/stickers.module';
import { HttpClientModule } from '@angular/common/http';
import { StickersModuleIA } from './stickers copy/stickers.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    StickersModule,   //por que no se importo autonamicamente?
    HttpClientModule,
    StickersModuleIA


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
