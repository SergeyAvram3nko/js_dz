/*
#### Задача 11

Дан массив с элементами `[2, 5, 9, 15, 0, 4]`.
С помощью цикла `for` и оператора `if` выведите на экран столбец тех элементов массива,
которые больше 3-х, но меньше 10.

**Внимание**!

- Не разрашается использовать специальные методы массивов.
 */

let arr = [2, 5, 9, 15, 0, 4];

for(let n of arr){
    if(n > 3 && n < 10){
        console.log(n);
    }
}