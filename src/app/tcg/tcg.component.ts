import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductoComponent } from "../producto/producto.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-tcg',
  standalone: true,
  imports: [HeaderComponent, ProductoComponent, FooterComponent],
  template: '<h1 class="titulo">TCG</h1><app-producto category="tcg"></app-producto>',
  styleUrl: './tcg.component.css'
})
export class TcgComponent {

}
