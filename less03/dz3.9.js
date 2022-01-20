/*
function solution(a, b) {
    //....
    return [];
}
console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 */
let a = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
let b = [1];
function solution(a, b) {
    if(a.length > 0 && b.length > 0){
        let indexA = a.length-1;
        let indexB = b.length-1;
        let sum = 0;
        let result = [];
        while(true){
            sum = a[indexA] + b[indexB];
            if (sum > 9){
                result.unshift(sum%10);
                if(indexA - 1 > -1){
                    a[indexA-1] += 1;

                }else{
                    result.unshift(1);
                }
            }else{
                result.unshift(sum);
            }
            indexA--;
            indexB--;
            if(indexB < 0 && indexA > -1){
                for(let j = indexA; j > -1; j--){
                    if(a[j] > 9){
                        result.unshift(a[j]%10);
                        if(j-1 > -1){
                            a[j-1] += 1;

                        }else{
                            result.unshift(1);
                        }
                    }else{
                        result.unshift(a[j]);
                    }
                }
                break;
            }
            if(indexA < 0 && indexB < 0){
                break;
            }
        }
        return result;
    }
    if(a.length === 0 && b.length === 0){
        return [];
    }
    if(a.length === 0){
        return b;
    }
    if(b.length === 0){
        return a;
    }
}
console.log(solution(a, b));