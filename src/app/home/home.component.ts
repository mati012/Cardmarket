import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { RegistrarseComponent } from "../registrarse/registrarse.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductoComponent, RegistrarseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
