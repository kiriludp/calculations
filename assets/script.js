const numBtn = document.querySelectorAll('[data-number]');
const opsBtn = document.querySelectorAll('[data-operator]');
const eqlsBtn = document.querySelectorAll('[data-equals]');
const delBtn = document.querySelectorAll('[data-delete]');
const allClearBtn = document.querySelectorAll('[data-all-clear]');
const prevEl = document.getElementById('prev');
const curEl = document.getElementById('cur');

const calculator = new Calculator(prevEl, curEl)


class Calculator {
    constructor(prevEl, curEl) {
        this.prevEl = prevEl
        this.curEl = curEl
        this.clear()
    }


    clear() {

        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, 1)

    }

    appendNumber(number) {
        if (number === ' . ' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
                default:
                    return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    } {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let (isNaN(integerDigits)) {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
    }

    getDisplayNumber(number)

    updateDisplay() {

    }
}