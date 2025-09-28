import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white cursor-pointer hover:opacity-90 active:scale-95 transition-all"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();
}
