<template>
  <main>
    <h2>pokemon {{ mon }}</h2>
    <section class="grid">
      <div class="heading">
        <h2>{{ pokemon?.name }}</h2>
        <NuxtImg
          :src="pokemon?.sprites.front_default"
          width="200"
          height="200"
          draggable="false"
        />
        <h3>Abilities:</h3>
        <span class="abilities">
          <div class="ability" v-for="(ability, index) in pokemon?.abilities">
            <p :key="ability.slot">
              {{ ability.ability.name }}
            </p>
            <p v-if="index + 1 < numberOfAbilities">,</p>
          </div>
        </span>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'

const { mon } = useRoute().params

const { data: pokemon } = await useFetch<Pokemon>(`/api/pokemon/${mon}`)
const numberOfAbilities = pokemon.value?.abilities.length || 1
//todo REMOVE THIS
onMounted(async () => {
  // console.log(pokemon.value)
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
.grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 99vw;
}
.heading {
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 5px;
  width: 100%;
  max-width: 1000px;
  min-height: 350px;
  background-color: aquamarine;
  border-style: solid;
  border-width: 1px;
  border-color: #0c0c0c;
}

.abilities {
  flex-direction: row;
  display: flex;
  background-color: blueviolet;
}
.ability {
  display: flex;
  flex-direction: row;
}
</style>
