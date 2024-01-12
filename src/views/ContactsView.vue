<template>
  <div class="container-fluid containerContacts">
    <div class="row">
      <div class="col-md-6">
        <h3 class="text-center mb-4 underline">Get In Touch</h3>
        <form action="https://formspree.io/f/xbjvboor" method="post" class="contact-form">
          <div class="form-group">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" class="form-control" placeholder="Your first name" required>
          </div>
          <div class="form-group">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" class="form-control" placeholder="Your last name" required>
          </div>
          <div class="form-group">
            <label for="e.dress">Email Address</label>
            <input type="email" id="e.dress" name="email" class="form-control" placeholder="Your email address" required>
          </div>
          <div class="form-group">
            <label for="subject">Message</label>
            <textarea id="subject" name="subject" class="form-control" placeholder="Your message" style="height: 150px" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
          </div>
        
        </form>
      </div>
      <div class="col-md-6">
        <div class="contact-details">
          <h2 class="mb-3 underline">Personal Profile</h2>
          <p><strong>Email:</strong> Thandekasineli@gmail.com</p>
          <p><strong>Phone:</strong> 0763521767</p>
          <h5 class="mb-2 underline">Links to Connect:</h5>
          <div class="icon-container">
            <a href="https://www.instagram.com/sive_nka?igsh=MWJ4aHF5bWZ4NDlkNw== "><img src="https://live.staticflickr.com/65535/53453833022_c6301d9cff_m.jpg" alt="Instagram"></a>
            <a href="https://www.linkedin.com/in/thandeka-sineli-b6863323b/"><img src="https://live.staticflickr.com/65535/53454885638_40667f2564_m.jpg" alt="Linkedin"></a>
            <a href="http://Wa.me/+2763521767"><img src="https://live.staticflickr.com/65535/53454887013_576965e96d_m.jpg" alt="WhatsApp"></a>
          </div>
          <div class="contact-icons">
            <span class="bi bi-geo-alt"></span>
            <h4>Address:</h4>
            <p>60 Ny7 Guguletu Cape Town 7750</p>
            <span class="bi bi-geo"></span>
            <h4>Map Pin:</h4>
            <p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.4180237669975!2d18.566019675443354!3d-33.98179502491977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44e03555b2a1%3A0xc092152a1ec48bb0!2s60%20Ny7%2C%20Guguletu%2C%20Cape%20Town%2C%207750!5e0!3m2!1sen!2sza!4v1705066438132!5m2!1sen!2sza" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerContacts {
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col-md-6 {
  flex: 0 0 calc(50% - 10px);
}

.contact-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #090909;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #090909;
  color: #fff;
}

.btn-primary:hover {
  background-color: #eceaef;
}

.contact-details {
  text-align: center;
}

.underline {
  text-decoration: underline;
}

.bi {
  font-size: 24px;
  margin: 5px;
}

.social-links {
  display: flex;
  margin-top: 10px;
}

.social-link {
  font-size: 24px;
  margin-right: 10px;
  color: #090909;
}

.contact-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.contact-icons span {
  font-size: 24px;
  margin: 5px;
  color: #090909;
}
</style>
