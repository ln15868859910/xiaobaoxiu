<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

html,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Microsoft Yahei", Arial,Century Gothic,Verdana, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
