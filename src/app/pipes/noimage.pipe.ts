import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[]): string {

    if( !images ){
      return 'assets/img/no-image.png'; // REtorna una imagen vacía, estamos simulando que la app corre en el index.html, por eso se usa esta ruta 
    }else if( images.length > 0 ){
      return images[0].url;
    }else{
      return 'assets/img/no-image.png';
    }
    
  }

}
