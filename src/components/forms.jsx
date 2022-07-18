import {useContext} from "react";
import { PokemonDataContext } from "../App";

export default function Forms() {
  // 1. Always has to be in the body of a function component
  // 2. Cannot call them conditionally (cannot be inside of an if)
  // 3. Can't use them in a loop
  const { pokemonData } = useContext(PokemonDataContext);

  return (
    <>
      <h2>Forms</h2>
      {pokemonData && JSON.stringify(pokemonData.forms, undefined, 2)}
    </>
  )
}
