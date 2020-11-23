<template>
    <div class="dashboard-layout">
        <div class="sidebar">
            <sidebar />
        </div>
    <div class="main">
      <slot />
    </div>
    </div>
</template>

<script>
import Sidebar from './sidebar.vue' 
export default {
    components: {
      'sidebar': Sidebar,
    }
}
</script>

<style lang="scss" scoped>
.dashboard-layout{
    display: flex;
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
}

.main {
  background-color: #f4f4f4;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
}
.nav-bottom{
  margin-top: 100px
}
.main {
  padding: 3rem 7rem;
}

.main-title {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
</style>