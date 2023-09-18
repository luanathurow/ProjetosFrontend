<script setup lang="ts">
import { Pessoa } from '../Pessoa';
defineProps<{ pessoas: Pessoa[] }>();
</script>

<template>
  <u1>
    <li v-for="p in pessoas" :key="p.id">Alô, {{ p.nome }}!</li>
  </u1>
</template>
