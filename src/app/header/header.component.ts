import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fix typo from styleUrl to styleUrls
})
export class HeaderComponent {}
