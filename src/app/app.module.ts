import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './views/header/header.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { HistoryComponent } from './components/history/history.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TravelphotosComponent } from './components/travelphotos/travelphotos.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    CarouselComponent,
    HistoryComponent,
    GiftsComponent,
    PhotosComponent,
    TravelphotosComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
