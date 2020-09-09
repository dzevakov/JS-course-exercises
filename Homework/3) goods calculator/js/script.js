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

const goodsInShop = [];
init(goodsInShop);
console.log(goodsInShop);

class GoodsCard{
    constructor(good, parentSelector) {
        this.type = good.type;
        this.src = good.img;
        this.alt = "alt";
        this.descr = good.desctiption;
        this.price = good.cost;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.className = "menu_item";

        switch(this.type) {
            case "default":
            element.innerHTML = `
                <div class=${this.type}>
                    <img src=${this.src} alt=${this.alt}>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-price">Цена:<span>${this.price}</span>руб</div>
                    <p><input type="checkbox" name="good1">В корзину</p>
                </div>`;
               break;
            case "eco":
                element.innerHTML = `
                <div class=${this.type}>
                    <img src=${this.src} alt=${this.alt}>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-price">Цена:<span>${this.price}</span>руб</div>
                    <p><input type="checkbox" name="good1">В корзину</p>
                </div>`;
               break;
            case "discount":
                element.innerHTML = `
                <div class=${this.type}>
                    <img src=${this.src} alt=${this.alt}>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-price">Цена:<span>${this.price}</span>руб</div>
                    <div class="menu__item-price">Цена с учетом скидки :<span>${Math.round(((this.price * 0.8) * 100)) / 100}</span>руб</div>
                    <p><input type="checkbox" name="good1">В корзину</p>
                </div>`;
                break;
            case "hot":
                element.innerHTML = `
                <div class=${this.type}>
                    <img src=${this.src} alt=${this.alt}>
                    <img data-hot src="img/hot.png">
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-price">Цена :<span>${this.price}</span>руб</div>
                    <p><input type="checkbox" name="good1">В корзину</p>
                </div>`;
               break;
        }        
        this.parent.append(element);
    }
}

goodsInShop.forEach(good => {
    new GoodsCard(
        good,
        ".menu_field .container"
    ).render();
}); 

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