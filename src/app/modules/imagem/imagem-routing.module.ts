import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagemComponent } from './page/imagem/imagem.component';

const routes: Routes = [
  {
    path: '',
    component: ImagemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagemRoutingModule {}
