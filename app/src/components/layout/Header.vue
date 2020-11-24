<template>
    <div>

        <nav class="navbar fixed-top" style="background-color:#fff">
  <a class="navbar-brand mr-2" href="#">
    <img src="../../assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
    RealVest
  </a>
    <div>
        <router-link to="/profile"><img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" height="30" class="d-inline-block mr-2 rounded-circle align-top my-2 my-sm-0" /></router-link>
    </div>
</nav>

        <nav class="mobile-bottom-nav">
	<div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
		<router-link to="/dashboard"><div class="mobile-bottom-nav__item-content">
			<i class="material-icons">home</i>
			Dashboard
		</div></router-link>		
	</div>
	<div class="mobile-bottom-nav__item">		
		<router-link to="/user"><div class="mobile-bottom-nav__item-content">
			<i class="material-icons">people</i>
			Users
		</div></router-link>
	</div>
	
	<div class="mobile-bottom-nav__item">
		<router-link to="/investment"><div class="mobile-bottom-nav__item-content">
			<i class="material-icons">add_businesse</i>
			Investment
		</div></router-link>		
	</div>
</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.navbar-brand{
    font-size: 1.8rem;
    color:  #7760a4;
}

.bg-light{
    background-color: #fff;
}

.mobile-bottom-nav{
	position:fixed;
	bottom:0;
	left:0;
	right:0;
	z-index:1000;
	
	//give nav it's own compsite layer
	will-change:transform;
	transform: translateZ(0);
	
	display:flex;	
	
	height:50px;
	
	box-shadow: 0 -2px 5px -2px #333;
	background-color:#fff;
	
	&__item{
		flex-grow:1;
		text-align:center;
		font-size:12px;
		
		display:flex;
		flex-direction:column;
		justify-content:center;
	}
	&__item--active{
		//dev
		color: #7760a4;
	}
	&__item-content{ 
		display:flex;
		flex-direction:column;		
	}
}
a{
    text-decoration: none;
}

</style>