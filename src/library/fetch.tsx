export async function fetchPokemon() {

	try {
		const pokemonArray = []
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`)
		const fetchedData = await response.json();
		fetchedData.results.map((item) => {
			item.name !== undefined &&
				pokemonArray.push(item);
		})
		if (pokemonArray.length > 0) {
			return pokemonArray
		}
		else {
			return ([])
		}
	} catch (error) { console.log(error) }
}



export async function fetchPokemonSprites() {
	try{
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
	return data.data.pokemon_v2_pokemonsprites
	} catch (error){console.log(error)}
}
