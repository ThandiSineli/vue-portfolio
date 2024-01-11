<template>
  <div class="container">
    <section class="education">
      <h2>Education</h2>
      <div class="timeline">
        <div v-for="edu in education" :key="edu.id" class="timeline-item">
          <div class="timeline-content">
            <h3>{{ edu.name }}</h3>
            <p>{{ edu.year }}</p>
            <p>{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="experience">
      <h2>Experience</h2>
      <div class="timeline">
        <div v-for="exp in experience" :key="exp.id" class="timeline-item">
          <div class="timeline-content">
            <h3>{{ exp.name }}</h3>
            <p>{{ exp.year }}</p>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="skills">
      <h2>Skills</h2>
      <div class="container">
        <div v-for="skill in skills" :key="skill.id" class="card">
          <img :src="skill.imgUrl" class="card-img-top" :alt="skill.name" />
          <div class="card-body">
            <h1 class="card-text">{{ skill.name }}</h1>
            <h6 class="card-text">{{ skill.description }}</h6>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.EducationData;
    },
    experience() {
      return this.$store.state.ExperienceData;
    },
    skills() {
      return this.$store.state.SkillsData;
    },
  },
  mounted() {
    this.$store.dispatch('fetchEducationData');
    this.$store.dispatch('fetchExperienceData');
    this.$store.dispatch('fetchSkillsData');
  },
};
</script>
