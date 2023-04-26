function reverseString(str) {
  
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i]
  }
  return reversed

}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;


// My own words:
  //write a method to reverse a string through iteration

// Please add your pseudocode to this file
  
//I was way off with this, was thinking .pop() and .push(), good stuff.
  //initialize a reverse string variable that will be returned.
    //check if input string is more than 1 letter
      //if it is then have reverse string variable be equal to a spread operated version of the str variable
      //call .pop() on that spread operated version of str
      //collect whatever has been popped off into a new variable with .push()
      //return that variable name

// And a written explanation of your solution



