<template>
  <div id="app">
    <navigation />
   
    <Footer/>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
  
    Navigation,
    Footer
  },
  
};
</script>

<style>
/* Add global styles if needed */
</style>

