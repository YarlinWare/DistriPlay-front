<template>
  <div>
	<div class="row justify-content-center">
		<div class="col-12 col-md-8 p-5"  style="background: #fff; border-radius: 1rem;" >
        <h2>Formulario de Registro</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="form.name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo</label>
            <input type="email" class="form-control" id="email" v-model="form.email">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Confirmar correo</label>
            <input type="email" class="form-control" id="email" v-model="form.email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="form.password">
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
            <input type="password" class="form-control" id="confirmPassword" v-model="form.confirmPassword">
          </div>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario enviado:', this.form);
      // ...
    }
  }
};
</script>
<style scoped>
button{
	color:#fff
}
</style>