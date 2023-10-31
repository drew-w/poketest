<template>
  <main>
    <h2>Pokemon {{ id }}</h2>
    <section class="grid">
      <div class="heading">
        <h2 class="name">{{ pokemon?.name }}</h2>
        <NuxtImg
          :src="pokemon?.sprites.front_shiny"
          width="200"
          height="200"
          draggable="false"
        />
        <div>
          <div class="listContainer">
            <h3>Types:</h3>
            <div class="listItem" v-for="(type, index) in pokemon?.types">
              <h5 :key="index">{{ type.type.name.toUpperCase() }}&nbsp;</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grid">
      <div class="subBox">
        <h3>Height</h3>
        <p>{{ pokemon?.height }}</p>
      </div>
      <div class="subBox">
        <h3>Weight</h3>
        <p>{{ pokemon?.weight }}</p>
      </div>
      <div class="subBox">
        <h3>Abilities</h3>
        <span class="listContainer">
          <div class="listItem" v-for="(ability, index) in pokemon?.abilities">
            <p v-if="index + 1 < numberOfAbilities" class="name">
              {{ ability.ability.name + ',' }}&nbsp;
            </p>
            <p v-else class="name">
              {{ ability.ability.name }}
            </p>
          </div>
        </span>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'

const { id } = useRoute().params
definePageMeta({
  layout: 'pokemon'
})

const { data: pokemon } = await useFetch<Pokemon>(`/api/pokemon/${id}`)
const numberOfAbilities = pokemon.value?.abilities.length || 1
</script>

<style scoped>
.grid {
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
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

.listContainer {
  flex-direction: row;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
.listItem {
  height: 30px;
  justify-content: baseline;
  flex-wrap: nowrap;
  min-width: fit-content;
  display: flex;
  flex-direction: row;
}

.subBox {
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 5px;
  width: 200px;
  height: 150px;
  background-color: aquamarine;
  border-style: solid;
  border-width: 1px;
  border-color: #0c0c0c;
}

.name {
  text-transform: capitalize;
}
</style>
