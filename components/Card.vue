<template>
  <NuxtLink :to="`/pokemon/${id}`">
    <div class="card">
      <h2>{{ name }}</h2>
      <NuxtImg
        :src="sprite"
        draggable="false"
        width="100"
        height="100"
        fit="cover"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PokemonCard } from '~/types/pokemon'

const { pokelist } = defineProps<{ pokelist: PokemonCard }>()
const { name, sprite, id } = pokelist
</script>

<style scoped>
h2 {
  color: #0c0c0c;
  text-transform: capitalize;
  text-decoration: none;
}
a {
  text-decoration: none;
}
.card {
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #0c0c0c;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 200px;
  background-color: aquamarine;
  transition-property: background-color;
  transition-duration: 100ms;
}

.card:hover {
  background-color: rgb(107, 220, 182);
}
</style>
