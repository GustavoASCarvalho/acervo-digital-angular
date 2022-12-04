import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-day-section',
  templateUrl: './history-day-section.component.html',
  styleUrls: ['./history-day-section.component.scss']
})
export class HistoryDaySectionComponent implements OnInit {

  historyDay = {
    title: 'Neste dia em 1821 acontecia a Indepência do Brasil',
    description: 'O Dia da Independência do Brasil é comemorado em 7 de setembro. A data marca a independência política do Brasil em relação à Coroa Portuguesa, que se deu em 1822, após a proclamação da República, em 15 de novembro de 1889, e a independência econômica em 1945, com a criação do Banco Central do Brasil.',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
