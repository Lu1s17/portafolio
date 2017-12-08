import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformacionService {

  private info:any = {}
  private cargada:boolean = false;
  constructor(private httpClient:HttpClient) {
    this.httpClient.get("assets/data/info.page.json").subscribe(
      data =>{
        console.log(data);
        this.info = data;
        this.cargada = true;
      }
    )
  }

}
