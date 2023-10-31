<template>
  <div class="container">
    <h2>Home</h2>
    <span>
      <input
        type="text"
        :value="text"
        placeholder="Filter"
        @input="handleChange"
      />
      <br />
      You typed: <b>{{ text }}</b>
    </span>
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

<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import type { PokemonCard } from '~/types/pokemon'

const { data: initialPokemon } = await useFetch<PokemonCard[] | null>(
  '/api/list?count=150'
)
// store our list of pokemon here
const pokemonList = ref(initialPokemon)
const text = ref<string>('')

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
</script>

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
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  flex-direction: column;
  padding: 10px 0;
  width: 100vw;
  display: flex;
  align-items: center;
}
</style>
