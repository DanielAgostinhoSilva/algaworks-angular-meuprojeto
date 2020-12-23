import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo = 'transparent';

  @HostListener('focus') aoGanharFoco(): void {
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur') aoPerderFoco(): void {
    this.corDeFundo = 'transparent';
  }

}
