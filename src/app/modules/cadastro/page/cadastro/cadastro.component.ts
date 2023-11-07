import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

enum Steps {
  InserirEmail = 1,
  ConfirmarEmail = 2,
  ConfirmarSenha = 3,
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  step = Steps.InserirEmail;

  @ViewChild('containerFormCodigo')
  containerFormCodigo!: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  trocarStep(step: Steps) {
    this.step = step;
    if (step == Steps.ConfirmarEmail) {
      setTimeout(() => {
        this.manipularInputs();
      }, 100);
    }
  }

  manipularInputs() {
    const container = this.el.nativeElement.querySelector(
      '.container__form__codigo'
    );
    if (container) {
      const inputs = container.querySelectorAll('input');
      const next_button = this.el.nativeElement.querySelector(
        '.container__form__content #next_button'
      );
      inputs.forEach(
        (
          input: {
            addEventListener: (
              arg0: string,
              arg1: (event: any) => void
            ) => void;
          },
          index: number
        ) => {
          input.addEventListener('input', (event) => {
            if (event.inputType == 'deleteContentBackward') {
              if (index > 0) {
                inputs[index - 1].focus();
              }
            } else {
              if (index < inputs.length - 1) {
                inputs[index + 1].focus();
              }
            }
          });
          input.addEventListener('paste', (event) => {
            event.preventDefault();
            const data = event.clipboardData.getData('text');
            for (let i = 0; i < 4; i++) {
              inputs[i].value = data[i];
            }

            next_button.click();
          });
        }
      );
    }
  }
}
