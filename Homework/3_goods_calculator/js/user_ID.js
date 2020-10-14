`use strict`;

import {state} from './script.js';

function user(id, name, password, email)  {
    this.id = id; 
    this.name = name;
    this.email = email;
    this.password = password;

    const goods = [];
    this.goods = goods;
}

function addUser(id, userName, userPsw, userEmail) {
    const newUser = new user(id, userName, userPsw, userEmail);
    state.users.push(newUser);
}

function formReset (form) {
    document.querySelector(form).reset();
}

function welcomeUser(userName) {
    const loginUser = document.querySelector('#enter_user_name');
    loginUser.innerText = `Добро пожаловать ${userName}`;
}

// Create user
const btn = document.querySelector('#registration');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const userNameValue = document.querySelector('#name'),
          userPswValue = document.querySelector('#password'),
          userEmailValue = document.querySelector('#email');

    const userName = userNameValue.value,
          userPsw = userPswValue.value,
          userEmail = userEmailValue.value;

    if (userNameValue.value === '' || userPswValue.value === '' || userEmailValue === '') {
        alert('Заполните все поля.');
        return;
    }

    if (userEmail in state.users === false) {
        addUser(state.id, userName, userPsw, userEmail);
        state.activeUserId = state.id;
        state.id++;
             
        state.save();
    } else {
        alert('Пользователь с таким именем уже существует');
        return;
    }

    welcomeUser(userName);

    formReset('#login_form');
});

// LogIn
const btnLogIn = document.querySelector('#login');
btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const userNameValue = document.querySelector('#name'),
          userPswValue = document.querySelector('#password'),
          userEmailValue = document.querySelector('#email'),
          userName = userNameValue.value,
          userPsw = userPswValue.value;
          
    state.load();
    state.users.forEach(function(user, i) {
        if (user.name === userName) {
            state.activeUserId = i;
        }
    });

    if (userNameValue.value === '' || userPswValue.value === '' || userEmailValue === '') {
        alert('Заполните все поля.');
        return;
    } else if (userPsw !== state.users[state.activeUserId].password) {
        alert('Неверный пароль.');
        return;
    }

    const loginUser = document.querySelector('#enter_user_name');
    loginUser.innerText = `Добро пожаловать ${userName}`;

    formReset('#login_form');
});



