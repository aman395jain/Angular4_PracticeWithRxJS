import {Directive, ElementRef, EmbeddedViewRef, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[searchBox]'
})
export class SearchBoxDirective implements OnInit{


  constructor(private templateRef: TemplateRef<null>,
              private viewContainerRef: ViewContainerRef,
              private elementRef: ElementRef) {
    console.log('hiii We are in searchBox directive')
  }
    ngOnInit(): void {
    console.log(this.templateRef)
        console.log(this.viewContainerRef)
        console.log(this.elementRef)
        this.viewContainerRef.createEmbeddedView(this.templateRef)

    }
}
