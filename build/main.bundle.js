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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mortage__ = __webpack_require__(1);\n\n\ndocument.getElementById('calcBtn').addEventListener('click', function () {\n    var principal = document.getElementById(\"principal\").value;\n    var years = document.getElementById(\"years\").value;\n    var rate = document.getElementById(\"rate\").value;\n    var mortgage = new __WEBPACK_IMPORTED_MODULE_0__mortage__[\"a\" /* default */](principal, years, rate);\n\n    document.getElementById(\"monthlyPayment\").innerHTML = mortgage.monthlyPayment.toFixed(2);\n    document.getElementById(\"monthlyRate\").innerHTML = (rate / 12).toFixed(2);\n    var html = \"\";\n    mortgage.amortization.forEach(function (year, index) {\n        return html += '\\n        <tr>\\n            <td>' + (index + 1) + '</td>\\n            <td class=\"currency\">' + Math.round(year.principalY) + '</td>\\n            <td class=\"stretch\">\\n                <div class=\"flex\">\\n                    <div class=\"bar principal\"\\n                         style=\"flex:' + year.principalY + ';-webkit-flex:' + year.principalY + '\">\\n                    </div>\\n                    <div class=\"bar interest\"\\n                         style=\"flex:' + year.interestY + ';-webkit-flex:' + year.interestY + '\">\\n                    </div>\\n                </div>\\n            </td>\\n            <td class=\"currency left\">' + Math.round(year.interestY) + '</td>\\n            <td class=\"currency\">' + Math.round(year.balance) + '</td>\\n        </tr>\\n    ';\n    });\n    document.getElementById(\"amortizations\").innerHTML = html;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tYWluLmpzPzc3YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vcnRnYWdlIGZyb20gJy4vbW9ydGFnZSdcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGNCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmluY2lwYWxcIikudmFsdWU7XG4gICAgbGV0IHllYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc1wiKS52YWx1ZTtcbiAgICBsZXQgcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgbW9ydGdhZ2U9ICBuZXcgTW9ydGdhZ2UocHJpbmNpcGFsLCB5ZWFycywgcmF0ZSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRobHlQYXltZW50XCIpLmlubmVySFRNTCA9IG1vcnRnYWdlLm1vbnRobHlQYXltZW50LnRvRml4ZWQoMik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aGx5UmF0ZVwiKS5pbm5lckhUTUwgPSAocmF0ZSAvIDEyKS50b0ZpeGVkKDIpO1xuICAgIGxldCBodG1sPVwiXCJcbiAgICBtb3J0Z2FnZS5hbW9ydGl6YXRpb24uZm9yRWFjaCgoeWVhciwgaW5kZXgpID0+IGh0bWwgKz0gYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+JHtpbmRleCArIDF9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImN1cnJlbmN5XCI+JHtNYXRoLnJvdW5kKHllYXIucHJpbmNpcGFsWSl9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyIHByaW5jaXBhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmbGV4OiR7eWVhci5wcmluY2lwYWxZfTstd2Via2l0LWZsZXg6JHt5ZWFyLnByaW5jaXBhbFl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyIGludGVyZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZsZXg6JHt5ZWFyLmludGVyZXN0WX07LXdlYmtpdC1mbGV4OiR7eWVhci5pbnRlcmVzdFl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImN1cnJlbmN5IGxlZnRcIj4ke01hdGgucm91bmQoeWVhci5pbnRlcmVzdFkpfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJjdXJyZW5jeVwiPiR7TWF0aC5yb3VuZCh5ZWFyLmJhbGFuY2UpfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgYFxuICAgIClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3J0aXphdGlvbnNcIikuaW5uZXJIVE1MID0gaHRtbFxufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL21haW4uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBbUJBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mortage = function () {\n    function Mortage(principal, years, rate) {\n        _classCallCheck(this, Mortage);\n\n        this.principal = principal;\n        this.years = years;\n        this.rate = rate;\n    }\n\n    _createClass(Mortage, [{\n        key: \"monthlyPayment\",\n        get: function get() {\n            var monthlyRate = this.rate / 100 / 12;\n            return this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));\n        }\n    }, {\n        key: \"amortization\",\n        get: function get() {\n            var monthlyPayment = this.monthlyPayment;\n            var monthlyRate = this.rate / 100 / 12;\n            var balance = this.principal;\n            var amortization = [];\n            for (var y = 0; y < this.years; y++) {\n                var interestY = 0;\n                var principalY = 0;\n                for (var m = 0; m < 12; m++) {\n                    var interestM = balance * monthlyRate;\n                    var principalM = monthlyPayment - interestM;\n                    interestY += interestM;\n                    principalY += principalM;\n                    balance -= principalM;\n                }\n                amortization.push({ principalY: principalY, interestY: interestY, balance: balance });\n            }\n            return amortization;\n        }\n    }]);\n\n    return Mortage;\n}();\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Mortage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tb3J0YWdlLmpzPzBlZGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9ydGFnZSB7XG4gICAgY29uc3RydWN0b3IocHJpbmNpcGFsLCB5ZWFycywgcmF0ZSkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbCA9IHByaW5jaXBhbFxuICAgICAgICB0aGlzLnllYXJzID0geWVhcnNcbiAgICAgICAgdGhpcy5yYXRlID0gcmF0ZVxuICAgIH1cblxuICAgIGdldCBtb250aGx5UGF5bWVudCgpIHtcbiAgICAgICAgbGV0IG1vbnRobHlSYXRlID0gdGhpcy5yYXRlIC8gMTAwIC8gMTJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsICogbW9udGhseVJhdGUgLyAoMSAtIChNYXRoLnBvdyggMSAvICggMSttb250aGx5UmF0ZSApLCB0aGlzLnllYXJzICogMTIgKSApIClcbiAgICB9XG5cbiAgICBnZXQgYW1vcnRpemF0aW9uKCkge1xuICAgICAgICBsZXQgbW9udGhseVBheW1lbnQgPSB0aGlzLm1vbnRobHlQYXltZW50XG4gICAgICAgIGxldCBtb250aGx5UmF0ZSA9IHRoaXMucmF0ZSAvIDEwMCAvIDEyXG4gICAgICAgIGxldCBiYWxhbmNlID0gdGhpcy5wcmluY2lwYWxcbiAgICAgICAgbGV0IGFtb3J0aXphdGlvbiA9IFtdXG4gICAgICAgIGZvcihsZXQgeT0wOyB5PHRoaXMueWVhcnMgOyB5KyspIHtcbiAgICAgICAgICAgIGxldCBpbnRlcmVzdFkgPSAwXG4gICAgICAgICAgICBsZXQgcHJpbmNpcGFsWSA9IDBcbiAgICAgICAgICAgIGZvcihsZXQgbT0wOyBtPDEyIDsgbSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJlc3RNID0gYmFsYW5jZSAqIG1vbnRobHlSYXRlXG4gICAgICAgICAgICAgICAgbGV0IHByaW5jaXBhbE0gPSBtb250aGx5UGF5bWVudCAtIGludGVyZXN0TVxuICAgICAgICAgICAgICAgIGludGVyZXN0WSArPSAgaW50ZXJlc3RNXG4gICAgICAgICAgICAgICAgcHJpbmNpcGFsWSArPSAgcHJpbmNpcGFsTVxuICAgICAgICAgICAgICAgIGJhbGFuY2UgLT0gIHByaW5jaXBhbE1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFtb3J0aXphdGlvbi5wdXNoKHtwcmluY2lwYWxZLCBpbnRlcmVzdFksIGJhbGFuY2V9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbW9ydGl6YXRpb25cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL21vcnRhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBOUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);