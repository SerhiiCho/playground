/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../open/smooth-loader/smooth-loader/lib/js/handler.js":
/*!**********************************************************************!*\
  !*** ../../../../open/smooth-loader/smooth-loader/lib/js/handler.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar imageLoader_1 = __webpack_require__(/*! ./imageLoader */ \"../../../../open/smooth-loader/smooth-loader/lib/js/imageLoader.js\");\n/**\n * Creates image object, gets attributes from placeholder,\n * sets them on image object, adds classes to image and\n * when image is loaded, appends it to a placeholder\n */\nfunction default_1(images, config) {\n  images.forEach(function (img) {\n    return window['IntersectionObserver'] ? createObserver(img, config) : (0, imageLoader_1.loadImage)(img);\n  });\n}\nexports[\"default\"] = default_1;\n/**\n * Creates instance of IntersectionObserver and loads image in DOM\n * as soon as image will be visible on the screen\n */\nfunction createObserver(lazyImage, config) {\n  var handleObserver = function handleObserver(entries, observer) {\n    var _iterator = _createForOfIteratorHelper(entries),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var entry = _step.value;\n        if (!entry.isIntersecting) {\n          continue;\n        }\n        (0, imageLoader_1.loadImage)(lazyImage);\n        observer.unobserve(lazyImage);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n  var observer = new IntersectionObserver(handleObserver, config);\n  observer.observe(lazyImage);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vb3Blbi9zbW9vdGgtbG9hZGVyL3Ntb290aC1sb2FkZXIvbGliL2pzL2hhbmRsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxJQUFBQSxhQUFBLEdBQUFDLG1CQUFBO0FBRUE7Ozs7O0FBS0EsU0FBQUMsVUFBeUJDLE1BQW1CLEVBQUVDLE1BQWM7RUFDeERELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBR0MsY0FBYyxDQUFDRixHQUFHLEVBQUVGLE1BQU0sQ0FBQyxHQUFHLElBQUFKLGFBQUEsQ0FBQVMsU0FBUyxFQUFDSCxHQUFHLENBQUM7RUFBQSxFQUFDO0FBQ3hHO0FBRkFJLGtCQUFBLEdBQUFSLFNBQUE7QUFJQTs7OztBQUlBLFNBQVNNLGNBQWNBLENBQUNHLFNBQW9CLEVBQUVQLE1BQWM7RUFDeEQsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxPQUFvQyxFQUFFQyxRQUE4QixFQUFJO0lBQUEsSUFBQUMsU0FBQSxHQUFBQywwQkFBQSxDQUN4RUgsT0FBTztNQUFBSSxLQUFBO0lBQUE7TUFBM0IsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBNkI7UUFBQSxJQUFsQkMsS0FBSyxHQUFBSixLQUFBLENBQUFLLEtBQUE7UUFDWixJQUFJLENBQUNELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO1VBQ3ZCOztRQUdKLElBQUF2QixhQUFBLENBQUFTLFNBQVMsRUFBQ0UsU0FBUyxDQUFDO1FBQ3BCRyxRQUFRLENBQUNVLFNBQVMsQ0FBQ2IsU0FBUyxDQUFDOztJQUNoQyxTQUFBYyxHQUFBO01BQUFWLFNBQUEsQ0FBQVcsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQVYsU0FBQSxDQUFBWSxDQUFBO0lBQUE7RUFDTCxDQUFDO0VBRUQsSUFBTWIsUUFBUSxHQUFHLElBQUljLG9CQUFvQixDQUFDaEIsY0FBYyxFQUFFUixNQUFNLENBQUM7RUFFakVVLFFBQVEsQ0FBQ2UsT0FBTyxDQUFDbEIsU0FBUyxDQUFDO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21vb3RoLWxvYWRlci10ZXN0Ly4uLy4uL3NyYy9oYW5kbGVyLnRzP2RkMjEiXSwibmFtZXMiOlsiaW1hZ2VMb2FkZXJfMSIsInJlcXVpcmUiLCJkZWZhdWx0XzEiLCJpbWFnZXMiLCJjb25maWciLCJmb3JFYWNoIiwiaW1nIiwid2luZG93IiwiY3JlYXRlT2JzZXJ2ZXIiLCJsb2FkSW1hZ2UiLCJleHBvcnRzIiwibGF6eUltYWdlIiwiaGFuZGxlT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZW50cnkiLCJ2YWx1ZSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwiZXJyIiwiZSIsImYiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../open/smooth-loader/smooth-loader/lib/js/handler.js\n");

