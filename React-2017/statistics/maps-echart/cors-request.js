// let myImage = document.querySelector('img') || document.createElement("img");

// or create a new img element

const img_new = document.createElement("img");

img_new.src = `https://cdn.xgqfrms.xyz/logo/icon.png`;

// https://cdn.xgqfrms.xyz/json/index.html


let myImage = document.querySelector('img') || (document.createElement("img").src = `https://cdn.xgqfrms.xyz/logo/icon.png`);




let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/png');

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request('https://cdn.xgqfrms.xyz/logo/icon.png');

fetch(myRequest, myInit)
.then(function(response) {
    return response.blob();
})
.then(function(blob) {
    var objectURL = URL.createObjectURL(blob);
    myImage.src = objectURL;
});




