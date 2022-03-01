<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
      <img class="h-12 w-12" src="../assets/logo.png" alt="Vue 3">
    </div>
    <div>
      <div class="text-xl font-medium text-black">My First Vue 3 project</div>
      <p class="text-slate-500">With TypeScript & Tailwind</p>
      <div>
        {{fullName}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Module1 from '@/components/module1';

export default defineComponent({
  name: 'Home',
  setup() {
    const firstName = ref('Peti');
    const lastName = ref('Balla');

    Module1.greet(23,442);

    console.log(Module1.myComputedPropertiesObject.sum(3,4));
    console.log(Module1.myComputedPropertiesObject.distract(10,4));

    const fullName = computed(() => {
      return `${lastName.value} ${firstName.value}`;
    })

    return {
      firstName,
      lastName,
      fullName
    };
  }
});
</script>
