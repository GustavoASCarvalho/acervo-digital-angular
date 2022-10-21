import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.scss'],
})
export class TagButtonComponent implements OnInit {
  @Input('label') label!: string;
  @Input('dark') dark = false;

  @ViewChild('botao') botao!: ElementRef;

  constructor() {}

  ngOnInit() {

  }

  setDark(){
    if(this.botao){
      this.botao.nativeElement.classList.add('dark');
    }
  }

  ngAfterViewInit(){
    if(this.dark){
      this.setDark();
    }
  }
}
