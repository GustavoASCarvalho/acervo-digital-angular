import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcervoComponent } from './modules/acervo/page/acervo/acervo.component';
import { ExploreComponent } from './modules/explore/page/explore/explore.component';
import { HomeComponent } from './modules/home/page/home/home.component';
import { PostagensComponent } from './modules/postagens/page/postagens/postagens.component';

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
    path: 'explore',
    component: ExploreComponent,
    data: {
      title: 'Explore o Acervo Digital de Paranaguá',
      desc: 'Explore o acervo digital de Paranaguá através de fotos, documentos e publicações de especialistas.',
    },
  },
  {
    path: 'acervo',
    component: AcervoComponent,
    data: {
      title: 'Acervo Digital de Paranaguá',
      desc: 'Descubra a história de Paranaguá através de fotos, documentos, arquivo de jornais, iconografia e muito mais.',
    },
  },
  {
    path: 'postagens',
    component: PostagensComponent,
    data: {
      title: 'Postagens sobre Paranaguá e sua história',
      desc: 'Postagens sobre a história de Paranaguá e seus personagens.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
