"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/contexts/UserContext */ \"./src/contexts/UserContext.tsx\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/henrique/Documents/dev/desbravador-challenge/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/henrique/Documents/dev/desbravador-challenge/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDMkQ7QUFFM0QsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILG1FQUFZO2tCQUNYLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FDZjtBQUNKLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uc3VsdGEtZ2l0aHViLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSBcIi4uL3NyYy9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/contexts/UserContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/UserContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// user-context.tsx\n\n\nconst defaultValue = {\n    username: \"\",\n    setUsername: ()=>{}\n};\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultValue);\nconst UserProvider = ({ children  })=>{\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            username,\n            setUsername\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/henrique/Documents/dev/desbravador-challenge/src/contexts/UserContext.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n// Hook p/ facilitar o acesso ao estado com segurança de tipo\nconst useUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQkFBbUI7QUFDbkI7QUFBOEU7QUFPOUUsTUFBTUksWUFBWSxHQUFvQjtJQUNwQ0MsUUFBUSxFQUFFLEVBQUU7SUFDWkMsV0FBVyxFQUFFLElBQU0sQ0FBQyxDQUFDO0NBQ3RCO0FBRU0sTUFBTUMsV0FBVyxpQkFBR04sb0RBQWEsQ0FBa0JHLFlBQVksQ0FBQyxDQUFDO0FBTWpFLE1BQU1JLFlBQVksR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBcUIsR0FBSztJQUMvRCxNQUFNLEtBQUNKLFFBQVEsTUFBRUMsV0FBVyxNQUFJSiwrQ0FBUSxDQUFTLEVBQUUsQ0FBQztJQUVwRCxxQkFDRSw4REFBQ0ssV0FBVyxDQUFDRyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFTixRQUFRO1lBQUVDLFdBQVc7U0FBRTtrQkFDbkRHLFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0FBQ0osQ0FBQyxDQUFDO0FBRUYsNkRBQTZEO0FBQ3RELE1BQU1HLE9BQU8sR0FBRyxJQUF1QlQsaURBQVUsQ0FBQ0ksV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zdWx0YS1naXRodWIvLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHQudHN4PzVlZTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlci1jb250ZXh0LnRzeFxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBVc2VyQ29udGV4dFR5cGUgPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHNldFVzZXJuYW1lOiAodXNlcm5hbWU6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZTogVXNlckNvbnRleHRUeXBlID0ge1xuICB1c2VybmFtZTogXCJcIixcbiAgc2V0VXNlcm5hbWU6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFR5cGU+KGRlZmF1bHRWYWx1ZSk7XG5cbnR5cGUgVXNlclByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogVXNlclByb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gSG9vayBwLyBmYWNpbGl0YXIgbyBhY2Vzc28gYW8gZXN0YWRvIGNvbSBzZWd1cmFuw6dhIGRlIHRpcG9cbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCk6IFVzZXJDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJkZWZhdWx0VmFsdWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/UserContext.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();