<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/style/reset.scss'
export default {
  name: 'app'
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


button {
  display: inline-block;
  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;
  color: #fff;
  overflow: hidden;
  background: #7e57c2;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  padding: 0;
  min-width: 88px;
  box-shadow: 0 1px 6px rgba(0,0,0,.4),
              0 1px 4px rgba(0,0,0,.2);
}


</style>
