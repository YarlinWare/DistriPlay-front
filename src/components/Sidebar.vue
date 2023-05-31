<template>
  <div>
    <div class="content-box1">
      <div class="main2">
        <ul class="sf-menu2">
          <li>
            <router-link :to="'/pc'" aria-label="Navegar por la sección de PC">PC</router-link>
            <ul>
              <li><router-link to="/pc/rewiews">Reviews</router-link></li>
              <li><router-link to="/pc/new-releases">Nuevos Lanzamientos</router-link></li>
              <li><router-link to="/pc/top-games">Top Juegos</router-link></li>
              <li><router-link to="/marketplace">Todos los juegos</router-link></li>
              <li class="last1">
                <router-link to="/pc/videos">Videos</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/xbox" aria-label="Navegar por la sección de Xbox">XBOX</router-link>
          </li>
          <li>
            <router-link to="/wii" aria-label="Navegar por la sección de Wii">Wii</router-link>
          </li>
          <li>
            <router-link to="/ps2" aria-label="Navegar por la sección de PS2">PS2</router-link>
          </li>
          <li>
            <router-link to="/ps3" aria-label="Navegar por la sección de PS3">PS3</router-link>
          </li>
          <li>
            <router-link to="/psp" aria-label="Navegar por la sección de PSP">PSP</router-link>
          </li>
          <li>
            <router-link to="/mobile" aria-label="Navegar por la sección de Mobile">Mobile</router-link>
          </li>
        </ul>
        <div class="">
          <form class="d-flex" role="search">
            <label for="search-input" class="visually-hidden">Buscar en el sitio</label>
            <input id="search-input" class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar en el sitio">
            <button class="btn btn-primary" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
