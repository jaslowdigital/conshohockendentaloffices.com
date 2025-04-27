// Simple form validation
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  
  if (form) {
    form.addEventListener("submit", function(event) {
      const firstName = document.getElementById("first_name").value.trim();
      const lastName = document.getElementById("last_name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (firstName === "" || lastName === "" || phone === "" || message === "") {
        event.preventDefault();
        alert("Please fill out all fields before submitting.");
      }
    });
  }
});
