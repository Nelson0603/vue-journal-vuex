<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
   <h1>Hola Mundo</h1>

   <button @click="goToDaybook" class="btn btn-primary">Prmary</button>
   <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
   <button @click="goToDaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

