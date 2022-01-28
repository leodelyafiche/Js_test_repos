// sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) == 0.3); // false

/*
function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число");
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);
*/

function randomInteger(min, max) {
    return min + Math.round(Math.random()) * (min-max);
  }

alert(randomInteger(1,20));
alert(randomInteger(1,20));
alert(randomInteger(1,20));
alert(randomInteger(1,20));
alert(randomInteger(1,20));
alert(randomInteger(1,20));

/*
alert( isFinite(-Infinity) );

alert( isFinite(Math.random()) );

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) );

alert(1e10);
*/

/*
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("Добавим значение");
    }
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений

*/

/*

function Calculator() {
    
    this.read = function(){
        this.a = +prompt('Введите число а');
        this.b = +prompt('Введите число b');
        return;
    };

    this.sum = function(a,b){
        return this.a + this.b;
    };

    this.mul = function(a,b){
        return this.a * this.b;
    };
    
  };

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/

/*

let calculator = {
    
    read: function(){
        this.a = +prompt('Введите число а');
        this.b = +prompt('Введите число b');
        return;
    },

    sum: function(a,b){
        return this.a + this.b;
    },

    mul: function(a,b){
        return this.a - this.b;
    },
    
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  
  */


  

// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);

// for (key in menu){
//     alert(key + " " + menu[key])
// };
  
// function multiplyNumeric(menu){
//     for (key in menu){
//         if (typeof(menu[key]) == "number")
//         menu[key] *= 2
//     };
// return;
// };

// let user = new Object();

// user.name = "John";

// user.surname = "Smith";

// user.name = "Pete";

// delete user.name;
  

//   Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.