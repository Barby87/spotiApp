import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  
  artistas: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  buscar( termino: string ){
    console.log(termino);
    this.spotify.getArtist( termino )
        .subscribe( (data: any) => {
          console.log(data);
          this.artistas =  data;
      });
  
  }

}
