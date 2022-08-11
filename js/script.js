let option = document.querySelector('#operator')
const bTn = document.querySelector('#bTn')
const numberOne = document.querySelector('#numberOne')
const numberTwo = document.querySelector('#numberTwo')
let errors = [
  "GxM3wstBcD4",
  "-8lDYrvTILc",
]
console.log(errors[Math.floor(Math.random() * errors.length)]);
change()
function udregn() {
  if (option.value == "/") {
    if (parseInt(numberOne.value) == 0 || parseInt(numberTwo.value) == 0) {
    document.querySelector('#fieldset').style.display = "none"
    document.querySelector('#myDiv').style.display = "block"
    
    document.querySelector('#myIframe').src = "https://youtube.com/embed/" + errors[Math.floor(Math.random() * errors.length)] + "?autoplay=1"
    interval = setInterval(() => {
      document.querySelector('#fieldset').style.display = "block"
      document.querySelector('#myDiv').style.display = "none"
      document.querySelector('#myIframe').src = ""
      clearInterval(interval)
    }, 30000);
  }
  
    
  }else{
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
    
    
}
function change() {
    document.querySelector('#shownOperator').innerHTML = option.value
}
bTn.addEventListener('click', function(){
    udregn()
})
