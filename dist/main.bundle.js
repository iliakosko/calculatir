/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Commands */ \"./src/scripts/Commands/index.js\");\n/* harmony import */ var _scripts_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Buttons */ \"./src/scripts/Buttons/index.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculatir/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Buttons/allClearButton.js":
/*!***********************************************!*\
  !*** ./src/scripts/Buttons/allClearButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator */ \"./src/scripts/Calculator.js\");\n\r\n\r\nconst allClearButton = document.querySelector('[data-all-clear]')\r\n\r\nallClearButton.addEventListener('click', () => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.clear()\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/allClearButton.js?");

/***/ }),

/***/ "./src/scripts/Buttons/equalsButton.js":
/*!*********************************************!*\
  !*** ./src/scripts/Buttons/equalsButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator */ \"./src/scripts/Calculator.js\");\n\r\n\r\nconst equalsButton = document.querySelector('[data-equals]')\r\n\r\nequalsButton.addEventListener('click', button => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.compute()\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/equalsButton.js?");

/***/ }),

/***/ "./src/scripts/Buttons/index.js":
/*!**************************************!*\
  !*** ./src/scripts/Buttons/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allClearButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allClearButton */ \"./src/scripts/Buttons/allClearButton.js\");\n/* harmony import */ var _tenButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenButton */ \"./src/scripts/Buttons/tenButton.js\");\n/* harmony import */ var _simDegButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simDegButton */ \"./src/scripts/Buttons/simDegButton.js\");\n/* harmony import */ var _equalsButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equalsButton */ \"./src/scripts/Buttons/equalsButton.js\");\n/* harmony import */ var _numberButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numberButtons */ \"./src/scripts/Buttons/numberButtons.js\");\n/* harmony import */ var _operationsButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operationsButton */ \"./src/scripts/Buttons/operationsButton.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/index.js?");

/***/ }),

/***/ "./src/scripts/Buttons/numberButtons.js":
/*!**********************************************!*\
  !*** ./src/scripts/Buttons/numberButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator */ \"./src/scripts/Calculator.js\");\n\r\n\r\nconst numberButtons = document.getElementById('numbers-container')\r\n\r\nnumberButtons.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.appendNumber(event.target.innerText)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/numberButtons.js?");

/***/ }),

/***/ "./src/scripts/Buttons/operationsButton.js":
/*!*************************************************!*\
  !*** ./src/scripts/Buttons/operationsButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator */ \"./src/scripts/Calculator.js\");\n\r\n\r\nconst operationButtons = document.getElementById('simple-math-operations')\r\nconst negButton = document.getElementById('neg')\r\nconst percentButton = document.getElementById('pers')\r\nconst xpowy = document.getElementById('xpowy')\r\nconst ysqrtx = document.getElementById('ysqrtx')\r\n\r\noperationButtons.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.chooseOperation(event.target.innerText)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\nnegButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeWithout(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\npercentButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeWithout(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\nxpowy.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.chooseOperation(event.target.innerText)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\nysqrtx.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.chooseOperation(event.target.innerText)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/operationsButton.js?");

/***/ }),

/***/ "./src/scripts/Buttons/simDegButton.js":
/*!*********************************************!*\
  !*** ./src/scripts/Buttons/simDegButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator */ \"./src/scripts/Calculator.js\");\n\r\n\r\nconst simDegButton = document.getElementById('deg')\r\nconst sqrtButton = document.getElementById('sqrtdeg')\r\n\r\nsimDegButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeDeg(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\nsqrtButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeDeg(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/simDegButton.js?");

/***/ }),

/***/ "./src/scripts/Buttons/tenButton.js":
/*!******************************************!*\
  !*** ./src/scripts/Buttons/tenButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator */ \"./src/scripts/Calculator.js\");\n\r\n\r\nconst tenButton = document.getElementById('pow-buttons')\r\n\r\ntenButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeWithout(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\nconst sqrtButton = document.getElementById('sqrt-buttons')\r\n\r\nsqrtButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeWithout(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\r\nconst facButton = document.getElementById('fac')\r\n\r\nfacButton.addEventListener('click', (event) => {\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.computeWithout(event.target.value)\r\n    _Calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.updateDisplay()\r\n})\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Buttons/tenButton.js?");

/***/ }),

