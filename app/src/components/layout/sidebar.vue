<template>
    <div>
        <div class="sidebar__user">
                <img src="../../assets/img/avatar2.png" alt="" />
                <h1 class="uk-text-bold">John Snow</h1>
            </div>
            <hr />
        <ul class="sidebar-nav">
          <li>
            <a class="uk-link-text" href=""
              ><router-link to="/dashboard">Dashboard</router-link></a
            >
          </li>
          <li class="active">
            <a class="uk-link-text" href=""
              ><router-link to="/profile">Profile</router-link></a
            >
          </li>
          <li>
            <a class="uk-link-text" href=""
              ><router-link to="/user">User</router-link></a
            >
          </li>
          <li>
            <a class="uk-link-text" href=""
              ><router-link to="/investment">Investment</router-link></a
            >
          </li>
          <hr />
          <div class="nav-bottom">
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
          </div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

  .sidebar__user{
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

.sidebar-nav {
  padding: 0;
  display: flex;
  flex-direction: column;
  margin:50px 0;
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
  color: #3e64ff;
  text-align: center;
  padding: 0rem 2rem;
}
.active {
  background: #3e64ff;
  color: #ffffff !important;
  border-radius: 1.5rem;
}
.active a{
  color: #ffffff !important;
}
</style>