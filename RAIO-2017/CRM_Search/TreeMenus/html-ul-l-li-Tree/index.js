const data = {
    menu: [
        {
            id: '0',
            sub: [
                {
                    name: 'lorem ipsum 0-0',
                    link: '0-0',
                    sub: null
                },
                {
                    name: 'lorem ipsum 0-1',
                    link: '0-1',
                    sub: null
                },
                {
                    name: 'lorem ipsum 0-2',
                    link: '0-2',
                    sub: null
                }
            ]
        },
        {
            id: '1',
            sub: null
        },
        {
            id: '2',
            sub: [
                {
                    name: 'lorem ipsum 2-0',
                    link: '2-0',
                    sub: null
                },
                {
                    name: 'lorem ipsum 2-1',
                    link: '2-1',
                    sub: null
                },
                {
                    name: 'lorem ipsum 2-2',
                    link: '2-2',
                    sub: [
                        {name: 'lorem ipsum 2-2-0',link: '2-2-0', sub: null},
                        {name: 'lorem ipsum 2-2-1',link: '2-2-1', sub: null},
                        {name: 'lorem ipsum 2-2-2',link: '2-2-2', sub: null},
                        {name: 'lorem ipsum 2-2-3',link: '2-2-3', sub: null},
                        {name: 'lorem ipsum 2-2-4',link: '2-2-4', sub: null},
                        {name: 'lorem ipsum 2-2-5',link: '2-2-5', sub: null},
                        {name: 'lorem ipsum 2-2-6',link: '2-2-6', sub: null}
                    ]
                },
                {
                    name: 'lorem ipsum 2-3',
                    link: '2-3',
                    sub: null
                },
                {
                    name: 'lorem ipsum 2-4',
                    link: '2-4',
                    sub: null
                },
                {
                    name: 'lorem ipsum 2-5',
                    link: '2-5',
                    sub: null
                }
            ]
        },
        {
            id: '3',
            sub: null
        }
    ]
};




// solution 1 
// recursive function 递归

/**
 * 
 * @param {object} data 
 * @param {boolean} isSub 
 */

const buildList = (data, isSub) => {
    let html = (isSub) ? `<div>` : ``; 
    // Wrap with div if true
    html += `<ul>`;
    for(let item in data){
        html += `<li>`;
        if(typeof(data[item].sub) === 'object'){ 
            // An array will return 'object'
            if(isSub){
                html += `<a href="${data[item].link}">${data[item].name}</a>`;
            } else {
                html += data[item].id; 
                // Submenu found, but top level list item.
            }
            html += buildList(data[item].sub, true); 
            // Submenu found. 
            // Calling recursively same method (and wrapping it in a div)
        } else {
            html += data[item].id 
            // No submenu
        }
        html += `</li>`;
    }
    html += `</ul>`;
    html += (isSub) ? `<div>` : ``; 
    return html;
};


const str = buildList(data.menu, true);




// solution 2
// Array.prototype.reduce()

// reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。



/* 

> `array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
`

var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]




*/

const getValues = (ul, el) => {
    var li = document.createElement('li'),
        a,
        div;
    if (el.id) {
        li.appendChild(document.createTextNode(el.id));
    }
    if (el.name && el.link) {
        a = document.createElement('a');
        a.text = el.name;
        a.href = el.link;
        li.appendChild(a);
    }
    if (Array.isArray(el.sub)) {
        div = document.createElement('div');
        div.appendChild(el.sub.reduce(getValues, document.createElement('ul')));
        // getValues
        // 递归调用
        li.appendChild(div);
    }
    ul.appendChild(li);
    return ul;
}

let object = data;

let tree = ``;

tree = object.menu.reduce(getValues, document.createElement('ul'))

document.body.appendChild(tree);





