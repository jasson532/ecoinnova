import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LayoutComponent } from '../../components/layout/layout.component';
import { dataCarousel, ICarousel } from '../../constants/carousel.constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule, LayoutComponent, NzTypographyModule, CarouselComponent],
})
export class HomeComponent {
  title = 'Eco Innova';
  carouselData: ICarousel[] = [];

  constructor() {
    this.carouselData = dataCarousel;
    console.log('carousel ', dataCarousel);
    
  }
  
}
