import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from '../../constants/products.constants';
import { emit } from 'node:process';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule]
})
export class CardComponent implements OnInit {
  @Input() card: ICard | null = null;
  @Output() eventCard = new EventEmitter<ICard | null>();
  ngOnInit(): void {
    console.log('CARD ', this.card);
  }

  clickCard(card: ICard | null): void {
    console.log('esta es la card expuesta ', card);
    
    this.eventCard.emit(card);
  }
}
