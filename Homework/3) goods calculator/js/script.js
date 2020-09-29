`use strict`;

const state = {
    users: [],
    id: 0,
    activeUserId: 0,
    
    save: function() {
        localStorage.setItem("state", JSON.stringify(state));
    },

    load: function() {
        JSON.parse(localStorage.getItem("state"));
    },
};

const goodsInShop = init();
console.log(goodsInShop);

//Dar 3 заменить forEach на map, filter, find 
//Dar 4 отобразить список сохраненных товаров юзера и общую цену.
// <li></li>
function renderGoods (goods) {
    goods.forEach(good => good.render());
}

renderGoods(goodsInShop);

const check = document.querySelectorAll('input[type="checkbox"]');
check.forEach(item => {
    item.addEventListener('change', (e) => {
        const parent = e.target.parentElement.parentElement.parentElement;
        if (e.target.checked) {
            parent.style.boxShadow = "0 5px 25px 10px rgba(21, 18, 226, 0.5)";
            parent.style.width = "80%";
        } else {
            parent.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.42)";
            parent.style.width = "70%";
        }
    });
});

const saveGoods = document.querySelector('#save');
saveGoods.addEventListener('click', (e) => {
    const activeUserId = state.activeUserId;
    state.users[activeUserId].goods = [];
    goodsInShop.forEach(function (good, i) {
        if (check[i].checked) {
            state.users[activeUserId].goods.push(good);
        }
    });
    state.save();
});

const allGoods = document.querySelector('#allGoods');
allGoods.addEventListener('click', (e) => {
    const container = document.querySelector('.container');
    container.innerHTML = "";
    renderGoods(goodsInShop);
});

const userGoods = document.querySelector('#userGoods');
userGoods.addEventListener('click', (e) => {
    const container = document.querySelector('.container');
    container.innerHTML = "";
    const activeUserId = state.activeUserId;
    renderGoods(state.users[activeUserId].goods);

    const spans = document.querySelectorAll('span');
    const spansArray = [];
    spans.forEach(span => {
        spansArray.push(span.innerHTML);
    });
    console.log(spansArray);
    const totalPrice = spansArray.reduce(function (sum, current) {
        return Number(sum) + Number(current);
    }, 0);

    const element = document.createElement('div');
        element.className = "total_price";

            element.innerHTML = `
            <p>Общая стоимость товаров:<span>${totalPrice}</span>руб</p>`;
            
            const parent = document.querySelector("section");
            parent.append(element); 
});


