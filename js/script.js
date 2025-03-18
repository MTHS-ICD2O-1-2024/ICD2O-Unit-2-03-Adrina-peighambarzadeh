/**
 * Function to handle the click event.
 */
function enterClicked() {
  // Get input values
  const streetNumber = document.getElementById("street-number").value;
  const streetName = document.getElementById("street-name").value;
  // Output the address with "Address is: " before it
  document.getElementById("user-info").innerHTML = ` Your Address is: ${streetNumber}, ${streetName}.`;
}
