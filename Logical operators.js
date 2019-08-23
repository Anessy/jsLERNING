// В JavaScript есть три логических оператора: || (ИЛИ), && (И), ! (НЕ).

/* AND (И) &&	- возвращает true если обе операнды истинны
OR (ИЛИ) ||	- возвращает true если одна из операнд истинна
NOT(НЕ)	! - возвращает true если операнд ложный; возвращает false если
операнд истинный */

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}


alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

// Применение ИЛИ 

// 1. Получение первого истинного значения из списка переменных или выражений. Или последнее значение, если ничего не найдено

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert( name ); // выбирается "John" – первое истинное значение. Если бы и currentUser, и defaultUser были ложными, в качестве результата мы бы наблюдали "unnamed".

// 2. Cокращённое вычисление. (ИЛИ вычисляет слева направо. Вычисление останавливается при достижении первого истинного значения) 

let x;
true || (x = 1);
alert(x); // undefined, потому что (x = 1) не вычисляется

// Если бы первый аргумент имел значение false, то || приступил бы к вычислению второго и выполнил операцию присваивания:

let x;
false || (x = 1);
alert(x); // 1

////////////////////////////////////////////////////////////////////////////////////////////

// И && находит первое ложное значение или последнее, если ничего не найдено.

alert( 1 && 2 && null && 3 ); // null 

// Когда все значения верны, возвращается последнее

alert( 1 && 2 && 3 ); // 3

/* Приоритет оператора && больше, чем у ||, так что он выполняется раньше.
Таким образом, код (a && b || c && d) по существу такой же, как: (a && b) || (c && d). */

let x = 1;
(x > 0) && alert( 'Greater than zero!' );

// НЕ ! - используют для преобразования к логическому типу (То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, а второе НЕ снова инвертирует его.)

alert( !!"non-empty string" ); // true
alert( !!null ); // false

//то же самое делает функция Boolean: 

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false


