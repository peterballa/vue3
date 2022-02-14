<template>
  <div>
    <h1>This is an about page (setup script version)</h1>
    <h2>My name is {{name}}</h2>
    <HelloWorld :name="name" @pressed="pressed" class="bg-yellow-500"/>
    <button @click="fetchPokemon" class="bg-green-300 text-white p-3 mx-auto block">Fetch pokemon async</button>
    <div v-if="pokemon">
      <img :src="pokemon.sprites.back_default" alt=""/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "./../components/HelloWorld";
import {ref} from "vue";
let name = "Peti";
let pokemon = ref(null) as any;

function pressed(info: string) {
  alert("Hello From Pressed Function " + info);
}

async function fetchPokemon() {
  const info = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const json = await info.json();
  pokemon.value = json;
  console.log(json);
}
</script>