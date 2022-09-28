<template>
  <button
      @click="press"
      class="inline-block p-3 mx-2" :class="{
      'bg-gray-700 text-white': type === 'info',
      'bg-red-400 text-white': type === 'danger',
      'bg-green-500 text-white': type === 'success',
      'bg-yellow-500 text-black': type === 'warning'
  }">
    <slot v-if="label === ''">

    </slot>
    {{label}}
  </button>
</template>

<script lang="ts" setup>

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  }
})

const emits = defineEmits(['pressed']);

const press  = () => {
  emits('pressed');
}
</script>