/***/ }),

/***/ "../../../../open/smooth-loader/smooth-loader/lib/js/imageLoader.js":
/*!**************************************************************************!*\
  !*** ../../../../open/smooth-loader/smooth-loader/lib/js/imageLoader.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.loadImage = void 0;\n/**\n * If image has tag IMG then set the src attribute to img url,\n * otherwise set the background of the element to given image url\n */\nfunction loadImage(lazyImage) {\n  var imageUrl = getImageUrl(lazyImage);\n  if (!imageUrl) {\n    return;\n  }\n  if (!lazyImage.hasAttribute('src')) {\n    lazyImage.style.opacity = '0';\n  }\n  var ghostImage = new Image();\n  ghostImage.addEventListener('load', function () {\n    lazyImage.style.transition = 'opacity 777ms';\n    lazyImage.style.opacity = '1';\n  });\n  ghostImage.src = imageUrl;\n  if (isImageElement(lazyImage)) {\n    lazyImage.setAttribute('src', imageUrl);\n    return;\n  }\n  lazyImage.style.backgroundImage = \"url(\".concat(imageUrl, \")\");\n}\nexports.loadImage = loadImage;\nvar isImageElement = function isImageElement(img) {\n  return img.tagName === 'IMG';\n};\nvar getImageUrl = function getImageUrl(img) {\n  return img.getAttribute('data-src');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vb3Blbi9zbW9vdGgtbG9hZGVyL3Ntb290aC1sb2FkZXIvbGliL2pzL2ltYWdlTG9hZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBSUEsU0FBZ0JBLFNBQVNBLENBQUNDLFNBQW9CO0VBQzFDLElBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFTLENBQUM7RUFFdkMsSUFBSSxDQUFDQyxRQUFRLEVBQUU7SUFDWDs7RUFHSixJQUFJLENBQUNELFNBQVMsQ0FBQ0csWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ2hDSCxTQUFTLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEdBQUc7O0VBR2pDLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxLQUFLLEVBQUU7RUFFOUJELFVBQVUsQ0FBQ0UsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQUs7SUFDckNSLFNBQVMsQ0FBQ0ksS0FBSyxDQUFDSyxVQUFVLEdBQUcsZUFBZTtJQUM1Q1QsU0FBUyxDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxHQUFHO0VBQ2pDLENBQUMsQ0FBQztFQUVGQyxVQUFVLENBQUNJLEdBQUcsR0FBR1QsUUFBUTtFQUV6QixJQUFJVSxjQUFjLENBQUNYLFNBQVMsQ0FBQyxFQUFFO0lBQzNCQSxTQUFTLENBQUNZLFlBQVksQ0FBQyxLQUFLLEVBQUVYLFFBQVEsQ0FBQztJQUN2Qzs7RUFHSkQsU0FBUyxDQUFDSSxLQUFLLENBQUNTLGVBQWUsVUFBQUMsTUFBQSxDQUFVYixRQUFRLE1BQUc7QUFDeEQ7QUExQkFjLGlCQUFBLEdBQUFoQixTQUFBO0FBNEJBLElBQU1ZLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUssR0FBYztFQUFBLE9BQUtBLEdBQUcsQ0FBQ0MsT0FBTyxLQUFLLEtBQUs7QUFBQTtBQUNoRSxJQUFNZixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSWMsR0FBYztFQUFBLE9BQUtBLEdBQUcsQ0FBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21vb3RoLWxvYWRlci10ZXN0Ly4uLy4uL3NyYy9pbWFnZUxvYWRlci50cz8yMjJmIl0sIm5hbWVzIjpbImxvYWRJbWFnZSIsImxhenlJbWFnZSIsImltYWdlVXJsIiwiZ2V0SW1hZ2VVcmwiLCJoYXNBdHRyaWJ1dGUiLCJzdHlsZSIsIm9wYWNpdHkiLCJnaG9zdEltYWdlIiwiSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbiIsInNyYyIsImlzSW1hZ2VFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiZXhwb3J0cyIsImltZyIsInRhZ05hbWUiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../open/smooth-loader/smooth-loader/lib/js/imageLoader.js\n");

/***/ }),

