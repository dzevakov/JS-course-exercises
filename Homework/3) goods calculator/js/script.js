`use strict`;

const users = {},
      goodsAll = {
        a1: false,
        a2: false,
        a3: false,
        b1: false,
        b2: false,
        b3: false,
        c1: false,
        c2: false,
        c3: false,
        d1: false,
        d2: false,
        d3: false
      };
      const state = {};

// Сохраняем данные пользователя
    state.save = function() {
        localStorage.setItem("state", JSON.stringify(state));
    };

// Загружаем данные пользователя
    state.load = function() {
        JSON.parse(localStorage.getItem("state"));
    };

// Добавляем пользователя, если его еще не существует
function addUser(userName, userPsw) {
    const newUser = {
        name: userName,
        psw: userPsw
    };
    users[userName] = newUser;
    // console.log(users);
}

// Create user
const btn = document.querySelector('#registration');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const userNameValue = document.querySelector('#name'),
          userPswValue = document.querySelector('#password');

    const userName = userNameValue.value,
          userPsw = userPswValue.value;

    if (userNameValue.value === '' || userPswValue.value === '') {
        alert('Введите имя пользователя и пароль.');
        return;
    }

    if (userName in users === false) {
        addUser(userName, userPsw);
        state[userName] = goodsAll;
        // console.log(state);
        state.save();
    } else {
        alert('Пользователь с таким именем уже существует');
        return;
    }

    const loginUser = document.querySelector('#enter_user_name');
    loginUser.innerText = `Добро пожаловать ${userName}`;

    userNameValue.value = '';
    userPswValue.value = '';

});

// LogIn
const btnLogIn = document.querySelector('#login');
btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const userNameValue = document.querySelector('#name'),
          userPswValue = document.querySelector('#password');

    const userName = userNameValue.value,
          userPsw = userPswValue.value;

    if (userNameValue.value === '' || userPswValue.value === '') {
        alert('Введите имя пользователя и пароль.');
        return;
    } else if (userPsw !== users[userName].psw) {
        alert('Неверный пароль.');
        return;
    }

    const loginUser = document.querySelector('#enter_user_name');
    loginUser.innerText = `Добро пожаловать ${userName}`;

    userNameValue.value = '';
    userPswValue.value = '';

    if (userName in state === false) {
        state.load();
        if (userName in state === false) {
            alert('Пользователь не найден.');
        }
    }
    // state.load(userName);
    // console.log(state);

});




