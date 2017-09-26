/**
 * Created by BigZ on 17/9/25.
 */
export function addClass(el, className) {
    if(hasClass(el,className)){
        return
    }else{
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
