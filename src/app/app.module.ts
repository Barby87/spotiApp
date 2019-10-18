import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RoutesRecognized } from '@angular/router';

// Peticiones http
import { HttpClientModule } from '@angular/common/http'; // SE debe inyectar en gome.component.ts (en el componente que se va a usar)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Importar rutas
import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe
  ],
  imports: [ // Todos los modules van en los imports
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
