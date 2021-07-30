<template>
  <div id="home">
    <h1>Nil's Main Page</h1>
    <img src="../assets/logo.png">
    <p><router-link to="stone">Stone</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
