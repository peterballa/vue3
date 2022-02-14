<template>
  <h3 class="block mx-auto w-auto bg-purple-800 text-white text-center">Hello {{props.name}} from component</h3>
  <button @click="getAlert" class="bg-blue-300 text-white p-3 mx-auto block">Press me</button>
  <div v-bind="attrs">Lorem ipsum</div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script lang="ts" setup>

import {useAttrs} from "vue";

const attrs = useAttrs();
const emits = defineEmits(["pressed"])

function getAlert() {
  emits("pressed", "Whatever test");
}

interface props {
  name ?: string
}

const props = withDefaults(
    defineProps<props>(),
    {
      name: 'Stewart'
    }
);
</script>