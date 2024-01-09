
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {

};
</script>

<style scoped>

nav {
  background-color: #333;
  color: white;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
</style>
