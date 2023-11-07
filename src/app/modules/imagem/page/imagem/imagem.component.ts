import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.scss'],
})
export class ImagemComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.el.nativeElement
      .querySelector('#imagem-principal')
      .addEventListener('load', () => {
        this.el.nativeElement.querySelector(
          '.content__imagem__download'
        ).style.display = 'revert';
      });
  }
}
