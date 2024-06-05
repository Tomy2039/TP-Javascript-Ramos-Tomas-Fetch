const contenido = document.getElementById("Imagenes")
const fetchData = async () => {
    try {
        const servidor = await fetch("https://rickandmortyapi.com/api/character")
        const data = await servidor.json()
        const respuesta = data.results
        
        respuesta.forEach(respuest => {
            const item = document.createElement("div")
            item.className= "carta"
            item.innerHTML += `
                <div class="Personaje">
                    <h2>${respuest.name}</h2>
                    <img src="${respuest.image}"/>
                </div>
            `
            contenido.appendChild(item)
        });
    } catch (error) {
        console.error("hubo error en el servidor")
    }
}
fetchData()
