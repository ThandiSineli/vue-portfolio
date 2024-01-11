<template>
    <div>
      <h2>Testimonials</h2>
      <div v-for="testimonial in $store.state.Testimonials" :key="testimonial.id" class="testimonial-card">
        <img :src="testimonial.imgUrl" alt="Testimonial Image" class="testimonial-img" />
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.title }}</p>
        <p>{{ testimonial.description }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchTestData');
  },
};
</script>
  
  <style>
  .testimonial-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    text-align: center;
  }
  
  .testimonial-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
  }
  </style>
  
  
  