function resetPassword() {
  var email = document.getElementById("email").value;

  if(email === "") {
    alert("Please enter your Email or Phone");
  } else {
    alert("Reset link sent successfully!");
    window.location.href = "login.html";
  }
}
