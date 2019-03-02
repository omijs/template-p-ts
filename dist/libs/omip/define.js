'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.define = define;
function define(name, ctor) {
  var ins = new ctor();
  var config = {
    properties: {},
    methods: {}
  };
  Object.keys(ins).forEach(function (key) {
    if (typeof ins[key] === 'function') {
      config.methods[key] = ins[key];
    } else {
      config[key] = ins[key];
    }
  });

  config.data = ins._createData();

  config.created = function () {
    var _this = this;

    ins._weappRef = this;
    config.$$refs.forEach(function (ref) {
      if (ref.type === 'component') {
        if (ref.fn) {
          ref.fn(_this.selectComponent('#' + ref.id));
        } else {
          ins[ref.refName] = _this.selectComponent('#' + ref.id);
        }
      }
    });
    ins.install();
    ins.beforeRender && ins.beforeRender();
  };

  config.attached = function () {};

  config.moved = function () {};

  config.ready = function () {
    ins.installed();
  };

  config.detached = function () {
    ins.uninstall();
  };

  config.$usedState && config.$usedState.forEach(function (prop) {
    if (!config.data || config.data && !config.data.hasOwnProperty(prop)) {
      config.properties[prop] = null;
    }
  });

  Component(config);
}