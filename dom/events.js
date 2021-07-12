// console.log(document.body);
//
// var titleElement = document.getElementById("title")
// console.log(titleElement);
//
// titleElement.style.color = "green";
//
// var listItems = document.getElementsByTagName('li');
//
// console.log(listItems);
//
// for (var i = 0; i < listItems.length; i++) {
//   if (listItems[i].innerHTML == "item2") {
//     listItems[i].style.color = 'blue';
//     listItems[i].innerHTML = "new Text";
//   }
// }
//
// titleElement.addEventListener("click", function() {
//   console.log("element is clicked");
//   titleElement.style.color = "blue";
// })
//
// titleElement.addEventListener("mouseout", function() {
//   titleElement.style.color = "red";
// })
//
// titleElement.addEventListener("mouseover", function() {
//   titleElement.style.color = "blue";
// })











// a/c clears all values and screen to 0
// first number
var firstNumber = null;
//operator
var operator = null;
//second number
var secondNumber = null;







var buttons = document.getElementsByClassName('button');
var screen1 = document.getElementById('screen1');
var screenOutput = null;
var result;
var operators = ["+","-","/","x"];
var specialOperators = ["=","A/C","%"];


function calculateResult(){

  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);

if (secondNumber != null){
  switch (operator) {
    case '/':
      result = (parseFloat(firstNumber)/parseFloat(secondNumber))
      break;
    case 'x':
      result = (parseFloat(firstNumber)*parseFloat(secondNumber))
      break;
    case '-':
      result = (parseFloat(firstNumber)-parseFloat(secondNumber))
      break;
    case '+':
      result = (parseFloat(firstNumber)+parseFloat(secondNumber))
      break;
    default:
}
screen1.innerText = " result is: " + result;
firstNumber=null;
operator=null;
secondNumber=null;
result=null;
screenOutput = null;
  }
};

function calculatePercent(){

  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);

if (secondNumber != null){
  if (firstNumber<1 || secondNumber<1)
  {
    screen1.innerText = "cannot use negative numbers with %";
    firstNumber=null;
    operator=null;
    secondNumber=null;
    result=null;
    screenOutput = null;
  }
  switch (operator) {

    case 'x':
      result = (parseFloat(firstNumber)/100)*parseFloat(secondNumber)
      break;
    case '-':
      result = parseFloat(firstNumber)-((parseFloat(firstNumber)/100)*parseFloat(secondNumber))
      break;
    case '+':
      result = parseFloat(firstNumber)+((parseFloat(firstNumber)/100)*parseFloat(secondNumber))
      break;
    default:
      screen1.innerText = "operator not supported when using %";
      firstNumber=null;
      operator=null;
      secondNumber=null;
      result=null;
      screenOutput = null;
      return;
}
screen1.innerText = " result is: " + result;
firstNumber=null;
operator=null;
secondNumber=null;
result=null;
screenOutput = null;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){

if(!operators.includes(buttons[i].innerText))
{
    if(!firstNumber){
      firstNumber = buttons[i].innerText;
      screenOutput = buttons[i].innerText;
    }else if (firstNumber && !operator){
      if (buttons[i].innerText == "+/-"){
        firstNumber *= -1;
      }else{
        firstNumber += buttons[i].innerText;
      }
    }

    if(operator && !secondNumber){
      secondNumber = buttons[i].innerText;
      screenOutput += buttons[i].innerText;
    }else if(operator && secondNumber){
      if (buttons[i].innerText == "+/-"){
      secondNumber *= -1;
        console.log(secondNumber);
      }else{
      secondNumber += buttons[i].innerText;

      }
    }



  } else if (!specialOperators.includes(buttons[i].innerText)){
    operator = buttons[i].innerText;


  }
  if(firstNumber){
      screen1.innerText = firstNumber + " ";
     if(operator){
        screen1.innerText += operator + " ";
       if(secondNumber){
          screen1.innerText += secondNumber + " ";
        }
      }
    }


  })
  if(buttons[i].innerText == '='){
    buttons[i].addEventListener('click', calculateResult)
  }
  if(buttons[i].innerText == '%'){
    buttons[i].addEventListener('click', calculatePercent)
  }
  if(buttons[i].innerText == 'A/C'){
    buttons[i].addEventListener('click', function(){
      firstNumber=null;
      operator=null;
      secondNumber=null;
      screenOutput=null;
    })

  }



}
