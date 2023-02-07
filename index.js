// Array all methodes----------------------

// add and remove item in array -------------
let arr = ["samod", "umesh", "sudhir"];

arr.push("sunil"); // arr.push(...items) – adds items to the end,
// arr.pop()// arr.pop() – extracts an item from the end,
// console.log(arr);

// arr.shift(); // extracts an item from the beginning,
arr.unshift("Mohit");
 console.log(arr); 

// splice---------------------------------------------
//  arr.splice(1, 1); // from index 1 remove 1 element
//  arr.splice(0, 2, "singh"); // remove 2 first elements and replace them with another

// splice-------------------------------------------------------

// let myarr =  arr.slice(1, 2); // copy from 1 to 2
//  console.log(myarr);

//Concat ------------------------------------------------------
let num = [1, 2, 3];
let add = num.concat([4, 5]);
// console.log(add);

// Iterate: forEach--------------------------------------------
arr.forEach((item, index) =>{
    // alert(item);
}
)


