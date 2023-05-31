<template>
	<div class="row justify-content-center">
		<div class="col-12 col-md-8">
			<form @submit.prevent="register" style="background: #fff; border-radius: 1rem;" class=" px-5 py-3">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>

        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isRegister: false,
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    openDialog() {
      this.isRegister = true;
    },
    register() {
      // Aquí puedes implementar la lógica de registro
      // utilizando los datos ingresados en el formulario
      console.log('Registrando...');
      console.log('Nombre:', this.name);
      console.log('Correo electrónico:', this.email);
      console.log('Contraseña:', this.password);

      // Después de realizar el registro, puedes cerrar el diálogo
      this.dialogVisible = false;
    },
  },
};
</script>
<style scoped>
button{
	color:#fff
}
</style>