/***/ "../../../../open/smooth-loader/smooth-loader/lib/js/index.js":
/*!********************************************************************!*\
  !*** ../../../../open/smooth-loader/smooth-loader/lib/js/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar handler_1 = __importDefault(__webpack_require__(/*! ./handler */ \"../../../../open/smooth-loader/smooth-loader/lib/js/handler.js\"));\nexports[\"default\"] = function (selector, config) {\n  var images = getImagesElements(selector);\n  if (!images) {\n    return;\n  }\n  var configurations = config || {\n    root: null,\n    threshold: 0\n  };\n  return (0, handler_1[\"default\"])(images, configurations);\n};\nfunction getImagesElements(selector) {\n  if (!selector) {\n    var elements = document.querySelectorAll('.smooth-loader[data-src]');\n    return Array.from(elements);\n  }\n  if (typeof selector === 'string') {\n    var _elements = document.querySelectorAll(selector);\n    return Array.from(_elements);\n  }\n  if (selector instanceof NodeList) {\n    return Array.from(selector);\n  }\n  return selector;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vb3Blbi9zbW9vdGgtbG9hZGVyL3Ntb290aC1sb2FkZXIvbGliL2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLGVBQUEsQ0FBQUMsbUJBQUE7QUFHQUMsa0JBQUEsR0FBZSxVQUFDQyxRQUFxQixFQUFFQyxNQUFlLEVBQVU7RUFDNUQsSUFBTUMsTUFBTSxHQUFHQyxpQkFBaUIsQ0FBQ0gsUUFBUSxDQUFDO0VBRTFDLElBQUksQ0FBQ0UsTUFBTSxFQUFFO0lBQ1Q7O0VBR0osSUFBTUUsY0FBYyxHQUFHSCxNQUFNLElBQUk7SUFDN0JJLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFNBQVMsRUFBRTtHQUNkO0VBRUQsT0FBTyxJQUFBVixTQUFBLFdBQU8sRUFBQ00sTUFBTSxFQUFFRSxjQUFjLENBQUM7QUFDMUMsQ0FBQztBQUVELFNBQVNELGlCQUFpQkEsQ0FBQ0gsUUFBcUI7RUFDNUMsSUFBSSxDQUFDQSxRQUFRLEVBQUU7SUFDWCxJQUFNTyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQVksMEJBQTBCLENBQUM7SUFDakYsT0FBT0MsS0FBSyxDQUFDQyxJQUFJLENBQUNKLFFBQVEsQ0FBQzs7RUFHL0IsSUFBSSxPQUFPUCxRQUFRLEtBQUssUUFBUSxFQUFFO0lBQzlCLElBQU1PLFNBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBWVQsUUFBUSxDQUFDO0lBQy9ELE9BQU9VLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSixTQUFRLENBQUM7O0VBRy9CLElBQUlQLFFBQVEsWUFBWVksUUFBUSxFQUFFO0lBQzlCLE9BQU9GLEtBQUssQ0FBQ0MsSUFBSSxDQUFDWCxRQUFRLENBQUM7O0VBRy9CLE9BQU9BLFFBQVE7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi4vLi4vc3JjL2luZGV4LnRzPzY3NDQiXSwibmFtZXMiOlsiaGFuZGxlcl8xIiwiX19pbXBvcnREZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsImNvbmZpZyIsImltYWdlcyIsImdldEltYWdlc0VsZW1lbnRzIiwiY29uZmlndXJhdGlvbnMiLCJyb290IiwidGhyZXNob2xkIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJOb2RlTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../open/smooth-loader/smooth-loader/lib/js/index.js\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nexports.__esModule = true;\nvar smooth_loader_1 = __importDefault(__webpack_require__(/*! smooth-loader */ \"../../../../open/smooth-loader/smooth-loader/lib/js/index.js\"));\n(0, smooth_loader_1[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2IsSUFBSUEsZUFBZSxHQUFJLElBQUksSUFBSSxJQUFJLENBQUNBLGVBQWUsSUFBSyxVQUFVQyxHQUFHLEVBQUU7RUFDbkUsT0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBSUQsR0FBRyxHQUFHO0lBQUUsU0FBUyxFQUFFQTtFQUFJLENBQUM7QUFDN0QsQ0FBQztBQUNERSxrQkFBa0IsR0FBRyxJQUFJO0FBQ3pCLElBQUlDLGVBQWUsR0FBR0osZUFBZSxDQUFDSyxtQkFBTyxDQUFDLG1GQUFlLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMsRUFBRUQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi9zcmMvaW5kZXgudHM/YWRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgc21vb3RoX2xvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzbW9vdGgtbG9hZGVyXCIpKTtcbigwLCBzbW9vdGhfbG9hZGVyXzFbXCJkZWZhdWx0XCJdKSgpO1xuIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJleHBvcnRzIiwic21vb3RoX2xvYWRlcl8xIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;