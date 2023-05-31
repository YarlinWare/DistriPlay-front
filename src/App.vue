<template>
  <div id="app">
    <v-app>
      <Header/>
      <Sidebar/>
      <v-main>
        <router-view />
      </v-main>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer,
  }
}
</script>

<style >
@import "./assets/css/globals";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
