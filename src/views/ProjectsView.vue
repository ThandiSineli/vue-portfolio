<template>
<body>
  
</body>
  <div>
    <h1>My Projects</h1>
    <h1>My Projects</h1>

    <div class="projects">
      <div v-for="project in $store.state.projects" :key="project" class="card">
        <img :src="project.imgUrl" class="card-img-top" :alt="project.name">
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <a :href="project.github" target="_blank" class="btn btn-primary">Source code</a>
          <a :href="project.netlify" target="_blank" class="btn btn-primary">Go Live</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fetchProjectsData() {
      this.$store.dispatch('fetchProjectsData');
    },
  },
  mounted() {
   this.fetchProjectsData
   
  },
};
</script>

