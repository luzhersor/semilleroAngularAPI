import { Pipe, PipeTransform } from '@angular/core';
import { Sticker } from '../interfaces/stickersInterface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  //Recibir la información y retornar otra cosa diferente
  transform(stickers: Sticker[], page: number = 0): Sticker[] {

    return stickers.slice(page, page + 5);

    console.log(stickers)
    return [];
  }




}
