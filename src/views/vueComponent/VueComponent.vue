<template>
  <div class="text-center">
    <my-button label="Load Pikachu" type="warning" @pressed="fetchPokemon('pikachu')"/>
    <my-button label="Load Charizard" type="danger" @pressed="fetchPokemon('charizard')"/>
    <my-button label="Load Bulbasaur" type="success" @pressed="fetchPokemon('bulbasaur')"/>
    <my-button @pressed="fetchPokemon('squirtle')">
      Load Squirtle <img class="inline ml-3" src="../../assets/pokeball.png"/>
    </my-button>
  </div>
  <div class="text-center" v-if="pokemon">
    <img class="text-center inline" style="width: 200px;" :src="pokemon.sprites.back_default" alt=""/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import MyButton from "@/components/MyButton.vue";

let pokemon = ref(null) as any;

async function fetchPokemon(pokemonName: string) {
  const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const json = await info.json();
  pokemon.value = json;
  console.log(json);
}
</script>