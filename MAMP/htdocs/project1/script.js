`use strict`;

const submitButton = document.querySelector('#submit__button');
const form = document.querySelector('#name__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    postData(json);
});

async function postData(data) {
    let response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-type": "aplication/json;charset=utf-8"
        },
        body: data
    });
    let result = await response.json();
    console.log(result);
    console.log(`'respons status -' ${response.status}`);
}

async function getData() {
    let response = await fetch("http://localhost:3000");

    if (!response.ok) {
        throw new Error(`Could't fetch http://localhost:3000/, status ${response.status}`);
    }

    let result = await response.text();

    console.log(result);
}

const alertButton = document.querySelector("#alert");

alertButton.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
});


