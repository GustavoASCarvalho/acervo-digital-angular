import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-postagens',
  templateUrl: './grid-postagens.component.html',
  styleUrls: ['./grid-postagens.component.scss'],
})
export class GridPostagensComponent implements OnInit {
  @Input()
  itens: any[] = [
    {
      title: 'Descubra novas formas de fazer negócios',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/800/1200?random=10',
    },
    {
      title: 'Explore as ruas de Paranaguá',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/800/1200?random=11',
    },
    {
      title: 'Navegue pelo litoral do Paraná',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/800/1200?random=12',
    },
    {
      title: 'Conheça as belezas do litoral do Paraná',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/800/1200?random=13',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
