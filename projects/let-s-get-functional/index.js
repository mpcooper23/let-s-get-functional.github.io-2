// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io-2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**
 * 
 * ### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`} array 
 * 
 */

var maleCount = function(array) {
let male = _.filter(array, customer => customer.gender === 'male');
return male.length;
};

/**
 ### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`
 */

//how would you solve this using reduce?
var femaleCount = function(array){
   return _.reduce(array, (accumulator, customer) => {
    if(customer.gender === 'female'){
        accumulator += 1
    }
    return accumulator; 
   }, 0)
}

/*### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
*/

var oldestCustomer = function(array) {
    // Use _.reduce to find the oldest customer
    let oldest = _.reduce(array, function(accumulator, current) {
      if (current.age > accumulator.age) {
        return current;
      } else {
        return accumulator;
      }
    }); // empty seed means: Initialize with the first customer in the array
  
    return oldest.name;
  };
  
  /*### 4: `youngestCustomer`
  - **Objective**: Find the youngest customer's name
  - **Input**: `Array`
  - **Output**: `String`
  - **Constraints**:*/

var youngestCustomer = function(array){
let youngest = _.reduce(array, function(accumulator, item){
    if(item.age < accumulator.age){
        return item;
    } else {
        return accumulator
    }
})
return youngest.name;
}

/*### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:*/

 var averageBalance = function(array) {
    // Use _.reduce to calculate the total balance
    let totalBalance = _.reduce(array, function(accumulator, current) {
      return accumulator + Number(current.balance);
    }, 0);
  
    // Calculate the average balance
    let average = totalBalance / array.length;
  
    return average;
  };
  
/*### 6: `firstLetterCount`
 - **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:*/
 
var firstLetterCount = function(array, letter){
let firstL = _.filter(array, costumer => costumer.name[0].toUpperCase() === letter.toUpperCase());
return firstL.length; 
}

/**
 * ### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */

 var friendFirstLetterCount = function(array, customerName, letter) {
    // Find the customer in the array
    let customer = array.find(c => c.name === customerName);
  
    // If the customer is not found or has no friends, return 0
    if (!customer || !customer.friends) {
      return 0;
    }
  
    // Use _.filter to find friends whose names start with the specified letter
    let friendCount = _.filter(customer.friends, friend => {
      return friend.name[0].toUpperCase() === letter.toUpperCase();
    }).length;
  
    return friendCount;
  };
  
  // Example usage:
 /* const customers = [
    { name: 'Alice', friends: [{ name: 'Bob' }, { name: 'Charlie' }, { name: 'David' }] },
    { name: 'Eve', friends: [{ name: 'Frank' }, { name: 'Grace' }] }
  ];
  
  console.log(friendFirstLetterCount(customers, 'Alice', 'B')); // Output: 1
  console.log(friendFirstLetterCount(customers, 'Eve', 'G'));   // Output: 1*/
  
/**
 * ### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:
 */

 var friendsCount = function(array, name) {
  return array.filter(customer => 
    customer.friends && customer.friends.includes(name)
  ).map(customer => customer.name);
};

/* ### 9: `topThreeTags`
 - **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:*/

var topThreeTags;

/**
 * ### 10: `genderCount`
 - **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
```
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`
 */

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
