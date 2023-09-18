<script setup lang="ts">
import AloMundo from './components/AloMundo.vue';
import AloMundo2 from './components/AloMundo2.vue';
import AloMundo3 from './components/AloMundo3.vue';
import AloMundo4 from './components/AloMundo4.vue';
import { Pessoa } from './Pessoa';
import { ref } from 'vue';

const vips = ref([
  new Pessoa(1, 'Mayra Bordin', 23),
  new Pessoa(2, 'João Ninguém', 19),
  new Pessoa(3, 'Maria Eduarda', 15),
]);
</script>

<template>
  <!--
  <AloMundo nome="Luana" />
  <AloMundo />
  <AloMundo2 nome="Luana Maria" />
  <AloMundo3 nome="Luana" :repeticao="3" />
  <AloMundo3 nome="Luana Maria" />-->
  <AloMundo4 :pessoas="vips" />
</template>

<style scoped></style>
