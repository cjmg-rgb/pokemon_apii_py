const fetchPokemons = (name) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => {
        if(!response.ok) {
            throw new Error("Unnable to fetch data")
        }
        return response.json()
    })
    .then(data => {
        showPokemon(data);
    })
    .catch(error => console.log(error));
}

const showPokemon = (data) => {
    const pokemon = data;

    // holder div
    const nameDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const pokemonMovesDiv = document.createElement("div");
    const divs = [nameDiv, imgDiv, pokemonMovesDiv];

    
    // Name
    const pokemonName = document.createElement("h2");
    pokemonName.setAttribute("class", "text-xl font-medium uppercase");
    pokemonName.innerText = pokemon["name"];
    nameDiv.appendChild(pokemonName);

    // Image
    const pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("class", "mx-auto w-2/4");
    pokemonImg.src = pokemon["sprites"]["front_default"];
    imgDiv.appendChild(pokemonImg)

    // Moves
    const pokemonMoves = document.createElement("div");
    pokemonMoves.setAttribute("class", "grid grid-cols-2 gap-2");
    pokemonMovesDiv.appendChild(pokemonMoves)
    const moves_arr_length = pokemon["moves"].length;
    for(let i = 0; i < 4; i++) {
        const move = pokemon["moves"][Math.floor(Math.random() * moves_arr_length)];        
        const moveDiv = document.createElement("p");
        moveDiv.setAttribute("class", "bg-blue-400 text-white p-2 rounded w-40")
        moveDiv.innerText = move["move"]["name"];
        pokemonMoves.appendChild(moveDiv);
    }

    for(const d in divs) {
        document.querySelector("#pokemon").appendChild(divs[d]);
    }
    document.querySelector("#pokemon").setAttribute("class", "text-center"); 
}

const searchBtn = () => {
    document.querySelector("#pokemon").innerHTML = "";

    const inputValue = document.querySelector("#text-input").value.toLowerCase();
    if(inputValue == "powpow") {
        const nameDiv = document.createElement("div");
        const imgDiv = document.createElement("div");
        const pokemonMovesDiv = document.createElement("div");
        const divs = [nameDiv, imgDiv, pokemonMovesDiv];
    
        const pokemonName = document.createElement("h2");
        pokemonName.setAttribute("class", "text-xl font-medium uppercase");
        pokemonName.innerText = "PowPow";
        nameDiv.appendChild(pokemonName);
    
        const pokemonImg = document.createElement("img");
        pokemonImg.setAttribute("class", "mx-auto w-1/4");
        pokemonImg.src = "./images/poke.jfif";
        imgDiv.appendChild(pokemonImg)
    
        const pokemonMoves = document.createElement("div");
        pokemonMoves.setAttribute("class", "justify-center items-center grid grid-cols-2 gap-2");
        pokemonMovesDiv.appendChild(pokemonMoves);
    
        const moves = ["tickle", "kiss", "sleep", "dream"];
    
        for(const move in moves) {
            const moveDiv = document.createElement("p");
            moveDiv.setAttribute("class", "bg-blue-400 text-white p-2 rounded w-40 mx-auto")
            moveDiv.innerText = moves[move];
            pokemonMoves.appendChild(moveDiv);
        }
    
        for(const d in divs) {
            document.querySelector("#pokemon").appendChild(divs[d])
        }
        document.querySelector("#pokemon").setAttribute("class", "text-center"); 
    }
    fetchPokemons(inputValue)
}
