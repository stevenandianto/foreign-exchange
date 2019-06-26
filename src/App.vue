<template>
  <div id="app">
    <ForeignExchange/>
  </div>
</template>

<script>
  import ForeignExchange from './components/ForeignExchange.vue'

  export default {
    name: 'app',
    components: { ForeignExchange }
  }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}
</style>
