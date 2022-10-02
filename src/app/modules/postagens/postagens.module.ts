import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagensRoutingModule } from './postagens-routing.module';
import { PostagensComponent } from './page/postagens/postagens.component';


@NgModule({
  declarations: [
    PostagensComponent
  ],
  imports: [
    CommonModule,
    PostagensRoutingModule
  ]
})
export class PostagensModule { }
