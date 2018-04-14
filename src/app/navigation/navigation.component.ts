import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('fadeToggle', [
      state( 'true', style({ opacity: 1 })),
      state( 'false', style({ opacity: 0 })),
      transition('1 => 0', animate('600ms')),
      transition('0 => 1', animate('300ms')),
    ])
  ]
})

export class NavigationComponent implements OnInit {
  public animateToggle: boolean;
  constructor() {
  }
  toggleMenu(){
    this.animateToggle = !this.animateToggle;
    console.log("22");
  }
  ngOnInit() {
    this.animateToggle = false;
  }
}
