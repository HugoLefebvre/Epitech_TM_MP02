<template>
  <div id="app">
    <Index />
    <router-view></router-view>
  </div>
</template>

<script>
import Index from "./components/Index/index"

export default {
  name: 'app',
  components: {
    Index
  },
  data () {
    return {
        AccessKey:'',
        IdUser:'',
        Role:''
    }
  },
  computed: {
  },
  mounted () {
      if (localStorage.AccessKey) {
          this.AccessKey = localStorage.AccessKey;
      }
  },
  methods: {

  },
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
