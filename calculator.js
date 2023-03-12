// Required abilities of calculator:
// accept user inputs of number, operator, and another number
// should accept decimal numbers
// store inputs
// recognize inputs and perform calculations
// return a result

// Optional Features:
// should accept longer arithmetic operations
// display all input as it is being entered
// store previous total as start of next operation
// clear button should clear all entries
// should prevent invalid inputs

const keys = document.querySelector('.calculator-main-body')
keys.addEventListener('click', (event) => {
  const { target } = event
  const { value } = target
  if (!target.matches('button')) {
    return
  } else {
    // pass value to parse method
    calculator.parseInput(value)
    // console.log(event.target.value)
  }
})

const calculator = {
  displayText: '0',
  prevTotal: null,

  parseInput(value) {
    if (this.displayText === '0') {
      this.displayText === ''
    }
    // have any of the "special buttons" been clicked
    switch (value) {
      case '=':
        // calculate the answer
        break
      case 'AC':
        // clear screen and stored values
        break
      case '.':
        if (this.displayText === '0') {
          // pass '0.' into text method
        } else {
          // add value to text string
        }
    }

    addText(value)
  },
}
