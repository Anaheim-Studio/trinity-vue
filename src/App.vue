<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
