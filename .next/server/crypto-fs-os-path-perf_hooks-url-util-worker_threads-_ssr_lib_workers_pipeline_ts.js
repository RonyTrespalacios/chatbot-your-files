/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "?c7c8":
/*!**********************************!*\
  !*** onnxruntime-node (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1170":
/*!***********************!*\
  !*** sharp (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "(ssr)/./lib/workers/pipeline.ts":
/*!*********************************!*\
  !*** ./lib/workers/pipeline.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _xenova_transformers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xenova/transformers */ \"(ssr)/./node_modules/@xenova/transformers/src/transformers.js\");\n\nclass PipelineSingleton {\n    static async init(...args) {\n        this.instance = await (0,_xenova_transformers__WEBPACK_IMPORTED_MODULE_0__.pipeline)(...args);\n    }\n}\n// Listen for messages from the main thread\nself.addEventListener(\"message\", async (event)=>{\n    const { type, args } = event.data;\n    switch(type){\n        case \"init\":\n            {\n                const progress_callback = (data)=>{\n                    self.postMessage({\n                        type: \"progress\",\n                        data\n                    });\n                };\n                const [task, model, options] = args;\n                await PipelineSingleton.init(task, model, {\n                    ...options,\n                    progress_callback\n                });\n                self.postMessage({\n                    type: \"ready\"\n                });\n                break;\n            }\n        case \"run\":\n            {\n                if (!PipelineSingleton.instance) {\n                    throw new Error(\"Pipeline not initialized\");\n                }\n                const { id } = event.data;\n                const output = await PipelineSingleton.instance(...args);\n                // Classes (ie. `Tensor`) cannot be transferred to the main thread,\n                // so we spread its properties into a plain object\n                const data = {\n                    ...output\n                };\n                self.postMessage({\n                    type: \"result\",\n                    id,\n                    data\n                });\n                break;\n            }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9saWIvd29ya2Vycy9waXBlbGluZS50cyIsIm1hcHBpbmdzIjoiOztBQUEwRDtBQWtFMUQsTUFBTUM7SUFHSixhQUFhQyxLQUFLLEdBQUdDLElBQWlDLEVBQUU7UUFDdEQsSUFBSSxDQUFDQyxRQUFRLEdBQUcsTUFBTUosOERBQVFBLElBQUlHO0lBQ3BDO0FBQ0Y7QUFFQSwyQ0FBMkM7QUFDM0NFLEtBQUtDLGdCQUFnQixDQUNuQixXQUNBLE9BQU9DO0lBQ0wsTUFBTSxFQUFFQyxJQUFJLEVBQUVMLElBQUksRUFBRSxHQUFHSSxNQUFNRSxJQUFJO0lBRWpDLE9BQVFEO1FBQ04sS0FBSztZQUFRO2dCQUNYLE1BQU1FLG9CQUFvQixDQUFDRDtvQkFDekJKLEtBQUtNLFdBQVcsQ0FBQzt3QkFDZkgsTUFBTTt3QkFDTkM7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsTUFBTSxDQUFDRyxNQUFNQyxPQUFPQyxRQUFRLEdBQUdYO2dCQUUvQixNQUFNRixrQkFBa0JDLElBQUksQ0FBQ1UsTUFBTUMsT0FBTztvQkFDeEMsR0FBR0MsT0FBTztvQkFDVko7Z0JBQ0Y7Z0JBRUFMLEtBQUtNLFdBQVcsQ0FBQztvQkFDZkgsTUFBTTtnQkFDUjtnQkFFQTtZQUNGO1FBQ0EsS0FBSztZQUFPO2dCQUNWLElBQUksQ0FBQ1Asa0JBQWtCRyxRQUFRLEVBQUU7b0JBQy9CLE1BQU0sSUFBSVcsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR1QsTUFBTUUsSUFBSTtnQkFFekIsTUFBTVEsU0FBUyxNQUFNaEIsa0JBQWtCRyxRQUFRLElBQUlEO2dCQUVuRCxtRUFBbUU7Z0JBQ25FLGtEQUFrRDtnQkFDbEQsTUFBTU0sT0FBTztvQkFBRSxHQUFHUSxNQUFNO2dCQUFDO2dCQUV6QlosS0FBS00sV0FBVyxDQUFDO29CQUNmSCxNQUFNO29CQUNOUTtvQkFDQVA7Z0JBQ0Y7Z0JBRUE7WUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd29ya2Vycy9waXBlbGluZS50cz9mYTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVsaW5lLCBwaXBlbGluZSB9IGZyb20gJ0B4ZW5vdmEvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IFBpcGVQYXJhbWV0ZXJzLCBQaXBlUmV0dXJuVHlwZSB9IGZyb20gJy4uL2hvb2tzL3VzZS1waXBlbGluZSc7XG5cbmV4cG9ydCB0eXBlIEluaXRFdmVudERhdGEgPSB7XG4gIHR5cGU6ICdpbml0JztcbiAgYXJnczogUGFyYW1ldGVyczx0eXBlb2YgcGlwZWxpbmU+O1xufTtcblxuZXhwb3J0IHR5cGUgUnVuRXZlbnREYXRhID0ge1xuICB0eXBlOiAncnVuJztcbiAgaWQ6IG51bWJlcjtcbiAgYXJnczogUGlwZVBhcmFtZXRlcnM7XG59O1xuXG5leHBvcnQgdHlwZSBJbmNvbWluZ0V2ZW50RGF0YSA9IEluaXRFdmVudERhdGEgfCBSdW5FdmVudERhdGE7XG5cbnR5cGUgQmFzZVByb2dyZXNzVXBkYXRlID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGZpbGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEluaXRpYXRlUHJvZ3Jlc3NVcGRhdGUgPSBCYXNlUHJvZ3Jlc3NVcGRhdGUgJiB7XG4gIHN0YXR1czogJ2luaXRpYXRlJztcbn07XG5cbmV4cG9ydCB0eXBlIERvd25sb2FkUHJvZ3Jlc3NVcGRhdGUgPSBCYXNlUHJvZ3Jlc3NVcGRhdGUgJiB7XG4gIHN0YXR1czogJ2Rvd25sb2FkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2dyZXNzUHJvZ3Jlc3NVcGRhdGUgPSBCYXNlUHJvZ3Jlc3NVcGRhdGUgJiB7XG4gIHN0YXR1czogJ3Byb2dyZXNzJztcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgbG9hZGVkOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBEb25lUHJvZ3Jlc3NVcGRhdGUgPSBCYXNlUHJvZ3Jlc3NVcGRhdGUgJiB7XG4gIHN0YXR1czogJ2RvbmUnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NVcGRhdGUgPVxuICB8IEluaXRpYXRlUHJvZ3Jlc3NVcGRhdGVcbiAgfCBEb3dubG9hZFByb2dyZXNzVXBkYXRlXG4gIHwgUHJvZ3Jlc3NQcm9ncmVzc1VwZGF0ZVxuICB8IERvbmVQcm9ncmVzc1VwZGF0ZTtcblxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NFdmVudERhdGEgPSB7XG4gIHR5cGU6ICdwcm9ncmVzcyc7XG4gIGRhdGE6IFByb2dyZXNzVXBkYXRlO1xufTtcblxuZXhwb3J0IHR5cGUgUmVhZHlFdmVudERhdGEgPSB7XG4gIHR5cGU6ICdyZWFkeSc7XG59O1xuXG5leHBvcnQgdHlwZSBSZXN1bHRFdmVudERhdGEgPSB7XG4gIHR5cGU6ICdyZXN1bHQnO1xuICBpZDogbnVtYmVyO1xuICBkYXRhOiBQaXBlUmV0dXJuVHlwZTtcbn07XG5cbmV4cG9ydCB0eXBlIE91dGdvaW5nRXZlbnREYXRhID1cbiAgfCBQcm9ncmVzc0V2ZW50RGF0YVxuICB8IFJlYWR5RXZlbnREYXRhXG4gIHwgUmVzdWx0RXZlbnREYXRhO1xuXG5jbGFzcyBQaXBlbGluZVNpbmdsZXRvbiB7XG4gIHN0YXRpYyBpbnN0YW5jZT86IFBpcGVsaW5lO1xuXG4gIHN0YXRpYyBhc3luYyBpbml0KC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIHBpcGVsaW5lPikge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBhd2FpdCBwaXBlbGluZSguLi5hcmdzKTtcbiAgfVxufVxuXG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXG4gICdtZXNzYWdlJyxcbiAgYXN5bmMgKGV2ZW50OiBNZXNzYWdlRXZlbnQ8SW5jb21pbmdFdmVudERhdGE+KSA9PiB7XG4gICAgY29uc3QgeyB0eXBlLCBhcmdzIH0gPSBldmVudC5kYXRhO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpbml0Jzoge1xuICAgICAgICBjb25zdCBwcm9ncmVzc19jYWxsYmFjayA9IChkYXRhOiBQcm9ncmVzc1VwZGF0ZSkgPT4ge1xuICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgfSBzYXRpc2ZpZXMgUHJvZ3Jlc3NFdmVudERhdGEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFt0YXNrLCBtb2RlbCwgb3B0aW9uc10gPSBhcmdzO1xuXG4gICAgICAgIGF3YWl0IFBpcGVsaW5lU2luZ2xldG9uLmluaXQodGFzaywgbW9kZWwsIHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIHByb2dyZXNzX2NhbGxiYWNrLFxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiAncmVhZHknLFxuICAgICAgICB9IHNhdGlzZmllcyBSZWFkeUV2ZW50RGF0YSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdydW4nOiB7XG4gICAgICAgIGlmICghUGlwZWxpbmVTaW5nbGV0b24uaW5zdGFuY2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BpcGVsaW5lIG5vdCBpbml0aWFsaXplZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZXZlbnQuZGF0YTtcblxuICAgICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCBQaXBlbGluZVNpbmdsZXRvbi5pbnN0YW5jZSguLi5hcmdzKTtcblxuICAgICAgICAvLyBDbGFzc2VzIChpZS4gYFRlbnNvcmApIGNhbm5vdCBiZSB0cmFuc2ZlcnJlZCB0byB0aGUgbWFpbiB0aHJlYWQsXG4gICAgICAgIC8vIHNvIHdlIHNwcmVhZCBpdHMgcHJvcGVydGllcyBpbnRvIGEgcGxhaW4gb2JqZWN0XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IC4uLm91dHB1dCB9O1xuXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdyZXN1bHQnLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgIH0gc2F0aXNmaWVzIFJlc3VsdEV2ZW50RGF0YSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4pO1xuIl0sIm5hbWVzIjpbInBpcGVsaW5lIiwiUGlwZWxpbmVTaW5nbGV0b24iLCJpbml0IiwiYXJncyIsImluc3RhbmNlIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInR5cGUiLCJkYXRhIiwicHJvZ3Jlc3NfY2FsbGJhY2siLCJwb3N0TWVzc2FnZSIsInRhc2siLCJtb2RlbCIsIm9wdGlvbnMiLCJFcnJvciIsImlkIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./lib/workers/pipeline.ts\n");

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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-chunks/@xenova","vendor-chunks/onnxruntime-web","vendor-chunks/@huggingface","vendor-chunks/onnxruntime-common"], () => (__webpack_require__("(ssr)/./lib/workers/pipeline.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"crypto-fs-os-path-perf_hooks-url-util-worker_threads-_ssr_lib_workers_pipeline_ts": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendor-chunks/@xenova");
/******/ 			__webpack_require__.e("vendor-chunks/onnxruntime-web");
/******/ 			__webpack_require__.e("vendor-chunks/@huggingface");
/******/ 			__webpack_require__.e("vendor-chunks/onnxruntime-common");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;