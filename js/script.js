let option = document.querySelector('#operator')
const bTn = document.querySelector('#bTn')
const numberOne = document.querySelector('#numberOne')

change()
function udregn() {
    
}
function change() {
    document.querySelector('#shownOperator').innerHTML = option.value
}
bTn.addEventListener('click', function(){
    udregn()
})
