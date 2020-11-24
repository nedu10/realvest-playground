<template>
    <div class="row main-jumbotron">
        <div class="col-md-6 col-sm-12 jumbotron-text">
          <div>
             <h1>Welcome, <br />John Snow</h1>
             <p>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis temporibus sunt nulla iure nisi praesentium optio esse
              sequi porro omnis!
             </p>
              <button class="btn btn-primary">Add Investment</button>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <img src="../../../assets/img/house.webp" style="width: 90%" />
        </div>
    </div> 
</template>

<style lang="scss" scoped>
.main-jumbotron {
  border-radius: 4rem;
  background-color: #ffffff;
  box-shadow: 10px 10px #f4f4f4;
  @media (max-width: 54rem) {
        border-radius: 2rem;
        margin-top: 4rem;
        overflow: hidden;
     }
}
.jumbotron-text {
  padding: 5rem 0rem 4rem 5rem;
  margin: 0;
  @media (max-width: 54rem) {
    padding: 0rem 3rem;
    margin-top: 4rem;

  }
}

.jumbotron-text p {
  font-size: 1.4rem;
}

.jumbotron-text button,
.bt1 {
  font-size: 1.4rem;
  border-radius: 2rem;
}

</style>