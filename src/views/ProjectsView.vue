<template>
  <h1>My Projects</h1>
  <div class="projects">
    <div v-for="project in projects" :key="project.id" class="card" style="width: 27rem;">
      <img :src="project.imgUrl" class="card-img-top" :alt="project.name">
      <div class="card-body">
        <h5 class="card-title">{{project.name}}</h5>
        <a :href="project.github" target="_blank" class="btn btn-github">
          <i class="bi bi-github"></i> GitHub
        </a>
        <a :href="project.netlify" target="_blank" class="btn btn-github">
          Go Live
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchprojects');
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 27rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.btn {
  text-decoration: none;
  margin: 7px;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109);
}

.btn-github {
  background-color: #24292e;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.github-icon {
  width: 20px; /* Set the width and height of the image as needed */
  height: 20px;
}

.btn:hover {
  box-shadow: 4px 8px 0px #666;
}

.btn-github:hover {
  background-color: #6e5494;
}
</style>
