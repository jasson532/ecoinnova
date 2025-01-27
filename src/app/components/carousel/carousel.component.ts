import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'carousel',
  imports: [NzCarouselModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: 'carousel.component.scss',
})
export class CarouselComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
