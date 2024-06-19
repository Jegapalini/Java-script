//question 1
// write a function to group transactions by type.

let transactions = [
    { type: 'deposit', amount: 1000 },
    { type: 'withdraw', amount: 100 },
    { type: 'deposit', amount: 500 },
    { type: 'withdraw', amount: 50 }
]

// function groupByType (transactions) {
//     let grouped = {};
//     transactions.forEach(transaction => {
//         if (grouped[transaction.type]) {
//             grouped[transaction.type].push(transaction);
//         } else {
//             grouped[transaction.type] = [transaction];
//         }
//     });
// }

function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    }
    return grouped;
}


console.log(groupByType(transactions));



//queestion 2
//You have an array of objects representing employees. Write a function to filter out employees who are older than a given age.

let employees = [ 
    { name: 'John', age: 25 },
    { name: 'Jane', age: 35 },
    { name: 'Jim', age: 30 }
 ];
 let ageLimit =30;
    function filterEmployeesByAge(employees, ageLimit) {
        return employees.filter(employee => employee.age <= ageLimit);
    }
    console.log(filterEmployeesByAge(employees, ageLimit));




    //question 3

    // . Given a 2D array representing a list of student names in different classes, write a
    // function to check if there are any duplicate names across all classes.
    // (Specifically use JavaScript Set Objects)

    let classes = [
        ["Alice", "Bob", "Charlie"],
        ["David", "Alice", "Eve"],
        ["Frank", "George", "Bob"]
        ];
        function checkDuplicates(classes) {
            let nameSet = new Set();
            for (let names of classes) {
                for (let name of names) {
                    if (nameSet.has(name)) {
                        return true;
                    }
                    nameSet.add(name);
                }
            }
            return false;
        }
        console.log(checkDuplicates(classes));  // Output: true




        //question 4
//         Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.(Hint: Use Date object in JavaScript)
 function getCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;    
 }
 console.log(getCurrentDateTime());  




 //question 5
 //Write a function that takes a birthdate as input and calculates the person's age.

//  function calculateAge(birthdate) {
//     let now = new Date();
//     let birth = new Date(birthdate);
//     let age = now.getFullYear() - birth.getFullYear();
//     if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
//         age--;
//     }
//     return age;
// }


function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if the birthdate has not occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

// Example usage:
let birthdate = "2003-03-22";
console.log(`Age: ${calculateAge(birthdate)}`);






//question 6
//write a function that takes a date and a number of days as input and returns the new date after adding the specified number of days

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
    // return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
}

let date = "2023-06-17";
let daysToAdd = 10;
let newDate = addDays(date, daysToAdd);

console.log(newDate.toISOString().split('T')[0]); // Outputs the new date in YYYY-MM-DD format
// console.log(formatDate(newDate, 'MM/DD/YYYY'));





//question 7
// Write a function that calculates the number of days between two given dates.
// (Hint: use Math function in JavaScrpt & Date object to write the function)
function dateDifference(date1, date2){
    let startDate = new Date(date1);
    let endDate = new Date(date2);
    let differenceInTime = endDate - startDate;

    let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));  
    //Math.ceil is used to round up the result to the nearest whole number, ensuring that partial days are counted as full days.
    return differenceInDays;

}
let date1 = "2023-06-17";
let date2 = "2024-06-27";
console.log(dateDifference(date1, date2)); // Output: 375






//question 8
//Suppose you are developing a web application that allows users to set and retrieve their
// preferences. Use a Map to store user preferences, and write functions to set a
// preference and get a preference by key.

let userPreferences = new Map();
function setPreference(key, value) {
    userPreferences.set(key, value);
}
function getPreference(key) {
    return userPreferences.get(key);
}
setPreference('theme', 'dark');
setPreference('fontSize', '16px');
console.log(getPreference('theme')); // Output: dark
console.log(getPreference('fontSize')); // Output: 16px




