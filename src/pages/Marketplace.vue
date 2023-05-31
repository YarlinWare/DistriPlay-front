<template>
  <div style="background: #fff" class="px-5 py-5">
    <h2>Catálogo de Videojuegos</h2>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <div class="row justify-contente-center align-items-center">
          <div class="col-md-3 col-6">
            <!-- Barra de búsqueda -->
            <div class="mb-3">
              <label for="search">Buscar:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Buscar videojuego"
                v-model="searchQuery"
              />
            </div>
          </div>
          <div class="col-md-3 col-6">
            <!-- Filtros -->
            <div class="mb-3">
              <label for="category">Categoría:</label>
              <select
                id="category"
                class="form-select"
                v-model="selectedCategory"
              >
                <option value="">Todos</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="mb-3">
              <label for="genre">Género:</label>
              <select id="genre" class="form-select" v-model="selectedGenre">
                <option value="">Todos</option>
                <option
                  v-for="genre in genres"
                  :key="genre.id"
                  :value="genre.id"
                >
                  {{ genre.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="mb-3">
              <label for="price">Precio máximo:</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="maxPrice"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Resultados de búsqueda y filtros -->
    <div class="row">
      <div class="col-md-3 mb-4" v-for="game in filteredGames" :key="game.id">
        <div class="card">
          <div class="row" style="height: 345px; border-radius: 1.5rem">
            <div
              class="col-4 container-background-img"
              :style="{
                'background-image': `url(${require(`@/assets/images/${game.image}`)})`,
              }"
            ></div>
            <div class="col-8">
              <div class="card-body">
                <h4 class="card-title">{{ game.title }}</h4>
                <p class="card-text">
                  Categoría: {{ getCategoryName(game.category) }}
                </p>
                <p class="card-text">Género: {{ getGenreName(game.genre) }}</p>
                <p class="card-text">Precio: ${{ game.price }}</p>
                <button @click="addToCart(game)" class="btn btn-primary">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredGames.length === 0" class="col">
        No se encontraron videojuegos.
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      selectedGenre: "",
      maxPrice: null,
      games: [
        {
          id: 1,
          image: "page5-img1.jpg",
          title: "Super Mario Odyssey",
          category: 1, // Videojuegos
          genre: 3, // Plataformas
          price: 59000.99,
        },
        {
          id: 2,
          image: "page5-img2.jpg",
          title: "The Legend of Zelda: Breath of the Wild",
          category: 1, // Videojuegos
          genre: 4, // Aventura
          price: 49000.99,
        },
        {
          id: 3,
          image: "page5-img3.jpg",
          title: "FIFA 22",
          category: 1, // Videojuegos
          genre: 5, // Deportes
          price: 59000.99,
        },
        {
          id: 4,
          image: "page5-img1.jpg",
          title: "Call of Duty: Warzone",
          category: 1, // Videojuegos
          genre: 6, // Disparos
          price: 85000.0,
        },
        {
          id: 5,
          image: "page5-img2.jpg",
          title: "Minecraft",
          category: 1, // Videojuegos
          genre: 7, // Sandbox
          price: 1900.99,
        },
        {
          id: 6,
          image: "page5-img3.jpg",
          title: "Assassin's Creed Valhalla",
          category: 1, // Videojuegos
          genre: 1, // Acción
          price: 3900.99,
        },
        {
          id: 7,
          image: "page5-img1.jpg",
          title: "Marvel's Spider-Man: Miles Morales",
          category: 1, // Videojuegos
          genre: 1, // Acción
          price: 4900.99,
        },
        {
          id: 8,
          image: "page5-img2.jpg",
          title: "Animal Crossing: New Horizons",
          category: 1, // Videojuegos
          genre: 8, // Simulación
          price: 4900.99,
        },
        {
          id: 9,
          image: "page5-img3.jpg",
          title: "Cyberpunk 2077",
          category: 1, // Videojuegos
          genre: 2, // RPG
          price: 5900.99,
        },
        {
          id: 10,
          image: "page5-img1.jpg",
          title: "Grand Theft Auto V",
          category: 1, // Videojuegos
          genre: 1, // Acción
          price: 2900.99,
        },
        {
          id: 11,
          image: "page5-img2.jpg",
          title: "Red Dead Redemption 2",
          category: 1, // Videojuegos
          genre: 1, // Acción
          price: 3900.99,
        },
        {
          id: 12,
          image: "page5-img3.jpg",
          title: "God of War",
          category: 1, // Videojuegos
          genre: 1, // Acción
          price: 1900.99,
        },
        {
          id: 13,
          image: "page5-img1.jpg",
          title: "The Witcher 3: Wild Hunt",
          category: 1, // Videojuegos
          genre: 2, // RPG
          price: 2900.99,
        },
        {
          id: 14,
          image: "page5-img2.jpg",
          title: "Super Smash Bros. Ultimate",
          category: 1, // Videojuegos
          genre: 9, // Lucha
          price: 5900.99,
        },
        {
          id: 15,
          image: "page5-img3.jpg",
          title: "Pokémon Sword",
          category: 1, // Videojuegos
          genre: 2, // RPG
          price: 5900.99,
        },
      ],
      categories: [
        {
          id: 1,
          name: "Acción",
        },
        {
          id: 2,
          name: "Aventura",
        },
        // Agrega más categorías aquí...
      ],
      genres: [
        {
          id: 1,
          name: "Shooter",
        },
        {
          id: 2,
          name: "RPG",
        },
        {
          id: 3,
          name: "Plataformas",
        },
        {
          id: 4,
          name: "Aventura",
        },
        {
          id: 5,
          name: "Deportes",
        },
        {
          id: 6,
          name: "Disparos",
        },
        {
          id: 7,
          name: "Sandbox",
        },
        {
          id: 8,
          name: "Simulación",
        },
        {
          id: 9,
          name: "Lucha",
        },
        {
          id: 10,
          name: "Accion",
        },
      ],
      //cart: [],
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter(
        (game) =>
          this.filterBySearchQuery(game) &&
          this.filterByCategory(game) &&
          this.filterByGenre(game) &&
          this.filterByPrice(game)
      );
    },
  },
  methods: {
		...mapMutations(['addToCart']),
    filterBySearchQuery(game) {
      if (this.searchQuery === "") {
        return true;
      } else {
        const title = game.title.toLowerCase();
        const query = this.searchQuery.toLowerCase();
        return title.includes(query);
      }
    },
    filterByCategory(game) {
      if (this.selectedCategory === "") {
        return true;
      } else {
        return game.category === parseInt(this.selectedCategory);
      }
    },
    filterByGenre(game) {
      if (this.selectedGenre === "") {
        return true;
      } else {
        return game.genre === parseInt(this.selectedGenre);
      }
    },
    filterByPrice(game) {
      if (this.maxPrice === null) {
        return true;
      } else {
        return game.price <= this.maxPrice;
      }
    },
    getCategoryName(categoryId) {
      const category = this.categories.find((c) => c.id === categoryId);
      return category ? category.name : "N/A";
    },
    getGenreName(genreId) {
      const genre = this.genres.find((g) => g.id === genreId);
      return genre ? genre.name : "N/A";
    },
    addToCart(game) {
      //this.cart.push(game);
			//state.cart.push(game);
      alert("Juego agregado al carrito");
    },
  },
};
</script>
<style scoped>
.container-background-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem 0 0 0.5rem;
}
.card {
  height: 345px;
}
</style>