import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StickersService } from '../../service/gifts.service';
import { Sticker } from '../../interfaces/stickersInterface';

@Component({
  selector: 'ia-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent {

  constructor(private stickersService: StickersService){}

  @ViewChild('txtTagInput')
  public tagInput !: ElementRef<HTMLInputElement>;

   public searchTag(){
     const newTag = this.tagInput.nativeElement.value;
     console.log({newTag})
     this.stickersService.searchTag(newTag);
     this.tagInput.nativeElement.value = '';


     //console.log({newTag})
     //Se incluye esta función porque estamos
     //incluyendo el searchbox
   }

   get stickers(): Sticker[]{
    return this.stickersService.stickersList;
   }

   public page: number = 0;

   //Paginación
    public nextPage(){
      this.page += 5;
    }

    public prevPage(){
      if(this.page > 0){
        this.page -=5;}
    }


}
