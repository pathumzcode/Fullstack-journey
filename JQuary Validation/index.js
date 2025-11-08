// Wait until the page and DOM are fully loaded
$(document).ready(function () {

  // Apply jQuery validation to the form named 'registration'
  $("form[name='registration']").validate({
    // Define validation rules
    rules: {
      name: {
        required: true,        // Must not be empty
        minlength: 3           // At least 3 characters
      },
      email: {
        required: true,        // Must not be empty
        email: true            // Must be a valid email format
      },
      password: {
        required: true,        // Must not be empty
        minlength: 6           // Must be at least 6 characters
      },
      confirmpassword: {
        required: true,        // Must not be empty
        minlength: 6,          // Same length rule
        equalTo: "#password"   // Must match password field
      }
    },

    // Custom error messages for each field
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name must be at least 3 characters long"
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      password: {
        required: "Please provide a password",
        minlength: "Password must be at least 6 characters long"
      },
      confirmpassword: {
        required: "Please confirm your password",
        minlength: "Password must be at least 6 characters long",
        equalTo: "Passwords do not match"
      }
    },

    // When the form is valid, handle submission here
    submitHandler: function (form) {
      alert("Registration Successful!"); // You can replace this with form.submit()
      form.submit();
    }
  });
});
