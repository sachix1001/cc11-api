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
        
        return response.json();
    })
    .then(function(text) {
        text = text.map(personObj=>
             `${personObj.first} ${personObj.last} : ${personObj.phone}`)
             .join('<br/>')
      document.getElementById("getResponse").innerHTML = text;
    });
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    const addDetail = document.getElementById('addDetail').value;
    fetch("/api/phone_book/", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: (addDetail)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(text) {
        text = `${text.first} ${text.last} : ${text.phone}`
        document.getElementById("addResponse").innerHTML = text;
    });
})

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () =>{
    const deleteDetail = document.getElementById('deleteDetail').value;
    fetch(`/api/phone_book/${deleteDetail}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(text) {
        text = text.map(personObj=>
            `${personObj.first} ${personObj.last} : ${personObj.phone}`)
            .join('<br/>')
        document.getElementById("deleteResponse").innerHTML = text;
    });
})

const updateButton = document.getElementById("update");
updateButton.addEventListener("click", () =>{
    const updateDetail = document.getElementById('updateDetail').value;
    console.log(updateDetail)
    fetch(`/api/phone_book/`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: updateDetail
    })
    .then(function(response){
        return response.text();
    })
    .then(function(text) {
        document.getElementById("updateResponse").textContent = text;
    });
})