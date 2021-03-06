/**
 * Created by BigZ on 17/9/25.
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  } else {
    //先拆开成数组，添加进去，在join连起来
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
  }
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    //setAttribute为对象设置指定属性，值
    return el.setAttribute(prefix + name, val)
  } else {
    //getAttribute获取指定属性名的属性值
    return el.getAttribute(prefix + name)
  }
}

let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
