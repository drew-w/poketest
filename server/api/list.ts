import { List, Pokemon } from '~/types/pokemon'

export default defineEventHandler(async event => {
  //get query param
  const { count } = getQuery(event)

  const { results }: List = await $fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`
  )
  //create array of pokemon urls
  const urlArray: Promise<Pokemon>[] = results.map(result => $fetch(result.url))
  const pokemonResults = await Promise.all(urlArray)

  //return only what we need
  const cardData = pokemonResults.map(result => {
    return {
      name: result.name,
      sprite: result.sprites.front_default,
      id: result.id
    }
  })
  return cardData
})
