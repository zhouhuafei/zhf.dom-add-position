# 判断数据类型
* 有依赖，支持，commonjs
* 给div加一个relative定位(默认),不强行覆盖(默认),也就是说,如果这个div自身没有定位或者定位是static,才会给他加个定位
```
const domAddPosition = require('zhf.dom-add-position');
domAddPosition('div', 'relative', false);
```
* 语法
> domAddPosition(element [type], [isCover]);
* element 标签 可以是选择器 可以是原生dom 
* type 默认 'relative'
* isCover 默认 false

# 其他
* 建议使用
    - github https://github.com/zhouhuafei/zhf.dom-position
    - npm https://www.npmjs.com/package/zhf.dom-position
