import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { TagButtonComponent } from './components/buttons/tag-button/tag-button.component';

@NgModule({
  declarations: [HeaderComponent, CardCarouselComponent, TagButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, CardCarouselComponent, TagButtonComponent],
})
export class SharedModule {}
