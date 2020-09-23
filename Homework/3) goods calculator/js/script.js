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

class GoodsCard{
        constructor(good, parentSelector) {
        this.type = good.type;
        this.src = good.img;
        this.alt = "alt";
        this.descr = good.desctiption;
        this.rate = 3;
        this.parent = document.querySelector(parentSelector);
        this.getCost(good);
    }

    getCost(good) {
        this.price = good.cost * this.rate;
    }

    renderInsides() {
        return `<img src=${this.src} alt=${this.alt}>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-price">Цена:<span>${this.price}</span>руб</div>`
    }

    render() {
        const element = document.createElement('div');
        const insides = this.renderInsides()

        element.className = "menu_item";

            element.innerHTML = `
                <div class="default">
                    ${insides}
                </div>`;
  
        this.parent.append(element);
    }
    //Dar: 1 method getCost()
}

//Dar 2 разбить GoodsCard на раздельные классы по типу товара
// extends - что такое
class EcoGood extends GoodsCard {
    render() {           
        const element = document.createElement('div');
        element.className = "menu_item";
        const insides = this.renderInsides()    
            element.innerHTML = `
                <div class="eco">
                ${insides}
                </div>`;
            this.parent.append(element); 
     }
}

class DiscountGood extends GoodsCard {
    getCost(good) {
        this.price = Math.round((((good.cost * 0.8)* this.rate) * 100)) / 100;
    }
    render() {           
        const element = document.createElement('div');
        element.className = "menu_item";

            element.innerHTML = `
            <div class="discount">
                <img src=${this.src} alt=${this.alt}>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-price">Цена:<span>${this.price}</span>руб</div>
                <div class="menu__item-price">Цена с учетом скидки :<span>${this.price}</span>руб</div>
                <p><input type="checkbox" name="good1">В корзину</p>
            </div>`;
            this.parent.append(element); 
     }
}

class HotGood extends GoodsCard {
    render() {           
        const element = document.createElement('div');
        element.className = "menu_item";

            element.innerHTML = `
            <div class="hot">
                <img src=${this.src} alt=${this.alt}>
                <img data-hot src="img/hot.png">
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-price">Цена :<span>${this.price}</span>руб</div>
                <p><input type="checkbox" name="good1">В корзину</p>
            </div>`;
            this.parent.append(element); 
     }
}

//Dar 3 заменить forEach на map, filter, find 
//Dar 4 отобразить список сохраненных товаров юзера и общую цену.
// <li></li>
function renderGoods (goods) {
    // goods.forEach(good => {
    //     switch(good.type) {
    //         case "default":
    //             new GoodsCard(
    //                 good,
    //                 ".menu_field .container"
    //             ).render();
    //             break;
    //         case "eco":
    //             new EcoGood(
    //                 good,
    //                 ".menu_field .container"
    //             ).render();
    //             break;
    //         case "discount":
    //             new DiscountGood(
    //                 good,
    //                 ".menu_field .container"
    //             ).render();
    //             break;
    //         case "hot":
    //             new HotGood(
    //                 good,
    //                 ".menu_field .container"
    //             ).render();
    //             break;
    //     }
    // }); 
    good.forEach(good => good.render())
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

const type = {
    default: 'default',
    eco: 'eco',
    discount: 'discount',
    hot: 'hot'
};

function init() {
    const goods = []
    const simpleForkSilver = {
        desctiption: 'Набор столовых вилок. Серебро',
        cost: 32,
        img: "img/forkSilver.jpg"
    };
    goods.push(new GoodsCard(simpleForkSilver));
    
    const ecoForkBabmuk = {
        desctiption: 'Набор экологических столовых вилок. Бамбук.',
        cost: 45,
        img: "img/forkBamboo.jpg"
    };
    goods.push(new EcoGood(ecoForkBabmuk));

    const discountForkSteel = {
        desctiption: 'Набор столовых вилок. Нержавейка. Скидка 20%.',
        cost: 15,
        type: type.discount,
        img: "img/forkSteel.jpg"
    };
    goods.push(discountForkSteel);
    const hotForkSilver = {
        desctiption: 'Набор столовых вилок. Лидер продаж.',
        cost: 27,
        type: type.hot,
        img: "img/hotForkSilver.jpg"
    };
    goods.push(hotForkSilver);
    const simpleForkGold = {
        desctiption: 'Набор столовых вилок. Золото',
        cost: 75,
        type: type.default,
        img: "img/forkGold.jpg"
    };
    goods.push(simpleForkGold);
    const ecoForkOak = {
        desctiption: 'Набор экологических столовых вилок. Дуб.',
        cost: 60,
        type: type.eco,
        img: './good.jpg'
    };
    goods.push(ecoForkOak);
    const discountForkSteel2 = {
        desctiption: 'Набор столовых вилок. Нержавейка. Скидка 20%.',
        cost: 19,
        type: type.discount,
        img: './good.jpg'
    };
    goods.push(discountForkSteel2);
    const hotForkGold = {
        desctiption: 'Набор столовых вилок. Лидер продаж.',
        cost: 27,
        type: type.hot,
        img: './good.jpg'
    };
    goods.push(hotForkGold);
    return goods
}
