//¿Cuando usamos el operador de ...?
import {HttpClient, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { SearchResponse, Sticker } from '../interfaces/stickersInterface';
//import {Gif, SearchResponse} from '../interface/gifsInterface'


@Injectable({providedIn: 'root'})
export class StickersService{

  //    Variable
  public stickersList: Sticker[] = [];
  private _stickersHistory: string[] = [];
  private apiKey: string = 'iayNqqLALUr9vorjS6w7cKiYFqEVmlON';
  private serviceUrl: string = 'https://api.giphy.com/v1/stickers/translate';

  constructor(private http: HttpClient) { }

  get stickersHistory(){
    return [...this._stickersHistory]
  }

  searchTag(sticker: string): void{
    //Esta validacion es para que cuando no hay nada escrito,
    //no se añada nada al elemento, trim es para borrar los espacios en blanco
    //if(tag.length.trim() == 0)
    if(sticker.length === 0 && sticker.trim() === '') return;
    //this._tagsHistory.unshift(tag);
    this.organizeHistory(sticker);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('s', sticker)
    //.set('weirdness',50)



    this.http.get<SearchResponse>(`${this.serviceUrl}`,{params})
    .subscribe(resp=> {
      this.stickersList = resp.data;
      console.log(resp.data);
    })


    console.log({sticker: this.stickersList})
  }


  private organizeHistory(sticker: string){
    sticker =  sticker.toLocaleLowerCase();

  //Par que es el filter(), me regresa los elementos que cumplan
  //la condicion, si estoy buscando tag me regresaria tag
  //pero borramos del arreglo, en el anterior proyecto usabamos
  //filter para borrar con el tachecito


    if(this._stickersHistory.includes(sticker)){
      this._stickersHistory = this.stickersHistory.filter(
      (oldSticker) =>
      oldSticker !== sticker)
    }

    this._stickersHistory.unshift(sticker);
    this._stickersHistory = this.stickersHistory.splice(0,10)


  }

}
