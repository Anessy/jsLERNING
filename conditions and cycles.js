// if else 
let canv =1;
if (canv == 1) {
alert (‘1’);
} else if (canv == 2){
alert (‘2’);
} else {
alert (‘wrong’);
}

// тернарный оператор ? 
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


//Цикл for:

for (i=1; i<=5; i++) {
do document.write (i + “<br/>”);
}
/*где i=1 – устанавливает переменную до запуска цикла (let i=1)
i<=5 – определяет условие запуска цикла 
i++ -- увеличивает значение счетчика после каждого выполнения кода в цикле */

//Можно так: 

for (i=1, text=” “; i<=5; i++){
text = i;
do document.write (i + “<br/>”);
}

// while

let i=0;
while (i <=10) {
do document.write (i + “<br/>”);
i++;
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

// continue - останавливает одну итерацию и продолжает со следующей

for (i = 0; i <= 10; i++){
if (i == 5){
continue;
}
do document.write (i + “<br/>”);
}
