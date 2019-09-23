# Ant-Design_React

> antd

https://gist.github.com/xyzdata/d8b3cb0246d881dcf580df4745ad7920

https://github.com/xyzdata/git/issues/3


## Table

https://ant.design/components/select-cn/#onRow-%E7%94%A8%E6%B3%95

```js
<Table
  onRow={record => {
    return {
      onClick: event => {}, // 点击行
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, // 鼠标移入行
      onMouseLeave: event => {},
    };
  }}
  onHeaderRow={column => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>
```


