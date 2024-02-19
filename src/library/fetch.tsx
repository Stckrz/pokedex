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
