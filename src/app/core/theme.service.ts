import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkTheme = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  initTheme() {
    this.getIsDarkTheme();
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  get darkTheme() {
    return this.isDarkTheme;
  }

  update(isDarkTheme: boolean) {
    this.setIsDarkTheme(isDarkTheme);
    if (isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  private getIsDarkTheme() {
    if (localStorage.getItem('isDarkTheme') === 'true') {
      this.isDarkTheme = true;
    } else {
      this.isDarkTheme = false;
    }
  }

  private setIsDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme;
    localStorage.setItem('isDarkTheme', isDarkTheme.toString());
  }
}
