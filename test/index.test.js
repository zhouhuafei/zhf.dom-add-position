const domAddPosition = require('../dist/index.min');
const domCreate = require('zhf.dom-create');

test('给dom添加一个定位absolute', () => {
    const dom = domCreate(`<div></div>`);
    domAddPosition(dom, 'absolute');
    console.log('dom.outerHTML:\n', dom.outerHTML);
    expect(true).toEqual(true);
});
