const menuItems = [  
    {  
        name : "Store",  
        url : "/store"  
    },  
    {  
        name : "Travel",  
        url : "/store/travel"  
    },  
    {  
        name : "Gardening",  
        url : "/store/gardening"  
    },  
    {  
        name : "Healthy Eating",  
        url : "/store/healthy-eating"  
    },  
    {  
        name : "Cook Books",  
        url : "/store/healthy-eating/cook-books"  
    },  
    {  
        name : "Single Meal Gifts",  
        url : "/store/healthy-eating/single-meal-gifts"  
    },  
    {  
        name : "Outdoor Recreation",  
        url : "/store/outdoor-recreation"  
    },  
    {  
        name : "Hiking",  
        url : "/store/outdoor-recreation/hiking"  
    },  
    {  
        name : "Snowshoeing",  
        url : "/store/outdoor-recreation/hiking/snowshoeing"  
    },  
    {  
        name : "Skiing",  
        url : "/store/outdoor-recreation/skiing"  
    },  
    {  
        name : "Physical Fitness",  
        url : "/store/physical-fitness"  
    },  
    {  
        name : "Provident Living",  
        url : "/store/provident-living"  
    }  
];



/* 

// target html


<ul>  
    <li><a href="/store">Store</a>  
        <ul>  
        <li><a href="/store/travel">Travel</a></li>  
        <li><a href="/store/gardening">Gardening</a></li>  
        <li><a href="/store/healthy-eating">Healthy Eating</a>  
            <ul>  
            <li><a href="/store/healthy-eating/cook-books">Cook Books</a></li>  
            <li><a href="/store/healthy-eating/single-meal-gifts">Single Meal Gifts</a></li>
            </ul>  
        </li>
        <li><a href="/store/outdoor-recreation">Outdoor Recreation</a>  
            <ul>  
            <li><a href="/store/outdoor-recreation/hiking">Hiking</a>  
                <ul>  
                <li><a href="/store/outdoor-recreation/hiking/snowshoeing">Snowshoeing</a></li>
                </ul>  
            </li>  
            <li><a href="/store/outdoor-recreation/skiing">Skiing</a></li>  
            </ul>  
        </li>
        <li><a href="/store/physical-fitness">Physical Fitness</a></li>  
        <li><a href="/store/provident-living">Provident Living</a></li>  
        </ul>  
    </li>  
</ul>  


*/


/**
 * 
 * @param {object} node 
 * @param {Array} treeNodes
 * @comments: convert your data structure to a tree 
 * 
 */

// Add an item node in the tree, at the right position
const addToTree = (node, treeNodes) => {
    // Check if the item node should inserted in a subnode
    for (let i=0; i<treeNodes.length; i++ ) {
        var treeNode = treeNodes[i];
        // "/store/travel".indexOf( '/store/' )
        if (node.url.indexOf( treeNode.url + '/' ) == 0 ) {
            addToTree( node, treeNode.children );

            // Item node was added, we can quit
            return;
        }
    }
    // Item node was not added to a subnode, so it's a sibling of these treeNodes
    treeNodes.push({
        name: node.name,
        url: node.url,
        children: []
    });
}
//Create the item tree starting from menuItems
function createTree( nodes ) {
    var tree = [];
    for ( var i=0; i<nodes.length; i++ ) {
        var node = nodes[i];
        addToTree( node, tree );
    }
    return tree;
}
var menuItemsTree = createTree( menuItems );
console.log( menuItemsTree );


// resulting menuItemsTree


/* 



[
  {
    "name":"Store",
    "url":"/store",
    "children":[
      {
        "name":"Travel",
        "url":"/store/travel",
        "children":[]
      },
      {
        "name":"Gardening",
        "url":"/store/gardening",
        "children":[]
      },
      {
        "name":"Healthy Eating",
        "url":"/store/healthy-eating",
        "children":[
          {
            "name":"Cook Books",
            "url":"/store/healthy-eating/cook-books",
            "children":[]
          },
          {
            "name":"Single Meal Gifts",
            "url":"/store/healthy-eating/single-meal-gifts",
            "children":[]
          }
        ]
      },
      {
        "name":"Outdoor Recreation",
        "url":"/store/outdoor-recreation",
        "children":[
          {
            "name":"Hiking",
            "url":"/store/outdoor-recreation/hiking",
            "children":[
              {
                "name":"Snowshoeing",
                "url":"/store/outdoor-recreation/hiking/snowshoeing",
                "children":[]
              }
            ]
          },
          {
            "name":"Skiing",
            "url":"/store/outdoor-recreation/skiing",
            "children":[]
          }
        ]
      },
      {
        "name":"Physical Fitness",
        "url":"/store/physical-fitness",
        "children":[]
      },
      {
        "name":"Provident Living",
        "url":"/store/provident-living",
        "children":[]
      }
    ]
  }
]




*/







