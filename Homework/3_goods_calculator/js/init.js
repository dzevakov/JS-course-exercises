import {DefaultGood, EcoGood, DiscountGood, HotGood} from './classes.js';

export function init() {
    const goods = [];
    const simpleForkSilver = {
        desctiption: 'Набор столовых вилок. Серебро',
        cost: 32,
        img: "img/forkSilver.jpg"
    };
    goods.push(new DefaultGood(simpleForkSilver));
    
    const ecoForkBabmuk = {
        desctiption: 'Набор экологических столовых вилок. Бамбук.',
        cost: 45,
        img: "img/forkBamboo.jpg"
    };
    goods.push(new EcoGood(ecoForkBabmuk));

    const discountForkSteel = {
        desctiption: 'Набор столовых вилок. Нержавейка. Скидка 20%.',
        cost: 15,
        img: "img/forkSteel.jpg"
    };
    goods.push(new DiscountGood(discountForkSteel));
    const hotForkSilver = {
        desctiption: 'Набор столовых вилок. Лидер продаж.',
        cost: 27,
        img: "img/hotForkSilver.jpg"
    };
    goods.push(new HotGood(hotForkSilver));
    const simpleForkGold = {
        desctiption: 'Набор столовых вилок. Золото',
        cost: 75,
        img: "img/forkGold.jpg"
    };
    goods.push(new DefaultGood(simpleForkGold));
    const ecoForkOak = {
        desctiption: 'Набор экологических столовых вилок. Дуб.',
        cost: 60,
        img: 'img/forkSilver.jpg'
    };
    goods.push(new EcoGood(ecoForkOak));
    const discountForkSteel2 = {
        desctiption: 'Набор столовых вилок. Нержавейка. Скидка 20%.',
        cost: 19,
        img: 'img/forkSilver.jpg'
    };
    goods.push(new DiscountGood(discountForkSteel2));
    const hotForkGold = {
        desctiption: 'Набор столовых вилок. Лидер продаж.',
        cost: 27,
        img: 'img/forkSilver.jpg'
    };
    goods.push(new HotGood(hotForkGold));
    return goods;
}