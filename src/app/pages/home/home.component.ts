import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LayoutComponent } from '../../components/layout/layout.component';
import { dataCarousel, ICarousel } from '../../constants/carousel.constants';
import { CarouselComponentJ } from '../../components/carouselJ/carouselJ.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { ICard, listProducts1 } from '../../constants/products.constants';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    LayoutComponent,
    NzTypographyModule,
    CarouselComponentJ,
    ProductsListComponent,
    NzButtonModule
  ],
})
export class HomeComponent {
  title = 'Eco Innova';
  carouselData: ICarousel[] = [];
  productsList: ICard[] = [];

  constructor() {
    this.carouselData = dataCarousel;
    this.productsList = listProducts1;
    console.log('carousel ', dataCarousel);
    
  }
  
}
