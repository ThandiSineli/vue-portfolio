<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <div class="profile-image">
          <img src="https://drive.google.com/uc?export=download&id=1TsSX2QH_31nyrUuCEy0w_9u0dDlDa9nw" alt="BioPic">
        </div>
        <div class="bio">
          <h2>Thandeka Zanele Sineli</h2>
          <p>Aspiring Fullstack Developer</p>
          <p>
            I am a highly motivated and ambitious individual with a passion for learning and self-improvement. 
            I have a strong work ethic and a positive attitude. I am always seeking new challenges
            and opportunities to grow both personally and professionally.
          </p>
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

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden; 
  margin: 0 auto 20px;
}

.profile-image img {
  width: 200px;
  height: 200px;
  object-fit: cover; 
}

.bio {
  text-align: center;
}
</style>
