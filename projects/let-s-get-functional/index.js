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

var youngestCustomer = function(){

}

var averageBalance = function(){

}


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

var friendFirstLetterCount = function(array, costumer, letter){
let friendCount = _.filter((array, costumer) => costumer.name[0].toUpperCase() === letter.toUpperCase().map(friend => friend.name[0].toUpperCase() === letter.toUpperCase()));
return friendCount;
}

/**
 * ### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:
 */

var friendsCount = function(array, name){

}



var topThreeTags;

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
