import React from 'react';
import { IPokemonSprite } from '../../library/context.tsx';

interface PokemonGridProps{
	setActivePokemon: React.Dispatch<React.SetStateAction<number>>
	pokemonList: IPokemonSprite[]
	inputText: string
}

export const PokemonGrid: React.FC<PokemonGridProps> = ({ setActivePokemon, pokemonList, inputText }) => {
	return(
		<>
				<div className="flex flex-wrap w-screen">
					{
						pokemonList.map((item: IPokemonSprite) => {
							return (
								item.name.includes(inputText) &&
								<div onClick={() => { setActivePokemon(item.id) }} className="p-10">
									<img className="w-32 h-32" src={item.spriteurl} />
									{item.name}
								</div>
							)
						})
					}
				</div>
		</>
	)





}
