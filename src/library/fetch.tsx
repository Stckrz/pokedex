export async function fetchPokemonInformation(id: number) {
	try {
		const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
			method: 'POST',

			headers: {
				"Content-Type": "application/json"
			},

			body: JSON.stringify({
				query:
					`
				{
				  pokemon_v2_pokemon(where: {pokemon_species_id: {_eq: ${id}}}) {
					id
					name
					pokemon_v2_pokemonsprites {
					  id
					  sprites(path: "other.official-artwork")
					}
					pokemon_v2_pokemontypes {
					  id
					  pokemon_v2_type {
						name
					  }
					}
				  }
				  pokemon_v2_pokemonspeciesflavortext(where: {pokemon_species_id: {_eq: ${id}}, language_id: {_eq: 9}, version_id: {_eq: 10}}) {
					flavor_text
				  }
				}
				`
			})
		})
		const data = await response.json()
		return data.data.pokemon_v2_pokemon[0]
	} catch (error) { console.log(error) }
}



export async function fetchPokemonSprites() {
	try {
		const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
			method: 'POST',

			headers: {
				"Content-Type": "application/json"
			},

			body: JSON.stringify({
				query:
					`
			{
			  pokemon_v2_pokemon {
				name
				id
				pokemon_v2_pokemonsprites {
				  id
				  sprites(path: "other.home.front_default")
				}
			  }
			}
				`
			})
		})
		const data = await response.json()
		return data.data.pokemon_v2_pokemon
	} catch (error) { console.log(error) }
}
