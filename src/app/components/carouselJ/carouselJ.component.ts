import { Component, Input, OnInit, OnDestroy, NgZone, Renderer2, ElementRef } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { ICarousel } from '../../constants/carousel.constants';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-carousel',
  templateUrl: './carouselJ.component.html',
  styleUrls: ['./carouselJ.component.scss']
})
export class CarouselComponentJ implements OnInit, OnDestroy {
  @Input() images: ICarousel[] = [];
  private destroy$ = new Subject<void>();
  private scroll = 0;
  private maxScroll = 1000;

  constructor(
    private ngZone: NgZone,
    private renderer: Renderer2,
    private el: ElementRef,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.ngZone.runOutsideAngular(() => {
      interval(3000).subscribe(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      });
    });
  }

  nextSlide() {
    let screenWidth = 0;
    if (this.platform.isBrowser) {
      screenWidth = window.innerWidth;
    }
    this.getMaxScroll(screenWidth);
    const transformValue = `translate3d(-${this.scroll}px, 0, 0)`;
    const element = this.el.nativeElement.querySelector('.carousel-component__container');
    this.renderer.setStyle(element, 'transform', transformValue);
    if (this.scroll >= this.maxScroll) {
      this.scroll = 0;
    } else {
      this.scroll = this.scroll + screenWidth / 4;
    }
  }

  getMaxScroll(screenWidth: number): void {
    let increment = 700;
    if (screenWidth <= 480) {
      increment = 320;
    } else if (screenWidth > 480 && screenWidth <= 800) {
      increment = 400;
    }
    this.maxScroll = screenWidth + increment;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
