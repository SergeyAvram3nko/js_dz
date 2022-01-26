/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
 */
const arr = [1,2,3];
function some(arr, f){
    if(!Array.isArray(arr)){
        throw new Error("Первый параметр обязателен и может принимать только массив");
    }
    if(typeof(f) !== "function"){
        throw new Error("Второй параметр обязателен и может принимать только функцию");
    }
    let result = false;
    for(let i = 0; i < arr.length; i++){
        if(f(arr[i], i, arr)){
            result = true;
            break;
        }
    }
    return result;
}
console.log(some(arr, function (item, i, arr){
    return item > 3;
}));