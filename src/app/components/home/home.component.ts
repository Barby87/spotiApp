import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  // paises: any[] = [];
  
  // Declaración de variables
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ){
  
    // Inicialización de variables
    this.loading = true;
    this.error = false;
    
    // Llamando a la función declarada en spotify.service.ts
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
          // Cuando ya tenemos la data --> loading no se muestra
          this.loading = false;
          console.log(data);
        }, ( errorServicio ) => {
          this.loading = false;
          this.error = true;
          console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;

        });
  }

  // **Petición http**
  // constructor( private http: HttpClient ) { // Se inyecta http acá para tener acceso a todas las propiedades y métodos del objeto http
  //   console.log('Constructor del home hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')// Petición get al url que vamos a llamar (http://restcountries.eu/ --> Language --> https://restcountries.eu/rest/v2/lang/es
  //       .subscribe( (resp: any) => { // Recibiendo data (respuesta)
  //         this.paises = resp;
  //         console.log(resp);
  //       } )

  //  } 




}
