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

/***/ "./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar supabaseUrl = 'https://peisyeydodamejrdzobi.supabase.co';\nvar supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlaXN5ZXlkb2RhbWVqcmR6b2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMTQ0OTAsImV4cCI6MjA1Mjc5MDQ5MH0.orzkIJhZ_q3kxMFRmPqlG000pL6UekULKN0CJpLOBhg';\nvar supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2VDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBQ3JELElBQUlDLFdBQVcsR0FBRywwQ0FBMEM7QUFDNUQsSUFBSUMsV0FBVyxHQUFHLGtOQUFrTjtBQUM3TixJQUFJQyxRQUFRLEdBQUdILG1FQUFZLENBQUNDLFdBQVcsRUFBRUMsV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yb2NjYW4tbWFya2V0cGxhY2UvLi9saWIvc3VwYWJhc2VDbGllbnQuanM/NWYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xudmFyIHN1cGFiYXNlVXJsID0gJ2h0dHBzOi8vcGVpc3lleWRvZGFtZWpyZHpvYmkuc3VwYWJhc2UuY28nO1xudmFyIHN1cGFiYXNlS2V5ID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkluQmxhWE41Wlhsa2IyUmhiV1ZxY21SNmIySnBJaXdpY205c1pTSTZJbUZ1YjI0aUxDSnBZWFFpT2pFM016Y3lNVFEwT1RBc0ltVjRjQ0k2TWpBMU1qYzVNRFE1TUgwLm9yemtJSmhaX3Eza3hNRlJtUHFsRzAwMHBMNlVla1VMS04wQ0pwTE9CaGcnO1xuZXhwb3J0IHZhciBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VLZXkpOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInN1cGFiYXNlS2V5Iiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/supabaseClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _home_project_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/supabaseClient */ \"./lib/supabaseClient.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _jsxFileName = \"/home/project/pages/_app.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);\n\n\n\n\n\nfunction App(_ref) {\n  var Component = _ref.Component,\n    pageProps = _ref.pageProps;\n  return __jsx(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.SessionContextProvider, {\n    supabaseClient: _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase,\n    initialSession: pageProps.initialSession,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(Component, (0,_home_project_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  })), __jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n    position: \"bottom-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }));\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkc7QUFDM0csSUFBSUMsWUFBWSxHQUFHLDZCQUE2QjtBQUN0QjtBQUMxQixJQUFJRSxLQUFLLEdBQUdELDREQUFtQjtBQUNFO0FBQ3FDO0FBQ3RCO0FBQ047QUFDWDtBQUNoQixTQUFTTyxHQUFHQSxDQUFDQyxJQUFJLEVBQUU7RUFDaEMsSUFBSUMsU0FBUyxHQUFHRCxJQUFJLENBQUNDLFNBQVM7SUFDNUJDLFNBQVMsR0FBR0YsSUFBSSxDQUFDRSxTQUFTO0VBQzVCLE9BQU9ULEtBQUssQ0FBQ0csZ0ZBQXNCLEVBQUU7SUFDbkNPLGNBQWMsRUFBRU4seURBQVE7SUFDeEJPLGNBQWMsRUFBRUYsU0FBUyxDQUFDRSxjQUFjO0lBQ3hDQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxRQUFRLEVBQUU7TUFDUkMsUUFBUSxFQUFFaEIsWUFBWTtNQUN0QmlCLFVBQVUsRUFBRSxDQUFDO01BQ2JDLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUMsRUFBRWhCLEtBQUssQ0FBQ1EsU0FBUyxFQUFFWCw4SEFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFWSxTQUFTLEVBQUU7SUFDMUNHLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFFBQVEsRUFBRTtNQUNSQyxRQUFRLEVBQUVoQixZQUFZO01BQ3RCaUIsVUFBVSxFQUFFLEVBQUU7TUFDZEMsWUFBWSxFQUFFO0lBQ2hCO0VBQ0YsQ0FBQyxDQUFDLENBQUMsRUFBRWhCLEtBQUssQ0FBQ0ssb0RBQU8sRUFBRTtJQUNsQlksUUFBUSxFQUFFLGNBQWM7SUFDeEJMLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFFBQVEsRUFBRTtNQUNSQyxRQUFRLEVBQUVoQixZQUFZO01BQ3RCaUIsVUFBVSxFQUFFLEVBQUU7TUFDZEMsWUFBWSxFQUFFO0lBQ2hCO0VBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yb2NjYW4tbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCIvaG9tZS9wcm9qZWN0L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qc1wiO1xudmFyIF9qc3hGaWxlTmFtZSA9IFwiL2hvbWUvcHJvamVjdC9wYWdlcy9fYXBwLmpzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgX19qc3ggPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJ0AvbGliL3N1cGFiYXNlQ2xpZW50JztcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKF9yZWYpIHtcbiAgdmFyIENvbXBvbmVudCA9IF9yZWYuQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wcyA9IF9yZWYucGFnZVByb3BzO1xuICByZXR1cm4gX19qc3goU2Vzc2lvbkNvbnRleHRQcm92aWRlciwge1xuICAgIHN1cGFiYXNlQ2xpZW50OiBzdXBhYmFzZSxcbiAgICBpbml0aWFsU2Vzc2lvbjogcGFnZVByb3BzLmluaXRpYWxTZXNzaW9uLFxuICAgIF9fc2VsZjogdGhpcyxcbiAgICBfX3NvdXJjZToge1xuICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IDksXG4gICAgICBjb2x1bW5OdW1iZXI6IDlcbiAgICB9XG4gIH0sIF9fanN4KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHBhZ2VQcm9wcywge1xuICAgIF9fc2VsZjogdGhpcyxcbiAgICBfX3NvdXJjZToge1xuICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IDEzLFxuICAgICAgY29sdW1uTnVtYmVyOiAxMVxuICAgIH1cbiAgfSkpLCBfX2pzeChUb2FzdGVyLCB7XG4gICAgcG9zaXRpb246IFwiYm90dG9tLXJpZ2h0XCIsXG4gICAgX19zZWxmOiB0aGlzLFxuICAgIF9fc291cmNlOiB7XG4gICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogMTQsXG4gICAgICBjb2x1bW5OdW1iZXI6IDExXG4gICAgfVxuICB9KSk7XG59Il0sIm5hbWVzIjpbIl9leHRlbmRzIiwiX2pzeEZpbGVOYW1lIiwiUmVhY3QiLCJfX2pzeCIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VTdGF0ZSIsIlNlc3Npb25Db250ZXh0UHJvdmlkZXIiLCJzdXBhYmFzZSIsIlRvYXN0ZXIiLCJBcHAiLCJfcmVmIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3VwYWJhc2VDbGllbnQiLCJpbml0aWFsU2Vzc2lvbiIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();