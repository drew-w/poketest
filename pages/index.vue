<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import type { PokemonCard } from '~/types/pokemon'

const { data: initialPokemon, error } = await useFetch<PokemonCard[] | null>(
  '/api/list?count=10'
)
// store our list of pokemon here
const pokemonList = ref(initialPokemon)
const text = ref('')

// dont filter right away
const handleChange = useDebounceFn((event: Event) => {
  text.value = (event.target as HTMLInputElement).value
}, 1000)

// Filters list of pokemon based on user input
const filteredPokemon = computed(() => {
  return (pokemonList.value || []).filter(listItem =>
    listItem.name.includes(text.value)
  )
})

//todo REMOVE THIS
onMounted(async () => {
  console.log(error)
})
</script>

<template>
  <div>
    <h2>Home</h2>
    <div id="app">
      <input
        type="text"
        :value="text"
        placeholder="Filter"
        @input="handleChange"
      />
      <br />
      You typed: <b>{{ text }}</b>
    </div>
    <section>
      <div v-if="text === ''" v-for="p in initialPokemon">
        <Card :pokelist="p" />
      </div>
      <div
        v-else-if="text !== '' && filteredPokemon.length > 0"
        v-for="p in filteredPokemon"
      >
        <Card :pokelist="p" />
      </div>
      <div v-else>
        <p>No results</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
section {
  flex-wrap: wrap;
  max-width: 100vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
