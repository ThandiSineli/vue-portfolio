<template>
<body>
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
  background-color: #FFD166; 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}


.section {
  margin-bottom: 40px;
}

.greeting {
  text-align: center;
  color: white;
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





