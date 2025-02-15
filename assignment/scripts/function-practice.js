console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Jo'));
console.log(helloName('Stacy'));
console.log(helloName('[your name here]'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return 'The answer of ' + firstNumber + ' + ' + secondNumber + ' is ' + answer;
}

// call the function:
console.log(addNumbers(1, 2));
console.log(addNumbers(14, 5));
console.log(addNumbers(432.3, 12.513));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let answer = num1 * num2 * num3;
  return 'math problem: '+ num1+ ' X '+ num2+ ' X '+ num3+ ' = '+ answer;
} // end multiplyThree

// call the function, tests:
console.log(multiplyThree(1, 2, 3));
console.log(multiplyThree(3, 6, 9));
console.log(multiplyThree(1056, 56412, 643));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true:', isPositive(3) );
console.log( 'isPositive - should say false:', isPositive(0) );
console.log( 'isPositive - should say false:', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0){
    let lastItemInArray = array[array.length-1];
    return lastItemInArray;
  } else {
    console.log('Array is empty.');
  }
}

// Call the function with different array types to test the function:
console.log(getLast(['A. first', 'B. second', 'C. third', 'D. last item of four']));
console.log(getLast([4, 6, 10, 2021, 248]));
console.log(getLast(['only one item in this array']));
console.log(getLast([true, false]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array){
  for(object of array){
    console.log('checking loop:', object);
    if(object === value){
    console.log('There is a match!');
    return true;
  } 
} console.log('There is not a match.');
  return false;
} // end of find function

/* First iteration /practice shown here. I ran into issues with the return ending the loop too soon:
  for(let i=0; i < array.length; i++){
    if(array[i] == value){
      let valueFound = true;
      console.log('There is a match:', value, '=', array[i]);
    } else {
      let noMatch = false;
    }
  } // end value check
  if valueFound === true {
    return true;
  } else {
    return false;
  }*/

// call the function a few times to check if it works:
console.log(find('test', ['this', 'is', 'a', 'test', 'of', 'an', 'array']));
console.log(find(403, [802, 33, 402, 400]));
console.log(find(true, [false, false, false, true]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
