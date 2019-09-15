"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createComponent", {
  enumerable: true,
  get: function get() {
    return _BaseComponent["default"];
  }
});
Object.defineProperty(exports, "customMap", {
  enumerable: true,
  get: function get() {
    return _mapError.customMap;
  }
});
Object.defineProperty(exports, "TextField", {
  enumerable: true,
  get: function get() {
    return _TextField["default"];
  }
});
Object.defineProperty(exports, "TextAreaField", {
  enumerable: true,
  get: function get() {
    return _TextAreaField["default"];
  }
});

var _BaseComponent = _interopRequireDefault(require("./components/BaseComponent"));

var _mapError = require("./maps/mapError");

var _TextField = _interopRequireDefault(require("./components/TextField"));

var _TextAreaField = _interopRequireDefault(require("./components/TextAreaField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }