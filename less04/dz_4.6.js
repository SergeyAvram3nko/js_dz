/*
####Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
 */
const arr = [1,2,3];
const acc = "";
function reduceRight(arr, f, acc){
    if(!Array.isArray(arr)){
        throw new Error("Первый параметр обязателен и может принимать только массив");
    }
    if(typeof(f) !== "function"){
        throw new Error("Второй параметр обязателен и может принимать только функцию");
    }
    if(typeof(acc) !== "number" && typeof(acc) !== "string"){
        throw new Error("Третий параметр обязателен и может принимать только строку или число");
    }
    for(let i = arr.length-1; i > -1; i--){
        acc = f(acc, arr[i], i ,arr);
    }
    return acc;
}

console.log(reduceRight(arr,(sum, current) => sum + current, acc));