import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  constructor(private informacionService:InformacionService,
              private router:Router){}

  search_product(term:string){
    // console.log(term);
    this.router.navigate(['search', term])
  }
}
