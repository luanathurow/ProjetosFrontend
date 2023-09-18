<script setup lang="ts">
import AloMundo from './components/AloMundo.vue';
import AloMundo2 from './components/AloMundo2.vue';
import AloMundo3 from './components/AloMundo3.vue';
</script>

<template>
  <!--
  <AloMundo nome="Luana" />
  <AloMundo />
  <AloMundo2 nome="Luana Maria" />-->
  <AloMundo3 nome="Luana" :repeticao="3" />
  <AloMundo3 nome="Luana Maria" />
</template>

<style scoped></style>
