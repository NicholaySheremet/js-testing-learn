/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { checkAndGenerate, createElement} = __webpack_require__(/*! ./util */ \"./util.js\");\r\n\r\nconst initApp = () => {\r\n  // Initializes the app, registers the button click listener\r\n  const newUserButton = document.querySelector('#btnAddUser');\r\n  newUserButton.addEventListener('click', addUser);\r\n};\r\n\r\nconst addUser = () => {\r\n  // Fetches the user input, creates a new HTML element based on it\r\n  // and appends the element to the DOM\r\n  const newUserNameInput = document.querySelector('input#name');\r\n  const newUserAgeInput = document.querySelector('input#age');\r\n\r\n  const userList = document.querySelector('.user-list');\r\n  const outputText = checkAndGenerate(\r\n    newUserNameInput.value,\r\n    newUserAgeInput.value\r\n  );\r\n\r\n  if (!outputText) {\r\n    return;\r\n  }\r\n  \r\n  const element = createElement('li', outputText, 'user-item');\r\n  userList.appendChild(element);\r\n};\r\n\r\n// Start the app!\r\ninitApp();\r\n\n\n//# sourceURL=webpack://js-testing-learn/./app.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports) {

eval("exports.generateText = (name, age) => {\r\n  // Returns output text\r\n  return `${name} (${age} years old)`;\r\n};\r\n\r\nexports.createElement = (type, text, className) => {\r\n  // Creates a new HTML element and returns it\r\n  const newElement = document.createElement(type);\r\n  newElement.classList.add(className);\r\n  newElement.textContent = text;\r\n  return newElement;\r\n};\r\n\r\nexports.validateInput = (text, notEmpty, isNumber) => {\r\n  // Validate user input with two pre-defined rules\r\n  if (!text) {\r\n    return false;\r\n  }\r\n  if (notEmpty && text.trim().length === 0) {\r\n    return false;\r\n  }\r\n  if (isNumber && +text === NaN) {\r\n    return false;\r\n  }\r\n  return true;\r\n};\r\n\r\nexports.checkAndGenerate = (name, age) => {\r\n  if (\r\n    !this.validateInput(name, true, false) ||\r\n    !this.validateInput(age, false, true)\r\n  ) {\r\n    return false;\r\n  }\r\n  return this.generateText(name, age);\r\n}\n\n//# sourceURL=webpack://js-testing-learn/./util.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;