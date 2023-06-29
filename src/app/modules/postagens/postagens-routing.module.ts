import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagensComponent } from './page/postagens/postagens.component';
import { PostagensCreateComponent } from './page/postagens-create/postagens-create.component';

const routes: Routes = [
  {
    path: '',
    component: PostagensComponent,
  },
  {
    path: 'create',
    component: PostagensCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostagensRoutingModule {}
