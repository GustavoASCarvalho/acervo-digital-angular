import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class CardCarouselComponent {
  @Input()
  itens: any[] = [
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
    },
  ];

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.content__slider__card');
    cards.forEach((cardMouse, iMouse) => {
      cardMouse.addEventListener('mouseenter', (e) => {
        this.moveCards(cards, cardMouse, iMouse);
      });
      cardMouse.addEventListener('focus', (e) => {
        this.moveCards(cards, cardMouse, iMouse);
      });
    });
    //ativar o terceiro card
    cards[0].classList.add('terceiro');
    cards[1].classList.add('segundo');
    cards[2].classList.add('primeiro');
    cards[3].classList.add('segundo');
    cards[4].classList.add('terceiro');
  }

  private moveCards(
    cards: NodeListOf<Element>,
    cardMouse: Element,
    iMouse: number
  ) {
    cards.forEach((c) => {
      c.classList.remove('primeiro');
      c.classList.remove('segundo');
      c.classList.remove('terceiro');
      c.classList.remove('quarto');
      c.classList.remove('quinto');
    });
    cardMouse.classList.add('primeiro');
    cards.forEach((card, i) => {
      if (iMouse - i === 1 || iMouse - i === -1) {
        card.classList.add('segundo');
      } else if (iMouse - i === 2 || iMouse - i === -2) {
        card.classList.add('terceiro');
      }
      if (iMouse - i === 3 || iMouse - i === -3) {
        card.classList.add('quarto');
      }
      if (iMouse - i === 4 || iMouse - i === -4) {
        card.classList.add('quinto');
      }
    });
  }
}
