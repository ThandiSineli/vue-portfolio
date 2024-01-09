<template>
  <div class="home">
    <div class="hero-section">
      <div class="content">
        <div class="greeting">
          <h1 class="animated-greeting">Hello,</h1>
          <h2>Welcome to my Portfolio</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Resetting some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: 'Arial', sans-serif; /* Change to desired font */
  background-color: #f4f4f4; /* Update background color */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Page-specific styles */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
  /* Other navbar styles */
}

.navbar ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

.content {
  flex: 1;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

h1, h2 {
  text-align: center;
}

h1.animated-greeting {
  font-size: 5rem;
  animation: moveGreeting 4s infinite alternate;
}

@keyframes moveGreeting {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}


</style>
