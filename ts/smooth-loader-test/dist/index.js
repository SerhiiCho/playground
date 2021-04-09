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

/***/ "../../../open/smooth-loader/lib/js/LazyLoader.js":
/*!********************************************************!*\
  !*** ../../../open/smooth-loader/lib/js/LazyLoader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\n * Class that handles lazy loading images with\n * Intersection Observer\n */\n\nvar default_1 = /*#__PURE__*/function () {\n  function default_1(images) {\n    _classCallCheck(this, default_1);\n\n    this.observerOptions = {\n      root: null,\n      threshold: 0\n    };\n    this.images = images;\n  }\n  /**\n   * If image has tag IMG then set the src attribute to img url,\n   * otherwise set the background of the element to given image url\n   */\n\n\n  _createClass(default_1, [{\n    key: \"loadImage\",\n    value: function loadImage(img) {\n      var dataAttr = img.getAttribute('data-src');\n      if (!dataAttr) return;\n\n      if (img.tagName === 'IMG') {\n        img.setAttribute('src', dataAttr);\n        img.addEventListener('load', function () {\n          return img.classList.add('smooth-loaded');\n        });\n      } else {\n        img.style.background = \"url(\".concat(img.getAttribute('data-src'), \")\");\n        setTimeout(function () {\n          return img.classList.add('smooth-loaded');\n        }, 0);\n      }\n    }\n    /**\n     * Create observer object\n     */\n\n  }, {\n    key: \"createObserver\",\n    value: function createObserver(img) {\n      var _this = this;\n\n      var observer = new IntersectionObserver(function (entries, observer) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            _this.loadImage(img);\n\n            observer.unobserve(img);\n          }\n        });\n      }, this.observerOptions);\n      observer.observe(img);\n    }\n    /**\n     * Creates image object, gets attributes from placeholder,\n     * sets them on image object, adds classes to image and\n     * when image is loaded, appends it to a placeholder\n     */\n\n  }, {\n    key: \"execute\",\n    value: function execute() {\n      var _this2 = this;\n\n      this.images.forEach(function (img) {\n        !window['IntersectionObserver'] ? _this2.loadImage(img) : _this2.createObserver(img);\n      });\n    }\n  }]);\n\n  return default_1;\n}();\n\nexports.default = default_1;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi4vc3JjL0xhenlMb2FkZXIudHM/MzQxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFHRzs7SUFDRixTO0FBT0cscUJBQW1CLE1BQW5CLEVBQXdFO0FBQUE7O0FBTGhFLDJCQUFrQjtBQUN0QixVQUFJLEVBQUUsSUFEZ0I7QUFFdEIsZUFBUyxFQUFFO0FBRlcsS0FBbEI7QUFNSixTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0g7QUFFRDs7O0FBR0c7Ozs7O1dBQ0ssbUJBQVUsR0FBVixFQUFnRDtBQUNwRCxVQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBSixDQUFpQixVQUFqQixDQUFqQjtBQUVBLFVBQUksQ0FBQyxRQUFMLEVBQWU7O0FBRWYsVUFBSSxHQUFHLENBQUMsT0FBSixLQUFnQixLQUFwQixFQUEyQjtBQUN2QixXQUFHLENBQUMsWUFBSixDQUFpQixLQUFqQixFQUF3QixRQUF4QjtBQUNBLFdBQUcsQ0FBQyxnQkFBSixDQUFxQixNQUFyQixFQUE2QjtBQUFBLGlCQUFNLEdBQUcsQ0FBQyxTQUFKLENBQWMsR0FBZCxDQUFrQixlQUFsQixDQUFOO0FBQUEsU0FBN0I7QUFDSCxPQUhELE1BR087QUFDSCxXQUFHLENBQUMsS0FBSixDQUFVLFVBQVYsaUJBQThCLEdBQUcsQ0FBQyxZQUFKLENBQWlCLFVBQWpCLENBQTlCO0FBQ0Esa0JBQVUsQ0FBQztBQUFBLGlCQUFNLEdBQUcsQ0FBQyxTQUFKLENBQWMsR0FBZCxDQUFrQixlQUFsQixDQUFOO0FBQUEsU0FBRCxFQUEyQyxDQUEzQyxDQUFWO0FBQ0g7QUFDSjtBQUVEOztBQUVHOzs7O1dBQ0ssd0JBQWUsR0FBZixFQUFxRDtBQUFBOztBQUN6RCxVQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFKLENBQXlCLFVBQUMsT0FBRCxFQUFVLFFBQVYsRUFBc0I7QUFDNUQsZUFBTyxDQUFDLE9BQVIsQ0FBZ0IsZUFBSyxFQUFHO0FBQ3BCLGNBQUksS0FBSyxDQUFDLGNBQVYsRUFBMEI7QUFDdEIsaUJBQUksQ0FBQyxTQUFMLENBQWUsR0FBZjs7QUFDQSxvQkFBUSxDQUFDLFNBQVQsQ0FBbUIsR0FBbkI7QUFDSDtBQUNKLFNBTEQ7QUFNSCxPQVBnQixFQU9kLEtBQUssZUFQUyxDQUFqQjtBQVNBLGNBQVEsQ0FBQyxPQUFULENBQWlCLEdBQWpCO0FBQ0g7QUFFRDs7OztBQUlHOzs7O1dBQ0ksbUJBQU87QUFBQTs7QUFDVixXQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLGFBQUcsRUFBRztBQUN0QixTQUFDLE1BQU0sQ0FBQyxzQkFBRCxDQUFQLEdBQWtDLE1BQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFsQyxHQUF3RCxNQUFJLENBQUMsY0FBTCxDQUFvQixHQUFwQixDQUF4RDtBQUNILE9BRkQ7QUFHSDs7Ozs7O0FBdERKIiwiZmlsZSI6Ii4uLy4uLy4uL29wZW4vc21vb3RoLWxvYWRlci9saWIvanMvTGF6eUxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBDbGFzcyB0aGF0IGhhbmRsZXMgbGF6eSBsb2FkaW5nIGltYWdlcyB3aXRoXG4gKiBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXJcbiAqL1xuY2xhc3MgZGVmYXVsdF8xIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZXMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgaW1hZ2UgaGFzIHRhZyBJTUcgdGhlbiBzZXQgdGhlIHNyYyBhdHRyaWJ1dGUgdG8gaW1nIHVybCxcbiAgICAgKiBvdGhlcndpc2Ugc2V0IHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBlbGVtZW50IHRvIGdpdmVuIGltYWdlIHVybFxuICAgICAqL1xuICAgIGxvYWRJbWFnZShpbWcpIHtcbiAgICAgICAgY29uc3QgZGF0YUF0dHIgPSBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgICAgICBpZiAoIWRhdGFBdHRyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoaW1nLnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkYXRhQXR0cik7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGltZy5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtbG9hZGVkJykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKX0pYDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW1nLmNsYXNzTGlzdC5hZGQoJ3Ntb290aC1sb2FkZWQnKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9ic2VydmVyIG9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZU9ic2VydmVyKGltZykge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShpbWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLm9ic2VydmVyT3B0aW9ucyk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaW1nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBpbWFnZSBvYmplY3QsIGdldHMgYXR0cmlidXRlcyBmcm9tIHBsYWNlaG9sZGVyLFxuICAgICAqIHNldHMgdGhlbSBvbiBpbWFnZSBvYmplY3QsIGFkZHMgY2xhc3NlcyB0byBpbWFnZSBhbmRcbiAgICAgKiB3aGVuIGltYWdlIGlzIGxvYWRlZCwgYXBwZW5kcyBpdCB0byBhIHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICAgICAgIXdpbmRvd1snSW50ZXJzZWN0aW9uT2JzZXJ2ZXInXSA/IHRoaXMubG9hZEltYWdlKGltZykgOiB0aGlzLmNyZWF0ZU9ic2VydmVyKGltZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxhenlMb2FkZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../open/smooth-loader/lib/js/LazyLoader.js\n");

/***/ }),

/***/ "../../../open/smooth-loader/lib/js/index.js":
/*!***************************************************!*\
  !*** ../../../open/smooth-loader/lib/js/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar LazyLoader_1 = __importDefault(__webpack_require__(/*! ./LazyLoader */ \"../../../open/smooth-loader/lib/js/LazyLoader.js\"));\n\nexports.default = function () {\n  var images = document.querySelectorAll('.smooth-loader');\n\n  if (!images) {\n    return;\n  }\n\n  return new LazyLoader_1[\"default\"](images).execute();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi4vc3JjL2luZGV4LnRzPzZmMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsa0JBQWUsWUFBSztBQUNoQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMkQsZ0JBQTNELENBQWY7O0FBRUEsTUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNUO0FBQ0g7O0FBRUQsU0FBTyxJQUFJLHVCQUFKLENBQWUsTUFBZixFQUF1QixPQUF2QixFQUFQO0FBQ0gsQ0FSRCIsImZpbGUiOiIuLi8uLi8uLi9vcGVuL3Ntb290aC1sb2FkZXIvbGliL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMYXp5TG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGF6eUxvYWRlclwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtb290aC1sb2FkZXInKTtcbiAgICBpZiAoIWltYWdlcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBuZXcgTGF6eUxvYWRlcl8xLmRlZmF1bHQoaW1hZ2VzKS5leGVjdXRlKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../open/smooth-loader/lib/js/index.js\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nexports.__esModule = true;\n\nvar smooth_loader_1 = __importDefault(__webpack_require__(/*! smooth-loader */ \"../../../open/smooth-loader/lib/js/index.js\"));\n\nsmooth_loader_1[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJfX2VzTW9kdWxlIiwiZXhwb3J0cyIsInNtb290aF9sb2FkZXJfMSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBRSxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJQyxlQUFlLEdBQUdKLGVBQWUsQ0FBQ0ssbUJBQU8sQ0FBQyxrRUFBRCxDQUFSLENBQXJDOztBQUNBRCxlQUFlLENBQUMsU0FBRCxDQUFmIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHNtb290aF9sb2FkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic21vb3RoLWxvYWRlclwiKSk7XG5zbW9vdGhfbG9hZGVyXzFbXCJkZWZhdWx0XCJdKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi9zcmMvaW5kZXguc2Nzcz9mMjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/index": 0,
/******/ 			"dist/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksmooth_loader_test"] = self["webpackChunksmooth_loader_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/index"], () => (__webpack_require__("./src/index.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/index"], () => (__webpack_require__("./src/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;