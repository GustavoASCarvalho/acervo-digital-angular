import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.scss'],
})
export class AcervoComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  itens: any[] = [
    // 25 imagens
    {
      title: 'Imagem 1',
      imageUrl: 'https://picsum.photos/800/1200?random=1',
    },
    {
      title: 'Imagem 2',
      imageUrl: 'https://picsum.photos/800/1200?random=2',
    },
    {
      title: 'Imagem 3',
      imageUrl: 'https://picsum.photos/800/1200?random=3',
    },
    {
      title: 'Imagem 4',
      imageUrl: 'https://picsum.photos/800/1200?random=4',
    },
    {
      title: 'Imagem 5',
      imageUrl: 'https://picsum.photos/800/1200?random=5',
    }, {
      title: 'Imagem 6',
      imageUrl: 'https://picsum.photos/800/1200?random=6',
    },
    {
      title: 'Imagem 7',
      imageUrl: 'https://picsum.photos/800/1200?random=7',
    },
    {
      title: 'Imagem 8',
      imageUrl: 'https://picsum.photos/800/1200?random=8',
    },
    {
      title: 'Imagem 9',
      imageUrl: 'https://picsum.photos/800/1200?random=9',
    },
    {
      title: 'Imagem 10',
      imageUrl: 'https://picsum.photos/800/1200?random=10',
    },
    {
      title: 'Imagem 11',
      imageUrl: 'https://picsum.photos/800/1200?random=11',
    },
    {
      title: 'Imagem 12',
      imageUrl: 'https://picsum.photos/800/1200?random=12',
    },
    {
      title: 'Imagem 13',
      imageUrl: 'https://picsum.photos/800/1200?random=13',
    },
    {
      title: 'Imagem 14',
      imageUrl: 'https://picsum.photos/800/1200?random=14',
    },
    {
      title: 'Imagem 15',
      imageUrl: 'https://picsum.photos/800/1200?random=15',
    }, 
    {
      title: 'Imagem 16',
      imageUrl: 'https://picsum.photos/800/1200?random=16',
    },
    {
      title: 'Imagem 17',
      imageUrl: 'https://picsum.photos/800/1200?random=17',
    },
    {
      title: 'Imagem 18',
      imageUrl: 'https://picsum.photos/800/1200?random=18',
    },
    {
      title: 'Imagem 19',
      imageUrl: 'https://picsum.photos/800/1200?random=19',
    },
    {
      title: 'Imagem 20',
      imageUrl: 'https://picsum.photos/800/1200?random=20',
    },
    {
      title: 'Imagem 21',
      imageUrl: 'https://picsum.photos/800/1200?random=21',
    },
    {
      title: 'Imagem 22',
      imageUrl: 'https://picsum.photos/800/1200?random=22',
    },
    {
      title: 'Imagem 23',
      imageUrl: 'https://picsum.photos/800/1200?random=23',
    },
    {
      title: 'Imagem 24',
      imageUrl: 'https://picsum.photos/800/1200?random=24',
    },
    {
      title: 'Imagem 25',
      imageUrl: 'https://picsum.photos/800/1200?random=25',
    },
  ];
}
