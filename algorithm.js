/*
1. given a number "n", find the first "n" element of the fibonacci sequence 
*/

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};

// big 0 = O(n)

/*
2. given a number "n" find the factorial of the given number
*/

const factorial = (n) => {
  let fac = 1;
  if ((n = 0)) {
    fac = 0;
    return fac;
  }
  for (let i = 2; i <= n; i++) {
    fac *= i;
  }
  return fac;
};

/* given a numer "n" check if the number is a prime number */

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

/*give a positive interger "n" determine if the numberis a power of 2 or not */
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};
// console.log(isPowerOfTwo(8));

const fibonacciElement = (n, nth) => {
  if (n < 2) {
    return null;
  }
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[nth];
};
// console.log(fibonacciElement(10, 4));

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};
// console.log(recursiveFibonacci(3));

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

// console.log(recursiveFactorial(5));

const indexOfArr = (arr, t) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
};
// console.log(indexOfArr([3,0,1,6,4,6,54,5,12], 11));

const binarySearch = (arr, t) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex + 1;
    } else {
      leftIndex = middleIndex - 1;
    }
  }
  return -1;
};
// console.log(binarySearch([1,3,4,5,6,7,8], 7));

const recursiveBinarySearch = (arr, t) => {
  return search(arr, t, 0, arr.length);
};

const search = (arr, t, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === arr[middleIndex]) {
    return middleIndex;
  }
  if (t < arr[middleIndex]) {
    return search(arr, t, leftIndex, middleIndex - 1);
  } else {
    return search(arr, t, middleIndex + 1, rightIndex);
  }
};

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// console.log(bubbleSort([5,9,2,0,5,1,6]));

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert
    }
    return arr;
}

// console.log(insertionSort([2,5,2,7,2,9,5,3,2]));

const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length -1]
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length -1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort([2,5,1,7,9,4,2]));

const mergeSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const merge = (leftArr, rightArr) => {
    const sortedArr = [];
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

// console.log(mergeSort([2,68,1,8,3,9,1,9]));

const cartesianProduct = (arr1, arr2) => {
    const cartesianProduct = [];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            cartesianProduct.push([arr1[i], arr2[j]])
        }
    }
    return cartesianProduct;
}

// console.log(cartesianProduct([2,4], [2,5,1,6,2]));

const climbingStaircase = (n) =>{
    const noOfWays = [1,2];
    for(let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i-2];
    }
    return noOfWays[n - 1]
}

console.log(climbingStaircase(4));
