/*
Crea una petició GET a l'endpoint /pokemon/{id} que rebi un número de Pokémon, faci una cerca al Pokémon API i retorni el nom del Pokémon, la seva alçada i el seu pes.*/
import fetch from "node-fetch";

const getPokemon = async (req, res) => {
    const {id} = req.params;
    if (isNaN(id)) {
        res.status(400).json({
            error: "id must be a number"
        });
        return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    
    if (pokemon.detail === "Not found.") {
        res.status(404).json({
            error: "Pokemon not found"
        });
        return;
    }

    res.json({
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight
    });
};


export default getPokemon;
