import {useEffect, useState} from 'react'

const Home = () => {
    const [pokemons, setPokemons] = useState([]) //lista de pokemones
    const [searchTerm, setSearchTerm] = useState("") //palabra de busqueda
    useEffect((() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(error => console.error(error))
    }), [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        

    <div className='container'>
        <h1>Home</h1>
        <form className="form inline my-2 w-100">
            <input 
            type="text"
            id="search"
            className="form-control"
            placeholder='ingrese el pokemon a buscar'
            onChange={handleSearch}
            value={searchTerm}
            />
        </form>
        <div className='row'>
            {
                //despliego mi lista de pokemones
                filteredPokemons.map(pokemon => (
                    <div className='col-sm-4 mb-4' key={pokemon.name}>
                        <div className='card'> 
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} alt="{pokemon.name}" />
                            <div className='card-body'>
                                <h5 className='card-title'>{pokemon.name}</h5>
                            </div>

                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Home
