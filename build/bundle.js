/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domains/wppconnect/classes/controller.ts":
/*!******************************************************!*\
  !*** ./src/domains/wppconnect/classes/controller.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WppconnectController = /** @class */ (function () {
    function WppconnectController() {
    }
    WppconnectController.greet = function (request, reply) {
        return reply.send({ msg: 'Hello zAPI' });
    };
    return WppconnectController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WppconnectController);


/***/ }),

/***/ "./src/domains/wppconnect/router/v1.ts":
/*!*********************************************!*\
  !*** ./src/domains/wppconnect/router/v1.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Domains_wppconnect_classes_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Domains/wppconnect/classes/controller */ "./src/domains/wppconnect/classes/controller.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (server, options, next) {
    server.get('/wpp', function (request, reply) {
        void _Domains_wppconnect_classes_controller__WEBPACK_IMPORTED_MODULE_0__["default"].greet(request, reply);
    });
    next();
});


/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify */ "fastify");
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Domains_wppconnect_router_v1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Domains/wppconnect/router/v1 */ "./src/domains/wppconnect/router/v1.ts");



var server = fastify__WEBPACK_IMPORTED_MODULE_0___default()({
    logger: {
        level: process.env.LOG_LEVEL || 'info',
    },
});
void server.register(_Domains_wppconnect_router_v1__WEBPACK_IMPORTED_MODULE_2__["default"], { prefix: '/v1' });
server.get('/', function (request, reply) {
    void reply.send({ message: 'KORREKT' }).status(200);
});
var serverConfig = {
    port: process.env.API_PORT || 3000,
    address: process.env.API_HOST || '0.0.0.0',
};
server.listen(serverConfig.port, serverConfig.address, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info("Server listening at " + address);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFIUSwwQkFBSyxHQUFaLFVBQWEsT0FBdUIsRUFBRSxLQUFtQjtRQUN2RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5RTtBQUUxRSxpRUFBZSxVQUFDLE1BQXVCLEVBQUUsT0FBNkIsRUFBRSxJQUFzQjtJQUM1RixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFDLE9BQXVCLEVBQUUsS0FBbUI7UUFDOUQsS0FBSyxvRkFBMEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsRUFBQzs7Ozs7Ozs7Ozs7QUNSRjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNQO0FBQ2lDO0FBRXhELElBQU0sTUFBTSxHQUFHLDhDQUFPLENBQUM7SUFDckIsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLE1BQU07S0FDdkM7Q0FDRixDQUFDLENBQUM7QUFFSCxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMscUVBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRXJELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTyxFQUFFLEtBQUs7SUFDN0IsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxZQUFZLEdBQUc7SUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUk7SUFDbEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVM7Q0FDM0MsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87SUFDbEUsSUFBSSxHQUFHLEVBQUU7UUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXVCLE9BQVMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzbW9kZWxsLy4vc3JjL2RvbWFpbnMvd3BwY29ubmVjdC9jbGFzc2VzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZGFzbW9kZWxsLy4vc3JjL2RvbWFpbnMvd3BwY29ubmVjdC9yb3V0ZXIvdjEudHMiLCJ3ZWJwYWNrOi8vZGFzbW9kZWxsL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovL2Rhc21vZGVsbC9leHRlcm5hbCBjb21tb25qcyBcImZhc3RpZnlcIiIsIndlYnBhY2s6Ly9kYXNtb2RlbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFzbW9kZWxsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rhc21vZGVsbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGFzbW9kZWxsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFzbW9kZWxsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGFzbW9kZWxsLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFzdGlmeVJlcGx5LCBGYXN0aWZ5UmVxdWVzdCB9IGZyb20gJ2Zhc3RpZnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcHBjb25uZWN0Q29udHJvbGxlciB7XG4gIHN0YXRpYyBncmVldChyZXF1ZXN0OiBGYXN0aWZ5UmVxdWVzdCwgcmVwbHk6IEZhc3RpZnlSZXBseSk6IEZhc3RpZnlSZXBseSB7XG4gICAgcmV0dXJuIHJlcGx5LnNlbmQoeyBtc2c6ICdIZWxsbyB6QVBJJyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmFzdGlmeUluc3RhbmNlLCBGYXN0aWZ5UGx1Z2luT3B0aW9ucywgRmFzdGlmeVJlcGx5LCBGYXN0aWZ5UmVxdWVzdCB9IGZyb20gJ2Zhc3RpZnknO1xuaW1wb3J0IFdwcGNvbm5lY3RDb250cm9sbGVyIGZyb20gJ0BEb21haW5zL3dwcGNvbm5lY3QvY2xhc3Nlcy9jb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNlcnZlcjogRmFzdGlmeUluc3RhbmNlLCBvcHRpb25zOiBGYXN0aWZ5UGx1Z2luT3B0aW9ucywgbmV4dDogQ2FsbGFibGVGdW5jdGlvbik6IHZvaWQgPT4ge1xuICBzZXJ2ZXIuZ2V0KCcvd3BwJywgKHJlcXVlc3Q6IEZhc3RpZnlSZXF1ZXN0LCByZXBseTogRmFzdGlmeVJlcGx5KSA9PiB7XG4gICAgdm9pZCBXcHBjb25uZWN0Q29udHJvbGxlci5ncmVldChyZXF1ZXN0LCByZXBseSk7XG4gIH0pO1xuICBuZXh0KCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5XCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZmFzdGlmeSBmcm9tICdmYXN0aWZ5JztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5pbXBvcnQgd3BwUm91dGVyVjEgZnJvbSAnQERvbWFpbnMvd3BwY29ubmVjdC9yb3V0ZXIvdjEnO1xuXG5jb25zdCBzZXJ2ZXIgPSBmYXN0aWZ5KHtcbiAgbG9nZ2VyOiB7XG4gICAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR19MRVZFTCB8fCAnaW5mbycsXG4gIH0sXG59KTtcblxudm9pZCBzZXJ2ZXIucmVnaXN0ZXIod3BwUm91dGVyVjEsIHsgcHJlZml4OiAnL3YxJyB9KTtcblxuc2VydmVyLmdldCgnLycsIChyZXF1ZXN0LCByZXBseSkgPT4ge1xuICB2b2lkIHJlcGx5LnNlbmQoeyBtZXNzYWdlOiAnS09SUkVLVCcgfSkuc3RhdHVzKDIwMCk7XG59KTtcblxuY29uc3Qgc2VydmVyQ29uZmlnID0ge1xuICBwb3J0OiBwcm9jZXNzLmVudi5BUElfUE9SVCB8fCAzMDAwLFxuICBhZGRyZXNzOiBwcm9jZXNzLmVudi5BUElfSE9TVCB8fCAnMC4wLjAuMCcsXG59O1xuXG5zZXJ2ZXIubGlzdGVuKHNlcnZlckNvbmZpZy5wb3J0LCBzZXJ2ZXJDb25maWcuYWRkcmVzcywgKGVyciwgYWRkcmVzcykgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgc2VydmVyLmxvZy5lcnJvcihlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxuICBzZXJ2ZXIubG9nLmluZm8oYFNlcnZlciBsaXN0ZW5pbmcgYXQgJHthZGRyZXNzfWApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=