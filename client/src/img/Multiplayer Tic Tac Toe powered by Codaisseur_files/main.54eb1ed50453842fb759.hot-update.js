webpackHotUpdate("main",{

/***/ "./src/components/games/Board.js":
/*!***************************************!*\
  !*** ./src/components/games/Board.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.css */ \"./src/components/games/Board.css\");\n/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Validation */ \"./src/components/games/Validation.js\");\nvar _jsxFileName = \"/home/mauro/codaisseur/week-7/game-week2/game-starter-b15/client/src/components/games/Board.js\";\n\n\n\n\nvar renderCel = function renderCel(makeMove, rowIndex, cellIndex, symbol, hasTurn, foundX, nextCells, blockedCells, foundO) {\n  var nextCell = nextCells[0];\n  var possibleArray = nextCell.map(function (possibility) {\n    var possibleArray = possibility[0] === rowIndex && possibility[1] === cellIndex;\n    return possibleArray;\n  });\n\n  var getArray = function getArray(found) {\n    var array = found;\n    array.arrX.map(function (element) {\n      var elementArray = element[0] === rowIndex && element[1] === cellIndex;\n      return elementArray;\n    });\n  };\n\n  var chosenArray = foundX.arrX.map(function (chosen) {\n    var chosenArray = chosen[0] === rowIndex && chosen[1] === cellIndex;\n    return chosenArray;\n  });\n  var blockedArray = foundO.arrX.map(function (blocked) {\n    var blockedArray = blocked[0] === rowIndex && blocked[1] === cellIndex;\n    return blockedArray;\n  });\n  var isPossible = possibleArray.indexOf(true) > -1;\n  var isChosen = chosenArray.indexOf(true) > -1;\n  var isBlocked = blockedArray.indexOf(true) > -1;\n  console.log('isChosen', isChosen); // console.log('isChosen', isChosen)\n\n  if (isChosen) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"board-tile-chosen\",\n      disabled: hasTurn,\n      key: \"\".concat(rowIndex, \"-\").concat(cellIndex),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48\n      },\n      __self: this\n    }, symbol || '-');\n  } else if (isBlocked) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"board-tile-blocked\",\n      disabled: hasTurn,\n      key: \"\".concat(rowIndex, \"-\").concat(cellIndex),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56\n      },\n      __self: this\n    }, symbol || '-');\n  } else if (isPossible) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"board-tile-possible\",\n      disabled: hasTurn,\n      onClick: function onClick() {\n        return makeMove(rowIndex, cellIndex);\n      },\n      key: \"\".concat(rowIndex, \"-\").concat(cellIndex),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64\n      },\n      __self: this\n    }, symbol || '-');\n  } else if (!isPossible) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"board-tile\",\n      disabled: hasTurn,\n      key: \"\".concat(rowIndex, \"-\").concat(cellIndex),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73\n      },\n      __self: this\n    }, symbol || '-');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var game = _ref.game,\n      makeMove = _ref.makeMove;\n  return game.board.map(function (cells, rowIndex) {\n    console.log(cells);\n    var foundX = Object(_Validation__WEBPACK_IMPORTED_MODULE_2__[\"findX\"])(game.board);\n    var nextCells = Object(_Validation__WEBPACK_IMPORTED_MODULE_2__[\"symbolArray\"])(foundX, cells.length);\n    var foundO = Object(_Validation__WEBPACK_IMPORTED_MODULE_2__[\"findO\"])(game.board);\n    var blockedCells = Object(_Validation__WEBPACK_IMPORTED_MODULE_2__[\"symbolArray\"])(foundO, cells.length);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: rowIndex,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88\n      },\n      __self: this\n    }, cells.map(function (symbol, cellIndex) {\n      return renderCel(makeMove, rowIndex, cellIndex, symbol, false, foundX, nextCells, blockedCells, foundO);\n    }));\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdXJvL2NvZGFpc3NldXIvd2Vlay03L2dhbWUtd2VlazIvZ2FtZS1zdGFydGVyLWIxNS9jbGllbnQvc3JjL2NvbXBvbmVudHMvZ2FtZXMvQm9hcmQuanMiXSwibmFtZXMiOlsicmVuZGVyQ2VsIiwibWFrZU1vdmUiLCJyb3dJbmRleCIsImNlbGxJbmRleCIsInN5bWJvbCIsImhhc1R1cm4iLCJmb3VuZFgiLCJuZXh0Q2VsbHMiLCJibG9ja2VkQ2VsbHMiLCJmb3VuZE8iLCJuZXh0Q2VsbCIsInBvc3NpYmxlQXJyYXkiLCJtYXAiLCJwb3NzaWJpbGl0eSIsImdldEFycmF5IiwiZm91bmQiLCJhcnJheSIsImFyclgiLCJlbGVtZW50IiwiZWxlbWVudEFycmF5IiwiY2hvc2VuQXJyYXkiLCJjaG9zZW4iLCJibG9ja2VkQXJyYXkiLCJibG9ja2VkIiwiaXNQb3NzaWJsZSIsImluZGV4T2YiLCJpc0Nob3NlbiIsImlzQmxvY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiYm9hcmQiLCJjZWxscyIsImZpbmRYIiwic3ltYm9sQXJyYXkiLCJsZW5ndGgiLCJmaW5kTyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBcUJDLFNBQXJCLEVBQWdDQyxNQUFoQyxFQUF3Q0MsT0FBeEMsRUFBaURDLE1BQWpELEVBQXlEQyxTQUF6RCxFQUFvRUMsWUFBcEUsRUFBa0ZDLE1BQWxGLEVBQTZGO0FBQzdHLE1BQU1DLFFBQVEsR0FBR0gsU0FBUyxDQUFDLENBQUQsQ0FBMUI7QUFFQSxNQUFNSSxhQUFhLEdBQUdELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUFDLFdBQVcsRUFBSTtBQUNoRCxRQUFNRixhQUFhLEdBQ2pCRSxXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CWCxRQUFuQixJQUNBVyxXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CVixT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O0FBQUEsTUFBUzdCLFFBQVQsUUFBU0EsUUFBVDtBQUFBLFNBQXdCNkIsSUFBSSxDQUFDQyxLQUFMLENBQVduQixHQUFYLENBQWUsVUFBQ29CLEtBQUQsRUFBUTlCLFFBQVIsRUFBcUI7QUFDekUwQixXQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNBLFFBQU0xQixNQUFNLEdBQUcyQix5REFBSyxDQUFDSCxJQUFJLENBQUNDLEtBQU4sQ0FBcEI7QUFDQSxRQUFNeEIsU0FBUyxHQUFHMkIsK0RBQVcsQ0FBQzVCLE1BQUQsRUFBUzBCLEtBQUssQ0FBQ0csTUFBZixDQUE3QjtBQUNBLFFBQU0xQixNQUFNLEdBQUcyQix5REFBSyxDQUFDTixJQUFJLENBQUNDLEtBQU4sQ0FBcEI7QUFDQSxRQUFNdkIsWUFBWSxHQUFHMEIsK0RBQVcsQ0FBQ3pCLE1BQUQsRUFBU3VCLEtBQUssQ0FBQ0csTUFBZixDQUFoQztBQUNBLFdBQU87QUFBTSxTQUFHLEVBQUVqQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0o4QixLQUFLLENBQUNwQixHQUFOLENBQVUsVUFBQ1IsTUFBRCxFQUFTRCxTQUFUO0FBQUEsYUFBdUJILFNBQVMsQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXFCQyxTQUFyQixFQUFnQ0MsTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0NFLE1BQS9DLEVBQXVEQyxTQUF2RCxFQUFrRUMsWUFBbEUsRUFBZ0ZDLE1BQWhGLENBQWhDO0FBQUEsS0FBVixDQURJLENBQVA7QUFHRCxHQVRzQyxDQUF4QjtBQUFBLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lcy9Cb2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9Cb2FyZC5jc3MnXG5pbXBvcnQgeyBmaW5kWCwgZmluZE8sIHN5bWJvbEFycmF5IH0gZnJvbSAnLi9WYWxpZGF0aW9uJ1xuXG5jb25zdCByZW5kZXJDZWwgPSAobWFrZU1vdmUsIHJvd0luZGV4LCBjZWxsSW5kZXgsIHN5bWJvbCwgaGFzVHVybiwgZm91bmRYLCBuZXh0Q2VsbHMsIGJsb2NrZWRDZWxscywgZm91bmRPKSA9PiB7XG4gIGNvbnN0IG5leHRDZWxsID0gbmV4dENlbGxzWzBdXG5cbiAgY29uc3QgcG9zc2libGVBcnJheSA9IG5leHRDZWxsLm1hcChwb3NzaWJpbGl0eSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVBcnJheSA9XG4gICAgICBwb3NzaWJpbGl0eVswXSA9PT0gcm93SW5kZXggJiZcbiAgICAgIHBvc3NpYmlsaXR5WzFdID09PSBjZWxsSW5kZXhcbiAgICByZXR1cm4gcG9zc2libGVBcnJheVxuICB9KVxuXG4gIGNvbnN0IGdldEFycmF5ID0gKGZvdW5kKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBmb3VuZFxuICAgIGFycmF5LmFyclgubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEFycmF5ID1cbiAgICAgICAgZWxlbWVudFswXSA9PT0gcm93SW5kZXggJiZcbiAgICAgICAgZWxlbWVudFsxXSA9PT0gY2VsbEluZGV4XG4gICAgICByZXR1cm4gZWxlbWVudEFycmF5XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNob3NlbkFycmF5ID0gZm91bmRYLmFyclgubWFwKGNob3NlbiA9PiB7XG4gICAgY29uc3QgY2hvc2VuQXJyYXkgPVxuICAgICAgY2hvc2VuWzBdID09PSByb3dJbmRleCAmJlxuICAgICAgY2hvc2VuWzFdID09PSBjZWxsSW5kZXhcbiAgICByZXR1cm4gY2hvc2VuQXJyYXlcbiAgfSlcblxuICBjb25zdCBibG9ja2VkQXJyYXkgPSBmb3VuZE8uYXJyWC5tYXAoYmxvY2tlZCA9PiB7XG4gICAgY29uc3QgYmxvY2tlZEFycmF5ID1cbiAgICAgIGJsb2NrZWRbMF0gPT09IHJvd0luZGV4ICYmXG4gICAgICBibG9ja2VkWzFdID09PSBjZWxsSW5kZXhcbiAgICByZXR1cm4gYmxvY2tlZEFycmF5XG4gIH0pXG5cbiAgY29uc3QgaXNQb3NzaWJsZSA9IHBvc3NpYmxlQXJyYXkuaW5kZXhPZih0cnVlKSA+IC0xXG4gIGNvbnN0IGlzQ2hvc2VuID0gY2hvc2VuQXJyYXkuaW5kZXhPZih0cnVlKSA+IC0xXG4gIGNvbnN0IGlzQmxvY2tlZCA9IGJsb2NrZWRBcnJheS5pbmRleE9mKHRydWUpID4gLTFcblxuICBjb25zb2xlLmxvZygnaXNDaG9zZW4nLCBpc0Nob3NlbilcbiAgLy8gY29uc29sZS5sb2coJ2lzQ2hvc2VuJywgaXNDaG9zZW4pXG5cbiAgaWYgKGlzQ2hvc2VuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYm9hcmQtdGlsZS1jaG9zZW5cIlxuICAgICAgICBkaXNhYmxlZD17aGFzVHVybn1cbiAgICAgICAga2V5PXtgJHtyb3dJbmRleH0tJHtjZWxsSW5kZXh9YH1cbiAgICAgID57c3ltYm9sIHx8ICctJ308L2J1dHRvbj5cbiAgICApXG4gIH0gZWxzZSBpZiAoaXNCbG9ja2VkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYm9hcmQtdGlsZS1ibG9ja2VkXCJcbiAgICAgICAgZGlzYWJsZWQ9e2hhc1R1cm59XG4gICAgICAgIGtleT17YCR7cm93SW5kZXh9LSR7Y2VsbEluZGV4fWB9XG4gICAgICA+e3N5bWJvbCB8fCAnLSd9PC9idXR0b24+XG4gICAgKVxuICB9IGVsc2UgaWYgKGlzUG9zc2libGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJib2FyZC10aWxlLXBvc3NpYmxlXCJcbiAgICAgICAgZGlzYWJsZWQ9e2hhc1R1cm59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG1ha2VNb3ZlKHJvd0luZGV4LCBjZWxsSW5kZXgpfVxuICAgICAgICBrZXk9e2Ake3Jvd0luZGV4fS0ke2NlbGxJbmRleH1gfVxuICAgICAgPntzeW1ib2wgfHwgJy0nfTwvYnV0dG9uPlxuICAgIClcbiAgfSBlbHNlIGlmICghaXNQb3NzaWJsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJvYXJkLXRpbGVcIlxuICAgICAgICBkaXNhYmxlZD17aGFzVHVybn1cbiAgICAgICAga2V5PXtgJHtyb3dJbmRleH0tJHtjZWxsSW5kZXh9YH1cbiAgICAgID57c3ltYm9sIHx8ICctJ308L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgZ2FtZSwgbWFrZU1vdmUgfSkgPT4gZ2FtZS5ib2FyZC5tYXAoKGNlbGxzLCByb3dJbmRleCkgPT4ge1xuICBjb25zb2xlLmxvZyhjZWxscylcbiAgY29uc3QgZm91bmRYID0gZmluZFgoZ2FtZS5ib2FyZClcbiAgY29uc3QgbmV4dENlbGxzID0gc3ltYm9sQXJyYXkoZm91bmRYLCBjZWxscy5sZW5ndGgpXG4gIGNvbnN0IGZvdW5kTyA9IGZpbmRPKGdhbWUuYm9hcmQpXG4gIGNvbnN0IGJsb2NrZWRDZWxscyA9IHN5bWJvbEFycmF5KGZvdW5kTywgY2VsbHMubGVuZ3RoKVxuICByZXR1cm4gPCBkaXYga2V5PXtyb3dJbmRleH0gPlxuICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgY2VsbEluZGV4KSA9PiByZW5kZXJDZWwobWFrZU1vdmUsIHJvd0luZGV4LCBjZWxsSW5kZXgsIHN5bWJvbCwgZmFsc2UsIGZvdW5kWCwgbmV4dENlbGxzLCBibG9ja2VkQ2VsbHMsIGZvdW5kTykpfVxuICA8L2RpdiA+XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/games/Board.js\n");

/***/ })

})