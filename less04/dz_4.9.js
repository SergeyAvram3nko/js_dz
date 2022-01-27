/*
####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив,
а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
 */
function arrayFill(elemArr, countArr){
    function checkElemArr (elemArr){
        if(typeof(elemArr) === "object"){
            if(elemArr === null){
                return false;
            }
            else{
                return true;
            }
        }
        if(typeof(elemArr) === "number"){
            if(isNaN(elemArr)){
                return false;
            }else{
                return true;
            }
        }
        if(typeof(elemArr) === "string"){
            return true;
        }else{
            return false;
        }
    }
    if(!checkElemArr(elemArr)){
        throw new Error("Первый параметр обязателен и может принимать только число, строку, объект, массив");
    }
    if(typeof(countArr) !== "number" || isNaN(countArr)){
        throw new Error("Второй параметр обязателен и может принимать только число");
    }

    return new Array(countArr).fill(elemArr);
}
console.log(arrayFill([1,2], 5));

