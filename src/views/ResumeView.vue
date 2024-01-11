<template>
  <div>
    <h2>Education</h2>
    <ul>
      <li v-for="eduItem in $store.state.Education" :key="eduItem.id">
        {{ eduItem.name }} - {{ eduItem.year }}: {{ eduItem.description }}
      </li>
    </ul>

    <h2>Experience</h2>
    <ul>
      <li v-for="expItem in $store.state.Experience" :key="expItem.id">
        {{ expItem.name }} - {{ expItem.year }}: {{ expItem.description }}
      </li>
    </ul>

    <h2>Skills</h2>
    <ul>
      <li v-for="skill in $store.state.Skills" :key="skill.id">
        {{ skill.name }} - {{ skill.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchResumeData');
    
  },
};
</script>
