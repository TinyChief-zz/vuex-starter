<template>
  <div id="app">
    <button @click="toggleMe" v-text="showImg ? 'hide image' : 'show image'"></button>
    <br>
    <img src="./assets/logo.png" v-if="showImg">
    {{ showImg }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    showImg () {
      return this.$store.getters.showImg
    }
  },
  methods: {
    toggleMe () {
      this.$store.dispatch('toggle')
    }
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
  margin-top: 60px;
}
</style>
