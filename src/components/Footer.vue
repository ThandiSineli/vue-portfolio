

<template>
  <footer>
    <p> Thandeka Sineli&copy; {{ currentYear }}</p>
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
  bottom: 0;
  width: 100%;
  position: fixed;

}

</style>
