// TODO: this file! :)
// select disiered elements
const addNumberButton = document.getElementById('addNumber');
const sortOneButton = document.getElementById('sortOne');
const sortAllButton = document.getElementById('sortAll');
const numberInput = document.getElementById('numberInput');
const numberBank = document.getElementById('numberBank');
const inputValue = document.querySelector("input")
const outPutValue = document.querySelector(".numoutput")
const evenOutPut = document.querySelector("#even")
const oddOutPut = document.querySelector('#odd')
// Number bank array to store entered numbers
const numberBankArray = [];
const even = [];
const odd = [];
function render() {
  const numbers = numberBankArray.map((num) => {
    return `<span>${num}</span>`
  })
  outPutValue.innerHTML = numbers.join(" ")
const evenValue = even.map((num) => {
 return `<span>${num}</span>`
})
evenOutPut.innerHTML = evenValue.join(" ")
const oddValue = odd.map((num)=> {
  return `<span>${num}</span>`
})
oddOutPut.innerHTML = oddValue.join(" ")


}
addNumberButton.addEventListener("click", function (e) {
  e.preventDefault()
  // console.log(`hello`)
  const valueNumber = parseInt(inputValue.value);

  numberBankArray.push(valueNumber)


  render()
});

sortOneButton.addEventListener('click', function (e) {
//grab the number from bank
let firstNum = numberBankArray[0]

// remove the number from the bank
numberBankArray.shift();
// determine if the number is odd or even

// once determined the move to its approprite spot of odd or even
if (firstNum % 2 === 0) {
  even.push(firstNum)
} else {
odd.push(firstNum)
}

});

sortAllButton.addEventListener('click', function (e) {
  while(numberBankArray.length > 0) {
    let firstNum = numberBankArray[0]

    // remove the number from the bank
    numberBankArray.shift();
    // determine if the number is odd or even
    
    // once determined the move to its approprite spot of odd or even
    if (firstNum % 2 === 0) {
      even.push(firstNum)
    } else {
      odd.push(firstNum)
    }
  }
  // once determined the move to its approprite spot of odd or even
  
  render()
  });
