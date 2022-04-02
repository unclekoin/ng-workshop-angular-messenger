import {
  AfterViewInit,
  Directive,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements AfterViewInit {
  @Input('appStatus') isOnline: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    if (this.isOnline) {
      const spanElement = this.renderer.createElement('span');
      this.renderer.addClass(spanElement, 'status');
      this.renderer.addClass(spanElement, 'online');

      this.renderer.appendChild(this.elementRef.nativeElement, spanElement);
    }
  }

}
