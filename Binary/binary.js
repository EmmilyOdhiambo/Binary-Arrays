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
    function mergeSortDescending(arr){
        if (arr.length <= 1) {
           return arr;
        }
        const middle = Math.floor (arr.length / 2);
        const leftIndex = arr.slice(0, middle);
        const rightIndex = arr.slice(midlle);
        return mergeDescending (mergeSortDescending(leftIndex), mergeSortDescending(rightIndex));
        }
        function mergeDescending(left, right){
           let get = [];
           let leftIndex = 0;
           let rightIndex = 0;
           while(leftIndex < left.length && rightIndex < right.length){
               if (left[leftIndex] >= right[rightIndex]){
                   get.push(left[leftIndex]);
                   leftIndex++;
               }else {
                   get.push(right[rightIndex]);
                   rightIndex++
               }
           }
        return get.concat (left.slice(leftIndex)).concat(right.slice(rightIndex));
        }
        let num2 = [123, 89, 5, 23, 9, 56];
        let sortedNum2 = mergeSortDescending(num2);
        console.log(sortedNum2);
}
//Given the following array, search for the following target
let tag = 34
let arr2 = [1,4,78,2,67,3];
function mergedSorted(num3){
    if (num3.length <= 1) {
        return num3;
    }

    const middle = Math.floor(num3.length / 2);
    const left = mergeSort(num3.slice(0, middle));
    const right = mergeSort(num3.slice(middle));

    return merge(leftIndex, rightIndex);
}

function merged(leftIndex, rightIndex){
    const result = [];
    let c = 0;
    let d = 0;

    while (c < left.length && d < right.length){
        if (left (c)< right [d]){
            result.push(left[c]);
            c++; 
        }else {
            result.push(right[d]);
            d++;
        }
    }
    return result.concat(leftIndex.slice(c)).concat(rightIndex.slice(d));
}

function binarySearch(arr11, target){
    let leftIndex= 0;
    let rightIndex = arr1.length - 1;

    while (leftIndex <= rightIndex){
        const middle = Math.floor((leftIndex + rightIndex)/2);

        if (arr1[middle] === target){
            return middle;
        }else if(arr1[middle] < target){
            rightIndex = middle - 1;
        }
    }
    return null
}

const num3 = [1, 4, 78, 2, 67, 3];
const targeted = 34;

const sortedNum3 = mergeSort(num3);
const TargetIndex = binarySearch(sortedNum3, target);

console.log(TargetIndex);