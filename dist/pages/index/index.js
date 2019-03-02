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

//获取应用实例
var app = getApp();
global.Omi.definePage('page-index', (_temp = _class = function (_WeElement) {
  _inherits(_TaroComponentClass, _WeElement);

  function _TaroComponentClass() {
    _classCallCheck(this, _TaroComponentClass);

    var _this = _possibleConstructorReturn(this, (_TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).apply(this, arguments));

    _this.$usedState = ["motto", "userInfo", "hasUserInfo", "canIUse"];

    _this.bindViewTap = function () {
      wx.navigateTo({
        url: '../logs/index'
      });
    };

    _this.gotoFilms = function () {
      wx.navigateTo({
        url: '../list/index'
      });
    };

    _this.getUserInfo = function (e) {
      console.log(e);
      app.globalData.userInfo = e.detail.userInfo;
      _this.data.userInfo = e.detail.userInfo;
      _this.data.hasUserInfo = true;
      _this.update();
    };

    _this.$$refs = [];

    _this.data = {
      motto: 'Hello Omip',
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    };
    //事件处理函数
    return _this;
  }

  _createClass(_TaroComponentClass, [{
    key: "install",
    value: function install() {
      var _this2 = this;

      if (app.globalData.userInfo) {
        this.data.userInfo = app.globalData.userInfo;
        this.data.hasUserInfo = true;
        this.update();
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = function (res) {
          _this2.data.userInfo = res.userInfo;
          _this2.data.hasUserInfo = true;
          _this2.update();
        };
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: function success(res) {
            app.globalData.userInfo = res.userInfo;
            _this2.data.userInfo = res.userInfo;
            _this2.data.hasUserInfo = true;
            _this2.update();
          }
        });
      }
    }
  }, {
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
}(_index3.WeElement), _class.properties = {}, _class.$$events = [], _temp), "pages/index/index");
global.create.Page(global.getOptions('pages/index/index'));