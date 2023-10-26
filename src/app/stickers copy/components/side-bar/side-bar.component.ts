import { Component } from '@angular/core';
import { StickersService } from '../../service/gifts.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private stickerService: StickersService){}
    get tags(): string[] {
      return this.stickerService.stickersHistory;
    }
     //Función para buscar el botón de Tag
     searchTag2(tag: string):void{
      this.stickerService.searchTag(tag);
    }
}

