import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductoComponent } from "../producto/producto.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-mayores',
  standalone: true,
  imports: [HeaderComponent, ProductoComponent, FooterComponent],

  template: '<h1 class="titulo">Juegos para mayores</h1><app-producto category="mayores"></app-producto>',
  styleUrl:'./mayores.component.css'
})
export class MayoresComponent {

}
