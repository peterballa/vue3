<template>
  <div>
    <div class="text-center text-9xl">
      {{$store.state.counter}}
    </div>
    <div class="text-center text-4xl">
      {{$store.state.counter}}
      <sup>2</sup> =
      {{$store.getters.counterSquared}}
    </div>
    <div class="flex justify-center">
      <button class="text-5xl bg-gray-700 text-white p-5 mr-2 text-center"
              @click="$store.dispatch('decreaseCounter')">
        - (random async)
      </button>
      <button class="text-5xl bg-gray-700 text-white p-5 mr-2 text-center w-20"
              @click="$store.commit('decreaseCounter')">
        -
      </button>
      <button class="text-5xl bg-gray-700 text-white p-5 text-center w-20 mr-2"
              @click="$store.commit('increaseCounter')">
        +
      </button>
      <button class="text-5xl bg-gray-700 text-white p-5 text-center"
              @click="$store.dispatch('increaseCounter')">
        + (random async)
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyVuexTest",
  setup() {

  }
})
</script>