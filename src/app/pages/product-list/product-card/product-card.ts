import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div
      class="relative bg-white flex flex-col p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div class="mx-auto">
        <img
          [src]="product().thumbnail"
          alt="{{ product().title }}"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="mt-4 flex flex-col flex-grow">
        <h3 class="text-lg font-semibold">{{ product().title }}</h3>
        <p class="text-gray-600">{{ product().description }}</p>
        <div class="mt-2">
          <span class="text-lg font-bold">\${{ product().price }}</span>
        </div>
        <app-primary-button label="Add to Cart" class="mt-3" />
      </div>
      <span
        class="absolute top-2 right-3 text-md font-semibold"
        [class]="product().stock > 0 ? 'text-green-500' : 'text-red-500'"
      >
        @if(product().stock > 0) {
        {{ product().stock }} left }@else{ Out of stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
}
