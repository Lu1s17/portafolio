import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(res => {
      console.log(res);
    })
  }

}
