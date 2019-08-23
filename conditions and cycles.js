// if else 
let canv =1;
if (canv == 1) {
alert (‘1’);
} else if (canv == 2){
alert (‘2’);
} else {
alert (‘wrong’);
}

// тернарный оператор ? вместо if
let accessAllowed;
let age = prompt('Сколько вам лет?', '');
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);
// можно преобразовать в let result = условие ? значение1 : значение2;
let accessAllowed = (age > 18) ? true : false; 

// можно использовать несколько 
let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
alert( message );

// Использование условия: в зависимости от условия company == 'Netscape', будет выполнена либо первая, либо вторая часть после ?.
let company = prompt('Какая компания создала JavaScript?', '');
(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');

// Нельзя использовать break/continue справа от оператора „?“ 
? alert(i) : continue; // continue здесь приведёт к ошибке

////////////////////////////////////////////////////////////////////////

//switch
let day = 2;
switch (day) {
case 1:
document.write (“monday”); 
break; 
case 2:
document.write (“tuesday”); 
break;
default:
document.write (“another day”); 
}

// группировка switch 
let a = 2 + 2;
switch (a) {
  case 4:
    alert('Правильно!');
    break;
  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;
  default:
    alert('Результат выглядит странновато. Честно.');
}

// проверка на равенство всегда строгая. Значения должны быть одного типа

let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}

/////////////////////////////////////////////////////////////////////

//Цикл for:

for (let i=1; i<=5; i++) {
do document.write (i + “<br/>”);
}
/*где i=1 – устанавливает переменную до запуска цикла (let i=1)
i<=5 – определяет условие запуска цикла 
i++ -- увеличивает значение счетчика после каждого выполнения кода в цикле */

//Можно так: 

for (let i=1, text=” “; i<=5; i++){
text = i;
do document.write (i + “<br/>”);
}

// while

let i=0;
while (i <=10) {
do document.write (i + “<br/>”);
i++;
}

// сокращенная запись для while
let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}

// do while

let i = 20;
do { 
do document.write (i + “<br/>”);
i++;
}
while (i <= 25);

// break - выпрыгивает из цикла

for (i = 0; i <= 10; i++){
if (i == 5){
break;
}
do document.write (i + “<br/>”);
}

// Вызов break <labelName> в цикле ищет ближайший внешний цикл с такой меткой и переходит в его конец.

outer: for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
let input = prompt(`Значение на координатах (${i},${j})`, '');
// если пустая строка или Отмена, то выйти из обоих циклов
if (!input) break outer; // (*)
// сделать что-нибудь со значениями...
  }
}
alert('Готово!');

//В примере выше это означает, что вызовом break outer будет разорван внешний цикл до метки с именем outer, и управление перейдёт со строки, помеченной (*), к alert('Готово!'). 

// Вызов break/continue возможен ТОЛЬКО внутри цикла, и метка должна находиться где-то выше этой директивы.

//////////////////////////////////////////////////////////////////////////

// continue - останавливает одну итерацию и продолжает со следующей

for (i = 0; i <= 10; i++){
if (i == 5){
continue;
}
do document.write (i + “<br/>”);
}
