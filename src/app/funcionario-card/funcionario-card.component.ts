import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent{

  // @ts-ignore
  @Input() funcionario: {id: number, nome: string};

}
