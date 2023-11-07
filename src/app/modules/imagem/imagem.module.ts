import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagemRoutingModule } from './imagem-routing.module';
import { ImagemComponent } from './page/imagem/imagem.component';


@NgModule({
  declarations: [
    ImagemComponent
  ],
  imports: [
    CommonModule,
    ImagemRoutingModule
  ]
})
export class ImagemModule { }
