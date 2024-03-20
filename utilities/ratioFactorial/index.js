const factorialOfNumber = require('../factorial/index')
const ratioOfTwoNumbers = require('../ratio/index')

function ratioAndFactorial(num1, num2, num) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num),
  }
}

module.exports = ratioAndFactorial
