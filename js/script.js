let option = document.querySelector('#operator')
const bTn = document.querySelector('#bTn')
const numberOne = document.querySelector('#numberOne')
const numberTwo = document.querySelector('#numberTwo')
change()
function udregn() {
    if (option.value == "+") {
      console.log(parseInt(numberOne.value) + parseInt(numberTwo.value));  
    }
    if (option.value == "-") {
        console.log(parseInt(numberOne.value) - parseInt(numberTwo.value));  
      }
      if (option.value == "*") {
        console.log(parseInt(numberOne.value) * parseInt(numberTwo.value));  
      }
      if (option.value == "/") {
        console.log(parseInt(numberOne.value) / parseInt(numberTwo.value));  
      }
    
}
function change() {
    document.querySelector('#shownOperator').innerHTML = option.value
}
bTn.addEventListener('click', function(){
    udregn()
})
