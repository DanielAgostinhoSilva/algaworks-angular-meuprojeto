import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Daniel';
  adicionado = false;

  adicionar(): void {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
  }
}
