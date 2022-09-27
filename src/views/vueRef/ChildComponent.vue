<template>
  <div v-if="visible" class="mt-4 bg-yellow-500 p-4">This is the child component</div>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";

const visible: Ref<boolean> = ref(false);

const show = () => {
  visible.value = true;
}

const hide = () => {
  visible.value = false;
}

defineExpose({show, hide});
</script>