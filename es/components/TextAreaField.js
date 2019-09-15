"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textareaItem = _interopRequireDefault(require("antd-mobile/lib/textarea-item"));

require("antd-mobile/lib/textarea-item/style/css");

var _textFieldMap = _interopRequireDefault(require("../maps/textFieldMap"));

var _BaseComponent = _interopRequireDefault(require("./BaseComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _BaseComponent["default"])(_textareaItem["default"], _textFieldMap["default"]);

exports["default"] = _default;