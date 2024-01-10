<template>
  <div class="container-fluid containerContacts">
    <h1 class="text-center">Sign up</h1>
    <div class="row">
      <div class="col-md-6">
        <form action="https://formspree.io/f/xbjvboor" method="post" class="contact-form">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">
          <label for="e.dress">Email</label>
          <input type="text" id="e.dress" name="email" placeholder="Your email address..">
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
          <input type="submit" value="Submit">
        </form>
      </div>
      <div class="col-md-6">
        <div class="contact-details">
          <h2>For any Enquiries, Get in touch.</h2>
          <p>Email: Thandekasineli@gmail.com</p>
          <p>Phone: 0763521767</p>
          <h5>Links to Connect:</h5>
          <a href="#" target="_blank" class="bi bi-instagram"></a>
          <a href="#" target="_blank" class="bi bi-linkedin"></a>
          <a href="#" target="_blank" class="bi bi-github"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerContacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.contact-form {
  max-width: 100%;
}

.contact-details {
  text-align: center;
}

.bi {
  font-size: 24px;
  margin: 5px;
}
</style>
