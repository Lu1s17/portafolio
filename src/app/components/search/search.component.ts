import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  private term:string = undefined;

  constructor(private route:ActivatedRoute,
              public productosService:ProductosService) {
    route.params.subscribe(parameters => {
      this.term = parameters['term'];
      //console.log(this.term);
      productosService.search_products(this.term);
    });
  }

}
