`use strict`;


function user(id, name, password, email)  {
    this.id = id; //унакльно, находить маакс id из сохзраненных и делать +1
    this.name = name;
    this.email = email;
    this.password = password;

    const goods = [];
    this.goods = goods;
}

// let id = 0;

// Добавляем пользователя, если его еще не существует
function addUser(id, userName, userPsw, userEmail) {
    const newUser = new user(id, userName, userPsw, userEmail);
    state.users.push(newUser);
    // state.save();
 
    console.log(state.users);

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
             
        // console.log(state.id);
        state.save();
        console.log(state);
    } else {
        alert('Пользователь с таким именем уже существует');
        return;
    }

    const loginUser = document.querySelector('#enter_user_name');
    loginUser.innerText = `Добро пожаловать ${userName}`;

    userNameValue.value = '';
    userPswValue.value = '';
    userEmailValue.value = '';

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
          
    // if (userName in state.users === false) {
    //     state.load();
    //     if (userName in state === false) {
    //         alert('Пользователь не найден.');
    //     }
    // }
    state.load();
    state.users.forEach(function(user, i) {
        if (user.name === userName) {
            id = i;
            state.activeUserId = id;
        }
    });

    if (userNameValue.value === '' || userPswValue.value === '' || userEmailValue === '') {
        alert('Заполните все поля.');
        return;
    } else if (userPsw !== state.users[id].password) {
        alert('Неверный пароль.');
        return;
    }

    const loginUser = document.querySelector('#enter_user_name');
    loginUser.innerText = `Добро пожаловать ${userName}`;

    userNameValue.value = '';
    userPswValue.value = '';
    userEmailValue.value = '';
    // console.log(state);

});
