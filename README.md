# Directum test

# Задание 1: Основы JS
## 1 Вопрос: 
 ```js 
setTimeout(() => console.log('setTimeout 1'), 0);
Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => setTimeout(() => console.log('setTimeout 2'), 0));
Promise.resolve().then(() => console.log('Promise 2'));
setTimeout(() => console.log('setTimeout 3'), 0);
console.log('final');
```

В первую очередь при парсинге js кода в call stack будут выполняться не асинхронные задачи, асинхронные будут отправляться в callback queue. После завершения не асинхронных задач, движок будет смотреть на ассинхронные вызовы и разделит их на микро и макротаски, к макротаскам в данном случае относятся вызовы setTimeout, а к микро - Promise. Из callback queue впервую очередь выполняются микротаски и только после их выполнения, начнут выполняться макротаски.     

Порядок вызова: 
```js
1. console.log('final');
2. Promise.resolve().then(() => console.log('Promise 1'));
3. Promise.resolve().then(() => console.log('Promise 2'));
4. setTimeout(() => console.log('setTimeout 1'), 0);
5. Promise.resolve().then(() => setTimeout(() => console.log('setTimeout 2'), 0));
6. setTimeout(() => console.log('setTimeout 3'), 0)
```


## 2 Вопрос: 
```js 
for (var i = 0; i < 5; i++) {
setTimeout(function() {
console.log(i);
}
)}
```

var имеет функциональную/глобальную область видимости т.е в момент когда будет выполнен вызов `setTimeout`, цикл уже закончит свое выполнение, а т.к var имеет функциональную/глобальную область видимости соотвественно на каждой итерации цикла мы будем мутировать одно и то же значение i и получим 5. Можно исправить эту проблему  объявлением переменной с помощью `let`, т.к она имеет блочную область видимости, то на каждой итерации мы будем получать новую переменную и в момент выполнения setTimeout на каждой итерации замкнем i на каждом значении.

Или же замкнуть переменную с помощью функции и переданного аргумента

```js
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    });
  })(i);
}


```

## 3 Вопрос: 
```js 
var a = 15;
function foo() {
var a = 25;
var result = function () {
console.log(this.a);
}
 result.a = 35;
 return result;
}
var bar = foo().bind({ a: 45 });
var buzz = foo().bind({ a: 55 }).bind({ a: 65 });
bar();
buzz();

```

В момент выполнения функции bar мы засчет контекста зафиксировали результат выполнения данной строчки кода `var result = function () {
console.log(this.a)}`, и затем с помощью метода bind задали нашей функции контекст, т.е результатом вывода будет число 45, остальные `a` для нас не несут какого-т смысла. В случае с функцией buzz, выведется число 55, т.к привязать контекст к нашей функции мы можем только один раз. 
Если мы заменим в console.log() переменную this.a, на `a`, то замкнем наш результат выполнения функции на переменной `a`, объявленной внутри функции `foo`. Для того чтобы выводилось значение `a` из первой строки можно удалить переменную `var a = 25` в функции foo или поменять местами строчки объявления переменной `a`, т.е внутри функции foo объявить `var a = 15`.


# Задание 2. Рецензирование и рефакторинг

```js 
let array = [-2, 4, -10, 8];
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (!String(array[i]).startsWith("-")) {
     count += array[i]
  }
}
console.log(count);
```

В данном коде не обязательно приводить значения к строке и использовать startsWith("-"), чтобы отсортировать положительные значения, достаточно 
сравнения `array[i] >= 0`. Также мы можем не создавать промежуточную переменную для суммирования положительных чисел, а использовать reduce

```js

const sumOnlyPositiveNumber = array.reduce(
  (accumulator, value) => (value > 0 ? (accumulator += value) : accumulator),  0)
```
Или для начала отфильтровать полученный данные на положительный числа для лучшего чтения кода. 

```js
array.filter((value) => value > 0).reduce((accumulator, value) => accumulator + value, 0).
```


  