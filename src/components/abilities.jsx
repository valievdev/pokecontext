import {useContext} from "react"
import {PokemonDataContext} from "../App";

export default function Abilities() {
  const { pokemonData } = useContext(PokemonDataContext);

  return (
    <>
      <h2>Abilities</h2>
      <pre>
        {pokemonData && JSON.stringify(pokemonData.abilities, undefined, 2)}
      </pre>
    </>
  )
}
