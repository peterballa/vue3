<template>
  <div class="flex justify-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/search">Search</router-link> |
    <router-link to="/my-vuex-test">My Vuex Test</router-link>
  </div>
  <div class="my-3 text-center">
    <button class="bg-gray-700 text-white font-bold rounded p-4" @click="callChildComponentMethod">Call Search component childMethod()</button>
    <ChildComponent ref="child"/>
  </div>
  <router-view/>
</template>

<script lang="ts">

import {defineComponent, ref} from "vue";
import ChildComponent from "@/components/ChildComponent.vue";

export default defineComponent({
  components: {ChildComponent},
  name: 'App',
  setup() {
    const child = ref<typeof ChildComponent | null>(null);

    const callChildComponentMethod = () => {
      child.value?.childMethod();
    }

    return {
      child,
      callChildComponentMethod
    }
  }
})
</script>