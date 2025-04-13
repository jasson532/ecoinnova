import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ICard } from '../../constants/products.constants';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ICarousel } from '../../constants/carousel.constants';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [
    CardComponent,
    ProductModalComponent,
    FormsModule, NzFlexModule, NzRadioModule, NzGridModule
  ]
})
export class ProductsListComponent implements OnInit {
  @Input() products: ICard[] = [];
  showInfo = false;
  productInfo: ICarousel[] = [];
  ngOnInit(): void {
    console.log('PRODUCTS ', this.products);
  }

  showProduct(product: any): void {
    console.log({product});
    const { info } = product;
    if (info) {
      this.productInfo = info;
      this.showInfo = true; 
    }
  }

  closeInfo(): void {
    this.showInfo = false;
  }
}
