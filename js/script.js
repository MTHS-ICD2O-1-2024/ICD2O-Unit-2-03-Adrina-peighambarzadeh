// Copyright (c) 2025 Adrina. peighambarzadeh All rights reserved
//
// Created by: Adrina. peighambarzadeh
// Created on: mar 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = parseInt(document.getElementById("street-name").value)
  // output
  document.getElementById("user-info").innerHTML =
    "Your addres is: " + streetNumber + ", " + streetName + "."
}
