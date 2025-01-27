import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CarouselComponent]
})
export class HomeComponent {
  title = 'nombre-del-proyecto';
}
