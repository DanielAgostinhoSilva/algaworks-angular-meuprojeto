import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo = 'transparent';

  @HostListener('focus') colorir(): void {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir(): void {
    this.corDeFundo = 'transparent';
  }

}
