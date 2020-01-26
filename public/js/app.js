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
    //   console.log(response);
      return response.text();
    })
    .then(function(text) {
      document.getElementById("getResponse").textContent = text;
    });
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    const addDetail = document.getElementById('addDetail').value;
    console.log(addDetail)
    document.getElementById("addResponse").textContent = addDetail
    fetch("/api/phone_book/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: (addDetail)
      })
      .then(function(response){
          return response.text();
      })
    //   .then(function(text){
    //       document.getElementById("addResponse").textContent = text
    //   })
})
