import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styles: [
  ]
})
export class FuncionarioFormComponent  {

  ultimoId = 0;
  nome = 'Daniel';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();


  adicionar(): void {
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}