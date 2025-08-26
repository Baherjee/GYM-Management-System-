// Get form and list
const form = document.getElementById("memberForm");
const memberList = document.getElementById("memberList");

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page reload

  // Get input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const plan = document.getElementById("plan").value;

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = `${name} (Age: ${age}) - Plan: ${plan}`;

  // Add to member list
  memberList.appendChild(li);

  // Clear form
  form.reset();
});
