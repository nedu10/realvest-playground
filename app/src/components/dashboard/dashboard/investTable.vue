<template>
<div>
<div class="container rounded mt-5 bg-white p-md-5">
  <div class="d-flex justify-content-between align-items-center" style="overflow:hidden">
    <div class="h2 font-weight-bold">Investment</div>
    <router-link to="/add-investment"><button class="btn btn-primary">Add Investment</button></router-link>
  </div>
    <div class="table-responsive mt-5">
        <table class="table">
            <thead>
                <tr>
                  <th scope="col">S/N</th>
                    <th scope="col">Investment Name</th>
                    <th scope="col">Investment Duration</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-blue">
                  <td class="pt-3">1</td>
                    <td class="pt-2">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Emilia Kollette</div>
                    </td>
                    <td class="pt-3 mt-1">25 Sep 2020</td>
                    <td class="pt-3"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Investment</button></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                <tr class="bg-blue">
                    <td class="pt-3">2</td>
                    <td class="pt-2">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Anny Adams</div>
                    </td>
                    <td class="pt-3">26 Sep 2020</td>
                    <td class="pt-3"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Investment</button></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                <tr class="bg-blue">
                    <td class="pt-3">3</td>
                    <td class="pt-2">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Anny Adams</div>
                    </td>
                    <td class="pt-3">26 Sep 2020</td>
                    <td class="pt-3"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Investment</button></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                <tr class="bg-blue">
                    <td class="pt-3">4</td>
                    <td class="pt-2">
                        <div class="pl-lg-5 pl-md-3 pl-1 name">Anny Adams</div>
                    </td>
                    <td class="pt-3">26 Sep 2020</td>
                    <td class="pt-3"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Investment</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Investment title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src="../../../assets/img/house.webp" style="width: 90%;height:350px" />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Ea quisquam dignissimos architecto sint tempore neque eveniet,
              omnis atque quis reprehenderit ipsam animi? Quibusdam praesentium 
              ea consectetur provident qui laborum. Consectetur optio repellat sunt 
              et perferendis obcaecati consequuntur velit maiores nisi ipsa autem veniam 
              quasi, numquam, odit praesentium doloribus corrupti eos.
          </p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

   
    </div>
</template>

<style lang="scss" scoped>
.btn{
    font-size: 1.2rem;
    margin-right: 1rem;
}

table *{
    font-size: 1.6rem;
}
.modal-dialog *{
  font-size: 1.6rem;
}

table{
    padding: 0;
    margin: 0;
}


.h2 {
    color: #444;
    font-family: 'PT Sans', sans-serif
}

thead {
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    color: #666
}

img {
    width: 40px;
    height: 40px
}

.name {
    display: inline-block
}

.bg-blue {
    background-color: #EBF5FB;
    border-radius: 8px
}

.fa-check,
.fa-minus {
    color: blue
}

.bg-blue:hover {
    background-color: #3e64ff;
    color: #eee;
    cursor: pointer
}

.bg-blue:hover .fa-check,
.bg-blue:hover .fa-minus {
    background-color: #3e64ff;
    color: #eee
}

.table thead th,
.table td {
    border: none
}

.table tbody td:first-child {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px
}

.table tbody td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px
}

#spacing-row {
    height: 10px
}

@media(max-width:575px) {
    .container {
        width: 100%;
        padding: 20px 10px
    }
}
</style>