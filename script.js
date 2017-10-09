function addPokemon(pokemonName) {
  // unordered list element already present in html
  var unorderedListElement = document.getElementById('pokemon-list')

  // new listElement
  var listElement = document.createElement('li')

  // pokemon nameNode
  var nameNode = document.createTextNode(pokemonName)

  // Append nameNode to listElement
  listElement.appendChild(nameNode)

  // Append listElement to unordered list element
  unorderedListElement.appendChild(listElement)
}

var button = document.getElementById('add-pokemon')
button.addEventListener('click', function() {
  // Array index starts from zero
  var pokemons = ['pikachu', 'charmander', 'bulbasaur', 'onix', 'psyduck', 'snorlax', 'jigglypuff']

  // Math.floor() 0.5 -> 0
  // Math.random() -> [0, 1) any number between 0 and 1
  // pokemons.length -> 7

  // 0.5 (random number) * 7(length of array) -> Math.floor(3.5) -> 3
  // pokemons[3] = 'onix'
  var pokemonName = pokemons[Math.floor(Math.random() * pokemons.length)]

  addPokemon(pokemonName)
})