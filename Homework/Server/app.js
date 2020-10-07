"use srict";

let user = {
    name: 'John',
    surname: 'Smith'
  };
  
  let response = fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(response => console.log(response));