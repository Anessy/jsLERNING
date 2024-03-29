// Синтаксис: Function Declaration (Объявление Функции): 
// когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции.

sayHi("Вася"); // Привет, Вася

function sayHi(name) {
  alert( `Привет, ${name}` );
}

// Function Declaration видимо только внутри блока кода, в котором располагается.

let age = prompt("Сколько Вам лет?", 18);
// в зависимости от условия объявляем функцию
if (age < 18) {
  function welcome() {
    alert("Привет!");
  }
} else {
  function welcome() {
    alert("Здравствуйте!");
  }
}
// ...не работает
welcome(); // Error: welcome is not defined

///////////////////////////////////////////////////////////////////////

// Внешняя переменная используется, только если внутри функции нет такой локальной. Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. 

let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName ); // Петя, значение внешней переменной было изменено функцией

// Обратите внимание: функция изменяет значение from, но это изменение не видно снаружи. Функция всегда получает только копию значения:

function showMessage(from, text) {

  from = '*' + from + '*'; // немного украсим "from"

  alert( from + ': ' + text );
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
alert( from ); // Аня

// Если мы хотим задать параметру text значение по умолчанию, мы должны указать его после =: 
// Теперь, если параметр text не указан, его значением будет "текст не добавлен". Если значения по умолчанию нет и значение переменной не присваевается, по умолчанию оно undefined

  function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}
showMessage("Аня"); // Аня: текст не добавлен (было бы Аня : undefined)

//////////////////////////////////////////////////////////

//возвоат значения return. Результат функции с пустым return или без него – undefined 

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}

//////////////////////////////////////////////

// синтаксис создания функций Function Expression (Функциональное Выражение)
// Function Expression создаётся, когда выполнение доходит до движка JS, и затем уже может использоваться

let sayHi = function() {
  alert( "Привет" );
};

alert( sayHi ); // выведет код функции, а не запустит ее

// копирование 

function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет) 

////////////////////////////////////////////

// функции-колбэки 

// Наша функция должна задать вопрос question и, в зависимости от того, как ответит пользователь, вызвать yes() или no(): 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel); 

// Мы можем переписать этот пример значительно короче, используя Function Expression: 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

///////////////////////////////////////////////

let age = prompt("Сколько Вам лет?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Привет!");
  };
} else {
  welcome = function() {
    alert("Здравствуйте!");
  };
}
welcome(); // теперь всё в порядке

//Можно упростить этот код ещё сильнее, используя условный оператор ?:

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); 

///////////////////////////////////////////////

// arrow functions => функции-стрелки 

let func = function(arg1, arg2, ...argN) {
  return expression;
}; 

// записанное с помощью функции-стрелки

let func = (arg1, arg2, ...argN) => expression

// еще один пример 

let sum = (a, b) => a + b;

/* Функция-стрелка более краткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3 

// без аргументов 

let sayHi = () => alert("Hello!");

sayHi();

/////////////////////////////////////////////

// Ошибка, так как объявление Function Declaration видимо только внутри блока кода, в котором располагается.

let age = 16; // присвоим для примера 16

if (age < 18) {
  welcome();               // \   (выполнится)
                           //  |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
  welcome();               // /   (выполнится)

} else {

  function welcome() {
    alert("Здравствуйте!");
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

welcome(); // Ошибка: welcome is not defined

/* Что можно сделать, чтобы welcome была видима снаружи if?

Верным подходом будет воспользоваться функцией, объявленной при помощи Function Expression, и присвоить значение welcome переменной, объявленной снаружи if, что обеспечит нам нужную видимость.

Такой код работает, как ожидалось: */

let age = prompt("Сколько Вам лет?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Привет!");
  };
} else {
  welcome = function() {
    alert("Здравствуйте!");
  };
}
welcome(); // теперь всё в порядке

// Можно упростить этот код ещё сильнее, используя условный оператор ?:

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); // теперь всё в порядке

// и еще больше простить используя arrow

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет') :
  () => alert("Здравствуйте!");

welcome(); // теперь всё в порядке







