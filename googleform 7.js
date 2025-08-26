// Membership fees based on plan
const planFees = {
  "Monthly": 50,
  "Quarterly": 120,
  "Yearly": 400
};

// Get form elements
const form = document.getElementById("memberForm");
const memberList = document.getElementById("memberList");
const planSelect = document.getElementById("plan");
const feeInput = document.getElementById("fee");

// Update fee automatically when plan changes
planSelect.addEventListener("change", function() {
  feeInput.value = "$" + planFees[planSelect.value];
});

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const plan = planSelect.value;
  const fee = planFees[plan];

  // Create a list item
  const li = document.createElement("li");
  li.textContent = `${name} (Age: ${age}) - Plan: ${plan}, Fee: $${fee}`;

  memberList.appendChild(li);
  form.reset();
  feeInput.value = ""; // clear fee after register
});
