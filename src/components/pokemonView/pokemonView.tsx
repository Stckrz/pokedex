import React from 'react';
import { useState, useEffect } from 'react'
import { fetchPokemonInformation } from '../../library/fetch';
import { IPokemonInformation, pokemonInformationInitial } from '../../library/context.tsx';

interface PokemonViewProps {
	setActivePokemon: React.Dispatch<React.SetStateAction<string>>
	id: number
}

export const PokemonView: React.FC<PokemonViewProps> = ({ id, setActivePokemon }) => {
	const [pokemonInformation, setPokemonInformation] = useState<IPokemonInformation>(pokemonInformationInitial);

	async function getPokemonInformation() {
		setPokemonInformation(await fetchPokemonInformation(id))
	}

	useEffect(() => {
		getPokemonInformation()
	}, [id])

	return (
		<>
			{pokemonInformation.id !== 0 &&
				<div className="flex" onClick={() => { setActivePokemon("") }}>

					<img src={pokemonInformation.spriteurl} />
					<div className="flex flex-col">
						<div>
							{pokemonInformation.name}
						</div>
						<div>{
							pokemonInformation.types.map((type) => {
								return (
									<div>{type}</div>
								)
							})
						}</div>
						<div>
							{pokemonInformation.flavor_text}
						</div>
					</div>
				</div>
			}
		</>
	)

}
