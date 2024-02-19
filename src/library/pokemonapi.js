async function fetchPokemon() {

	try {
		let pokemonArray = []
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
		const fetchedData = await response.json();
		console.log(fetchedData.sprites.front_default)
		// fetchedData.results.map((item) => {
		// 	item.name !== undefined &&
		// 		pokemonArray.push(item);
		// })
		// if (pokemonArray.length > 0) {
		// 	console.log(pokemonArray)
		// 	return pokemonArray
		// }
		// else {
		// 	return ([])
		// }
	} catch (error) { console.log(error) }
}
export async function fetchPokemonSprites() {
	const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
		method: 'POST',

		headers: {
			"Content-Type": "application/json"
		},

		body: JSON.stringify({

			query: `{
	  pokemon_v2_pokemonsprites {
		pokemon_v2_pokemon {
		  name
		  pokemon_v2_pokemonsprites(distinct_on: id) {
			sprites(path: "front_default")
		  }
		}
	  }
	}`
		})
	})
	const data = await response.json()
	console.log(data.data.pokemon_v2_pokemonsprites[0].pokemon_v2_pokemon.pokemon_v2_pokemonsprites[0].sprites)
}
fetchPokemonSprites()
