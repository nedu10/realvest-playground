<template>
    <div class="container rounded bg-white mt-5 mb-5 p-5">
    <div class="row">
        <div class="col-md-12 border-right">
            <div class="con-tex p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 mt-3 "><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
                    <div class="col-md-12 mt-3"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value=""></div>
                    <div class="col-md-12 mt-3"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></div>
                    <div class="col-md-12 mt-3"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary btn-lg profile-button btn-block" type="button">Save Profile</button></div>
            </div>
        </div>
        
    </div>
</div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.container, con-tex *{
    font-size: 2rem
}
.form-control:focus {
    box-shadow: none;
    border-color:  #3e64ff;
}

.profile-button {
    background:  #3e64ff;
    box-shadow: none;
    border: none;
    padding: 1rem;
}

.profile-button:hover {
    background:  #3e64ff
}

.profile-button:focus {
    background:  #3e64ff;
    box-shadow: none
}

.profile-button:active {
    background:  #3e64ff;
    box-shadow: none
}

.back:hover {
    color:  #3e64ff;
    cursor: pointer
}

.labels {
    font-size: 1.7rem;
}

.add-experience:hover {
    background:  #3e64ff;
    color: #fff;
    cursor: pointer;
    border: solid 1px  #3e64ff;
}

input[type="text"]
{
    font-size:1.7rem;
}

</style>