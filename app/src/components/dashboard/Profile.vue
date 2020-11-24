<template>
    <div>
    <header class="header p-4">
    <div class="container">
        <div class="row">
        <div class="col-sm-9">
          <h2 class="name-t">Rick Sanchez</h2>
        </div>
        </div>

      <div class="row" style="margin-top:20px;">
        <div class="col-5 col-sm-3"> 
          <a href="#"> <img src="https://i.imgur.com/ZSkeqnd.jpg" class="img-p rounded-circle"></a>
        </div>

        <div class="col-7 col-sm-6"> 
          <h5>Associate Professor, <small>Dept. of Alien Agriculture, Jaarvlar-3 University</small></h5>
          <p>PhD on Molecular Shwanky Physics</p>
          <p>Address: 123 Cuba str Tampa, Fl, Earth 137</p>
        </div>

        <div class="col-sm-3 text-center social">
          <span class="number">Phone:<strong>+0001732226402</strong></span>
          <div class="button-email">
            <router-link to="/edit-profile"><a href="#" class="btn btn-outline-primary btn-sm btn-block">Edit Profile</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container cont-tex">

  <div class="row mt-3">
        <div class="col-sm-12">
          <div class="card card-block text-xs-left p-5">
            <h5>Biography</h5>
              <p>Rick Sanchez C-137 is the father of Beth Smith, and the grandfather of Morty and Summer Smith. Aged 60 years old, he is said to have been away from the family for around fourteen years prior to the events of the show's first episode, "Pilot". He frequently travels on adventures through space and other planets and dimensions with his grandson Morty.</p>
          </div>
        </div>
      </div>
  <div class="row mt-5">
    <div class="col-sm-12">
        <div class="card card-block p-5">
          <h5><i class="fa fa-rocket fa-fw"></i>Investment</h5>
          <ul class="list-group" style="margin-top:15px;margin-bottom:15px;">
            <li class="list-group-item">&#8358; 200,000 plan</li>
          </ul>
        </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style lang="scss" scoped>
img{
  max-width:100%
}

.img-p{
  object-fit:cover;
  width: 100%;
  @media (max-width: 54rem) {
          width: 100%;
     }
}

.name-t{
  font-size:2.5rem !important;
  @media (max-width: 54rem) {
          font-size: 1.5rem;
          margin-top: 2rem;
     }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.header {
  background: #f5f5f5;
  border-top: 3px solid #3e64ff;
}
.header *{
    font-size: 1.6rem;
}

.button-email{
  margin:10px 0
}
h5, .fa-circle{
  color:#3e64ff;
}

.list-group {
    list-style: disc inside;

}

.list-group-item {
    display: list-item;
}

 .find-more{
   text-align: right;
 }


.label-theme{
  background: #3e64ff;
  font-size: 14px;
  padding: .3em .7em .3em;
  color: #fff;
  border-radius: .25em;
}

.label a{
  color: inherit;
}

.cont-tex *{
    font-size: 1.6rem;
}
</style>