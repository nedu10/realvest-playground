<template>
    <div>
        <Jumbotron />
    <div class="container mt-5">
        <h1>Users</h1>
    <table class="table table-borderless table-responsive card-1">
        <thead>
            <tr class="border-bottom">
                <th> <span class="ml-2">S/N</span> </th>
                <th> <span class="ml-2">Customer</span> </th>
                <th> <span class="ml-2">Investment Plan</span> </th>
                <th> <span class="ml-2">Location</span> </th>
                <th> <span class="ml-4">Action</span> </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-bottom">
                <td>
                    <div class="p-2"> <span class="d-block font-weight-bold">1</span></div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/ZSkeqnd.jpg" width="40" class="rounded-circle">
                        <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">Jennifer john</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td>
                    <div class="p-2"> <span class="font-weight-bold">&#8358; 50,000 plan</span> </div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-column"> <span>1 City point,#2A</span> <span> Brooklyn,NY</span> </div>
                </td>
                <td>
                    <div class="p-2 icons"> <router-link to="/profile"><button type="button" class="btn btn-primary" data-dismiss="modal">View Profile</button></router-link></div>
                </td>
            </tr>
            <tr class="border-bottom">
                <td>
                    <div class="p-2"> <span class="d-block font-weight-bold">2</span>  </div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/C4egmYM.jpg" class="rounded-circle" width="40">
                        <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">David Smith</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td>
                    <div class="p-2"> <span class="font-weight-bold">&#8358; 150,000 plan</span> </div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-column"> <span>205 2ndst,#2A,</span> <span> Brooklyn,NY</span> </div>
                </td>
                <td>
                     <div class="p-2 icons"> <router-link to="/profile"><button type="button" class="btn btn-primary" data-dismiss="modal">View Profile</button></router-link></div>
                </td>
            </tr>
            <tr class="border-bottom">
                <td>
                    <div class="p-2"> <span class="d-block font-weight-bold">3</span></div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="40">
                        <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">Emmily johnson</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td>
                    <div class="p-2"> <span class="font-weight-bold">&#8358; 200,000 plan</span> </div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-column"> <span>199 Bowery,#7A</span> <span> Brooklyn,NY</span> </div>
                </td>
                <td>
                    <div class="p-2 icons"> <router-link to="/profile"><button type="button" class="btn btn-primary" data-dismiss="modal">View Profile</button></router-link></div>
                </td>
            </tr>
            <tr class="border-bottom">
                <td>
                    <div class="p-2"> <span class="d-block font-weight-bold">3</span></div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/hczKIze.jpg" width="40" class="rounded-circle">
                        <div class="d-flex flex-column ml-2"> <span class="d-block font-weight-bold">Nick Jones</span> <small class="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td>
                    <div class="p-2"> <span class="font-weight-bold">&#8358; 250,000 plan</span> </div>
                </td>
                <td>
                    <div class="p-2 d-flex flex-column"> <span>123 Clinton Ave,#2A</span> <span> Brooklyn,NY</span> </div>
                </td>
                <td>
                    <div class="p-2 icons"> <router-link to="/profile"><button type="button" class="btn btn-primary" data-dismiss="modal">View Profile</button></router-link></div>

                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
</template>

<script>
import Jumbotron from './dashboard/jumbotron.vue'
export default {
    components: {
        'Jumbotron': Jumbotron,
    }
}
</script>

<style lang="scss" scoped>
.card-1 {
    border: none;
    border-radius: 10px;
    width: 100%;
    background-color: #fff
}
.card-1 *{
    font-size: 1.6rem;
}

.icons i {
    margin-left: 20px
}
</style>