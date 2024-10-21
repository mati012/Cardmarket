import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductoComponent } from "../producto/producto.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-nacionales',
  standalone: true,
  imports: [HeaderComponent, ProductoComponent, FooterComponent],
  template: '<h1 class="titulo">Juegos Nacionales</h1><app-producto category="nacionales"></app-producto>',
  styleUrl: './nacionales.component.css'
})
export class NacionalesComponent {

}
