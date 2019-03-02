"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _index = require("../../libs/taro/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../libs/omip/index.js");

var _mockData = require("./mock-data.js");

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

global.Omi.definePage('page-list', (_temp = _class = function (_WeElement) {
  _inherits(_TaroComponentClass, _WeElement);

  function _TaroComponentClass(props) {
    _classCallCheck(this, _TaroComponentClass);

    var _this = _possibleConstructorReturn(this, (_TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).call(this, props));

    _this.$usedState = ["showLoading", "films", "hasMore", "start"];
    _this.config = {
      navigationBarTitleText: '热门电影'
    };
    _this.data = {
      films: [],
      hasMore: true,
      showLoading: true,
      start: 0
    };

    _this.viewDetail = function (e) {
      var ds = e.currentTarget.dataset;
      wx.navigateTo({
        url: '../detail/index?id=' + ds.id + '&title=' + ds.title + '&type=ing'
      });
    };

    _this.$$refs = [];
    return _this;
  }

  _createClass(_TaroComponentClass, [{
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      console.log('onPullDownRefresh', new Date());
    }
  }, {
    key: "onPageScroll",
    value: function onPageScroll() {
      console.log('onPageScroll');
    }
  }, {
    key: "install",
    value: function install() {
      var _this2 = this;

      //setTimeout 模拟服务端请求耗时
      setTimeout(function () {
        _this2.data.films = _mockData2.default.subjects;
        _this2.data.showLoading = false;
        _this2.update();
      }, 500);
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      var _this3 = this;

      setTimeout(function () {
        _this3.data.films = _this3.data.films.concat(_mockData2.default.subjects);
        _this3.update();
      }, 100);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.data || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          showLoading = _state.showLoading,
          films = _state.films;


      if (showLoading) {}

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return _TaroComponentClass;
}(_index3.WeElement), _class.properties = {}, _class.$$events = [], _temp), "pages/list/index");
global.create.Page(global.getOptions('pages/list/index'));