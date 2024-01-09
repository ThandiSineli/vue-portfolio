<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <div class="profile-image">
          <img src="https://i.postimg.cc/9M4kVLXP/02-smiling-black-female-software-developer-holding-laptop-slidesbase-1.jpg" alt="BioPic">
        </div>
        <div class="bio">
          <h2>Thandeka Zanele Sineli</h2>
          <p>Aspiring Fullstack Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis vehicula erat.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style>
/* Custom CSS for the About view */
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bio {
  text-align: center;
}
</style>
