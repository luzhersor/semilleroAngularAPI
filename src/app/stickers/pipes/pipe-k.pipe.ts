import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeK'
})
export class PipeKPipe implements PipeTransform {

  transform(stickers: any[], searchTerm2: string): any[] {
    if (!stickers || !searchTerm2) {
      return stickers;
    }
    searchTerm2 = searchTerm2.toLowerCase();

    return stickers.filter((sticker) => sticker.username.toLowerCase().includes(searchTerm2));
  }

}
