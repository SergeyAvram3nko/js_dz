/*
####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра,
а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
 */
const arr = [3,2,1];
function reverse(arr){
    if(Array.isArray(arr)){
        if(arr.length === 0){
            throw new Error("Массив не может быть пустым");
        }
    }else{
        throw new Error("Первый параметр обязателен и может принимать только массив");
    }
    let tmpArr = Array.from(arr);
    for(let i = tmpArr.length-1, j = 0; i >-1; i--, j++ ){
        arr[j] = tmpArr[i];
    }
    return arr;
}
console.log(reverse(arr));