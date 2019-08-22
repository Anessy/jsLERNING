// объект user, свойство name, занчение свойства - John
let user = {
name: 'John', 
age: 30
}; 

// доступ к обьекту
let x = user.name;
// alert('Имя ' + user.name );

//добавить новые свойства 
user.surname = 'Mart';
user.job = 'worker';

// удалить свойства 
delete user.age;

// если свойство объекта из нескольких слов 
user['likes birds'] = true; 
// alert('birds?' + user['likes birds']);

// вычисляемые свойства 
// запись [fruit] означает, что имя свойства необходимо взять из переменной fruit
let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"

// конкатерация 
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// проверка существования свойства. 1 способ
let user = {};
alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

//2 способ: 
let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует

//3 способ. Для перебора всех свойств объекта используется цикл for (key in object) 
  // тело цикла выполняется для каждого свойства объекта

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}

//упорядоченность свойств: все свойства кроме целочисленных располгаются в порядке создания. Целочисленные - в порядке аозрастания 
let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

//копирование 

/* Примитивные типы: строки, числа, логические значения – присваиваются и копируются «по значению».
Обьекты хранятся и копируются «по ссылке».
Переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него.
Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.
Операторы равенства == и строгого равенства === для объектов работают одинаково.
Два объекта равны только в том случае, если это один и тот же объект.*/

// клонирование обьекта 
let user = {
  name: "John",
  age: 30
};
let clone = {}; // новый пустой объект
// скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}
// теперь в переменной clone находится абсолютно независимый клон объекта.
clone.name = "Pete"; // изменим в нём данные
alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John.

//2 способ: 

/* Object.assign(dest, [src1, src2, src3...])
•	Аргументы dest, и src1, ..., srcN (может быть столько, сколько нужно) являются объектами.
•	Метод копирует свойства всех объектов src1, ..., srcN в объект dest. То есть, свойства всех перечисленных объектов, начиная со второго, копируются в первый объект. После копирования метод возвращает объект dest. */

let user = { name: "John" };

let perm1 = { canV: true };
let perm2 = { canE: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, perm1, perm2);

// now user = { name: "John", canV: true, canE: true }

//Или так: 

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

//Все свойства объекта user будут скопированы в пустой объект, и ссылка на этот объект будет в переменной clone. На самом деле, такое клонирование работает так же, как и через цикл, но короче.