import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  private anio:number = new Date().getFullYear();

  constructor(private informacionService:InformacionService){}

}
