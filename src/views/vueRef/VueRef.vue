<template>
  <div class="text-center mb-5">
    <div class="mb-2">My name is: <b>{{name}}</b></div>
    <input type="text" v-model="name" class="border"/>
  </div>

  <div class="my-3 text-center">
    <button class="bg-gray-700 text-white font-bold rounded p-2 mr-4" @click="showChildComponent">Show child component</button>
    <button class="bg-gray-700 text-white font-bold rounded p-2" @click="hideChildComponent">Hide child component</button>
    <ChildComponent ref="child"/>
  </div>
</template>

<script setup lang="ts">

import {Ref, ref} from "vue";
import ChildComponent from "./ChildComponent.vue";

const name: Ref<string> = ref('');

const child = ref<typeof ChildComponent | null>(null);

const showChildComponent = () => {
  child.value?.show();
}

const hideChildComponent = () => {
  child.value?.hide();
}
</script>