/*
arrays
const arr = [1,4,2,5,7,3,8,"go", true];
arr.push(5) //to add element to the end of arr
arr.unshift("come") // to add element to the begining of array
arr.pop() //remove the last element from the array
arr.shift() //remove element from begining of arr
arr.filter(num => um % 2 === 0) // return element that satisfy the function
//iterating through each element in the array
arr.concat() // join arr together
arr.slice(1,4) // create a new array with the index from 1 to 4
arr.splice(1,3) // create a new array excludung index 1 to 3
for(const items of arr) {
    console.log(items);
}
*/

const obj = {
    name: "solary",
    age: 24,
    "key": 1,
    sayMyName: function () {
        console.log(this.name);
    }
}
obj.hobby = "football" //to add new element to the object
delete obj.hobby; //to delete element from the object
console.log(obj.name);
console.log(obj["key"]);
console.log(Object.keys(obj)); //return parent key in ojects ass array
console.log(Object.values(obj));// return values of key as array 
console.log(Object.entries(obj));//return both key and value as array
obj.sayMyName() // to call the function in the object

const set = new Set([1, 2, 3]);
set.add(4) // to add new element to set
set.has(4) // to check if the element exist in the set
set.delete(3) // to delete from the set
set.size // to check the size of the set 