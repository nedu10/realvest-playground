<template>
    <div class="register">
        <div class="register__img">
            <h1><router-link to="/">
                <span>R</span>
                <span>e</span>
                <span>a</span>
                <span>l</span>
                <span>V</span>
                <span>e</span>
                <span>s</span>
                <span>t</span></router-link>
            </h1>
        </div>
        <div class="register__form">
            <div class="register__form--form">
                <h2 class="animation a1">Login</h2>
          <h4 class="animation a2">
              Use the form to login
          </h4>
          <input
            type="email"
            class="form-field animation a3"
            placeholder="Email Address"
          />
          <input
            type="password"
            class="form-field animation a4"
            placeholder="Password"
          />
          
          <button class="animation a6">
            Login
          </button>
          <h3>Don't have an account? <span><router-link to="/register">Register</router-link></span></h3>
        </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.register{
    display: flex;
  height: 100vh;   

  &__form{
    overflow: hidden;
    // width: 35%;
    &--form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        animation-name: left;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 1s;
        // padding: 0 6rem;
        margin-top: 10rem;
        button{
            height: auto;
            padding: 12px 10px;
            border: 0;
            background-color:#15152d;
            border-radius: 3px;
            margin-top: 10px;
            color: #fff;
            letter-spacing: 1px;
            font-family: "Rubik", sans-serif;
            font-size: 1.5rem;
            text-align: center;
        }
        h3{
            margin-top: 1rem;
            text-align: center;
            color: rgba(0,0,0,.5)!important;
            span a{
                color: #FF6347!important;
                text-decoration: none;
            }
        }

        h2{
            font-size: 2.7rem;
            font-weight: bold;
            color: rgba(0,0,0,.5)!important;
        }
        h4{
            font-size: 2rem;
            color: rgba(0,0,0,.5)!important;
        }
        input{
            height: 4.6rem;
            padding: 0 1.6rem;
            border: 2px solid #ddd;
            border-radius: 4px;
            font-family: "Rubik", sans-serif;
            outline: 0;
            transition: 0.2s;
            margin-top: 2rem;
            font-size: 1.5rem;
        }
        input:focus {
            border-color: #0f7ef1;
        }
    }

}

&__img{
  flex: 1;
  background-color: black;
  transition: 1s;
  background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.3)), url(../../assets/img/register-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

    h1{
           height: 16rem;
           margin: 3rem 2rem 0 2rem;
           cursor: pointer;
        }
  h1 span {
  position: relative;
  top: 2rem;
  font-family: 'Titan One', cursive !important;
  display: inline-block;
  animation: bounce .5s ease infinite alternate;
  font-size: 8rem !important;
  color: #FFF;
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(0, 0, 0, .4);
}

h1 span:nth-child(2) { animation-delay: .3s; }
h1 span:nth-child(3) { animation-delay: .9s; }
h1 span:nth-child(4) { animation-delay: .15s; }
h1 span:nth-child(5) { animation-delay: .21s; }
h1 span:nth-child(6) { animation-delay: .27s; }
h1 span:nth-child(7) { animation-delay: .33s; }
h1 span:nth-child(8) { animation-delay: .39s; }

@keyframes bounce {
  100% {
    top: -2rem;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
}
}
}
.animation {
  animation-name: move;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-delay: 2s;
}
.a1 {
  animation-delay: 2s;
}
.a2 {
  animation-delay: 2.1s;
}
.a3 {
  animation-delay: 2.2s;
}
.a4 {
  animation-delay: 2.3s;
}
.a5 {
  animation-delay: 2.4s;
}
.a6 {
  animation-delay: 2.5s;
}
@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
}
</style>