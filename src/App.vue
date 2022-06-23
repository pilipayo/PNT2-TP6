<template>
   <div id="app">
    <Header />
    <NavBar/>
    <Container />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    Container
  },
  updated() {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
html {
  margin: 0;
  all: unset;
}
body {
  margin: 0;
  padding: 0;
  background-color: #232323;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Montserrat", "Avenir";
}
</style>