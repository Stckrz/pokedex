import { useState, useEffect } from 'react';
import { fetchPokemonSprites } from '../../library/fetch.tsx';

interface PokemonSearchProps{
	setActivePokemon: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonSearch: React.FC<PokemonSearchProps> = ({ setActivePokemon }) => {
	const [pokemonList, setPokemonList] = useState([]);
	const [inputText, setInputText] = useState("");

	async function getPokemon() {
		setPokemonList(await fetchPokemonSprites());
	}

	function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setInputText(e.target.value)
	}

	useEffect(() => {
		getPokemon()
	}, [])

	return (
		<>
			<div className="flex flex-column flex-col w-screen">
				<div>
					<input className="bg-white border border-red-300" onChange={(e) => { inputChangeHandler(e) }} />
				</div>
				<div className="flex flex-wrap bg-black w-screen">
					{
						pokemonList.map((item: any) => {
							return (
								item.name.includes(inputText) &&
								<div onClick={()=>{setActivePokemon(item.id)}} className="p-10">
									<img className="w-32 h-32" src={item.pokemon_v2_pokemonsprites[0].sprites} />
									{item.name}
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}
