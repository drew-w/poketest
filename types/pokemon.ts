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
  abilities: Ability[]
  height: number
  id: number
  name: string
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
  types: PokemonType[]
  weight: number
}

export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}
