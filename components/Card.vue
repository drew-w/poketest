<template>
  <div class="card">
    <NuxtLink :to="`/pokemon/${pokemon?.id}`">
      <h2>{{ pokemon?.name }}</h2>
    </NuxtLink>
    <NuxtImg
      :src="pokemon?.sprites.front_default"
      draggable="false"
      width="100"
      height="100"
      fit="cover"
    />
  </div>
</template>

<script setup lang="ts">
import type { PokemonList, Pokemon } from '~/types/pokemon'

const { pokelist } = defineProps<{ pokelist: PokemonList }>()
const { url } = pokelist
const { data: pokemon } = await useFetch<Pokemon>(`/api/pokemon/1?url=${url}`)

onMounted(async () => {
  //   console.log(pokemon.value?.name)
})
</script>

<style scoped>
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
}
</style>
