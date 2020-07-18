//Задание: дописать методы areEqual и sort

//Примеры вводных данных и результата
const in1 = [3, 5, 1, 8]
const out1 = [1, 3, 5, 8]

const in2 = [3, 5, 1, 8, 9, 11, 2, 2]
const out2 = [1, 2, 2, 3, 5, 8, 9, 11]

const in3 = [-1, 0, -5, 3, 5, 1, 8, 99]
const out3 = [-5, -1, 0, 1, 3, 5, 8, 99]

apple.getColor()

//сортирует массив пузырьковой сортировкой
const sort = (input) => {
    if (!input) {
        return
    }

}

//возвращает равны ли массивы
const areEqual = (array1, array2, aaa) => {
    return false
}

//Код ниже должен работать после написания функций выше

const case1 = areEqual(sort(in1), out1)
const case2 = areEqual(sort(in2), out2)
const case3 = areEqual(sort(in3), out3)
console.log(case1)
console.log(case2)
console.log(case3)