/***/ "./src/scripts/Calculator.js":
/*!***********************************!*\
  !*** ./src/scripts/Calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculator\": () => (/* binding */ calculator)\n/* harmony export */ });\n/* harmony import */ var _Commands_AddCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Commands/AddCommand */ \"./src/scripts/Commands/AddCommand.js\");\n/* harmony import */ var _Commands_SubtCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Commands/SubtCommand */ \"./src/scripts/Commands/SubtCommand.js\");\n/* harmony import */ var _Commands_MultCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Commands/MultCommand */ \"./src/scripts/Commands/MultCommand.js\");\n/* harmony import */ var _Commands_DivCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Commands/DivCommand */ \"./src/scripts/Commands/DivCommand.js\");\n/* harmony import */ var _Commands_SqrtCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Commands/SqrtCommand */ \"./src/scripts/Commands/SqrtCommand.js\");\n/* harmony import */ var _Commands_XDegreeCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Commands/XDegreeCommand */ \"./src/scripts/Commands/XDegreeCommand.js\");\n/* harmony import */ var _Commands_OneCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Commands/OneCommand */ \"./src/scripts/Commands/OneCommand.js\");\n/* harmony import */ var _Commands_TenCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Commands/TenCommand */ \"./src/scripts/Commands/TenCommand.js\");\n/* harmony import */ var _Commands_FactCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Commands/FactCommand */ \"./src/scripts/Commands/FactCommand.js\");\n/* harmony import */ var _Commands_SumbCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Commands/SumbCommand */ \"./src/scripts/Commands/SumbCommand.js\");\n/* harmony import */ var _Commands_PersCommand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Commands/PersCommand */ \"./src/scripts/Commands/PersCommand.js\");\n/* harmony import */ var _Commands_XYDegreeCommand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Commands/XYDegreeCommand */ \"./src/scripts/Commands/XYDegreeCommand.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst previousOperandTextElement = document.querySelector('[data-previous-operand]')\r\nconst currentOperandTextElement = document.querySelector('[data-current-operand]')\r\n\r\nclass Calculator{\r\n    constructor(previousOperandTextElement, currentOperandTextElement) {\r\n        this.previousOperandTextElement = previousOperandTextElement\r\n        this.currentOperandTextElement = currentOperandTextElement\r\n        this.clear()\r\n    }\r\n\r\n    clear() {\r\n        this.currentOperand = ''\r\n        this.previousOperand = ''\r\n        this.operation = undefined\r\n    }\r\n\r\n    appendNumber(number){\r\n        if (number === '.' && this.currentOperand.includes('.')) return\r\n        this.currentOperand = this.currentOperand.toString() + number.toString()\r\n    }\r\n\r\n    chooseOperation(operation){\r\n        if(this.currentOperand === '') return\r\n        console.log(operation)\r\n        if(operation.toLocaleLowerCase() === 'X y'.toLocaleLowerCase()){\r\n            operation = 'x^y'\r\n        }\r\n        if(this.previousOperand !== '') {\r\n            this.compute()\r\n        }\r\n        this.operation = operation\r\n        this.previousOperand = this.currentOperand\r\n        this.currentOperand = ''\r\n    }\r\n\r\n    computeDeg(degree){\r\n        let a = new _Commands_SqrtCommand__WEBPACK_IMPORTED_MODULE_4__.SqrtCommand(this.currentOperand)\r\n        this.currentOperand = a.execute(parseFloat(degree))\r\n    }\r\n\r\n    computeWithout(act){\r\n        let computation, simCommand\r\n        switch (act) {\r\n            case 'one':\r\n                simCommand = new _Commands_OneCommand__WEBPACK_IMPORTED_MODULE_6__.OneCommand(this.currentOperand)\r\n                break\r\n            case 'ten':\r\n                simCommand= new _Commands_TenCommand__WEBPACK_IMPORTED_MODULE_7__.TenCommand(this.currentOperand)\r\n                break\r\n            case 'fac':\r\n                simCommand= new _Commands_FactCommand__WEBPACK_IMPORTED_MODULE_8__.FactCommand(this.currentOperand)\r\n                break\r\n            case 'neg':\r\n                console.log(\"asd\")\r\n                simCommand= new _Commands_SumbCommand__WEBPACK_IMPORTED_MODULE_9__.SumbCommand(this.currentOperand)\r\n                break\r\n            case 'pers':\r\n                console.log(\"asd\")\r\n                simCommand= new _Commands_PersCommand__WEBPACK_IMPORTED_MODULE_10__.PersCommand(this.currentOperand)\r\n                break\r\n            default:\r\n                return\r\n\r\n        }\r\n        this.previousOperand = this.currentOperand\r\n\r\n        computation = simCommand.execute()\r\n        this.currentOperand = computation\r\n    }\r\n\r\n    compute(){\r\n        let computation, simCommand\r\n        const prev = parseFloat(this.previousOperand)\r\n        const current = parseFloat(this.currentOperand)\r\n        if (isNaN(prev) || isNaN(current)) return\r\n        console.log(this.operation)\r\n        switch (this.operation) {\r\n            case '+':\r\n                simCommand = new _Commands_AddCommand__WEBPACK_IMPORTED_MODULE_0__.AddCommand(prev)\r\n                break\r\n            case '-':\r\n                simCommand= new _Commands_SubtCommand__WEBPACK_IMPORTED_MODULE_1__.SubtCommand(prev)\r\n                break\r\n            case '*':\r\n                simCommand= new _Commands_MultCommand__WEBPACK_IMPORTED_MODULE_2__.MultCommand(prev)\r\n                break\r\n            case '/':\r\n                simCommand= new _Commands_DivCommand__WEBPACK_IMPORTED_MODULE_3__.DivCommand(prev)\r\n                break\r\n            case 'x^y':\r\n                simCommand= new _Commands_XDegreeCommand__WEBPACK_IMPORTED_MODULE_5__.XDegreeCommand(prev)\r\n                break\r\n            case 'y√x':\r\n                simCommand= new _Commands_XYDegreeCommand__WEBPACK_IMPORTED_MODULE_11__.XYDegreeCommand(prev)\r\n                break\r\n            default:\r\n                return\r\n        }\r\n        computation = simCommand.execute(current)\r\n        this.currentOperand = computation\r\n        this.operation = undefined\r\n        this.previousOperand = ''\r\n    }\r\n    getDisplayNumber(number) {\r\n        const stringNumber = number.toString()\r\n        const integerDigits = parseFloat(stringNumber.split('.')[0])\r\n        const decimalDigits = stringNumber.split('.')[1]\r\n        let integerDisplay\r\n        if (isNaN(integerDigits)) {\r\n            integerDisplay = ''\r\n        } else {\r\n            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })\r\n        }\r\n        if (decimalDigits != null) {\r\n            return `${integerDisplay}.${decimalDigits}`\r\n        } else {\r\n            return integerDisplay\r\n        }\r\n    }\r\n\r\n    updateDisplay() {\r\n        this.currentOperandTextElement.innerText =\r\n            this.getDisplayNumber(this.currentOperand)\r\n        if (this.operation != null) {\r\n            this.previousOperandTextElement.innerText =\r\n                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`\r\n        } else {\r\n            this.previousOperandTextElement.innerText = ''\r\n        }\r\n    }\r\n\r\n}\r\nconst calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Calculator.js?");

