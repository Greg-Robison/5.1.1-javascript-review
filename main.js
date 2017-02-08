// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  var vowels = 'aeiou';
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) == -1)
    {
      newStr = newStr + str[i];
    }
  }

  return newStr;

}

console.assert(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!")
console.log(disemvowel("This website is for losers LOL!"));


// Write a method complements(array, number)
// which returns true if any two numbers in
// the array sum to the number.

function complements(array, number){
  for(var i = 0; i < array.length; i++) {
    for (var a = 0; a < array.length; a++) {
      if (i !== a && array[i] + array[a] == number){
        return true;
        }
      }
    }
  return false;
};


var odds = [1, 3, 5, 7, 9, 11] // 20

var ints = [-11, 40, 17, -5, -1, -11, 2, 9]

console.assert( complements(odds, 4) === true )
console.assert( complements(odds, 1) === false )
console.assert( complements(ints, -22) === true )
console.assert( complements(ints, 16) === true )
console.assert( complements(ints, 40) === false )





// Array.forEach(callback) passes
// (value, index, array) to the
// callback each iteration
//
// i.e.
//
// function log(v, i){
//      console.log(v, i)
// }
//
// ['a', 'b', 'c'].forEach(log)
//
// --> a, 0
// --> b, 1
// --> c, 2
//
// Write a function forEach(array, callback)
// that takes an array and callback function,
// and passes each (value, index, array) to
// the callback

function forEach(array, callback){
for (var i = 0; i < array.length; i++) {
  callback(array[i], i, array);
}

};

// tests
function IHazValue(value, index, array){
    console.assert(typeof value !== "undefined")
}
forEach([1, 2, 3], IHazValue)

function IHazIndex(value, index, array){
    console.assert(typeof index === "number")
}
forEach([1, 2, 3], IHazIndex)

function IHazArray(value, index, array){
    console.assert(array instanceof Array)
}
forEach([1, 2, 3], IHazArray)






//=================================//
