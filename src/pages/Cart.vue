<template>
  <div class="container">
    <h2>Carrito de Compras</h2>
    <div v-if="cart.length === 0" class="alert alert-info">
      No hay elementos en el carrito.
    </div>
    <div v-else>
      <div class="card mb-3" v-for="item in cart" :key="item.id">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="getImageUrl(item.image)"
              class="img-fluid"
              alt="Producto"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">Precio: ${{ item.price }}</p>
              <button @click="removeFromCart(item)" class="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end">
        <p class="fw-bold">Total: ${{ calculateTotalPrice() }}</p>
        <button @click="pay" class="btn btn-primary">Pagar</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    getImageUrl(image) {
      // Aquí puedes ajustar la ruta a tus imágenes
      return require(`@/assets/images/${image}`);
    },
    removeFromCart(item) {
      const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    calculateTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
    pay() {
      // Aquí puedes implementar la lógica de pago
      // Por ejemplo, mostrar una ventana emergente, redirigir a una pasarela de pago, etc.
      alert("¡Pago realizado con éxito!");
      // Luego, puedes limpiar el carrito
      this.cart = [];
    },
  },
};
</script>
  
  <style scoped>
.container {
  margin-top: 20px;
}
</style>