
import { h } from './h'
import { define } from './define'
import { updateData } from './update-data'

class Component {
  constructor() { }

  update(patch, callback) {
    this.beforeUpdate && this.beforeUpdate()
    this.beforeRender && this.beforeRender()

    if (arguments.length === 0) {
      this._weappRef.setData(this.data)
    } else if (arguments.length === 1) {
      if (typeof patch === 'function') {
        this._weappRef.setData(this.data, patch)
      } else {
        this.data = this.data || {}
        Object.keys(patch).forEach(path => {
          updateData(this.data, path, patch[path])
        })
        this._weappRef.setData(this.data)
      }
    } else {
      this.data = this.data || {}
      Object.keys(patch).forEach(path => {
        updateData(this.data, path, patch[path])
      })
      this._weappRef.setData(this.data, callback)
    }
    this.updated && this.updated()
  }

  install() { }

  installed() { }

  uninstall() { }

  fire(type, data) {
    this._weappRef.triggerEvent(type, data)
  }
}

const WeElement = Component



function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    return (
      self ||
      window ||
      global ||
      (function () {
        return this
      })()
    )
  }
  return global
}

const root = getGlobal()
const mapping = {}

const definePage = function (name, ctor, path) {
  mapping[path] = {
    name,
    ctor
  }
}
const defineApp = function (name, ctor) {
  const ins = new ctor()
  const config = {}
  config.globalData = ins.globalData
  config.onLaunch = function () {
    ins.install && ins.install.call(this)
  }

  config.onShow = function () {
    ins.onShow && ins.onShow()
  }

  config.onHide = function () {
    ins.onHide && ins.onHide()
  }
  
  App(config)
}

function render() {

}

root.Omi = {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp

}
root.omi = root.Omi
root.omix = root.Omi
root.Omix = root.Omi
root.create = {
  Page: function (options) {
    const ins = new options.ctor
    const config = {}
    Object.keys(ins).forEach(key => {
      config[key] = ins[key]
    })

    config.onLoad = function (options) {
      ins._weappRef = this
      config.$$refs.forEach(ref => {
        if (ref.type === 'component') {
          if (ref.fn) {
            ref.fn(this.selectComponent('#' + ref.id))
          } else {
            ins[ref.refName] = this.selectComponent('#' + ref.id)
          }
        }
      })
      ins.install(options)
      ins.beforeRender && ins.beforeRender()
    }

    config.onReady = function () {
      ins.installed()
    }

    config.onUnload = function () {
      ins.uninstall()
    }

    config.onShow = function () {
      ins.onShow && ins.onShow()
    }

    config.onHide = function () {
      ins.onHide && ins.onHide()
    }

    if (ins.onReachBottom) {
      config.onReachBottom = ins.onReachBottom.bind(ins)
    }

    if (ins.onPullDownRefresh) {
      config.onPullDownRefresh = ins.onPullDownRefresh.bind(ins)
    }

    if (ins.onPageScroll) {
      config.onPageScroll = ins.onPageScroll.bind(ins)
    }

    Page(config)
  }
}

root.getOptions = function (path) {
  return mapping[path]
}

export {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp
}

export default {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp
}
