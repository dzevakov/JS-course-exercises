`use strict`;

const state = {
    users: [],

    save: function() {
        localStorage.setItem("state", JSON.stringify(state));
    },

    load: function() {
        JSON.parse(localStorage.getItem("state"));
    },

};

// user.goods.push(good)
// user.goods[0]
const goodsInShop = [];
// init(goodsInShop); //доделать init.js
init(goodsInShop);
console.log(goodsInShop);
