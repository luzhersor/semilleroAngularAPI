import { Component, Input } from '@angular/core';
import { Sticker } from '../../interfaces/stickersInterface';
import { PipeKPipe } from '../../pipes/pipe-k.pipe';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public stickers: Sticker[] = [];

  public page: number = 0;
  //Paginación
  nextPage(){
    this.page += 5;
  }

  prevPage(){
    if(this.page > 0){
      this.page -=5;}
  }

  searchTerm2: string = ''; // Variable para almacenar el término de búsqueda
   // Variable para la paginación
  stickers2: any[] = []; // Tu lista de stickers
  filterActive: boolean = false;


  // ... otros métodos del componente

  applyFilter() {

    if (this.filterActive) {
      this.searchTerm2 = '';
    } else {
      this.searchTerm2 = 'milk';
    }
    this.filterActive = !this.filterActive;
  }

}



