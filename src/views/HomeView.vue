<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>

    <button @click="goToDaybook" class="ms-1 btn btn-primary text-white">Primary</button>
    <button @click="goToDaybook" class="ms-1 btn btn-secondary text-white">Secondary</button>
    <button @click="goToDaybook" class="ms-1 btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook(){
      this.$router.push({ name: 'no-entry'})
    }
  }
}
</script>

