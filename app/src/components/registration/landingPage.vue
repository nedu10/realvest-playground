<template>
    <div class="landingPage">
        <div class="landing-text">
            <h1>
                <span>R</span>
                <span>e</span>
                <span>a</span>
                <span>l</span>
                <span>V</span>
                <span>e</span>
                <span>s</span>
                <span>t</span>
            </h1>
            <p>Welcome, <br />
                to the future of Real Estate investing <br />
                and Home Ownership simplified</p>
                <div>
                    <router-link to="/login"><b-button variant="success"  class="mr-3">Login</b-button></router-link>
                    <router-link to="/register"><b-button variant="light"  class="btn-color">Register</b-button></router-link>
                </div>
        </div>
        <div class="landing-img">
            <img src="../../assets/img/house.webp" />
        </div>
    </div>
</template>

<script>
export default {
    
    
}
</script>

<style lang="scss" scoped>
.landingPage{
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, 	#7760a4 0%,	#7760a4 50%,	#7760a4 50%,white 50%,white 100%); /* W3C */
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 54rem) {
    background: linear-gradient(to right, 	#7760a4 0%,	#7760a4 50%,	#7760a4 50%,#7760a4 50%,#7760a4 100%);;
    display: block;
  }


    .landing-text{
        display: flex;
        flex-direction: column;
        // align-items: center;
        margin-left: 10rem;
        justify-content: center;

        @media (max-width: 54rem) {
            margin: 0rem;
            height: 100%;
            justify-content: center;
            align-items: center;
        }

        h1{
           height: 16rem;
           margin-top: -7rem;
           @media (max-width: 54rem) {
            text-align: center;
        }
        }
        p{
            font-size: 2rem;    
            @media (max-width: 54rem) {
            text-align: center;
        }
        }

        div{
            padding: 3rem 0;
        }

        button{    
            font-size: 1.3rem !important;
            border-radius: 1.5rem;
            border: none;
            padding: .8rem 2rem;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            text-transform: uppercase;
            letter-spacing: 2.5px;
             box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease 0s;
            cursor: pointer;
            outline: none;
        }
    button:hover {
        background-color: inherit;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-4px);
    }
    }

    .landing-img{
        img{
            width: 100%;
            height: 100vh;
        }
        @media (max-width: 54rem) {
            display: none;
      }
    }

}

.landingPage *{
    color: #ffffff;
    font-size: 2rem
}


.btn-color{
    background: #ffffff;
    color: #FF6347;
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

    @media (max-width: 54rem) {
            animation: none;
            top: 4.5rem;
            font-size: 5.5rem !important;
            margin: 0 auto;
        }
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

</style>


 