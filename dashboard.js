// Login protection
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}