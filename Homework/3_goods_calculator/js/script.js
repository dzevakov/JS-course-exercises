'use strict';

import {init} from './init.js';

const state = {
    users: [],
    id: 0,
    activeUserId: 0,
    
    save: async function() {
        // localStorage.setItem("state", JSON.stringify(state));
        let response = await fetch("http://localhost:3000/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });

        if (!response.ok) {
            throw new Error(`Could't fetch http://localhost:3000, status ${response.status}`);
        }
    },

    load: async function() {
        // JSON.parse(localStorage.getItem("state"));
        let response = await fetch("http://localhost:3000/");

        if (!response.ok) {
            throw new Error(`Could't fetch http://localhost:3000/, status ${response.status}`);
        }

        return await response.json();
    },
};

const goodsInShop = init();

let check;

function renderGoods (goods) {
    goods.forEach(good => good.render());

    check = document.querySelectorAll('input[type="checkbox"]');
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
}

renderGoods(goodsInShop);

function calculatingTotalCost() {
    const selectedGoods = document.querySelectorAll('span[type="price"]');
    const goodsInBasket = [];
    selectedGoods.forEach(item => {
        goodsInBasket.push(item.innerHTML);
    });

    const totalPrice = goodsInBasket.reduce(function (sum, current) {
        return Number(sum) + Number(current);
    }, 0);

    const element = document.querySelector('.total_price');
    element.innerHTML = `
        Общая стоимость товаров:<span>${totalPrice}</span>руб`;
}

const saveGoods = document.querySelector('#save');
saveGoods.addEventListener('click', () => {
    const activeUserId = state.activeUserId;
    state.users[activeUserId].goods = [];
    goodsInShop.forEach(function (good, i) {
        if (check[i].checked) {
            state.users[activeUserId].goods.push(good);
        }
    });
    state.save();
});

const renderAllGoods = document.querySelector('#allGoods');
renderAllGoods.addEventListener('click', (e) => {

    const container = document.querySelector('.container');
    container.innerHTML = "";
    const totalPrice = document.querySelector('.total_price');
        totalPrice.innerHTML = "";
    renderGoods(goodsInShop);
});

const renderUserGoods = document.querySelector('#userGoods');
renderUserGoods.addEventListener('click', (e) => {

    const container = document.querySelector('.container');
    container.innerHTML = "";
    const activeUserId = state.activeUserId;
    renderGoods(state.users[activeUserId].goods);

    calculatingTotalCost();
            
});

export {state};