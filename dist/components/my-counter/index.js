"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _index = require("../../libs/taro/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../libs/omip/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _index3.define)('my-counter', (_temp = _class = function (_WeElement) {
  _inherits(_TaroComponentClass, _WeElement);

  function _TaroComponentClass() {
    _classCallCheck(this, _TaroComponentClass);

    var _this = _possibleConstructorReturn(this, (_TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).apply(this, arguments));

    _this.$usedState = ["count"];

    _this.sub = function () {
      _this.data.count--;
      _this.fire('change', _this.data.count);
      _this.update();
    };

    _this.add = function () {
      _this.data.count++;
      _this.fire('change', _this.data.count);
      _this.update();
    };

    _this.$$refs = [];

    _this.data = {
      count: 1
    };
    return _this;
  }

  _createClass(_TaroComponentClass, [{
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.data || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return _TaroComponentClass;
}(_index3.WeElement), _class.properties = {}, _class.$$events = ["sub", "add"], _temp));