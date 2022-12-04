import { Component, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/core/theme.service';

enum headerState {
  'INICIAL' = 0,
  'BUSCANDO' = 1,
  'SLIDEBAR' = 2,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  usuarioLogado = false;
  estado: headerState = headerState.INICIAL;

  constructor(private themeService: ThemeService, private el: ElementRef) {}

  alterarEstado(estado: headerState) {
    this.estado = estado;
  }

  trocarTema() {
    this.themeService.update(!this.themeService.darkTheme);
  }

  trocarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  isDarkTheme() {
    return this.themeService.darkTheme;
  }

  ngAfterViewInit() {
    //adiciona o efeito de sombra quando o usuario scrolla a pagina
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        document.body.querySelector('.header')?.classList.add('shadow');
      } else {
        document.body.querySelector('.header')?.classList.remove('shadow');
      }
    });
    //fecha qualquer menu que esteja aberto quando o usuario clica fora dele
    this.el.nativeElement.addEventListener(
      'click',
      (e: { target: Element }) => {
        if (e.target === document.querySelector('.overlay')) {
          this.alterarEstado(headerState.INICIAL);
        }
      }
    );
    //fecha qualquer menu que esteja aberto quando o usuario aperta esc no teclado ou foca em algum outro elemento da tela com tab
    window.addEventListener('keyup', (e: { key: string }) => {
      if (e.key == 'Escape' || e.key == 'Esc') {
        this.alterarEstado(headerState.INICIAL);
      }
      if (e.key == 'Tab') {
        //verificar se o elemento que esta com foco é um elemento do header
        if (
          document.activeElement?.closest('.header') !==
            this.el.nativeElement.querySelector('.header') &&
          document.activeElement?.closest('.slider') !==
            this.el.nativeElement.querySelector('.slider')
        ) {
          this.alterarEstado(headerState.INICIAL);
        }
      }
    });
  }
}
