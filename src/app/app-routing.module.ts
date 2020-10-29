import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { HistoryComponent } from './components/history/history.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TravelphotosComponent } from './components/travelphotos/travelphotos.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'historia',
    component: HistoryComponent
  },
  {
    path: 'listaPresentes',
    component: GiftsComponent
  },
  {
    path: 'fotosCasamento',
    component: PhotosComponent
  },
  {
    path: 'fotosViagem',
    component: TravelphotosComponent
  },
  {
    path: 'contatos',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
