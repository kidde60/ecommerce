import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { ProductList } from './pages/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Header, ProductList],
  template: ` <app-header />
    <app-product-list />`,
  styles: [],
})
export class App {
  protected readonly title = signal('ecommerce');
}
