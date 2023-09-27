API sobre datos de Pokemons.

/api/v1/pokemons/pokemons' devuelve una lista paginada de Pokemons. De forma predeterminada, una página de lista contendrá hasta 50 Pokemons. Si deseas cambiar esto, agrega un parámetro de consulta 'limit' a la solicitud GET, por ejemplo, ?limit=60. Puedes usar 'offset' para pasar a la siguiente página, por ejemplo, ?limit=200&offset=50.

/api/v1/pokemons/pokemon/1 busca un Pokemon por id. Ej: pokemon/1 va a mostrar todos los datos sobre el Pokemon que contenga el id 1.

/api/v1/pokemons/abilities devuelve una lista paginada de habilidades de Pokemons. De forma predeterminada, una página de lista contendrá hasta 20 habilidades. Si deseas cambiar esto, agrega un parámetro de consulta 'limit' a la solicitud GET, por ejemplo, ?limit=60. Puedes usar 'offset' para pasar a la siguiente página, por ejemplo, ?limit=200&offset=50.