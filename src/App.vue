<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/layouts/Layout.vue';

export default {
  name: 'app',
  components: {
    Layout,
  }
};
</script>

<style lang="scss">
@import './styles/index';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
