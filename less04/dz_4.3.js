/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
 */
const arr = [1,2,3];
function every(arr, f){
    if(!Array.isArray(arr)){
        console.log(arr)
        throw new Error("Первый параметр обязателен и может принимать только массив");
    }
    if(typeof(f) !== "function"){
        throw new Error("Второй параметр обязателен и может принимать только функцию");
    }
    let result = true;
    for(let i = 0; i < arr.length; i++){
        if(!f(arr[i], i, arr)){
            result = false;
            break;
        }
    }
    return result;
}
console.log(every(arr, function (item, i, arr){
    return item > 0;
}));