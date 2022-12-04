import { Component, ElementRef, OnInit } from '@angular/core';
import { ButtonStatus } from '../../../../shared/components/buttons/question-button/question-button.component';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss']
})
export class QuestionSectionComponent implements OnInit {

  question = {
    title: 'Qual o nome da casa que mora o personagem Harry Potter?',
    options: [
      {
        label: 'Grifinória',
        answer: 'none',
        status: 'enabled',
      },
      {
        label: 'Sonserina',
        answer: 'none',
        status: 'enabled',
      },
      {
        label: 'Corvinal',
        answer: 'none',
        status: 'enabled',
      },
      {
        label: 'Lufa-Lufa',
        answer: 'none',
        status: 'enabled',
      }
    ] as ButtonStatus[],
    correctOption: 'Grifinória'
  }

  jaRespondeu = false;

  constructor() { }

  ngOnInit(): void {
  }

  respondendo(option: string) {

    if (this.jaRespondeu) return;
    this.jaRespondeu = true;

    this.question.options.forEach((opt) => {
      opt.status = 'disabled';
    })
    
    if (option === this.question.correctOption) {
      this.question.options.find((opt) => opt.label === option)!.answer = 'correct';
    }else {
      this.question.options.find((opt) => opt.label === option)!.answer = 'incorrect';
    }
  }
}
