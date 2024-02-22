
export async function fetchPokemonInformation(id) {
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
				  pokemon_v2_pokemoncolor(where: {id: {_eq: ${id}}}) {
					name
				  }
				}
				`
			})
		})
		const data = await response.json()
		const pokemonid = data.data.pokemon_v2_pokemon[0].id
		const pokemonname = data.data.pokemon_v2_pokemon[0].name
		const pokemonsprite = data.data.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0].sprites.front_default

		const pokemontypes = []
		data.data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes.map((item)=>{pokemontypes.push(item.pokemon_v2_type.name)})
		const pokemonflavortext = data.data.pokemon_v2_pokemonspeciesflavortext[0].flavor_text
		const pokemoncolor = data.data.pokemon_v2_pokemoncolor[0].name

console.log({
		id: pokemonid,
		name: pokemonname,
		spriteurl: pokemonsprite,
		types: pokemontypes,
		flavor_text: pokemonflavortext,
		color: pokemoncolor
		})
		// return data.data.pokemon_v2_pokemon[0]
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
		let spriteArray = []
		data.data.pokemon_v2_pokemon.map((item) => {
			spriteArray.push({
				name: item.name,
				id: item.id,
				spriteurl: item.pokemon_v2_pokemonsprites[0].sprites
			})
		})
		return spriteArray
	} catch (error) { console.log(error) }
}
// fetchPokemonInformation(6)
fetchPokemonSprites()
