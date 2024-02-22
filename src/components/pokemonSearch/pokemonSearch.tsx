import { useState, useEffect, } from 'react';
import { fetchPokemonSprites } from '../../library/fetch.tsx';
import { IPokemonSprite, pokemonSpriteInitial } from '../../library/context.tsx';
import { PokemonGrid } from '../../components/pokemonGrid/pokemonGrid.tsx'

interface PokemonSearchProps {
	activePokemeon: string,
	setActivePokemon: React.Dispatch<React.SetStateAction<number>>
}

export const PokemonSearch: React.FC<PokemonSearchProps> = ({ activePokemon, setActivePokemon }) => {
	const [pokemonList, setPokemonList] = useState<IPokemonSprite[]>(pokemonSpriteInitial);
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
			<div className="flex w-screen">
				<div>
					<input className="bg-white border border-red-300" onChange={(e) => { inputChangeHandler(e) }} />
					<div>
						{
						pokemonList.map((item: IPokemonSprite) => {
							return (
								item.name.includes(inputText) &&
								<div onClick={()=>{setActivePokemon(item.id)}} className="text-left">{item.name}</div>
							)
						})
					}
					</div>
				</div>
				{
				<PokemonGrid setActivePokemon={setActivePokemon} pokemonList={pokemonList} inputText={inputText}/>
				}
			</div>
		</>
	)
}
