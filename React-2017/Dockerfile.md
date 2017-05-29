FROM httpd:2.4
EXPOSE 80
RUN apt-get update
RUN apt-get install -y fortunes
LABEL maintainer="moby-dock@example.com"





FROM httpd:2.4
EXPOSE 80
RUN apt-get update && apt-get install -y fortunes
LABEL maintainer="moby-dock@example.com"


docker image build --tag web-server:1.0 .

docker image ls




$ docker container run -p 80:80 web-server:1.0










docker container cp page.html elegant_noether:/usr/local/apache2/htdocs/


docker image build -t web-server:1.1 .


docker container run --detach -p 80:80 web-server:1.1

该命令中的选项分离在Web服务器：1.1和命令结束之间找到，但它应该在运行和Web服务器之间：1.1


curl localhost:80/page.html





docker run -d -p 80:80 -v /my-files:/usr/local/apache2/htdocs web-server:1.1



键入docker运行-d -p 80:80 -v / my-files：/ usr / local / apache2 / htdocs web-server：1.1，以在主机上的文件夹/ my-files和htdocs文件夹之间创建一个链接容器这也运行在后台的容器



docker container exec -it elegant_noether /bin/bash




docker & c9.io

node.js on docker (ubuntu linux)
https://docs.docker.com/engine/installation/linux/ubuntu/

https://c9.io/xgqfrms

https://c9.io/xgqfrms/docker

https://ide.c9.io/xgqfrms/docker



https://gist.github.com/xgqfrms-GitHub/74025e840936ec5e75d8c6a84a0daac4



/*
    Make a list
*/
let ul = document.createElement('ul'),
    li1 = document.createElement('li'),
    li2 = document.createElement('li');


document.body.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);

/*
    e.target refers to the clicked <li> element.
    This is different than e.currentTarget which would refer to the parent <ul> in this context
*/
function hide(e){
    e.target.style.visibility = 'hidden';
}

/*
    Attach the listener to the list, It will fire when each <li> is clicked
*/
ul.addEventListener('click', hide, false);






// Using YQL and JSONP
$.ajax({
    url: "http://query.yahooapis.com/v1/public/yql",
    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
    // Tell YQL what we want and that we want JSON
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },
    // Work with the response
    success: function( response ) {
        console.log( response ); // server response
    }
});





$("#loading_indicator")
.ajaxStart(function() {
    $(this).show();
})
.ajaxStop(function() {
    $(this).hide();
});


function hide(e){
    e.currentTarget.style.visibility = "hidden";
    // 该函数用作事件处理器时: this === e.currentTarget
}

let ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
    ps[i].addEventListener('click', hide, false);
}



$.getJSON("ajax/test.json", function(data) {
    var items = [];
    $.each(data, function(key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });
    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});



{
    "one": "Singular sensation",
    "two": "Beady little eyes",
    "three": "Little birds pitch by my doorstep"
}





// Using validation to check for the presence of an input
$("#form").submit(function(event) {
    // If .required's value's length is zero
    if($(".required").val().length === 0) {
        // Usually show some kind of error message here
        // Prevent the form from submitting
        event.preventDefault();
    } else {
        // Run $.ajax() here
    }
});




Uncaught TypeError: The age is not an integer

Uncaught RangeError: The age seems invalid




let target = {},
    handler = {}

let proxy = new Proxy(target, handler);

proxy.a = "b";

console.log(target.a);
// "b"

console.log(proxy.c === undefined);
// true






<!-- https://scriptoj.com/ -->

const extname = (filename) => {
    let str = filename.toString(),
        begin = str.lastindexOf(`.`),
        end = str.length,
        result = begin > 0 ? str.slice(begin, end) : ``;
    return result;
}


const extname = (filename) => filename.lastIndexOf('.') > 0 ? filename.slice(filename.lastIndexOf('.')) : '';

extname(`emoji.png`);
// ".png"

<!-- split() -->
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice




const where = () => {
    let that = this;
    console.log(that);
}











