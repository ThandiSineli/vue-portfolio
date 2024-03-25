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
/* For small devices (phones, 768px and below) */
@media only screen and (max-width: 768px) {
    /* CSS rules for small screens */
}

/* For medium devices (tablets, 768px - 992px) */
@media only screen and (min-width: 768px) and (max-width: 992px) {
    /* CSS rules for medium screens */
}

/* For large devices (desktops, 992px and above) */
@media only screen and (min-width: 992px) {
    /* CSS rules for large screens */
}
.container {
    width: 100%; /* Take up full width */
    max-width: 1200px; /* Maximum width for larger screens */
    margin: 0 auto; /* Center align */
}

</style>

