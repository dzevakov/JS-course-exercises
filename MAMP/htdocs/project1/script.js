`use strict`;

const submitButton = document.querySelector('#submit__button');
const form = document.querySelector('#name__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    console.log(json);
});


