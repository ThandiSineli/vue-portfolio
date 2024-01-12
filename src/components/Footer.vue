<template>
<div>
 <footer>
    <p> Thandeka Sineli&copy; {{ currentYear }}</p>
  </footer>
</div>
 
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

  background-color: #FF6B6B;
  color: white;
  text-align: center;
  padding: 10px;
  bottom: 0;
  width: 100%;
  position: fixed;

  }


</style>

