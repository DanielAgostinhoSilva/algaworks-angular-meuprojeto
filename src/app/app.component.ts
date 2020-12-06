import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Daniel';

  adicionar(): void {
    console.log(`Adicionando ${this.nome}`);
    const numero = Math.round(Math.random() * 100);
    this.nome = 'Daniel ' + numero;

  }

  alterarNome(event: any): void {
    this.nome = event.target.value;
  }
}
