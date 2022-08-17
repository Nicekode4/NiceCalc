
const bTn = document.querySelector('#bTn')
const numberOne = document.querySelector('#numberOne')
function udregn() {
    let value = numberOne.value
    value = value.split(",").join(".")
    console.log(eval(value));
    document.querySelector('#result').innerHTML = eval(value)
}
function add(obj) {
    numberOne.value = numberOne.value + obj.innerHTML
}
