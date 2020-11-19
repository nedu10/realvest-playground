<template>
    <div class="dashboard-layout">
        <div class="sidebar">
            <div class="sidebar__user">
                <img src="../../assets/img/avatar2.png" alt="" />
                <h1 class="uk-text-bold">John Snow</h1>
            </div>
            <hr />
        <ul class="sidebar-nav">
          <li>
            <a class="uk-link-text" href=""
              > Dashboard</a
            >
          </li>
          <li class="active">
            <a class="uk-link-text" href=""
              >Profile</a
            >
          </li>
          <hr />
          <li>
            <a class="uk-link-text" href=""
              >Logout</a
            >
          </li>
          <li>
            <a class="uk-link-text" href=""
              > Help</a
            >
          </li>
        </ul>
        </div>
    <div class="main">
        <h1>Hello</h1>
    </div>
    </div>
</template>

<script>
export default {
    
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

  &__user{
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
      width: 10rem;
        height: 10rem;
        border-radius: 50%;
        border: 4px solid #f4f4f4;
        object-fit: cover;
  }
  }
}
.sidebar-nav {
  padding: 0;
  display: flex;
  flex-direction: column;
}
.sidebar-nav * {
  font-size: 2rem;
  font-weight: light;
}
.sidebar-nav li {
  display: block;
  list-style: none;
  padding: 0.6rem 0rem;
  margin: 0rem 2rem;
  text-align: center;
}
.sidebar-nav li a {
  text-decoration: none;
  color: #FF6347;
  text-align: center;
  padding: 0rem 2rem;
}
.active {
  background: #FF6347;
  color: #ffffff !important;
  border-radius: 1.5rem;
}
.active a{
  color: #ffffff !important;
}

.main {
  background-color: #f4f4f4;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
}
</style>