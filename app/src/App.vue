<template>
  <div>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  /* /This defines what 1rem is */
  font-size: 62.5%;
}

body {
  min-height: 100vh;
}

body * {
  box-sizing: border-box;
  font-family: Rubik,Arial,Noto Sans,sans-serif;
  font-weight: 400;
  line-height: 1.7;
  overflow: hidden;
}

</style>
