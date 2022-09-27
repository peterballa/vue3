<template>
  <div class="text-center">
    <div>Autocomplete Search (computed, watcher practise)</div>
    <input type="text" v-model="search" class="border-1 bg-pink-300 text-center">
    <p>search term - {{ search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div>
    <my-button label="Stop watcher" @pressed="stopWatcher"/>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watchEffect} from "vue";
import MyButton from "@/components/MyButton.vue";

const search = ref('');
const names = ref(['Nyíregyháza', 'Nyíradony', 'Nyírbátor', 'Debrecen', 'Hajdúnánás', 'Hajdúhadház']);

// const unwatch = watch(search, () => {
//   console.log('watch function run');
// });

const unwatch = watchEffect(() => {
  console.log('watchEffect run');
  console.log(`search text: ${search.value}`)
})

const stopWatcher = () => {
  console.log('watcher stopped.')
  unwatch();
}

const matchingNames = computed(() => {
  return names.value.filter((name) => name.includes(search.value));
})
</script>