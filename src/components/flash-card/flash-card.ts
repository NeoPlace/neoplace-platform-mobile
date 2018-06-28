import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
  @ViewChild('fcContainer') fcContainer;
  @ViewChild('front') fcFront;
  @ViewChild('back') fcBack;
  toggled: boolean = false;

  ngAfterViewChecked() {
    const frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 0;
    const backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 0;
    const h = ((frontH > backH) ? frontH :backH) + 'px';
    this.fcContainer.nativeElement.style.height = h;
    this.fcBack.nativeElement.style.height = 0;
    this.fcFront.nativeElement.style.height = h;
  }

  toggle() {
    this.toggled = !this.toggled;
  }

}
