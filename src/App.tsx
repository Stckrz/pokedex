import './App.css'
import { useState } from 'react';
import { PokemonSearch } from './components/pokemonSearch/pokemonSearch';
import { PokemonView } from './components/pokemonView/pokemonView';

function App() {
	const [activePokemon, setActivePokemon] = useState("");

	return (
		<>
			<div className="w-screen">
				{activePokemon === "" ?
					<PokemonSearch activePokemon={activePokemon} setActivePokemon={setActivePokemon} /> :
					<PokemonView setActivePokemon={setActivePokemon} id={activePokemon} />
				}
			</div>
		</>
	)
}

export default App
