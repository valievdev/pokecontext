import {useContext} from "react"
import {PokemonDataContext} from "../App"

export default function ChangePokemon () {
  const { pokemonName, setPokemonName } = useContext(PokemonDataContext)

  const handleChangePokemonName = (e) => {
    setPokemonName(e.currentTarget.value)
  }

  return (
    <>
      <h2>ChangePokemon</h2>
      <input 
        type="search"
        value={pokemonName}
        onChange={handleChangePokemonName}
      />
    </>
  )
}
