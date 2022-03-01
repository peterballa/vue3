<template>
  <h3 class="block mx-auto w-auto bg-purple-800 text-white text-center">Hello {{props.name}} from component</h3>
  <button @click="getAlert" class="bg-blue-300 text-white p-3 mx-auto block">Press me</button>
  <div v-bind="attrs">Lorem ipsum</div>
  <div>{{fruit}}</div>
  <div>{{myFruit}}</div>
  <div>{{Module1.fruit}}</div>
  <div>{{Module1.user.name}}</div>
  <div>{{Module1.greet('Peti',32)}}</div>
  <div>{{MyModuleTypes.myString}}</div>
  <div>{{MyModuleTypes.myBool}}</div>
  <div>{{MyModuleTypes.myFloatNumber}}</div>
  <div>{{MyModuleTypes.myIntegerNumber}}</div>
  <div>{{MyModuleTypes.myAnyObject.foo}}</div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script lang="ts" setup>

import {useAttrs} from "vue";

import Module1 from '@/components/module1';
import {fruit} from '@/components/module1';
const myFruit = Module1.fruit;
const greeting = Module1.greet('Peti',32);
const greetingWrong = Module1.greet(23,32);//erre miért fut le hiba nélkül

import MyModuleTypes from '@/components/moduleTypes';
import ModuleTypes from "@/components/moduleTypes";

MyModuleTypes.printCoord({
  x: 23,
  y: 34
});

ModuleTypes.printName({
  first: 'Peti'
});

ModuleTypes.printName({
  last: 'Test',
  first: 'Peti'
});


ModuleTypes.printId(23);
ModuleTypes.printId('alma');
ModuleTypes.printId({ myID: 22342 }); //ezekre miért fut le a tsc? Mert setup scriptes megoldás van használva

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