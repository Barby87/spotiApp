import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

type NewType = any[];

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) { 
    
    this.loadingArtist = true; // Cuando el constructor se ejecute estoy cargando el artista, por lo tanto se muestra el loading

    this.router.params.subscribe( params => {
      
      this.getArtista( params['id'] );
      this.getTopTracks( params['id']); // Llamando a la función getTopTracks

    });

  }

  getArtista( id: string ) {

    this.loadingArtist = true;

    this.spotify.getArtista( id )
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loadingArtist = false;
        });

  }

  getTopTracks( id: string ) {

    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log( topTracks ); 
          this.topTracks = topTracks;         

    })
  }

}
