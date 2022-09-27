<template>
  <div class="text-center">Check the console!</div>
  <div class="text-center">
    <input v-model="name" class="border border-2 mt-3 rounded p-3" placeholder="Your name"/>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, Ref} from "vue";

const name: Ref<string> = ref('');

onBeforeMount(() => {
  //load async data
  console.log('onBeforeMount');
})

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('beforeUpdate');
})

onUpdated(() => {
  console.log('updated')
})

onBeforeUnmount(() => {
  console.log('beforeUnmount');
});

onUnmounted(() => {
  console.log('unmounted');
});
</script>