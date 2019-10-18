import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Reactive extention. El operador map recibe una función

@Injectable({
  providedIn: 'root' // Asegura que el servicio se detecte automáticamente, sin necesidad de importarlo en el app.module.ts
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery( query: string ){ // Recibirá una parte de la url específico para cada petición

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQCdioF8JQ8Ggfl4AJQ7xRNqFUZyTJw3mT21K2R2JPExUzhoxbSpWqxESMuoH4EYXXFV_T07xtzVJU49P_U'
   });
  
   return this.http.get(url, { headers });

   }


   // Petición al api de spotify para conseguir los últimos lanzamientos
   getNewReleases(){

    //   const headers = new HttpHeaders({ 
    //     'Authorization': ' Bearer BQCGC4fBTQ-Demjt63BO_6KDLf9YGY8GbMR1Jgny78TLIVwxqurn40hDR90D2Ca5Zg6PUC8zU6yMp3Nzsns'
    //  });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?Limit=20', { headers })
    // .pipe( map( data => data['albums'].items)); // De la data va a buscar una propiedad llamada albums

      return this.getQuery('browse/new-releases?Limit=20')
                .pipe( map( data => data['albums'].items));
  
      // .subscribe( data => {   --> Esto se pone en el componente donde se llame el servicio
      //   console.log( data );
      // });    

   }
  
   // Petición para obtener artista a través de la búsqueda
   getArtist(termino: string ){

  //   const headers = new HttpHeaders({ 
  //     'Authorization': 'Bearer BQCGC4fBTQ-Demjt63BO_6KDLf9YGY8GbMR1Jgny78TLIVwxqurn40hDR90D2Ca5Zg6PUC8zU6yMp3Nzsns'
  //  });

  //   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
  //             .pipe( map( data => data['artists'].items));

      return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));

   }

}
