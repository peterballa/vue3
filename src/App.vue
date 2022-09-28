<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <router-link class="m-3" :to="{name: 'home'}">Home</router-link>
      <router-link class="m-3" :to="{name: 'vue_ref'}">Vue Ref</router-link>
      <router-link class="m-3" :to="{name: 'vue_computed_ref'}">Vue Computed Ref</router-link>
      <router-link class="m-3" :to="{name: 'vue_lifecycle_hooks'}">Vue Lifecycle Hooks</router-link>
      <router-link class="m-3" :to="{name: 'vue_rendering'}">Vue Rendering</router-link>
      <router-link class="m-3" :to="{name: 'vue_watcher'}">Vue Watcher</router-link>
      <router-link class="m-3" :to="{name: 'vue_component'}">Vue Component</router-link>
      <router-link class="m-3" :to="{name: 'vuex'}">Vuex</router-link>
      <router-link class="m-3" :to="{name: 'typescript'}">TypeScriptTypes</router-link>
      <router-link class="m-3" :to="{name: 'tailwind'}">Tailwind</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script setup lang="ts">

</script>