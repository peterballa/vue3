<template>
  <div>
    <h1>Autocomplete Search (computed, watcher practise)</h1>
    <input type="text" v-model="search" class="border-1 bg-pink-300">
    <p>search term - {{ search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div>
    <button @click="stopWatcher">Stop watcher</button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch, watchEffect} from "vue";

export default defineComponent({
  name: 'Search',
  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    const myCustomWatch = watch(search, () => {
      console.log('watch function run');
    });

    watchEffect(() => {
      console.log('watchEffect function ran', search.value);
    });

    const stopWatcher = () => {
      myCustomWatch();
    }

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    })

    return {names, search, matchingNames, stopWatcher};
  }
})
</script>