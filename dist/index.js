'use strict';

var getDomArray = require('zhf.get-dom-array');

function domAddPosition(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'relative';
    var isCover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var dom = getDomArray(element)[0];
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