/*
####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
 */
const arr = [1,2,3];
function filter(arr, f) {
    if(!Array.isArray(arr)){
        console.log(arr)
        throw new Error("Первый параметр обязателен и может принимать только массив");
    }
    if(typeof(f) !== "function"){
        throw new Error("Второй параметр обязателен и может принимать только функцию");
    }
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(f(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(filter(arr, function (item, i, arr){
    if (item > 4){
        return true;
    }else{
        return false;
    }
}));