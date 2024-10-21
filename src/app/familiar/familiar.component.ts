import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-familiar',
  standalone: true,
  imports: [ProductoComponent, FooterComponent, HeaderComponent],

  template: '<h1 class="titulo">Juegos familiares</h1><app-producto category="familiar"></app-producto>',
  styleUrl:'./familiar.component.css'
})
export class FamiliarComponent {

}
