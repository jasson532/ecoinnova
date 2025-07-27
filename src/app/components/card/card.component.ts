import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from '../../constants/products.constants';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, NzCardModule]
})
export class CardComponent implements OnInit {
  @Input() card: ICard | null = null;
  @Output() eventCard = new EventEmitter<ICard | null>();
  ngOnInit(): void {
    console.log('CARD ', this.card);
  }

  clickCard(card: ICard | null): void {
    this.eventCard.emit(card);
  }
}
