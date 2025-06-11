document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusMsg = document.getElementById('formStatus');

  if (firstName && lastName && email && phone && address && subject && message) {
    statusMsg.textContent = '✅ Message sent successfully!';
    statusMsg.style.color = 'green';
    this.reset();
  } else {
    statusMsg.textContent = '❌ Please fill in all required fields.';
    statusMsg.style.color = 'red';
  }
});
