//Пройти по всем свойствам обьекта и вывести их в формате: свойство - его значение
//Если значение свойства обьект или массив, то вывести их содержимое с отступом _
const testObject1 = {
    name: 'aaa',
    id: 1
};

const testObject2 = {
    name: 'bbb',
    id: 2,
    friend: testObject1
};

const testObject3 = {
    name: 'ccc',
    id: 3,
    friend: testObject1,
    children: [ 'sss', 'bb', 22]
};

const testObject4 = {
    name: 'ddd',
    id: 4,
    friend: testObject1,
    children: [ testObject1, '33', 555]
};

const testObject5 = {
    allOf: [
      {
        allOf: [
          {
            anyOf: [
              {
                allOf: [
                  {
                    anyOf: [
                      {
                        is: {
                          name: 'drugProgrammeStatusTree',
                          rank: 12,
                          value: 'Approved ::: Registered',
                          entity: 'drug',
                          displayValue: 'Registered'
                        }
                      }
                    ]
                  },
                  {
                    anyOf: [
                      {
                        is: {
                          name: 'drugProgrammeOriginator',
                          value: 'Originator',
                          entity: 'drug'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                anyOf: [
                  {
                    is: {
                      name: 'drugProgrammeProjectStatus',
                      value: 'Approved ::: Launched',
                      entity: 'drug',
                      displayValue: 'Launched'
                    }
                  }
                ]
              }
            ],
            couplet: {
              name: 'drugProgrammes'
            }
          }
        ]
      }
    ]
};


//Рекурсивная функция которая прходит по всем ключам обьекта и выводит их
//использовать Object.keys(input), foreach, рекурсию
//Нагуглить как проверить является ли переменная обектом, массивом, т.к. они будут по разному обрабатываться

let space = '';

const writeObject = (input) => {
  Object.keys(input).forEach(key => {
       
    if (input[key] instanceof Object === true) {
      space = space + '_';
      writeObject(input[key]);
      space = space.slice(0, -1);
      return;
    }

    if (input[key] instanceof Object === false &&
      input instanceof Array === false) {
      console.log(`${space} ${key} - ${input[key]}`);
    }
    if(input instanceof Array === true) {
      console.log(`${space} ${input[key]}`);
    }
  }
  );
};

writeObject(testObject4);