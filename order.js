//  Login protection
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// Logout
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// Dummy orders data
const orders = [
  { id: 101, customer: "mukesh", amount: 2500, status: "Pending" },
  { id: 102, customer: "pallavi", amount: 4200, status: "Completed" },
  { id: 103, customer: "Gaurav", amount: 1800, status: "Cancelled" },
  { id: 104, customer: "rajnishv", amount: 3200, status: "Completed" }
];

const table = document.getElementById("orderTable");

// Load orders
function loadOrders(data) {
  table.innerHTML = "";
  data.forEach(order => {
    table.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>₹${order.amount}</td>
        <td class="status-${order.status.toLowerCase()}">
          ${order.status}
        </td>
      </tr>
    `;
  });
}

loadOrders(orders);

// Filter orders
function filterOrders() {
  const value = document.getElementById("statusFilter").value;
  if (value === "all") {
    loadOrders(orders);
  } else {
    const filtered = orders.filter(o => o.status === value);
    loadOrders(filtered);
  }
}