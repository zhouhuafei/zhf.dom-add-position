'use strict';

var getDomArray = require('zhf.get-dom-array');
var DomPosition = require('zhf.dom-position');

function domAddPosition(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'relative';
    var isCover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var dom = getDomArray(element)[0];
    if (!dom) {
        console.log('no find dom');
        return;
    }
    if (isCover) {
        dom.style.position = type;
    } else {
        var domPosition = new DomPosition(dom);
        if (!domPosition.hasPosition()) {
            dom.style.position = type;
        }
    }
}

module.exports = domAddPosition;