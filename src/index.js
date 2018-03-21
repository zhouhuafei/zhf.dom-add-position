const getDomArray = require('zhf.get-dom-array');
const DomPosition = require('zhf.dom-position');

function domAddPosition(element, type = 'relative', isCover = false) {
    const dom = getDomArray(element)[0];
    if (!dom) {
        console.log('no find dom');
        return;
    }
    if (isCover) {
        dom.style.position = type;
    } else {
        const domPosition = new DomPosition(dom);
        if (!domPosition.hasPosition()) {
            dom.style.position = type;
        }
    }
}

module.exports = domAddPosition;
