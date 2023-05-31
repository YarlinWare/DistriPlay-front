<template>
  <div>
    <footer class="footer bg-dark text-light py-4" style="background: #2c2c2c;">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>Contacto</h5>
            <ul class="list-unstyled">
              <li>Dirección: 123 Calle Principal, Ciudad</li>
              <li>Teléfono: 555-123-4567</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h5>Enlaces</h5>
            <ul class="list-unstyled">
              <li><router-link :to="'/'">Inicio</router-link></li>
              <li><router-link :to="'/'">Acerca de</router-link></li>
              <li><router-link :to="'/'">Servicios</router-link></li>
              <li><router-link :to="'/contact'">Contacto</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div class="foot-page1 w-100 d-flex justify-content-center text-center" >
      DistriPlay &copy; 2023     <a href="index-6.html"> Privacy Policy </a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #333;
  
}

.footer h5 {
  color: #fff;
  margin-bottom: 1rem;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
