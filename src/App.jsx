import { createContext, useEffect, useState } from 'react'
import Abilities from './components/abilities';
import ChangePokemon from './components/change-pokemon';
import Forms from './components/forms';

const POKE_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
export const PokemonDataContext = createContext({});

function App() {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonName, setPokemonName] = useState('exploud');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${POKE_ENDPOINT}${pokemonName}`);
      const result = await response.json();
      setPokemonData(result);
    }

    fetchData();
  }, [pokemonName]);

  return (
    <div className="App" style={{fontFamily: 'monospace'}}>
      <h1>Welcome to my awesome pokemon appp</h1>
      <PokemonDataContext.Provider value={{ pokemonData, pokemonName, setPokemonName }}>
        <ChangePokemon />
        <Abilities />
        <Forms />
      </PokemonDataContext.Provider>
      <pre>
        {pokemonData && JSON.stringify(pokemonData, undefined, 2)}
      </pre>
    </div>
  )
}

export default App
