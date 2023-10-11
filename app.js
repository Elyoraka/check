//console.log() - выводит информацию в крнсоль браузера
//console.log(320);

//var login = 'zapi';
//var age = 24;

//console.log('my name is ' + login + ' i am ' + age + ' years old');
// promt () - sozdaet pole vvoda v brauser
//alert() - vivodit info v spes okne

var login = prompt('Введите свое имя');
var age = +prompt ('Ваш возраст');
var plus = +prompt ('Решите пример 10+6');
var minus = +prompt ('Решите пример 10-6')
var multi = +prompt ('Решите пример 10*6')
alert('прверьте консоль');

console.log('Имя: ' + login + ', возраст: ' + age);
console.log('Пример 1. 10 + 6 = ' + (10 + 6) + ' Ваш ответ: ' + plus);
console.log('Пример 2. 10 - 6 = ' + (10 - 6) + ' Ваш ответ: ' + minus);
console.log('Пример 3. 10 * 6 = ' + (10 * 6) + ' Ваш ответ: ' + multi);
console.log('10 * 5 = ' + (10 * 5));
console.log('10 / 5 = ' + (10 / 5));
console.log('10 % 5 = ' + (10 % 5));

var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

res = ((x+y+z)/3)
alert('Среднее арифметическое ' + res)
console.log ('Среднее арифметическое ' + res)