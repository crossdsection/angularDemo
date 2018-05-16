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
  public zIndex: number;
  constructor() {
    this.zIndex = -1;
    this.animateToggle = false;
  }
  toggleMenu(){
    this.animateToggle = !this.animateToggle;
    if ( this.animateToggle ) {
      this.zIndex = 99;
    } else {
      this.zIndex = -1;
    }
    console.log( this.zIndex );
  }
  ngOnInit() {
    this.animateToggle = false;
  }
}
