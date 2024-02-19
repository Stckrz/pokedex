import { useState, useEffect } from 'react';
import { fetchPokemon } from '@library/fetch.tsx';

export const PokemonSearch: React.FC = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [inputText, setInputText] = useState("");

	async function getPokemon() {
		setPokemonList(await fetchPokemon());
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
				<input onChange={(e) => {inputChangeHandler(e)}} />
			</div>
			<div>
				<div>
					{
						pokemonList.map((item) => {
							return (
								item.name.includes(inputText) &&
								<div>{item.name}</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}
