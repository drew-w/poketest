import { List, PokemonList } from '~/types/pokemon'

export default defineEventHandler(async event => {
  //get query param
  const { count } = getQuery(event)

  const { results }: List = await $fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`
  )
  return results
})
