import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Daniel';

  adicionar(): void {
    this.nome = 'Daniel ' + Math.round(Math.random() * 100);
  }

  alterarNome(event: any): void {
    this.nome = event.target.value;
  }
}
