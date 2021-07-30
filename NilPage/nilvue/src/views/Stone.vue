<template>
  <div id="app">
    <form id="stoneSelect" @submit.prevent="sendStoneType">
    <button type="submit">send</button>
  </form>
  <p><router-link to="home">Home</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Stone',
  components: {},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
