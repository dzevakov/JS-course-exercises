const type = {
    default: 'default',
    eco: 'eco',
    discount: 'discount',
    hot: 'hot'
};

function init(goods) {
    const simpleForkSilver = {
        desctiption: 'Набор столовых вилок. Серебро',
        cost: 32,
        type: type.default,
        img: "img/forkSilver.jpg"
    };
    goods.push(simpleForkSilver);
    const ecoForkBabmuk = {
        desctiption: 'Набор экологических столовых вилок. Бамбук.',
        cost: 45,
        type: type.eco,
        img: "img/forkBamboo.jpg"
    };
    goods.push(ecoForkBabmuk);
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
    
}