import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `<div class="flex items-center justify-between bg-slate-100 p-4 shadow-md">
    <h1 class="text-xl font-bold">{{ title() }}</h1>
    <app-primary-button label="Cart" (btnClicked)="showButtonClicked()" />
  </div> `,
  styles: ``,
})
export class Header {
  title = signal('E-Commerce');

  showButtonClicked() {
    alert('Cart button clicked!');
  }
}
