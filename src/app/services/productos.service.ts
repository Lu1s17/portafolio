import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class ProductosService {

  products:any[] = [];
  loading:boolean = true;

  constructor(private http: Http) {
    this.load_products()
  }

  public load_products(){
    this.loading = true;
    this.http.get('https://portafolio-b7c9c.firebaseio.com/productos_idx.json')
                   .subscribe( res => {
                     // console.log(res.json());
                     // setTimeout(()=>{
                       this.loading = false;
                       this.products = res.json();

                     // },1500)
                   })
  }

}
