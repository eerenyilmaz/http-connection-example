<template>

  <div class="col-md-6">
    <h3>First Database</h3>
    <input type="text" class="form-control" placeholder="Name" v-model="userName">
    <br><br>
    <input type="text" class="form-control" placeholder="Surname" v-model="userSurname">
    <br>
    <button class="btn btn-primary" @click="saveUser">Save</button>
    <button class="btn btn-success" @click="getUsers">Get Users</button>
    <hr>
    <ul>
      <transition-group name="slide">
        <li :key="user.data.userName" class="list-group-item" v-for="(user,index) in userListFirst">
          <span>{{ user.data.userName}} {{ user.data.userSurname}}</span>
          <button class="btn btn-xs btn-danger" @click="deleteUser(user.key,index)" style="position: absolute; right: 5px">Delete</button>
        </li>
      </transition-group>
    </ul>
  </div>

</template>

<script>
export default {
  name: "FirstDB",
  data(){
    return{
      userListFirst : [],
      userName : null,
      userSurname : null,

    }
  },
  methods : {
    getUsers(){

      this.$http.get("users.json")
      .then((response)=>{
        //console.log(response.data);

        let data = response.data;


        for( let key in data){
          //console.log(data[key]);
          this.userListFirst.push(
            {
              key : key,
              data : data[key],
            }
          );
        }
      })
    },

    saveUser(){
      this.$http.post("users.json",{ userName : this.userName, userSurname : this.userSurname})
    },

    deleteUser(userKey,index){
      this.userListFirst.splice(index,1)
      this.$http.delete("users/"+userKey+".json")
      .then(response =>{
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition:  opacity 0.5s;
}
.slide-leave{

}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move{
  transition: transform 1s;
}
@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}
</style>
