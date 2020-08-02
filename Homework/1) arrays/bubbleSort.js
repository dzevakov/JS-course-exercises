//Задание: дописать методы areEqual и sort

//Примеры вводных данных и результата
const in1 = [3, 5, 1, 8];
const out1 = [1, 3, 5, 8]
;
const in2 = [3, 5, 1, 8, 9, 11, 2, 2];
const out2 = [1, 2, 2, 3, 5, 8, 9, 11];

const in3 = [-1, 0, -5, 3, 5, 1, 8, 99];
const out3 = [-5, -1, 0, 1, 3, 5, 8, 99];

// apple.getColor()

//сортирует массив пузырьковой сортировкой
const sort = (input) => {
    let tempNumber;
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input.length - 1 - i; j++) {
            if (input [j] - input [j + 1] > 0) {
                tempNumber = input [j + 1];
                input [j + 1] = input [j];
                input [j] = tempNumber;
            }
        }
    }
    return input;
};



//возвращает равны ли массивы
const areEqual = (array1, array2) => {
    let difference = 0;
    for (let k = 0; k < array1.length; k++) {
        difference = difference + (array1 [k] - array2 [k]);
    }
    if (difference == 0) {
        return true;
    }  else {
        return false;
    }
};

//Код ниже должен работать после написания функций выше

const case1 = areEqual(sort(in1), out1);
const case2 = areEqual(sort(in2), out2);
const case3 = areEqual(sort(in3), out3);
console.log(case1);
console.log(case2);
console.log(case3);