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

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\n * Class that handles lazy loading images with\n * Intersection Observer\n */\n\nvar default_1 = /*#__PURE__*/function () {\n  function default_1(images) {\n    _classCallCheck(this, default_1);\n\n    this.images = images;\n    this.observerOptions = {\n      root: null,\n      threshold: 0\n    };\n  }\n  /**\n   * If image has tag IMG then set the src attribute to img url,\n   * otherwise set the background of the element to given image url\n   */\n\n\n  _createClass(default_1, [{\n    key: \"loadImage\",\n    value: function loadImage(img) {\n      var imageUrl = img.getAttribute('data-src');\n      if (!imageUrl) return;\n      img.style.opacity = '0';\n      var ghostImage = new Image();\n      ghostImage.addEventListener('load', function () {\n        img.style.transition = 'opacity 777ms';\n        img.style.opacity = '1';\n      });\n      ghostImage.src = imageUrl;\n      img.tagName === 'IMG' ? img.setAttribute('src', imageUrl) : img.style.backgroundImage = \"url(\".concat(imageUrl, \")\");\n    }\n    /**\n     * Create observer object that will trigger loading image function\n     * when it's gonna be visible on the screen\n     */\n\n  }, {\n    key: \"createObserver\",\n    value: function createObserver(img) {\n      var _this = this;\n\n      var observer = new IntersectionObserver(function (entries, observer) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            _this.loadImage(img);\n\n            observer.unobserve(img);\n          }\n        });\n      }, this.observerOptions);\n      observer.observe(img);\n    }\n    /**\n     * Creates image object, gets attributes from placeholder,\n     * sets them on image object, adds classes to image and\n     * when image is loaded, appends it to a placeholder\n     */\n\n  }, {\n    key: \"execute\",\n    value: function execute() {\n      var _this2 = this;\n\n      this.images.forEach(function (img) {\n        !window['IntersectionObserver'] ? _this2.loadImage(img) : _this2.createObserver(img);\n      });\n    }\n  }]);\n\n  return default_1;\n}();\n\nexports.default = default_1;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi4vc3JjL0xhenlMb2FkZXIudHM/MzQxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBOzs7QUFHRzs7SUFDSCxTO0FBTUkscUJBQW9DLE1BQXBDLEVBQWlFO0FBQUE7O0FBQTdCO0FBTG5CLDJCQUFrQjtBQUMvQixVQUFJLEVBQUUsSUFEeUI7QUFFL0IsZUFBUyxFQUFFO0FBRm9CLEtBQWxCO0FBTWhCO0FBRUQ7OztBQUdHOzs7OztXQUNLLG1CQUFVLEdBQVYsRUFBd0I7QUFDNUIsVUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQUosQ0FBaUIsVUFBakIsQ0FBakI7QUFFQSxVQUFJLENBQUMsUUFBTCxFQUNJO0FBRUosU0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLEdBQW9CLEdBQXBCO0FBRUEsVUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFKLEVBQW5CO0FBRUEsZ0JBQVUsQ0FBQyxnQkFBWCxDQUE0QixNQUE1QixFQUFvQyxZQUFLO0FBQ3JDLFdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixHQUF1QixlQUF2QjtBQUNBLFdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixHQUFvQixHQUFwQjtBQUNILE9BSEQ7QUFLQSxnQkFBVSxDQUFDLEdBQVgsR0FBaUIsUUFBakI7QUFFQSxTQUFHLENBQUMsT0FBSixLQUFnQixLQUFoQixHQUNNLEdBQUcsQ0FBQyxZQUFKLENBQWlCLEtBQWpCLEVBQXdCLFFBQXhCLENBRE4sR0FFTSxHQUFHLENBQUMsS0FBSixDQUFVLGVBQVYsaUJBQW1DLFFBQW5DLE1BRk47QUFHSDtBQUdEOzs7QUFHRzs7OztXQUNLLHdCQUFlLEdBQWYsRUFBNkI7QUFBQTs7QUFDakMsVUFBTSxRQUFRLEdBQUcsSUFBSSxvQkFBSixDQUF5QixVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQXNCO0FBQzVELGVBQU8sQ0FBQyxPQUFSLENBQWdCLGVBQUssRUFBRztBQUNwQixjQUFJLEtBQUssQ0FBQyxjQUFWLEVBQTBCO0FBQ3RCLGlCQUFJLENBQUMsU0FBTCxDQUFlLEdBQWY7O0FBQ0Esb0JBQVEsQ0FBQyxTQUFULENBQW1CLEdBQW5CO0FBQ0g7QUFDSixTQUxEO0FBTUgsT0FQZ0IsRUFPZCxLQUFLLGVBUFMsQ0FBakI7QUFTQSxjQUFRLENBQUMsT0FBVCxDQUFpQixHQUFqQjtBQUNIO0FBRUQ7Ozs7QUFJRzs7OztXQUNJLG1CQUFPO0FBQUE7O0FBQ1YsV0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixhQUFHLEVBQUc7QUFDdEIsU0FBQyxNQUFNLENBQUMsc0JBQUQsQ0FBUCxHQUFrQyxNQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbEMsR0FBd0QsTUFBSSxDQUFDLGNBQUwsQ0FBb0IsR0FBcEIsQ0FBeEQ7QUFDSCxPQUZEO0FBR0g7Ozs7OztBQTlETCIsImZpbGUiOiIuLi8uLi8uLi9vcGVuL3Ntb290aC1sb2FkZXIvbGliL2pzL0xhenlMb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQ2xhc3MgdGhhdCBoYW5kbGVzIGxhenkgbG9hZGluZyBpbWFnZXMgd2l0aFxuICogSW50ZXJzZWN0aW9uIE9ic2VydmVyXG4gKi9cbmNsYXNzIGRlZmF1bHRfMSB7XG4gICAgY29uc3RydWN0b3IoaW1hZ2VzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgICAgICB0aGlzLm9ic2VydmVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGltYWdlIGhhcyB0YWcgSU1HIHRoZW4gc2V0IHRoZSBzcmMgYXR0cmlidXRlIHRvIGltZyB1cmwsXG4gICAgICogb3RoZXJ3aXNlIHNldCB0aGUgYmFja2dyb3VuZCBvZiB0aGUgZWxlbWVudCB0byBnaXZlbiBpbWFnZSB1cmxcbiAgICAgKi9cbiAgICBsb2FkSW1hZ2UoaW1nKSB7XG4gICAgICAgIGNvbnN0IGltYWdlVXJsID0gaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgaWYgKCFpbWFnZVVybClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW1nLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGNvbnN0IGdob3N0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZ2hvc3RJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSA3Nzdtcyc7XG4gICAgICAgICAgICBpbWcuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSk7XG4gICAgICAgIGdob3N0SW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgIGltZy50YWdOYW1lID09PSAnSU1HJ1xuICAgICAgICAgICAgPyBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVVybClcbiAgICAgICAgICAgIDogaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZVVybH0pYDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9ic2VydmVyIG9iamVjdCB0aGF0IHdpbGwgdHJpZ2dlciBsb2FkaW5nIGltYWdlIGZ1bmN0aW9uXG4gICAgICogd2hlbiBpdCdzIGdvbm5hIGJlIHZpc2libGUgb24gdGhlIHNjcmVlblxuICAgICAqL1xuICAgIGNyZWF0ZU9ic2VydmVyKGltZykge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShpbWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLm9ic2VydmVyT3B0aW9ucyk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaW1nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBpbWFnZSBvYmplY3QsIGdldHMgYXR0cmlidXRlcyBmcm9tIHBsYWNlaG9sZGVyLFxuICAgICAqIHNldHMgdGhlbSBvbiBpbWFnZSBvYmplY3QsIGFkZHMgY2xhc3NlcyB0byBpbWFnZSBhbmRcbiAgICAgKiB3aGVuIGltYWdlIGlzIGxvYWRlZCwgYXBwZW5kcyBpdCB0byBhIHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICAgICAgIXdpbmRvd1snSW50ZXJzZWN0aW9uT2JzZXJ2ZXInXSA/IHRoaXMubG9hZEltYWdlKGltZykgOiB0aGlzLmNyZWF0ZU9ic2VydmVyKGltZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxhenlMb2FkZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../open/smooth-loader/lib/js/LazyLoader.js\n");

/***/ }),

/***/ "../../../open/smooth-loader/lib/js/index.js":
/*!***************************************************!*\
  !*** ../../../open/smooth-loader/lib/js/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar LazyLoader_1 = __importDefault(__webpack_require__(/*! ./LazyLoader */ \"../../../open/smooth-loader/lib/js/LazyLoader.js\"));\n\nexports.default = function (selector) {\n  var images = getImagesElements(selector);\n  if (!images) return;\n  return new LazyLoader_1[\"default\"](images).execute();\n};\n\nfunction getImagesElements(selector) {\n  if (typeof selector === 'string' && selector !== '') return document.querySelectorAll(selector);\n  if (selector instanceof NodeList) return selector;\n  return document.querySelectorAll('.smooth-loader[data-src]');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi4vc3JjL2luZGV4LnRzPzZmMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0Esa0JBQWUsVUFBQyxRQUFELEVBQW9EO0FBQy9ELE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLFFBQUQsQ0FBaEM7QUFFQSxNQUFJLENBQUMsTUFBTCxFQUNJO0FBRUosU0FBTyxJQUFJLHVCQUFKLENBQWUsTUFBZixFQUF1QixPQUF2QixFQUFQO0FBQ0gsQ0FQRDs7QUFTQSxTQUFTLGlCQUFULENBQTJCLFFBQTNCLEVBQW9FO0FBQ2hFLE1BQUksT0FBTyxRQUFQLEtBQW9CLFFBQXBCLElBQWdDLFFBQVEsS0FBSyxFQUFqRCxFQUNJLE9BQU8sUUFBUSxDQUFDLGdCQUFULENBQXFDLFFBQXJDLENBQVA7QUFFSixNQUFJLFFBQVEsWUFBWSxRQUF4QixFQUNJLE9BQU8sUUFBUDtBQUVKLFNBQU8sUUFBUSxDQUFDLGdCQUFULENBQXFDLDBCQUFyQyxDQUFQO0FBQ0giLCJmaWxlIjoiLi4vLi4vLi4vb3Blbi9zbW9vdGgtbG9hZGVyL2xpYi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTGF6eUxvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xhenlMb2FkZXJcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gZ2V0SW1hZ2VzRWxlbWVudHMoc2VsZWN0b3IpO1xuICAgIGlmICghaW1hZ2VzKVxuICAgICAgICByZXR1cm47XG4gICAgcmV0dXJuIG5ldyBMYXp5TG9hZGVyXzEuZGVmYXVsdChpbWFnZXMpLmV4ZWN1dGUoKTtcbn07XG5mdW5jdGlvbiBnZXRJbWFnZXNFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnICYmIHNlbGVjdG9yICE9PSAnJylcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbW9vdGgtbG9hZGVyW2RhdGEtc3JjXScpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../open/smooth-loader/lib/js/index.js\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nexports.__esModule = true;\n\nvar smooth_loader_1 = __importDefault(__webpack_require__(/*! smooth-loader */ \"../../../open/smooth-loader/lib/js/index.js\"));\n\nsmooth_loader_1[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbW9vdGgtbG9hZGVyLXRlc3QvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJfX2VzTW9kdWxlIiwiZXhwb3J0cyIsInNtb290aF9sb2FkZXJfMSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBRSxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJQyxlQUFlLEdBQUdKLGVBQWUsQ0FBQ0ssbUJBQU8sQ0FBQyxrRUFBRCxDQUFSLENBQXJDOztBQUNBRCxlQUFlLENBQUMsU0FBRCxDQUFmIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHNtb290aF9sb2FkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwic21vb3RoLWxvYWRlclwiKSk7XG5zbW9vdGhfbG9hZGVyXzFbXCJkZWZhdWx0XCJdKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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