import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  private item:any = undefined;
  private id:any = undefined;

  constructor(private route:ActivatedRoute,
              private productosService:ProductosService) {
    route.params.subscribe(parameters => {
    //  console.log(parameters);
    productosService.load_product(parameters['id'])
                    .subscribe(res => {
                      this.item = res.json();
                      this.id = parameters['id'];
                      console.log(this.item);
                    })

    })
  }

}