//question 9
//Write a function that takes an array of strings and returns a Map where the keys are the
// unique strings and the values are the number of times each string appears in the array.
// (Use Map Object)
function countOccurances(arr){
    let stringMap = new Map();
    for(let str of arr){
        if(stringMap.has(str)){
            stringMap.set(str, stringMap.get(str) + 1);
        }else{
            stringMap.set(str, 1);
        }
    }
    return stringMap;   
}
let strings = ['apple', 'orange', 'apple', 'banana', 'orange', 'apple'];
console.log(countOccurances(strings)); // Output: Map(3) { 'apple' => 3, 'orange' => 2, 'banana' => 1 }







//question 10
//You are given an array of employee objects with id and name properties. Write a
// function to create a Map that maps employee IDs to their names.

let employeess = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

function mapEmployeeIdsToNames (employeess){
    let employeeMap = new Map();
    for(let employee of employeess){
        employeeMap.set(employee.id, employee.name);
    }
    return employeeMap;
}
let employeeMap = mapEmployeeIdsToNames(employeess);
console.log(employeeMap); // Output: Map(3) { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }





//question 11
//Write a function to manage inventory for a store using a Map. The Map should store item
// names as keys and their quantities as values. Provide functions to add new items,
// update item quantities, and check the quantity of an item.
let inventory = new Map();
function addItem(itemName, quantity) {
    // use Map Object's set method to add the item to the inventory
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
// use Map Object's has, set, get methods to update the quantity

if(inventory.has(itemName)){
//if the item exists, update the quantity
let currentQuantity = inventory.get(itemName);
    inventory.set(itemName, currentQuantity + quantity);
}
else{
     // If not, console log the message "Item not found"
    console.log("Item not found");

}
}
function checkItemQuantity(itemName){
    // check item quantity in the inventory
    return inventory.get(itemName);
}
//adding items tot the inventory
addItem('apple', 100);
addItem('banana', 150);

//updating item quantity in the inventory
updateItemQuantity('apple', 50);

//checking item quantity in the inventory
console.log(checkItemQuantity('apple')); // Output: 150
console.log(checkItemQuantity('banana')); // Output: 150
console.log(checkItemQuantity('orange')); // Output: undefined




//question 12
// Write a function that takes an array of numbers and returns a new array with all duplicate
// items removed. (Use Set Object)
function removeDuplicates(arr){
    return [...new Set(arr)];
    //The spread operator (...) is used to expand the elements of the Set into a new array.
    //This operation takes the unique values from the Set and creates a new array with those values.
}
let numbers = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(numbers)); // Output: [ 1, 2, 3, 4, 5, 6 ]




//question 13
// Write a function that takes two arrays and returns a new array containing only the
// elements that are present in both arrays.
// (use Set object)
function intersection(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2)); // Output: [ 3, 4, 5 ]




//question 14
// Write a function that takes multiple arrays and returns a new array containing all unique
// elements from all arrays.
function union(...arrays){
    let resultSet = new Set();
    for(let arr of arrays){
        for(let item of arr){
            resultSet.add(item);
        }
    }
    return [...resultSet];
    // return resultSet;
// return [...resultSet]; returns an array.
// return resultSet; returns a Set.

}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3)); // Output: Set(7) { 1, 2, 3, 4, 5, 6, 7 }







//question 15
// Write a function that takes an array of items and a set, and removes all items in the
// array from the set.

function removeItemsFromSet(items, set){
    for(let item of items){
        set.delete(item);
    }
}
let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];

removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]); // Output: [ 1, 4, 5 ]








//question 16
// Write a function that takes an array of student names representing attendance on a
// particular day and a Set representing the overall attendance. Update the Set with the
// new attendance and return the updated Set.

function updateAttendance(newAttendance, overallAttendance){
    for(let name of newAttendance){
        overallAttendance.add(name);
    }
    return overallAttendance;
}
let overallAttendance = new Set(['Alice', 'Bob', 'Charlie']);
let newAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(newAttendance, overallAttendance);
console.log([...overallAttendance]); // Output: [ 'Alice', 'Bob', 'Charlie' ]   //Charlie and Alice are added to the set