import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo = 'transparent';

  @HostListener('focus') aoGanharFoco(): void {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFoco(): void {
    this.corDeFundo = 'transparent';
  }

}
