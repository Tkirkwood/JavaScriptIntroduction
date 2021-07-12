// basic variables
// var name = "Thomas";
//
// debugger;
// var surname = "Kirkwood"
// console.log( name + " " + surname)



// Functions


// function addNumbers(num1, num2){
// var result = num1 + num2;
// return result;
// }
//
// console.log(addNumbers(1,2));

// Function exercise
//
// var answer = addNumbers(addNumbers(5,7),addNumbers(addNumbers(2,10),2))
// console.log(answer)

// Data types

//String
// var string = 'hello'; // single quotes or double qoutes work
// console.log("string " + string);
// console.log(string.length);
//
//
// console.log(string.indexOf('e')); // 1
// console.log(string.substr(2,4));// llo

//Numbers
// var myNumber = 5;
// var myOtherNumber = 5.5;
// var myExponential = 123e5;
// console.log(myNumber);
// console.log(myOtherNumber);
// console.log(myExponential);
//
// //modulus
// console.log(myNumber % 3);
//
// //Boolean
//
// var booltrue = true
// var boolfalse = boolfalse
//
// console.log(booltrue)
// console.log(boolfalse)

//Arrays
//
// var myArray = [5,6,7,"a","b"];
//
// console.log(myArray);
// console.log(myArray[2]);
//
// console.log(myArray.length)
//
// myArray[0]= 8;
//
// console.log(myArray);
// // console.log(myArray += [ ,"more","stuff"]);
// // console.log(myArray);
// console.log(myNewArray = myArray.concat(["more","stuff"]));
// console.log(myNewArray);


// type coersion
// console.log("5" * "7");
// var myString = "5";
// var myDecimalString = "2.5"
// var myNumber = 3;
// console.log(myString + myNumber);
// console.log(myNumber + myString);
//
// console.log(parseInt(myString) + myNumber);
// console.log(parseFloat(myDecimalString) + myNumber);
// console.log(parseInt(myDecimalString) + myNumber);




//
// var name = prompt("what is your name") || "captain no-name";
//
// console.log(name);

// LOOPS

//while
// var x = 10;
// while (x<15) {
//   console.log("loop");
//   x +=1;
// }
//
//for LOOPS
// var array = [1,2,3,4,5,6]
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
 //do while
// var x = 10
// do {
//   console.log("loop");
//   x += 1;
// } while (x<10);
//for in

// var obj = {
//
//   name: "Thomas",
//   age: 27,
//   school: "GCU",
//   exam_results: {
//     maths:true
//   }
// }
// for (var key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }



// scope

// lexical sccope

// "code can see out but cant see in"
//
// var outsideVariable;
//
// function doSomething(){
// outsideVariable = 10;
//   console.log(outsideVariable);
// }
//
// function doNext()
// {
//   console.log(outsideVariable);
// }
//
// doSomething();
// doNext();


// the DOM
