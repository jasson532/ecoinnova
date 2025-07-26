import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ICard } from '../../constants/products.constants';
import { CarouselComponent } from '../carousel/carousel.component';
import { ICarousel } from '../../constants/carousel.constants';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [NzModalModule, NzButtonModule, CarouselComponent],
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  @Input() product: ICarousel[] = [];
  @Input() isVisible: boolean = false;
  @Output() cancelEvent = new EventEmitter<boolean>();
  constructor() {}

  showModal(): void {
    console.log({isVisible: this.isVisible});
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.cancelEvent.emit(false)
  }

  onModalOpened() {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 500);
}
}
