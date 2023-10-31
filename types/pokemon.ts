export interface List {
  count: number
  next: string
  previous: string
  results: PokemonList[]
}

export interface PokemonList {
  name: string
  url: string
}

export interface PokemonCard {
  name: string
  sprite: string
  id: number
}

export interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
  abilities: Ability[]
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
}

export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}
