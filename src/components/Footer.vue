<!-- Footer.vue -->

<template>
  <footer>
    <p>&copy; {{ currentYear }} Thandeka Sineli</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}


.footer {
  background-color: #333;
  color: white;
  text-align: bottom;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}


/* Adjusting body padding to prevent content from hiding under the footer */
body {
  padding-bottom: 60px; /* Adjust this value to match your footer's height */
}
footer p {
  margin: 0;
}
</style>
