import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';

declare var $ :any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
// export class CarouselComponent implements OnInit {
export class CarouselComponent {
  @ViewChild('carousel') carouselElement;
  actions = new EventEmitter<string>();
  constructor() {
    window.setTimeout(() => {
      this.carouselElement.nativeElement.classList.toggle("initialized");
      this.actions.emit("carousel");
    },1000);
  }
  // ngOnInit() {
  // }
}
