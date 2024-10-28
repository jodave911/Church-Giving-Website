document.addEventListener("DOMContentLoaded", function() {
  const headerContainer = document.getElementById("header-container");
  fetch("header.html")
      .then(response => response.text())
      .then(data => headerContainer.innerHTML = data)
      .catch(error => console.error("Error loading header:", error));
});
