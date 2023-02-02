import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Acervo Digital de Paranaguá',
      desc: 'Descubra a história de Paranaguá através de fotos, documentos e publicações de especialistas.',
    },
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./modules/explore/explore.module').then((m) => m.ExploreModule),
    data: {
      title: 'Explore o Acervo Digital de Paranaguá',
      desc: 'Explore o acervo digital de Paranaguá através de fotos, documentos e publicações de especialistas.',
    },
  },
  {
    path: 'acervo',
    loadChildren: () =>
      import('./modules/acervo/acervo.module').then((m) => m.AcervoModule),
    data: {
      title: 'Acervo Digital de Paranaguá',
      desc: 'Descubra a história de Paranaguá através de fotos, documentos, arquivo de jornais, iconografia e muito mais.',
    },
  },
  {
    path: 'postagens',
    loadChildren: () =>
      import('./modules/postagens/postagens.module').then(
        (m) => m.PostagensModule
      ),
    data: {
      title: 'Postagens sobre Paranaguá e sua história',
      desc: 'Postagens sobre a história de Paranaguá e seus personagens.',
    },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    data: {
      title: 'Login Acervo Digital de Paranaguá',
      desc: 'Faça login para acessar o acervo digital de Paranaguá.',
    },
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./modules/cadastro/cadastro.module').then(
        (m) => m.CadastroModule
      ),
    data: {
      title: 'Cadastro Acervo Digital de Paranaguá',
      desc: 'Cadastre-se para acessar o acervo digital de Paranaguá.',
    },
  },
  {
    path: '**',
    // loadChildren: () =>
    //   import('./modules/not-found/not-found.module').then(
    //     (m) => m.NotFoundModule
    //   ),
    // data: {
    //   title: 'Página não encontrada',
    //   desc: 'Página não encontrada.',
    // },
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
