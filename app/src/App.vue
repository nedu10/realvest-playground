<template>
  <div>
    <component :is="layout">
    <router-view/>
    </component>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const defaultLayout = 'default'

export default {
  name: "App",
  computed: {
    layout(){
      return (this.$route.meta.layout || defaultLayout ) + '-layout'
    }
  }
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
