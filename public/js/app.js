const listButton = document.getElementById("list");
listButton.addEventListener("click", function() {
  fetch("/api/phone_book/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function(response) {
      console.log(response);
      return response.text();
    })
    .then(function(text) {
      document.getElementById("response").textContent = text;
    });
});
