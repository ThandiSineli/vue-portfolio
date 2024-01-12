<template>
  <div class="container mt-5">
    <div class="row">
    <div class="bio">
          <h2 class="profile-name animated-heading">Thandeka Zanele Sineli</h2>
          <h6 class="profile-role animated-heading">Aspiring Fullstack Developer</h6>
      <div class="col-md-6 offset-md-3 text-center">
        <div class="profile-image">
          <img src="https://iili.io/JYJV32p.jpg" alt="Profile Picture">
        </div>
          <p class="profile-description">
            I'm a motivated and ambitious individual with a passion for learning and self-improvement. I have a strong work ethic 
            and a positive attitude, always seeking new challenges to grow personally and professionally. I was born and raised in Cape Town,
             specifically in the small township of Guguletu.
             My experiences have shaped me, emphasizing the importance of culture and resilience
          </p>
          <a href="https://drive.google.com/file/d/1HATF1I2Xu3kQpU_AsmXQc5VVWU-7wfV4/view?usp=sharing" class="resume-button" target="_blank">View Resume</a>

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
  width: 100%;
 
  object-fit: cover;
}

.bio {
  text-align: center;
}

.bio p {
  margin-top: 10px;
}


.profile-name,
.profile-role {
  font-size: 24px;
  margin-bottom: 5px;
}

.animated-heading {
  animation: moveLeftAndBack 2s ease-in-out infinite;
}

@keyframes moveLeftAndBack {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20px); 
  }
}


.resume-button {
  background-color: #007BFF;
  color: rgb(13, 13, 13);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}

.resume-button:hover {
  background-color: #cad0d7;
}
</style>
