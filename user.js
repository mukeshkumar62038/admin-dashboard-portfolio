//  Login protection
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}


let users = [];

// Load from localStorage OR set default
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [
    { id: 1, name: "mukesh", email: "mukesh@gmail.com", status: "Active" },
    { id: 2, name: "Rajnish", email: "rajnish@gmail.com", status: "Inactive" },
    { id: 3, name: "Gaurav", email: "gaurav@gmail.com", status: "Active" },
    { id: 4, name: "shivam", email: "shivam@gmail.com", status: "Inactive" }
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

const table = document.getElementById("userTable");


function loadUsers(data) {
  table.innerHTML = "";

  data.forEach(user => {
    table.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td class="${user.status === "Active" ? "status-active" : "status-inactive"}">
          ${user.status}
        </td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

// Page load
window.onload = function () {
  loadUsers(users);
};


function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const status = document.getElementById("status").value;

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    status
  };

  users.push(newUser);

  // SAVE
  localStorage.setItem("users", JSON.stringify(users));

  loadUsers(users);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}


function deleteUser(id) {
  users = users.filter(user => user.id !== id);

  // SAVE
  localStorage.setItem("users", JSON.stringify(users));

  loadUsers(users);
}


function searchUser() {
  const value = document.getElementById("searchUser").value.toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value) ||
    user.email.toLowerCase().includes(value)
  );

  loadUsers(filtered);
}