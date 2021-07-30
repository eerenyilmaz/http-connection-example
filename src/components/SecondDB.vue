<template>
  <div class="col-md-6">
    <h3>Second Database</h3>
    <input type="text" class="form-control" placeholder="Name" v-model="userName">
    <br><br>
    <input type="text" class="form-control" placeholder="Surname" v-model="userSurname">
    <br>
    <button class="btn btn-primary" @click="saveUser2">Save</button>
    <button class="btn btn-success" @click="getUsers">Get Users</button>
    <hr>
    <transition-group name="slide">
      <li :key="user.data.userName" class="list-group-item" v-for="(user,index) in userListSecond">
        <span>{{ user.data.userName}} {{ user.data.userSurname}}</span>
        <button class="btn btn-xs btn-danger" @click="deleteUser(user.key,index)" style="position: absolute; right: 5px">Delete</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "SecondDB",
  data(){
    return{
      userListSecond : [],
      userName : null,
      userSurname : null,
    }
  },
  methods : {
    saveUser2(){
      this.$http.post("https://second-vue-training-default-rtdb.firebaseio.com/user.json",{ userName : this.userName, userSurname : this.userSurname});
      console.log(this.userName)
    },

    getUsers(){
      this.$http.get("https://second-vue-training-default-rtdb.firebaseio.com/user.json")
        .then((response)=>{
          //console.log(response.data);

          let data = response.data;


          for( let key in data){
            //console.log(data[key]);
            this.userListSecond.push(
              {
                key : key,
                data : data[key],
              }
            );
          }
        })
    },

    deleteUser(userKey,index){
      this.userListSecond.splice(index,1)
      this.$http.delete("https://second-vue-training-default-rtdb.firebaseio.com/user/"+userKey+".json")
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
