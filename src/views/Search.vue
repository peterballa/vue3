<template>
  <div>
    <h1>Autocomplete Search (computed, watcher practise)</h1>
    <input type="text" v-model="search" class="border-1 bg-pink-300">
    <p>search term - {{ search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from "vue";

export default {
  name: 'Search',
  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    })
    return {names, search, matchingNames};
  }
}
</script>