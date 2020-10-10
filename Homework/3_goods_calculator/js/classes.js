class DefaultGood{
    constructor(good) {
        this.src = good.img;
        this.alt = "alt";
        this.descr = good.desctiption;
        this.rate = 3;
        this.parent = document.querySelector(".menu_field .container");
        this.getCost(good);
    }

    getCost(good) {
        this.price = good.cost * this.rate;
    }

    renderInsides() {
        return `<img src=${this.src} alt=${this.alt}>
        <div class="menu__item-descr">${this.descr}</div>`;
    }

    render() {
        const element = document.createElement('div');
        const insides = this.renderInsides();

        element.className = "menu_item";

            element.innerHTML = `
                <div class="default">
                    ${insides}
                    <div class="menu__item-price">Цена:<span type="price">${this.price}</span>руб</div>
                    <p><input type="checkbox">В корзину</p>
                </div>`;

        this.parent.append(element);
    }
//Dar: 1 method getCost()
}

class DiscountGood extends DefaultGood {
    getCost(good) {
        this.price = Math.round((((good.cost * 0.8)* this.rate) * 100)) / 100;
    }
    render() {           
        const element = document.createElement('div');
        element.className = "menu_item";
        const insides = this.renderInsides();
            element.innerHTML = `
            <div class="discount">
                ${insides}
                <div class="menu__item-price">Цена с учетом скидки :<span type="price">${this.price}</span>руб</div>
                <p><input type="checkbox">В корзину</p>
            </div>`;
            this.parent.append(element); 
     }
}

//Dar 2 разбить GoodsCard на раздельные классы по типу товара
// extends - что такое
class EcoGood extends DefaultGood {
    render() {           
        const element = document.createElement('div');
        element.className = "menu_item";
        const insides = this.renderInsides();  
            element.innerHTML = `
                <div class="eco">
                ${insides}
                <div class="menu__item-price">Цена:<span type="price">${this.price}</span>руб</div>
                <p><input type="checkbox">В корзину</p>
                </div>`;
            this.parent.append(element); 
     }
}

class HotGood extends DefaultGood {
    render() {           
        const element = document.createElement('div');
        element.className = "menu_item";

            element.innerHTML = `
            <div class="hot">
                <img src=${this.src} alt=${this.alt}>
                <img data-hot src="img/hot.png">
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-price">Цена :<span type="price">${this.price}</span>руб</div>
                <p><input type="checkbox">В корзину</p>
            </div>`;
            this.parent.append(element); 
     }
}