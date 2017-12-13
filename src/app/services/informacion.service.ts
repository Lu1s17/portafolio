import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  public info:any = {}
  private loaded_info:boolean = false;
  private loaded_about:boolean = false;
  public team:any[] = [];

  constructor(private http:Http) {
    this.load_info();
    this.load_about();
  }

  private load_info(){
    this.http.get("assets/data/info.page.json").subscribe(
      data =>{
        //console.log(data.json());
        this.info = data.json();;
        this.loaded_info = true;
      }
    )
  }

  private load_about(){
    this.http.get("https://portafolio-b7c9c.firebaseio.com/team.json").subscribe(
      data =>{
        //console.log(data.json());
        this.team = data.json();
        this.loaded_about = true;
      }
    )
  }

}
