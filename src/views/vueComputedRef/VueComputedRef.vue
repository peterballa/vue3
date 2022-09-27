<template>
  <div class="text-center">Give the shipping address</div>
  <div class="text-center">
    <input v-model="zipCode" class="border border-2 mt-3 rounded p-3" placeholder="Zip Code"/>
  </div>
  <div class="text-center">
    <input v-model="city" class="border border-2 mt-3 rounded p-3" placeholder="City"/>
  </div>
  <div class="text-center">
    <input v-model="street" class="border border-2 mt-3 rounded p-3" placeholder="Street"/>
  </div>
  <div class="text-center mt-3">
    {{shippingAddress}}
  </div>
</template>

<script lang="ts" setup>

import {computed, ComputedRef, ref, Ref} from "vue";

const zipCode: Ref<string> = ref('');
const city: Ref<string> = ref('');
const street: Ref<string> = ref('');

const shippingAddress: ComputedRef<string> = computed(() => {
  return `${zipCode.value} ${city.value} ${street.value}`;
})
</script>