<template>
    <div class="dashboard-layout">
        <div class="header">
          <Header />
        </div>
        <div class="sidebar">
            <sidebar />
        </div>
    <div class="main">
      <slot />
    </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './sidebar.vue' 
export default {
    components: {
      'Header': Header,
      'sidebar': Sidebar,
    }
}
</script>

<style lang="scss" scoped>
.dashboard-layout{
    display: flex;
    @media (max-width: 54rem) {
          display: block;
     }
}
.header{
  display: none;
  @media (max-width: 54rem) {
          display: block;
     }
}

.sidebar {
  background-color: white;
  width: 20%;
  padding: 20px 0;
  min-height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  @media (max-width: 54rem) {
          display: none;
     }
}

.main {
  background-color: #f4f4f4;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 3rem 7rem;
  @media (max-width: 54rem) {
          width: 100%;
          margin: 0;
          padding: 3rem 1rem;
     }
}
.nav-bottom{
  margin-top: 100px
}


.main-title {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
</style>