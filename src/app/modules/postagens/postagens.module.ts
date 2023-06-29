import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagensRoutingModule } from './postagens-routing.module';
import { PostagensComponent } from './page/postagens/postagens.component';
import { PostagensCreateComponent } from './page/postagens-create/postagens-create.component';


@NgModule({
  declarations: [
    PostagensComponent,
    PostagensCreateComponent
  ],
  imports: [
    CommonModule,
    PostagensRoutingModule
  ]
})
export class PostagensModule { }
