import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformacionService {

  private info:any = {}
  private loaded_info:boolean = false;
  private loaded_about:boolean = false;
  private team:any[] = [];

  constructor(private httpClient:HttpClient) {
    this.load_info();
    this.load_about();
  }

  private load_info(){
    this.httpClient.get("assets/data/info.page.json").subscribe(
      data =>{
        // console.log(data);
        this.info = data;
        this.loaded_info = true;
      }
    )
  }

  private load_about(){
    this.httpClient.get("https://portafolio-b7c9c.firebaseio.com/team.json").subscribe(
      data =>{
        // console.log(data);
        this.team = data;
        this.loaded_about = true;
      }
    )
  }

}
