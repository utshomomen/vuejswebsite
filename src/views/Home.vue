<template>
  <div class="home main-content">
     <div class="left-content">
      <h1>ART Dedication</h1>

      <p class="subtxt">lyba is photographer and artist .</p>
      <p class="subtxt">I've worked with differnet project with many comapny and exibition.</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>
  </div>

 
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>

  .img1 {
    background: url('../assets/luba.jpg');
  }

</style>
