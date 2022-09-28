<template>
  <div class="text-center font-bold text-3xl mb-4">
    Grocery list
  </div>
  <div class="mx-auto border rounded w-[300px]">
    <div v-for="product in groceryList"
         class="p-3 border-b border-b-2 flex">
      <div class="grow">
        {{product.name}}
        <span v-if="!product.inStock">(elfogyott)</span>
      </div>
      <div class="text-right">
        {{product.quantity}} db ({{product.price}})
      </div>
    </div>
    <div class="p-3 border-b border-b-0 flex">
      <div class="grow">
        Total
      </div>
      <div class="text-right">
        {{PriceModule.sumProducts(groceryList)}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Product from "@/views/vueRendering/Product";
import PriceModule from "./priceModule.ts";
// import {sumProducts} from "./priceModule.ts";

const groceryList: Array<Product> = [
    new Product('Tej 2.8-as', 230, 12,false),
    new Product('Kenyér', 700, 69,true),
    new Product('Csirkemell', 1100, 22,false),
    new Product('Csoki', 340, 15,true),
    new Product('Szalámi', 999, 2, true)
];
</script>