const url = `https://cdn.xgqfrms.xyz/json/output.json`;

let data = fetch(url)
.then((res) => res.json())
.then(
    (json) => {
        console.log(`fetched json`, json);
        // data
        return data = json;
        // get PromiseValue & assign it to data
        /* 
            return json;
            // get Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: {…}}
        */
    }
);


let links;

fetch(url)
.then((res) => res.json())
.then(
    (json) => {
        console.log(`fetched json`, json);
        // data
        return links = json;
    }
);


let tree = fetch(url)
.then((res) => res.json())
.then(
    (json) => {
        console.log(`fetched json`, json);
        // data
        return tree = json;
    }
);


/* 

    const trees = fetch(url)
    .then((res) => res.json())
    .then(
        (json) => {
            console.log(`fetched json`, json);
            // data
            return trees = json;
            // [eslint] 'trees' is constant. (no-const-assign)
            // const trees: any
        }
    );

*/