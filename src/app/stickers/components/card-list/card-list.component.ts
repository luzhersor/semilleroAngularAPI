import { Component, Input } from '@angular/core';
import { Sticker } from '../../interfaces/stickersInterface';

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

}
