import { Pokemon } from '~/types/pokemon'

export default defineEventHandler(async event => {
  const id = getRouterParam(event, 'id')

  //return singular pokemon based on id
  const data: Pokemon = await $fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return data
})
