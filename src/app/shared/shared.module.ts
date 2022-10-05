import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';

@NgModule({
  declarations: [HeaderComponent, CardCarouselComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, CardCarouselComponent],
})
export class SharedModule {}
