<template>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3 style="text-align: center">Merhaba moruk</h3>
        <div class="form-group" style="flex-direction: row; display: flex">
          <app-first></app-first>
          <app-second></app-second>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import FirstDB from "./components/FirstDB";
import SecondDB from "./components/SecondDB";

export default {
  name: 'app',
  data () {
    return {

    }
  },

  components : {
    appFirst : FirstDB,
    appSecond : SecondDB,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
