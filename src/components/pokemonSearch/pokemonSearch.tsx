import { useState, useEffect } from 'react';
import { fetchPokemonSprites } from '@library/fetch.tsx';

export const PokemonSearch: React.FC = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [inputText, setInputText] = useState("");

	async function getPokemon() {
		setPokemonList(await fetchPokemonSprites());
	}

	function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
		setInputText(e.target.value)
	}

	useEffect(() => {
		getPokemon()
	}, [])

	return (
		<>
			<div>
				<input className="bg-black" onChange={(e) => {inputChangeHandler(e)}} />
			</div>
			<div>
				<div>
					{
						pokemonList.map((item: any) => {
							return (
							/* <div>{item.pokemon_v2_pokemon.name}</div> */
								item.pokemon_v2_pokemon.name.includes(inputText) &&
									<img src={item.pokemon_v2_pokemon.pokemon_v2_pokemonsprites.} />
								<div className="bg-black">{item.pokemon_v2_pokemon.name}</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}
