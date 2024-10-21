import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  rating: number;
  cantidadJ: number;
  descuento: boolean;
  category: 'tcg' | 'mayores' | 'nacionales' | 'familiar';
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  @Input() category: 'tcg' | 'mayores' | 'nacionales' | 'familiar' | null = null;
  products: Product[] = [
    {
      name: 'Catan',
      price: '$49.990',
      imageUrl: '/assets/catan-imagen2.jpg',
      description:
        'Es un juego de mesa de tablero modular, con cartas y dados.',
      rating: 4.5,
      cantidadJ: 4,
      descuento: false,
      category: 'familiar',
    },
    {
      name: 'Dixit',
      price: '$39.990',
      imageUrl: '/assets/dixit.jpg',
      description: 'Juego de mesa para la familia ',
      rating: 3.5,
      cantidadJ: 6,
      descuento: false,
      category: 'familiar',
    },
    {
      name: 'King of Tokyo',
      price: '$69.990 ',
      imageUrl: '/assets/king-of-tokyo.jpg',
      description: 'juego de mesa para la familia',
      rating: 4,
      cantidadJ: 6,
      descuento: false,
      category: 'familiar',
    },
    {
      name: 'Mazo Commander',
      price: '$39.990 ',
      imageUrl: '/assets/mazo-commander.jpg',
      description: 'Mazo preconstruido',
      rating: 4,
      cantidadJ: 4,
      descuento: false,
      category: 'tcg',
    },

    {
      name: 'booster box modern horizon 3',
      price: '$229.990 ',
      imageUrl: '/assets/booster-box.jpg',
      description: 'caja de sobres de la edicion modern horizon 3',
      rating: 4,
      cantidadJ: 4,
      descuento: false,
      category: 'tcg',
    },

    {
      name: 'Mala leche',
      price: '$69.990 ',
      imageUrl: '/assets/mala-leche.jpg',
      description: 'juego de cartas para compartir con tus amigos',
      rating: 4,
      cantidadJ: 6,
      descuento: false,
      category: 'nacionales',
    },
    {
      name: 'Ranking top 31 minutos',
      price: '$69.990 ',
      imageUrl: '/assets/31-minutos.jpg',
      description: 'juego de mesa para la familia',
      rating: 4,
      cantidadJ: 6,
      descuento: false,
      category: 'nacionales',
    },
    {
      name: 'Exploding kittens',
      price: '$29.990 ',
      imageUrl: '/assets/exploding-kittens-game.jpg',
      description: 'juego de mesa para mayores',
      rating: 4,
      cantidadJ: 6,
      descuento: false,
      category: 'mayores',
    },
    {
      name: 'Cards Against Humanity ',
      price: '$19.990 ',
      imageUrl: '/assets/cards-against-humanity.jpg',
      description: 'juego de mesa para mayores',
      rating: 4,
      cantidadJ: 4,
      descuento: false,
      category: 'mayores',
    },
  ];
  get filteredProducts(): Product[] {
    return this.category
      ? this.products.filter((product) => product.category === this.category)
      : this.products;
  }
}
