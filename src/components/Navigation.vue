<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/resume">Resume</router-link> 
      <router-link to="/projects">Projects</router-link> 
      <router-link to="/testimonials">Testimonials</router-link> 
      <router-link to="/contacts">Contacts</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
.navbar {
  background-color: transparent; 
  color: white;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Ensure the navbar stays on top */
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url('https://iili.io/JYJYE41.webp');
  background-size: cover;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;
  color: white;
}

.greeting {
  text-align: center;
}

h1.animated-greeting {
  font-size: 5rem;
  animation: moveGreeting 4s infinite alternate;
}

h2.animated-welcome {
  font-size: 3rem; 
  opacity: 0;
  animation: fadeIn 2s 1s forwards, typing 3s steps(40) 2s forwards; 
}

.typewriter {
  display: inline-block;
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
}

@keyframes moveGreeting {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>

