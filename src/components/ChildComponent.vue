<template>
  <h1>Child component label: {{label}}</h1>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "ChildComponent",
  setup(props, {expose}){
    const label = ref<string>('');
    const childMethod = () => {
      console.log('This exposed childMethod called from parent!');
      label.value = 'AAAAAAAAAAAAAAAAA';
    }

    expose({childMethod});

    return {
      label
    }
  }
})
</script>