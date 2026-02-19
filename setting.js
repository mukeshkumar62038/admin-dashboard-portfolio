// Load saved profile
window.onload = function () {
  document.getElementById("name").value =
    localStorage.getItem("adminName") || "";

  document.getElementById("email").value =
    localStorage.getItem("adminEmail") || "";

  // Theme load
  if (localStorage.getItem("theme") === "dark") {
    darkMode();
  }
};

function saveProfile() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  localStorage.setItem("adminName", name);
  localStorage.setItem("adminEmail", email);

  alert("Profile Saved ");
}

function changePassword() {
  let pass = document.getElementById("newPass").value;

  if (pass === "") {
    alert("Password galat hai ");
    return;
  }

  localStorage.setItem("adminPass", pass);
  alert("Password Updated ");
}

// function darkMode() {
//   document.body.classList.add("bg-dark", "text-white");
//   localStorage.setItem("theme", "dark");
// }

// function lightMode() {
//   document.body.classList.remove("bg-dark", "text-white");
//   localStorage.setItem("theme", "light");
// }

function logout() {
  localStorage.removeItem("isLogin");
  window.location.href = "login.html";
}