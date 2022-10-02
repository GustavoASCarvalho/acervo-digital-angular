import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcervoRoutingModule } from './acervo-routing.module';
import { AcervoComponent } from './page/acervo/acervo.component';


@NgModule({
  declarations: [
    AcervoComponent
  ],
  imports: [
    CommonModule,
    AcervoRoutingModule
  ]
})
export class AcervoModule { }
