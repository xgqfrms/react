// utils.js
export function addTextToBody(text = `some default text!`) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}

// https://github.com/gildata/RAIO/issues/178#issuecomment-333373464

/*

const addTextToBody = (text = `some default text!`) => {
    const div = document.createElement('div');
    div.textContent =text;
    document.body.appendChild(div);
    // return document.body.appendChild(div);
}

export {addTextToBody};
export default addTextToBody;

*/


(() => {
    try {
        let i,
            environmentVars = '',
            e = document.createEvent('Events');
        //
        e.initEvent('wappalyzerEvent', true, false);
        // 
        for ( i in window ) {
            environmentVars += i + ' ';
        }
        // 
        document
        .getElementById('wappalyzerData')
        .appendChild(
            document.createComment(environmentVars)
        );
        // 
        document
        .getElementById('wappalyzerData')
        .dispatchEvent(e);
    } catch(e) {
        // Fail quietly
    }
})();


// ES6  & IIFE
(() => {
   try {
       console.log(`😃 🙌 🎉 Hooray!`);
       // https://emojipedia.org/search/?q=tada
   } catch(error) {
       // Fail quietly
       console.log(`😭 😢 😂 😿 😞 💩 Holy Shit!`);
       // https://emojipedia.org/pile-of-poo/
       // https://emojipedia.org/search/?q=cry
       // throw new Error(`meesage`, error);
   }
})();
// 😃 🙌 🎉 Hooray!



/*

(function() {
    try {
        let i,
            environmentVars = '',
            e = document.createEvent('Events');
        //
        e.initEvent('wappalyzerEvent', true, false);
        // 
        for ( i in window ) {
            environmentVars += i + ' ';
        }
        // 
        document
        .getElementById('wappalyzerData')
        .appendChild(
            document.createComment(environmentVars)
        );
        // 
        document
        .getElementById('wappalyzerData')
        .dispatchEvent(e);
    } catch(e) {
        // Fail quietly
    }
}());


*/

const codes_str = `
    // Supported:
    import {foo} from 'https://jakearchibald.com/utils/bar.js';
`;

// comments
codes_str.indexOf(`//`);
// 5

// import
codes_str.indexOf(`import`);
// 23

// no white spaces
codes_str.substr(5, 23-5).trim();
// "// Supported:"

let c_begin = codes_str.indexOf(`//`),
    c_end = codes_str.indexOf(`import`),
    comments = codes_str.substr(c_begin, c_end - c_begin).trim();

// const div = document.createElement(type, props, children);

// div.appendChild();
// insertAdjacentHTML();

let div = document.querySelector(`#uid_es6_modules`);

div.insertAdjacentHTML(`beforeend`, `<div id="two">😃 🙌 🎉 Hooray!</div>`);


let pre = document.createElement(`pre`);
// <pre>​</pre>​
let span= document.createElement(`span`);
// <span>​</span>​
span.append(`${comments}`);
pre.appendChild(span);
// div.insertAdjacentHTML(`beforeend`, `${pre}`);
// [object HTMLPreElement]

div.appendChild(pre);
// <pre>​<span class=​"hl-comments">​// Supported:​</span>​</pre>​












