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
    return;
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
    // have any of the "special buttons" been clicked
    switch (value) {
      case '=':
        // calculate the answer
        this.calcAnswer(this.displayText)
        break;
      case 'AC':
        // clear screen and stored values
        this.clearAll()
        break;
      case '.':
        if (this.displayText == 0) {
          // pass '0.' into text method
          this.addText('0.')
        } else {
          // add value to text string
          this.addText(value)
        }
        break;
      default:
        // add value to text string
        this.addText(value)
        break;
    }
  },
  addText(value) {
    if (this.displayText === '0') {
      this.displayText = ''
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal
      this.prevTotal = null
    }
    if (isNaN(+(value)) && isNaN(+(this.displayText))) {
      if(isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value
    // output display text to screen
    this.outputText(this.displayText)
  },
  outputText(text) {
    document.querySelector('.screen').innerHTML = text;
  },
  calcAnswer(equation) {
    let result = Function("return " + equation)()
    this.outputText(result)
  },
  clearAll() {
    this.displayText = '0',
    this.prevTotal = null,
    this.outputText(this.displayText)
  }
}
