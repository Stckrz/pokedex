export interface IPokemonInformation {
	id: number,
	name: string,
	spriteurl: string,
	types: string[],
	flavor_text: string,
}

export const pokemonInformationInitial: IPokemonInformation = {
	id: 0,
	name: "",
	spriteurl: "",
	types: [],
	flavor_text: "",
}


export interface IPokemonSprite{
	id: number,
	name: string,
	spriteurl: string,
}

export const pokemonSpriteInitial: IPokemonSprite[] = [{
	id: 0,
	name: "",
	spriteurl: "",
}]
