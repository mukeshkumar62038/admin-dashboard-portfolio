function index() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (email === "admin@gmail.com" && password === "1234") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Invalid Email or Password";
  }

}
