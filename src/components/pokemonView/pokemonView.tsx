import React from 'react';
import { useState, useEffect } from 'react'
import { fetchPokemonInformation } from '../../library/fetch';

interface PokemonViewProps {
	setActivePokemon: React.Dispatch<React.SetStateAction<string>>
	id: number
}

export const PokemonView: React.FC<PokemonViewProps> = ({ id, setActivePokemon }) => {
	const [pokemonInformation, setPokemonInformation] = useState([]);

	async function getPokemonInformation() {
		setPokemonInformation(await fetchPokemonInformation(id))
	}

	useEffect(() => {
		getPokemonInformation()
	}, [id])

	return (
		<>
			{pokemonInformation.length !== 0 &&
				<div onClick={()=>{setActivePokemon("")}}>
					<img src={pokemonInformation.pokemon_v2_pokemonsprites[0].sprites.front_default} />
					<div>
						{pokemonInformation.name}
					</div>
				</div>
			}
		</>
	)

}
