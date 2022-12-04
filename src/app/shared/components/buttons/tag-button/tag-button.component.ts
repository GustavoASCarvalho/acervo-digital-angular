import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.scss'],
})
export class TagButtonComponent implements OnInit {
  @Input('label') label!: string;
  
  constructor() {}

  ngOnInit() {

  }
}
