import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface ButtonStatus {
  label: string;
  answer: 'correct' | 'incorrect' | 'none';
  status: 'disabled' | 'enabled';
}

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.scss'],
})
export class QuestionButtonComponent implements OnInit {
  @Input('buttonStatus') buttonStatus!: ButtonStatus;

  @ViewChild('botao') botao!: ElementRef;

  constructor() {}

  ngOnInit() {

  }
}
