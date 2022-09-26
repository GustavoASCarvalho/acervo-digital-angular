import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  usuarioLogado = false;
  estaBuscando = false;

  @Input() indexSelecionado: number = 0;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  mostrarBusca() {
    document.querySelector('.header__menu')?.classList.add('hide');
    document.querySelector('.header__search')?.classList.remove('hide');
    document.querySelector('.overlay')?.classList.add('show');
    document.querySelector('input')?.focus();
  }

  fecharBusca() {
    document.querySelector('.header__menu')?.classList.remove('hide');
    document.querySelector('.header__search')?.classList.add('hide');
    document.querySelector('.overlay')?.classList.remove('show');
  }

  abrirMenu() {
    document.querySelector('.header__menu')?.classList.add('hide');
    document.querySelector('.slider')?.classList.remove('hide');
    document.querySelector('.overlay')?.classList.add('show');
  }

  fecharMenu() {
    document.querySelector('.header__menu')?.classList.remove('hide');
    document.querySelector('.slider')?.classList.add('hide');
    document.querySelector('.overlay')?.classList.remove('show');
  }

  trocarTema() {
    this.themeService.update(!this.themeService.darkTheme);
  }

  trocarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  isDarkTheme() {
    console.log('isDarkTheme', this.themeService.darkTheme);
    return this.themeService.darkTheme;
  }

  trocarPagina(index: number) {
    document.body
      .querySelectorAll('li a')
      [this.indexSelecionado].classList.remove('active');
    document.body.querySelectorAll('li a')[index].classList.add('active');
    this.indexSelecionado = index;
  }

  ngAfterViewInit() {
    this.trocarPagina(this.indexSelecionado);
    window.addEventListener('scroll', (_) => {
      let heigth = window.scrollY;
      if (heigth > 0) {
        document.body.querySelector('.header')?.classList.add('shadow');
      } else {
        document.body.querySelector('.header')?.classList.remove('shadow');
      }
    });
    window.addEventListener('click', (e) => {
      if (e.target === document.querySelector('.overlay')) {
        this.fecharBusca();
        this.fecharMenu();
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.fecharBusca();
        this.fecharMenu();
      }
    });
  }
}
