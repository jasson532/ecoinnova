import { Component, Input } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ICarousel } from '../../constants/carousel.constants';

@Component({
  selector: 'carousel',
  imports: [NzCarouselModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: 'carousel.component.scss',
})
export class CarouselComponent {
  @Input() dataCarousel: ICarousel[] = [];
  effect = 'scrollx';
}