/***/ }),

/***/ "./src/scripts/Commands/AddCommand.js":
/*!********************************************!*\
  !*** ./src/scripts/Commands/AddCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommand\": () => (/* binding */ AddCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass AddCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(currentValue){\r\n        this.value = currentValue + this.value\r\n        return this.value\r\n    }\r\n\r\n    undo(currentValue){\r\n        this.value = currentValue - this.value\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/AddCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/DivCommand.js":
/*!********************************************!*\
  !*** ./src/scripts/Commands/DivCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DivCommand\": () => (/* binding */ DivCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass DivCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(currentValue){\r\n        if(currentValue === 0){\r\n            return 0;\r\n        }else{\r\n            this.value = this.value / currentValue\r\n            return this.value\r\n        }\r\n    }\r\n\r\n    undo(currentValue){\r\n        this.value = currentValue * this.value\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/DivCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/FactCommand.js":
/*!*********************************************!*\
  !*** ./src/scripts/Commands/FactCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FactCommand\": () => (/* binding */ FactCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass FactCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(){\r\n        if (this.value === 0 || this.value === 1)\r\n            return 1;\r\n        for (let i = this.value - 1; i >= 1; i--) {\r\n            this.value *= i;\r\n        }\r\n        return this.value\r\n\r\n    }\r\n\r\n    undo(){\r\n        return 0\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/FactCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/MultCommand.js":
/*!*********************************************!*\
  !*** ./src/scripts/Commands/MultCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MultCommand\": () => (/* binding */ MultCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass MultCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(currentValue){\r\n        this.value = currentValue * this.value\r\n        return this.value\r\n    }\r\n\r\n    undo(currentValue){\r\n        return currentValue / this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/MultCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/OneCommand.js":
/*!********************************************!*\
  !*** ./src/scripts/Commands/OneCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OneCommand\": () => (/* binding */ OneCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass OneCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(){\r\n        this.value = 1 / this.value\r\n        return this.value\r\n    }\r\n\r\n    undo(){\r\n        this.value = this.value**(1/degree)\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/OneCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/PersCommand.js":
/*!*********************************************!*\
  !*** ./src/scripts/Commands/PersCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersCommand\": () => (/* binding */ PersCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass PersCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(){\r\n\r\n        this.value = this.value/100\r\n        return this.value\r\n\r\n    }\r\n\r\n    undo(){\r\n        this.value =  this.value * 100\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/PersCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/SimplCommand.js":
/*!**********************************************!*\
  !*** ./src/scripts/Commands/SimplCommand.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimplCommand\": () => (/* binding */ SimplCommand)\n/* harmony export */ });\nclass SimplCommand{\r\n    constructor(value){\r\n        this.value = value\r\n    }\r\n\r\n    execute(currentValue){}\r\n\r\n    undo(currentValue){}\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/SimplCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/SqrtCommand.js":
/*!*********************************************!*\
  !*** ./src/scripts/Commands/SqrtCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SqrtCommand\": () => (/* binding */ SqrtCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass SqrtCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(degree){\r\n        this.value = this.value** degree\r\n        return this.value\r\n    }\r\n\r\n    undo(degree){\r\n        this.value = this.value**(1/degree)\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/SqrtCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/SubtCommand.js":
/*!*********************************************!*\
  !*** ./src/scripts/Commands/SubtCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubtCommand\": () => (/* binding */ SubtCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass SubtCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n    execute(currentValue){\r\n        this.value = this.value - currentValue\r\n        return this.value\r\n    }\r\n\r\n    undo(currentValue){\r\n        this.value = this.value + currentValue\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/SubtCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/SumbCommand.js":
/*!*********************************************!*\
  !*** ./src/scripts/Commands/SumbCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SumbCommand\": () => (/* binding */ SumbCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass SumbCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(){\r\n\r\n        this.value = (-1) * this.value\r\n        return this.value\r\n\r\n    }\r\n\r\n    undo(){\r\n        this.value = (-1) * this.value\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/SumbCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/TenCommand.js":
/*!********************************************!*\
  !*** ./src/scripts/Commands/TenCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TenCommand\": () => (/* binding */ TenCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass TenCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(){\r\n        this.value = 10**(this.value)\r\n        return this.value\r\n    }\r\n\r\n    undo(){\r\n        return 0\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/TenCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/XDegreeCommand.js":
/*!************************************************!*\
  !*** ./src/scripts/Commands/XDegreeCommand.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XDegreeCommand\": () => (/* binding */ XDegreeCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass XDegreeCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(currentValue){\r\n        var startVal = this.value\r\n        for(var i = 0; i<currentValue-1; i++){\r\n            this.value = this.value* startVal\r\n        }\r\n        return this.value\r\n\r\n    }\r\n\r\n    undo(currentValue){\r\n        var startVal = this.value\r\n        for(var i = 0; i<currentValue-1; i++){\r\n            this.value = this.value/ startVal\r\n        }\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/XDegreeCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/XYDegreeCommand.js":
/*!*************************************************!*\
  !*** ./src/scripts/Commands/XYDegreeCommand.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XYDegreeCommand\": () => (/* binding */ XYDegreeCommand)\n/* harmony export */ });\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n\r\n\r\nclass XYDegreeCommand extends _SimplCommand__WEBPACK_IMPORTED_MODULE_0__.SimplCommand{\r\n\r\n    execute(currentValue){\r\n        if(currentValue !== 0){\r\n            console.log(\"asdfadf\")\r\n            this.value = this.value** (1/currentValue)\r\n        } else{\r\n            return 0\r\n        }\r\n        return this.value\r\n\r\n    }\r\n\r\n    undo(currentValue){\r\n        if(currentValue !== 0){\r\n            this.value = this.value** currentValue\r\n        } else{\r\n            return 0\r\n        }\r\n        return this.value\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/XYDegreeCommand.js?");

/***/ }),

/***/ "./src/scripts/Commands/index.js":
/*!***************************************!*\
  !*** ./src/scripts/Commands/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommand\": () => (/* reexport safe */ _AddCommand__WEBPACK_IMPORTED_MODULE_0__.AddCommand),\n/* harmony export */   \"DivCommand\": () => (/* reexport safe */ _DivCommand__WEBPACK_IMPORTED_MODULE_1__.DivCommand),\n/* harmony export */   \"FactCommand\": () => (/* reexport safe */ _FactCommand__WEBPACK_IMPORTED_MODULE_2__.FactCommand),\n/* harmony export */   \"MultCommand\": () => (/* reexport safe */ _MultCommand__WEBPACK_IMPORTED_MODULE_3__.MultCommand),\n/* harmony export */   \"OneCommand\": () => (/* reexport safe */ _OneCommand__WEBPACK_IMPORTED_MODULE_4__.OneCommand),\n/* harmony export */   \"PersCommand\": () => (/* reexport safe */ _PersCommand__WEBPACK_IMPORTED_MODULE_5__.PersCommand),\n/* harmony export */   \"SimplCommand\": () => (/* reexport safe */ _SimplCommand__WEBPACK_IMPORTED_MODULE_6__.SimplCommand),\n/* harmony export */   \"SqrtCommand\": () => (/* reexport safe */ _SqrtCommand__WEBPACK_IMPORTED_MODULE_7__.SqrtCommand),\n/* harmony export */   \"SubtCommand\": () => (/* reexport safe */ _SubtCommand__WEBPACK_IMPORTED_MODULE_8__.SubtCommand),\n/* harmony export */   \"SumbCommand\": () => (/* reexport safe */ _SumbCommand__WEBPACK_IMPORTED_MODULE_9__.SumbCommand),\n/* harmony export */   \"TenCommand\": () => (/* reexport safe */ _TenCommand__WEBPACK_IMPORTED_MODULE_10__.TenCommand),\n/* harmony export */   \"XDegreeCommand\": () => (/* reexport safe */ _XDegreeCommand__WEBPACK_IMPORTED_MODULE_11__.XDegreeCommand),\n/* harmony export */   \"XYDegreeCommand\": () => (/* reexport safe */ _XYDegreeCommand__WEBPACK_IMPORTED_MODULE_12__.XYDegreeCommand)\n/* harmony export */ });\n/* harmony import */ var _AddCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCommand */ \"./src/scripts/Commands/AddCommand.js\");\n/* harmony import */ var _DivCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DivCommand */ \"./src/scripts/Commands/DivCommand.js\");\n/* harmony import */ var _FactCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FactCommand */ \"./src/scripts/Commands/FactCommand.js\");\n/* harmony import */ var _MultCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultCommand */ \"./src/scripts/Commands/MultCommand.js\");\n/* harmony import */ var _OneCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OneCommand */ \"./src/scripts/Commands/OneCommand.js\");\n/* harmony import */ var _PersCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PersCommand */ \"./src/scripts/Commands/PersCommand.js\");\n/* harmony import */ var _SimplCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SimplCommand */ \"./src/scripts/Commands/SimplCommand.js\");\n/* harmony import */ var _SqrtCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SqrtCommand */ \"./src/scripts/Commands/SqrtCommand.js\");\n/* harmony import */ var _SubtCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubtCommand */ \"./src/scripts/Commands/SubtCommand.js\");\n/* harmony import */ var _SumbCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SumbCommand */ \"./src/scripts/Commands/SumbCommand.js\");\n/* harmony import */ var _TenCommand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TenCommand */ \"./src/scripts/Commands/TenCommand.js\");\n/* harmony import */ var _XDegreeCommand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./XDegreeCommand */ \"./src/scripts/Commands/XDegreeCommand.js\");\n/* harmony import */ var _XYDegreeCommand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./XYDegreeCommand */ \"./src/scripts/Commands/XYDegreeCommand.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculatir/./src/scripts/Commands/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;