/*
####Задача 8

Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров,
а затем последовательно выводит на экран его элементы. Обязательно нужно использовать рекурсию.
Использовать цикл запрещено.
Данная функция должна обязательно содержать проверку входного параметра,
потому что принимать она может только не пустой массив.

```js
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
```
 */
let arr = [1, 2, 3];
function f(arr){
    if(!Array.isArray(arr)){
        throw new Error("Error: parameter type should be an array");
    }
    if(arr.length < 1){
        throw new Error("Error: parameter can't be an empty");
    }
    if(arr.length > 1){
        console.log(arr[0]);
        arr.splice(0,1);
        return f(arr);
    }else{
            console.log(arr[0]);
        }
}
f(arr);
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty