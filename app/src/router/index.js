import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import LandingPage from '../components/registration/landingPage.vue'
import Register from '../components/registration/Register.vue'
import Login from '../components/registration/Login.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import Profile from '../components/dashboard/Profile.vue'
import User from '../components/dashboard/User.vue'
import Investment from '../components/dashboard/Investment.vue'
import EditProfile from '../components/dashboard/EditProfile.vue'
import AddInvestment from '../components/dashboard/AddInvestment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/investment',
    name: 'Investment',
    component: Investment,
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/add-investment',
    name: 'AddInvestment',
    component: AddInvestment,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
