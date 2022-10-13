class SimplCommand{
    constructor(value){
        this.value = value
    }

    execute(currentValue){}

    undo(currentValue){}
}

class AddCommand extends SimplCommand{
   
    execute(currentValue){
        this.value = currentValue + this.value
        return this.value
    }

    undo(currentValue){
        this.value = currentValue - this.value
        return this.value
    }
}

class SubtCommand extends SimplCommand{
    execute(currentValue){
        this.value = this.value - currentValue 
        return this.value
    }

    undo(currentValue){
        this.value = this.value + currentValue
        return this.value
    }
}

class MultCommand extends SimplCommand{

    execute(currentValue){
        this.value = currentValue * this.value
        return this.value
    }

    undo(currentValue){
        return currentValue / this.value
    }
}

class DivCommand extends SimplCommand{

    execute(currentValue){
        this.value = this.value / currentValue 
        return this.value
    }

    undo(currentValue){
        this.value = currentValue * this.value
        return this.value 
    }
}


class SqrtCommand extends SimplCommand{

    execute(degree){
        this.value = this.value**(degree)
        return this.value
    }

    undo(degree){
        this.value = this.value**(1/degree)
        return this.value
    }
}


class OneCommand extends SimplCommand{

    execute(){
        this.value = 1 / this.value
        return this.value
    }

    undo(){
        this.value = this.value**(1/degree)
        return this.value
    }
}

class TenCommand extends SimplCommand{

    execute(){
        this.value = 10**(this.value)
        return this.value
    }

    undo(){
        return 0
    }
}


class FactCommand extends SimplCommand{

    execute(){
        if (this.value === 0 || this.value === 1)
            return 1;
        for (let i = this.value - 1; i >= 1; i--) {
            this.value *= i;
        }
        return this.value
    
    }

    undo(){
        return 0
    }
}


class SumbCommand extends SimplCommand{

    execute(){
        
        this.value = (-1) * this.value
        return this.value
    
    }

    undo(){
        this.value = (-1) * this.value
        return this.value
    }
}




class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    computeDeg(degree){
        let a = new SqrtCommand(this.currentOperand)
        this.currentOperand = a.execute(parseFloat(degree))
    }

    computeWithout(act){
        let computation, simCommand
        switch (act) {
            case 'one':
                simCommand = new OneCommand(this.currentOperand)
                break
            case 'ten':
                simCommand= new TenCommand(this.currentOperand)
                
                break
            default:
                return
                
        }
        this.previousOperand = this.currentOperand
        
        computation = simCommand.execute()
        this.currentOperand = computation
    }

    compute(){
        let computation, simCommand
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
        case '+':
            simCommand = new AddCommand(prev)
            break
        case '-':
            simCommand= new SubtCommand(prev)
            break
        case '*':
            simCommand= new MultCommand(prev)
            break
        case '/':
            simCommand= new DivCommand(prev)
            break
        default:
            return
        }
        computation = simCommand.execute(current)
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
          this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
          this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
          this.previousOperandTextElement.innerText = ''
        }
      }

}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const tenButton = document.querySelector('[data-ten]')
const simDegButton = document.querySelectorAll('[data-deg]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

simDegButton.forEach(button => {button.addEventListener('click', () => {
    calculator.computeDeg(button.dataset.myatt)
    calculator.updateDisplay()
})

})

numberButtons.forEach(button => {button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
    })
})

tenButton.addEventListener('click', button => {
    calculator.computeWithout(tenButton.dataset.myatt)
    calculator.updateDisplay()
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
