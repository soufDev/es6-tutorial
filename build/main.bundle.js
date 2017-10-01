/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mortage__ = __webpack_require__(1);\n\n\ndocument.getElementById('calcBtn').addEventListener('click', function () {\n    var principal = document.getElementById(\"principal\").value;\n    var years = document.getElementById(\"years\").value;\n    var rate = document.getElementById(\"rate\").value;\n\n    var _calculateAmortizatio = Object(__WEBPACK_IMPORTED_MODULE_0__mortage__[\"a\" /* calculateAmortization */])(principal, years, rate),\n        monthlyPayment = _calculateAmortizatio.monthlyPayment,\n        monthlyRate = _calculateAmortizatio.monthlyRate,\n        amortization = _calculateAmortizatio.amortization;\n\n    document.getElementById(\"monthlyPayment\").innerHTML = monthlyPayment.toFixed(2);\n    document.getElementById(\"monthlyRate\").innerHTML = (monthlyRate * 100).toFixed(2);\n    amortization.forEach(function (month) {\n        return console.log(month);\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tYWluLmpzPzc3YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYWxjdWxhdGVBbW9ydGl6YXRpb259IGZyb20gJy4vbW9ydGFnZSdcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGNCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmluY2lwYWxcIikudmFsdWU7XG4gICAgbGV0IHllYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc1wiKS52YWx1ZTtcbiAgICBsZXQgcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0ZVwiKS52YWx1ZTtcbiAgICBsZXQge21vbnRobHlQYXltZW50LCBtb250aGx5UmF0ZSwgYW1vcnRpemF0aW9ufSA9IGNhbGN1bGF0ZUFtb3J0aXphdGlvbihwcmluY2lwYWwsIHllYXJzLCByYXRlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRobHlQYXltZW50XCIpLmlubmVySFRNTCA9IG1vbnRobHlQYXltZW50LnRvRml4ZWQoMik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aGx5UmF0ZVwiKS5pbm5lckhUTUwgPSAobW9udGhseVJhdGUgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgYW1vcnRpemF0aW9uLmZvckVhY2gobW9udGggPT4gY29uc29sZS5sb2cobW9udGgpKVxufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL21haW4uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export calculateMonthlyPayment */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return calculateAmortization; });\n\nvar calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {\n    var monthlyRate = 0;\n    if (rate) {\n        monthlyRate = rate / 100 / 12;\n    }\n    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));\n    return { principal: principal, years: years, rate: rate, monthlyPayment: monthlyPayment, monthlyRate: monthlyRate };\n};\n\nvar calculateAmortization = function calculateAmortization(principal, years, rate) {\n    var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate),\n        monthlyRate = _calculateMonthlyPaym.monthlyRate,\n        monthlyPayment = _calculateMonthlyPaym.monthlyPayment;\n\n    var balance = principal;\n    var amortization = [];\n    for (var y = 0; y < years; y++) {\n        var interestY = 0;\n        var principalY = 0;\n        for (var m = 0; m < 12; m++) {\n            var interestM = balance * monthlyRate;\n            var principalM = monthlyPayment - interestM;\n            interestY += interestM;\n            principalY += principalM;\n            balance -= principalM;\n        }\n        amortization.push({ principalY: principalY, interestY: interestY, balance: balance });\n    }\n    return { monthlyPayment: monthlyPayment, monthlyRate: monthlyRate, amortization: amortization };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tb3J0YWdlLmpzPzBlZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgbGV0IGNhbGN1bGF0ZU1vbnRobHlQYXltZW50ID0gKHByaW5jaXBhbCwgeWVhcnMsIHJhdGUpID0+IHtcbiAgICBsZXQgbW9udGhseVJhdGUgPSAwXG4gICAgaWYgKHJhdGUpIHtcbiAgICAgICAgbW9udGhseVJhdGUgPSByYXRlIC8gMTAwIC8gMTJcbiAgICB9XG4gICAgbGV0IG1vbnRobHlQYXltZW50ID0gcHJpbmNpcGFsICogbW9udGhseVJhdGUgLyAoMSAtIChNYXRoLnBvdygxIC8gKDEgKyBtb250aGx5UmF0ZSksIHllYXJzICogMTIpKSlcbiAgICByZXR1cm4ge3ByaW5jaXBhbCwgeWVhcnMsIHJhdGUsIG1vbnRobHlQYXltZW50LCBtb250aGx5UmF0ZX1cbn1cblxuZXhwb3J0IGxldCBjYWxjdWxhdGVBbW9ydGl6YXRpb24gPSAocHJpbmNpcGFsLCB5ZWFycywgcmF0ZSkgPT4ge1xuICAgIGxldCB7bW9udGhseVJhdGUsIG1vbnRobHlQYXltZW50fSA9IGNhbGN1bGF0ZU1vbnRobHlQYXltZW50KHByaW5jaXBhbCwgeWVhcnMsIHJhdGUpXG4gICAgbGV0IGJhbGFuY2UgPSBwcmluY2lwYWxcbiAgICBsZXQgYW1vcnRpemF0aW9uID0gW11cbiAgICBmb3IobGV0IHk9MDsgeTx5ZWFycyA7IHkrKykge1xuICAgICAgICBsZXQgaW50ZXJlc3RZID0gMFxuICAgICAgICBsZXQgcHJpbmNpcGFsWSA9IDBcbiAgICAgICAgZm9yKGxldCBtPTA7IG08MTIgOyBtKyspe1xuICAgICAgICAgICAgbGV0IGludGVyZXN0TSA9IGJhbGFuY2UgKiBtb250aGx5UmF0ZVxuICAgICAgICAgICAgbGV0IHByaW5jaXBhbE0gPSBtb250aGx5UGF5bWVudCAtIGludGVyZXN0TVxuICAgICAgICAgICAgaW50ZXJlc3RZICs9ICBpbnRlcmVzdE1cbiAgICAgICAgICAgIHByaW5jaXBhbFkgKz0gIHByaW5jaXBhbE1cbiAgICAgICAgICAgIGJhbGFuY2UgLT0gIHByaW5jaXBhbE1cbiAgICAgICAgfVxuICAgICAgICBhbW9ydGl6YXRpb24ucHVzaCh7cHJpbmNpcGFsWSwgaW50ZXJlc3RZLCBiYWxhbmNlfSlcbiAgICB9XG4gICAgcmV0dXJuIHttb250aGx5UGF5bWVudCwgbW9udGhseVJhdGUsIGFtb3J0aXphdGlvbn1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvbW9ydGFnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);