import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class ProductosService {

  public products:any[] = [];
  public filtered_products:any[] = [];
  public loading:boolean = true;

  constructor(private http: Http) {
    this.load_products()
  }

  public load_product(id:string){
    return this.http.get(`https://portafolio-b7c9c.firebaseio.com/productos/${id}.json`);
  }

  public load_products(){
    this.loading = true;

    let promise = new Promise((resolve, reject) => {

      this.http.get('https://portafolio-b7c9c.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        // console.log(res.json());
        // setTimeout(()=>{
        this.loading = false;
        this.products = res.json();
        resolve();
        // },1500)
      });

    })

    return promise;
  }

  public search_products(term:string){

    // console.log("Looking for products");
    // console.log(this.products.length);

    if(this.products.length === 0){
      this.load_products().then( ()=>{
        //termino la carga
        this.filter_products(term);
      })
    }else{
      this.filter_products(term);
    }

  }

  public filter_products(term:string){

    this.filtered_products = [];

    term = term.toLowerCase();

    this.products.forEach( prod =>{
      //console.log(prod);

      if(prod.categoria.indexOf(term) >= 0 || prod.titulo.toLowerCase().indexOf(term) >= 0){
        this.filtered_products.push(prod);
      }
    })
    //console.log("luis ", this.filtered_products);
  }

}
