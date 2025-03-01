$(document).ready(function () {
    function validateField(id, errorId, message, pattern = null) {
      let value = $("#" + id).val().trim();
      
      if (value === "") {
        $("#" + errorId).text(message).show();
        return false;
      } else if (pattern && !pattern.test(value)) {
        $("#" + errorId).text("Invalid input format.").show();
        return false;
      } else {
        $("#" + errorId).text("").hide();
        return true;
      }
    }
  
    function validateEmail() {
      let email = $("#email").val().trim();
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (email === "") {
        $("#emailError").text("Email is required.").show();
        return false;
      } else if (!emailPattern.test(email)) {
        $("#emailError").text("Enter a valid email address.").show();
        return false;
      } else {
        $("#emailError").text("").hide();
        return true;
      }
    }
  
    function validateService() {
      if ($("#serviceSelect").val() === null || $("#serviceSelect").val() === "") {
        $("#serviceError").text("Please select a service.").show();
        return false;
      } else {
        $("#serviceError").text("").hide();
        return true;
      }
    }
  
    $("#contactForm").submit(function (event) {
      let isValid = true;
  
      isValid = validateField("name", "nameError", "Name is required.", /^[A-Za-z\s]+$/) && isValid;
      isValid = validateEmail() && isValid;
      isValid = validateField("phone", "phoneError", "Phone number is required.", /^[0-9]{10}$/) && isValid;
      isValid = validateService() && isValid;
      isValid = validateField("address", "addressError", "Address is required.") && isValid;
      isValid = validateField("zipcode", "zipcodeError", "Zip code is required.", /^[0-9]+$/) && isValid;
      isValid = validateField("subject", "subjectError", "Subject is required.") && isValid;
      isValid = validateField("message", "messageError", "Message is required.") && isValid;
  
      if (!isValid) {
        event.preventDefault(); // Stop form submission if validation fails
      }
    });
  
    // Validate on blur and keyup
    $("#name").blur(() => validateField("name", "nameError", "Name is required.", /^[A-Za-z\s]+$/));
    $("#email").blur(validateEmail);
    $("#phone").blur(() => validateField("phone", "phoneError", "Phone number is required.", /^[0-9]{10}$/));
    $("#serviceSelect").change(validateService);
    $("#address").blur(() => validateField("address", "addressError", "Address is required."));
    $("#zipcode").blur(() => validateField("zipcode", "zipcodeError", "Zip code is required.", /^[0-9]+$/));
    $("#subject").blur(() => validateField("subject", "subjectError", "Subject is required."));
    $("#message").blur(() => validateField("message", "messageError", "Message is required."));
  });
  