


// Instead of:
<img src="logo.png" />

// We do:
React.createElement("img", { src: "logo.png" })


// Instead of:
<a href="/">Home</a>

// We do:
React.createElement("a", { href: "/" }, "Home");


React.createElement(
    "a", 
    { href: "/" },
    React.createElement(
        "img", 
        { src: "logo.png" }
    )
);







let datas = {
    "products": [
        {
            "name": "React.js Essentials",
            "price": 2999
        },
        {
            "name": "Pro React",
            "price": 2856
        },
        {
            "name": "Learning React Native",
            "price": 2199
        }
    ]
};

let products = datas.products;




React.createElement("ul", {},
    ...products.map(
        product => React.createElement("li", {}, `${product.name} - ${product.price}`)
    )
);










