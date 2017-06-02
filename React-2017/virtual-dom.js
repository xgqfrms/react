// assuming it exists
let ul = document.getElementsByTagName("ul")[0],
    docfrag = document.createDocumentFragment();

const browserList = [
    "Internet Explorer", 
    "Mozilla Firefox", 
    "Safari", 
    "Chrome", 
    "Opera"
];

browserList.forEach((e) => {
    let li = document.createElement("li");
    li.textContent = e;
    docfrag.appendChild(li);
});

ul.appendChild(docfrag);



// a list with well-known web browsers




/*

Virtual DOM & 前端性能优化最佳实践


https://gist.github.com/xgqfrms-GitHub/8f80132c5d4a9b593d7f856f98f15af5


https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment


*/


