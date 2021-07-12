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
var result;


function calculateResult(){

  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);

if (secondNumber != null){
  switch (operator) {
    case '/':
      result = (firstNumber/secondNumber)
      break;
    case 'x':
      result = (firstNumber*secondNumber)
      break;
    case '-':
      result = (firstNumber-secondNumber)
      break;
    case '+':
      result = (parseint(firstNumber)+parseint(secondNumber))
      break;
    default:
}
screen1.innerText = " result is: " + result;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    screen1.innerHTML = buttons[i].innerHTML;
    if(!firstNumber){
      firstNumber= buttons[i].innerText;
    }else if(!operator){
      operator= buttons[i].innerText;
    }else if(!secondNumber){
      secondNumber= buttons[i].innerText;
    }
  })
  if(buttons[i].innerText == '='){
    buttons[i].addEventListener('click', calculateResult)
  }
  if(buttons[i].innerText == 'A/C'){
    buttons[i].addEventListener('click', function(){
      firstNumber=null;
      operator=null;
      secondNumber=null;
    })

  }

}
