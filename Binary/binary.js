//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
let num = [45,12,6,89,2,5]
// let target = 6
function mergeSort(num){
    if (num.lenth <= 1){
        return num;
    }
    const mid =mode.floor(num.length / 2);
    const l =mergeSort(num.slice(0,middle));
    const r = mergeSort(num.slice(middle));

    return mergeSort(l,r);
}
function merge(l,r){
    const result = [];
    let a = 0;
    let b = 0;

    while(a < l.length && b < r.length){
        if (l (a)< r[b]){
            result.push(left[a]);
            a++;
        }else{
            result.push(r[b]);
            b++;
        }
    }
    return result.concat(l.slice(a)).concat(r.slice(b));
}

function binarySearch(arr, terget){
    let lIndex = 0;
    let rIndex =arr.len - 1;
    while(lIndex <= rIndex){
        const mid = Math.floor((leftIndex + rightIndex)/2);
        if (arr[mid] === target){
            return mid;
        }else if (arr[mid] < target){
            rIndex = mid - 1;

        }   
    }
    return null

}
const number = [45,12,6,89,2,5];
const target = 6

const sorteNumber=mergeSort(number);
const targetIndex = binarySearch(sortedNumber, target);

console.log(target.Index);


//Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
function mergeSorteDescending(arr){
    if(arr.length <= 1) {
        return
    }
}