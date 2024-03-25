<template>
  <h1>Testimonials</h1>
  <div class="testimonial-grid">
    <div v-for="testimonial in Testimonials" :key="testimonial.id" class="testimonial-card">
      <img :src="testimonial.imgUrl" alt="Testimonial Image" class="testimonial-img" />
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.title }}</p>
      <p>{{ testimonial.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Testimonials() {
      return this.$store.state.Testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>

h1 {
  text-align: center;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-gap: 20px; /* spacing between cards */
}

.testimonial-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.testimonial-img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}

/* For small devices (phones, 768px and below) */
@media only screen and (max-width: 768px) {
    /* CSS rules for small screens */
}

/* For medium devices (tablets, 768px - 992px) */
@media only screen and (min-width: 768px) and (max-width: 992px) {
    /* CSS rules for medium screens */
}

/* For large devices (desktops, 992px and above) */
@media only screen and (min-width: 992px) {
    /* CSS rules for large screens */
}
.container {
    width: 100%; /* Take up full width */
    max-width: 1200px; /* Maximum width for larger screens */
    margin: 0 auto; /* Center align */
}

</style>
