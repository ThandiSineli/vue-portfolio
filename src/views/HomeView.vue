<template>
  <body>
    <div class="home">
      <div class="hero-section">
        <div class="content">
          <div class="greeting">
            <h1 class="animated-greeting">Hello,</h1>
            <h2 class="animated-welcome">Welcome to my Portfolio!<span class="typewriter"></span></h2>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('https://iili.io/JYJYE41.webp');
  background-size: cover;
}

.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;
  color: white;
}

.greeting {
  text-align: center;
  color: white;
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
