// fetch


// http://localhost:7777/datas


// http://localhost:7777/info/

fetch(`http://localhost:7777/datas`)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    json.map(
        (data) => console.log(`data`, data)
    );
    return repos = json;
});



// fetch ReportName

fetch(`http://localhost:7777/input`)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    console.log(`json.Info`, json.Info.schema.Properties);
    // Properties
    let datas = json.Info.schema.Properties;
    let {ApiName, SecuCode} = datas;
    console.log(`ApiName = ${ApiName.Description}`);
    console.log(`SecuCode = ${SecuCode.Description}`);
    // Objects to Array
    let arr = [];
    for (let key in datas) {
        if(!datas.hasOwnProperty(key)) continue;
        if(datas.hasOwnProperty(key)) {
            // key === index
            arr.push(datas[key]);
        }
    }
    for (let key in datas) {
        if(!datas.hasOwnProperty(key)) continue;
        if(datas.hasOwnProperty(key)) {
            console.log(`key = `, key);
            console.log(`key.type =`, key.type);
            console.log(`key.Required =`, key.Required);
            console.log(`key.Description =`, key.Description);
            arr.push({
                "type": key.type,
                "Required": key.Required,
                "Description": key.Description
            });
        }
    } 
    console.log(`arr result = `, arr);
    return inputs = arr;
});


let objs = json.Info.schema.Properties;

for (let key in objs) {
    if(!objs.hasOwnProperty(key)) continue;
    if(objs.hasOwnProperty(key)) {
        console.log(`key = `, key);
        console.log(`key.type =`, key.type);
    }
    let obj = objs[key];
    for (let prop in obj) {
        if(!obj.hasOwnProperty(prop)) continue;
        if(obj.hasOwnProperty(prop)) {
            console.log(`prop= `, prop);
            console.log(`prop.type =`, prop.type);
        }
    }
}




// fetch post

/* 

https://davidwalsh.name/fetch

*/

// url (required), options (optional)
fetch(
    `https://davidwalsh.name/some/url`,
    {
        method: 'get'
    }
).then(
    (response) => response.json()
).catch(
    (err) => {
        console.log(`err`, err);
        // js Throw Error
    }
);



fetch('https://davidwalsh.name/submit-json', {
    method: 'post',
    body: JSON.stringify({
        email: document.getElementById('email').value
        answer: document.getElementById('answer').value
    })
});



// Create an empty Headers instance
var headers = new Headers();

// Add a few headers
headers.append('Content-Type', 'text/plain');
headers.append('X-My-Custom-Header', 'CustomValue');

// Check, get, and set header values
headers.has('Content-Type'); // true
headers.get('Content-Type'); // "text/plain"
headers.set('Content-Type', 'application/json');

// Delete a header
headers.delete('X-My-Custom-Header');

// Add initial values
var headers = new Headers({
    'Content-Type': 'text/plain',
    'X-My-Custom-Header': 'CustomValue'
});



var request = new Request('https://davidwalsh.name/some-url', {
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
});

fetch(request).then(function() { /* handle response */ });


// Request: method - GET, POST, PUT, DELETE, HEAD



const url = `https://abc.xgqfrms.xyz/some-url`;

const headers = new Headers({
    'Content-Type': 'text/plain',
    'X-My-Custom-Header': 'CustomValue'
});

const datas = JSON.stringify(
    {
        user: "username",
        pwd: "password"
    }
);

const method = `POST`;

const request = new Request(url, {
    headers: headers,
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow',
    body: datas
});

fetch(
    request
).then(
    (response) => response.json()
).catch(
    (err) => {
        console.log(`err`, err);
        // js Throw Error
    }
);


const request = {
    headers: headers,
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow',
    body: datas
};


fetch(
    url,
    {
        ...request
    }
).then(
    (response) => response.json()
).catch(
    (err) => {
        console.log(`err`, err);
        // js Throw Error
    }
);



const request = new Request(url, {
    // ...headers
});

fetch(request).then(function() { /* handle response */ });



/* 

response.json();

response.text();

response.blob();

// formData() ???

*/


var request = new Request('https://davidwalsh.name/users.json', {
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
});

// Now use it!
fetch(request).then(function() { /* handle response */ });


fetch('https://davidwalsh.name/users.json', {
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
}).then(function() { /* handle response */ });



fetch(
    `https://davidwalsh.name/some/url`,
    {
        method: 'get'
    }
).then(
    (response) => response.json()
).catch(
    (err) => {
        console.log(`err`, err);
        // js Throw Error
    }
);




// https://github.com/github/fetch#installation

// Post form
let form = document.querySelector('form');

fetch('/users', {
    method: 'POST',
    body: new FormData(form)
});


// Post JSON
fetch('/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot'
    })
});


// File upload
let input = document.querySelector('input[type="file"]');
let data = new FormData();

data.append('file', input.files[0]);
data.append('user', 'hubot');

fetch('/avatars', {
    method: 'POST',
    body: data
});