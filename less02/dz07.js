/*
####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
 */
let arr = [1,2,3,4];
let sum = 0;
for(let n of arr){
    if(n % 2 === 0){
        sum += n;
    }
}
console.log(sum);