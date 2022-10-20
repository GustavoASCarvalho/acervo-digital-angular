import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { GridPostagensComponent } from './components/grid-postagens/grid-postagens.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';

@NgModule({
  declarations: [HomeComponent, CardCarouselComponent, GridPostagensComponent, QuestionSectionComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
