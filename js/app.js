const API_KEY = 'bdd4c69933557c8bc061ed0037c7a5f1';
const BASE_URL = 'https://api.themoviedb.org/3';
const contenedor = document.getElementById("contenedor");
const formulario = document.getElementById("formPelicula");
const inputPelicula = document.getElementById("pelicula");
const cargarFavoritos = document.getElementById("cargarFavoritos");
let peliculasActuales = [];

async function cargarPeliculas(){
    try{
        const resultados = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX`);
        const res = await resultados.json();
        peliculasActuales = res.results;
        //console.log(res);
        mostrarPeliculas(res.results);
    }catch(error){
        console.log("Hay un error en la consulta.");
    }
}

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if(!inputPelicula.value){
        return;
    }

    buscarPeliculas(inputPelicula.value);
    contenedor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

});

async function buscarPeliculas(termino) {

    try{
        const resultadosBusqueda = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-MX&query=${termino}`);
        const resBusqueda = await resultadosBusqueda.json();
        peliculasActuales = resBusqueda.results;
        mostrarPeliculas(resBusqueda.results);
    }catch(error){
        console.log("Error al buscar pelicula.");
    }
    
}

function mostrarPeliculas(peliculas){

    const obtenerFavoritos = localStorage.getItem('favoritos');
    const arrayFavoritos = JSON.parse(obtenerFavoritos) || [];
    //console.log(arrayFavoritos);

    contenedor.innerHTML = '';
    peliculas.forEach(pelicula => {
        //console.log(pelicula);

        if(arrayFavoritos.includes(pelicula.id)){
            contenedor.innerHTML += `
            <div class="group flex flex-col w-full max-w-[200px] transition-transform duration-300 hover:-translate-y-2">    
                <figure class="relative overflow-hidden rounded-xl shadow-lg border border-zinc-800">
                    <img src="https://image.tmdb.org/t/p/w1280${pelicula.poster_path}" 
                        alt="${pelicula.title}" 
                        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </figure>

                <div class="mt-3 flex flex-col items-center">
                    <div class="flex items-center gap-1.5 mb-1">
                        <span class="text-yellow-500 text-xs">★</span>
                        <span class="text-zinc-300 font-bold text-sm">${pelicula.vote_average.toFixed(1)}</span>
                    </div>

                    <h5 class="text-zinc-500 group-hover:text-white transition-colors text-xs font-medium text-center line-clamp-2 min-h-[2rem] leading-tight px-2">
                        ${pelicula.title}
                    </h5>

                    <button onclick="eliminarFavorito(${pelicula.id})" 
                            class="mt-3 w-full bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white text-[11px] font-bold py-2 px-3 rounded-lg transition-all duration-300 border border-red-500/20 uppercase tracking-wider">
                        Eliminar de favoritos
                    </button>
                </div>
            </div>
            `;
        }else{
            contenedor.innerHTML += `
            <div class="group flex flex-col w-full max-w-[200px] transition-transform duration-300 hover:-translate-y-2">    
                <figure class="relative overflow-hidden rounded-xl shadow-lg border border-zinc-800">
                    <img src="https://image.tmdb.org/t/p/w1280${pelicula.poster_path}" 
                        alt="${pelicula.title}" 
                        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </figure>

                <div class="mt-3 flex flex-col items-center">
                    <div class="flex items-center gap-1.5 mb-1">
                        <span class="text-yellow-500 text-xs">★</span>
                        <span class="text-zinc-300 font-bold text-sm">${pelicula.vote_average.toFixed(1)}</span>
                    </div>

                    <h5 class="text-zinc-500 group-hover:text-white transition-colors text-xs font-medium text-center line-clamp-2 min-h-[2rem] leading-tight px-2">
                        ${pelicula.title}
                    </h5>

                    <button onclick="agregarFavorito(${pelicula.id})" 
                            class="mt-3 w-full bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white text-[11px] font-bold py-2 px-3 rounded-lg transition-all duration-300 border border-blue-500/20 uppercase tracking-wider">
                        Añadir a favoritos
                    </button>
                </div>
            </div>
            `;
        }
    });
}

function agregarFavorito(id){
    let misFavoritos;
    const favoritosGuardados = localStorage.getItem('favoritos');

    if(favoritosGuardados != null){
        misFavoritos = JSON.parse(favoritosGuardados);
        //console.log(misFavoritos);
    }else{
        misFavoritos = [];
    }

    if(!misFavoritos.includes(id)){
        misFavoritos.push(id);
        const localFavoritos = JSON.stringify(misFavoritos);
        localStorage.setItem('favoritos', localFavoritos);
    }

    mostrarPeliculas(peliculasActuales);
}

function eliminarFavorito(id){
    let misFavoritos;
    const obtenerFavoritos = localStorage.getItem('favoritos');

    if(obtenerFavoritos != null){
        misFavoritos = JSON.parse(obtenerFavoritos);
        const nuevosFavoritos = misFavoritos.filter(idGuardado => idGuardado !== id );
        const localFavoritos = JSON.stringify(nuevosFavoritos);
        localStorage.setItem('favoritos', localFavoritos);
    }else{
        misFavoritos = [];
    }

    mostrarPeliculas(peliculasActuales);
}

cargarFavoritos.addEventListener("click", async (e) => {
    e.preventDefault();

    contenedor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    let favoritosCargados;
    let guardados = [];
    const obtenerFavoritos = localStorage.getItem('favoritos');

    if(obtenerFavoritos != null){
        favoritosCargados = JSON.parse(obtenerFavoritos);
        for(const favorito of favoritosCargados){
            try{
                const infoGuardado = await fetch(`${BASE_URL}/movie/${favorito}?api_key=${API_KEY}&language=es-MX`);
                const guardadosJson = await infoGuardado.json();
                guardados.push(guardadosJson);
            }catch(error){
                
            }
        };
        peliculasActuales = guardados;
        mostrarPeliculas(guardados);
    }else{
        favoritosCargados = [];
    }

});



cargarPeliculas();

