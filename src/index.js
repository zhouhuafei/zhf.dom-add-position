const getDomArray = require('zhf.get-dom-array');

function domAddPosition(element, type = 'relative', isCover = false) {
    const dom = getDomArray(element)[0];
    if (isCover) {
        dom.style.position = type;
    } else {
        // 先判断优先级高的
        if (dom.style.position === '' || dom.style.position === 'static') {
            // 当没给dom定位的时候 getComputedStyle(dom).position 浏览器获取到的是'static' jest获取到的值是''
            if (getComputedStyle(dom).position === 'static' || getComputedStyle(dom).position === '') {
                dom.style.position = type;
            }
        }
    }
}

module.exports = domAddPosition;
