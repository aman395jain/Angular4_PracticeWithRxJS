import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

export interface CarouselContext {
    $implicit: string;
    controller: {
        next: () => void;
        prev: () => void;
    };
}

@Directive({
  selector: '[CarouselDirective]'
})
export class CarouselDirective implements OnInit, OnDestroy {

    timerId: any | null = null;
    context: CarouselContext | null = null;
    index = 0;
    private _autoplayDelay: number;

  constructor(
      private tpl: TemplateRef<CarouselContext>,
      private vcr: ViewContainerRef) {
  }

    @Input('carouselFrom') images: string[];
    @Input('carouselWithDelay')
    set autoplayDelay(autoplayDelay: number) {
        this._autoplayDelay = autoplayDelay;
    }
    get autoplayDelay() {
        return this._autoplayDelay || 1000;
    }
    @Input('carouselAutoplay')
    set autoplay(autoplay: 'on' | 'off') {
        autoplay === 'on' ? this.setAutoplayTimer() : this.clearAutoplayTimer();
    }
    private clearAutoplayTimer() {
        window.clearInterval(this.timerId);
    }

    private setAutoplayTimer() {
        this.timerId = window.setInterval(() => this.next(), this.autoplayDelay);
    }
    ngOnInit(): void {
        this.context = {
            $implicit: this.images[0],
            controller: {
                next: () => this.next(),
                prev: () => this.prev()
            }
        };

        this.vcr.createEmbeddedView(this.tpl, this.context);
    }

    ngOnDestroy() {
        this.clearAutoplayTimer();
    }
    next() {
        this.index++;
        if (this.index >= this.images.length) {
            this.index = 0;
        }

        this.context.$implicit = this.images[this.index];
    }

    prev() {
        this.index--;
        if (this.index < 0) {
            this.index = this.images.length - 1;
        }
        this.context.$implicit = this.images[this.index];
    }
}
