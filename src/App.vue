<template>
  <div id="app">
    <Menu />
    <LoginPage />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu/index"
import LoginPage from "./components/Login/LoginPage/index"

export default {
  name: 'app',
  components: {
    Menu,
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  body{
    margin: 0;
  }
</style>
