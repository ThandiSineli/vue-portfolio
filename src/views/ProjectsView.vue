<template>
  <div>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in $store.state.projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <img :src="project.imgUrl" alt="Project Image" style="max-width: 200px; max-height: 150px;" />
        <p>{{ project.github }}</p>
        <p>{{ project.netlify }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchProjectsData');
  },
};
</script>
