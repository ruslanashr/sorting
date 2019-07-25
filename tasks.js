// Lineary search
// function findIndexByName(data, name) {
//   const result = data.findIndex((element, index, array) => {
//     if (element=== name) {
//       return true;
//     }
//     return false;
//   });
//   return result;
// }
// const data = ["Jack", "Molly", "Tristan", "Jacob", "Steph"];
// var result = findIndexByName(data, "Jacob");
// console.log(result);
// Binary search
// function binarySearch(array, target){
//   let startIndex = 0;
//   let endIndex = array.length - 1;
//   while(startIndex <= endIndex) {
//     let middleIndex = Math.floor((startIndex + endIndex) / 2);
//     if(target === array[middleIndex) {
//         return console.log("Target was found at index " + middleIndex);
//       }
//       if(target > array[middleIndex]) {
//         console.log("Searching the right side of Array")
//         startIndex = middleIndex + 1;
//       }
//       if(target < array[middleIndex]) {
//         console.log("Searching the left side of array")
//         endIndex = middleIndex - 1;
//       }
//       else {
//         console.log("Not Found this loop iteration. Looping another iteration.")
//       }
//     }

//   console.log("Target value not found in array");
// }
// //Block search
// var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];

// console.log("Found at position :" + jumpSearch(arrayToSearch, 2));
// console.log("Found at position :" + jumpSearch(arrayToSearch, 256));
// console.log("Found at position :" + jumpSearch(arrayToSearch, 500));
// console.log("Found at position :" + jumpSearch(arrayToSearch, 44444));

// function jumpSearch(arrayToSearch, valueToSearch){
//   var length = arrayToSearch.length;
//   var step = Math.floor(Math.sqrt(length));
//   var ind = Math.min(step, length)-1;
//   var lowerBound = 0;
//   while (arrayToSearch[Math.min(step, length)-1] < valueToSearch)
//   {
//     lowerBound = step;
//     step += step;
//     if (lowerBound >= length){
//       return -1;
//     }
//   }

//   var upperBound = Math.min(step, length);
//   while (arrayToSearch[lowerBound] < valueToSearch)
//   {
//     lowerBound++;
//     if (lowerBound == upperBound){
//       return -1;
//     }
//   }
//   if (arrayToSearch[lowerBound] == valueToSearch){
//      return lowerBound;
//   }
//   return -1;
// // }
// //bubble sort
// function bubblesort(a,N) {
//   let i=j=v=0;
//   for(i=1;i<N;i++) {
//     v=a[i];
//     j=i;
//     while(j>0 && a[j-1]>v) {
//       a[j]=a[j-1];
//       j--;
//     };
//     a[j]=v;
//   }
//   for(i=0;i<a.length;i++){
//   }
// }
// const x = [9, 4, 5, 2, 1, 6, 7, 0, 3];
// document.write(`<div><p>Input before bubble sort: ${x}</p>`);
// bubblesort(x, 9);
// document.write(`<p>Input after bubble sort: ${x}</p></div>`);
// //Selection sort
// let selectionSort = function (array) {
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     let mi = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[mi]) {mi = j;}
//     }
//     temp = array[i];
//     array[i] = array[mi];
//     array[mi] = temp;
//   }
// };
// //Quick sort
// const items = [5, 3, 7, 6, 2, 9];
// function swap(items, leftIndex, rightIndex) {
//   const temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//   let pivot = items[Math.floor((right + left) / 2)];
//   let i = left;
//   let j = right;
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort(items, left, right) {
//   let index;
//   if (items.length > 1) {
//     index = partition(items, left, right);
//     if (left < index - 1) {
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }
// let sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray);
// //Heap sort
// function heapSort(arr){
//   let len = arr.length,
//   end = len-1;
//   heapify(arr, len);
//   while(end > 0){
//     swap(arr, end--, 0);
//     siftDown(arr, 0, end);
//   }
//   return arr;
// }

// function heapify(arr, len){
//   let mid = Math.floor((len-2)/2);
//   while(mid >= 0){
//     siftDown(arr, mid--, len-1);
//   }
// }

// function siftDown(arr, start, end){
//   let root = start,
//     child = root*2 + 1,
//     toSwap = root;
//   while(child <= end){
//     if(arr[toSwap] < arr[child]){
//       swap(arr, toSwap, child);
//     }
//     if(child+1 <= end && arr[toSwap] < arr[child+1]){
//       swap(arr, toSwap, child+1)
//     }
//     if(toSwap != root){
//       swap(arr, root, toSwap);
//       root = toSwap;
//     }
//     else{
//       return;
//     }
//     toSwap = root;
//     child = root*2+1
//   }
// }
// function swap(arr, i, j){
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// //Merge sort
// function mergeSort(arr){
//   var len = arr.length;
//   if(len <2)
//    return arr;
//   var mid = Math.floor(len/2),
//   left = arr.slice(0,mid),
//   right =arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right));
//  }

//  function merge(left, right){
//    var result = [],
//     Len = left.length,
//     rLen = right.length,
//     l = 0,
//     r = 0;
//    while(l < lLen && r < rLen){
//       if(left[l] < right[r]){
//         result.push(left[l++]);
//       }
//       else{
//         result.push(right[r++]);
//      }
//    }
//    return result.concat(left.slice(l)).concat(right.slice(r));
//  }
//Fibbonacci number
// var i;
// var fib = [];
// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 10; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }
// //Factorial algorithms
// function factorialize(num) {
//   if (num < 0)
//     return -1;
//   else if (num == 0)
//     return 1;
//   else {
//     return (num * factorialize(num - 1));
//   }
// }
// factorialize(5);
