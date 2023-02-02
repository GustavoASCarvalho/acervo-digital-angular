import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  itens: any[] = [
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=1',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=2',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=3',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=4',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=1',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=2',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=3',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=4',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=1',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=2',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=3',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=4',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=1',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=2',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=3',
    },
    {
      data: '2020/10/10',
      titulo: 'Praça do leão de Paranaguá',
      descricaoCurta: 'A praça do leão é um dos pontos turísticos mais visitados de Paranaguá. A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.A praça do leão é um dos pontos turísticos mais visitados de Paranaguá.',
      urlImagem: 'https://picsum.photos/400/400?random=4',
    },
  ]
}
