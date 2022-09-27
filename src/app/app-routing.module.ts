import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/page/about/about.component';
import { HomeComponent } from './modules/home/page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Acervo Digital de Paranaguá',
      desc: 'Descubra a história de Paranaguá através de fotos, documentos e publicações de especialistas.',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Sobre o Acervo Digital de Paranaguá',
      desc: 'Conheça a história do projeto e a equipe que está por trás dele.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
