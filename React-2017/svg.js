/*

http://svgjs.com/#easy-readable-uncluttered-syntax

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElementNS


https://css-tricks.com/pong-svg-js/

*/





// Vanilla js
let ns = 'http://www.w3.org/2000/svg',
    div = document.getElementById('drawing') ,
    svg = document.createElementNS(ns, 'svg'),
    rect = document.createElementNS(ns, 'rect');

svg.setAttributeNS(null, 'width', '100%');
svg.setAttributeNS(null, 'height', '100%');


rect.setAttributeNS(null, 'width', 100);
rect.setAttributeNS(null, 'height', 100);
rect.setAttributeNS(null, 'fill', '#f06');

svg.appendChild(rect);

div.appendChild(svg);




















