# 🎬 Movie App

Una aplicación web moderna y reactiva para buscar películas y gestionar una lista de favoritos. Este proyecto consume la API de The Movie Database (TMDB) y utiliza LocalStorage para la persistencia de datos.

🔗 **[Ver Demo en Vivo](https://adrianrmz23.github.io/movie-app/)**

## ✨ Características

* **Exploración:** Muestra las películas más populares del momento al cargar.
* **Búsqueda:** Permite buscar películas por título en tiempo real consultando la API.
* **Favoritos:**
    * ❤️ Agregar películas a una lista personal.
    * 🗑️ Eliminar películas de la lista.
    * 💾 Persistencia de datos (los favoritos no se borran al recargar la página).
    * 🚫 Prevención de duplicados.
* **Interfaz Reactiva:** Actualización instantánea de la interfaz (UI) al agregar o eliminar elementos sin recargar el sitio.
* **Diseño Responsivo:** Estilizado con **Tailwind CSS** para funcionar en móviles y escritorio.
* **UX Mejorada:** Scroll automático y estados visuales (hover, transiciones).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3 / Tailwind CSS:** Estilos y diseño responsivo.
* **JavaScript (ES6+):**
    * `fetch` / `async-await` para consumo de API.
    * Manipulación del DOM.
    * `localStorage` para persistencia de datos.
    * Lógica de estado global.

## 🚀 Cómo usar este proyecto localmente

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/adrianrmz23/movie-app.git](https://github.com/adrianrmz23/movie-app.git)
    ```
2.  Navega a la carpeta del proyecto.
3.  Abre el archivo `index.html` en tu navegador o usa una extensión como "Live Server" en VS Code.

> **Nota:** Necesitarás tu propia API Key de [TMDB](https://www.themoviedb.org/documentation/api) si deseas modificar el código o si la key actual excede su límite. Reemplaza la variable `API_KEY` en el archivo `main.js`.

## 📸 Capturas de Pantalla

*(Aquí puedes subir una imagen de tu proyecto a la carpeta del repo y enlazarla, o simplemente borrar esta sección por ahora)*

## 👤 Autor

**Adrián**
* [Perfil de GitHub](https://github.com/adrianrmz23)

---
⌨️ con ❤️ por [Adrián]
