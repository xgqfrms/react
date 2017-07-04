# components life-circle

```jsx
    
class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            lastGistUrl: ''
        };
    }
    componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            // result arrary[0]
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        return (
            <div>
                <h3>{this.state.username} 用户最新的 Gist 共享地址：</h3>
                <hr/>
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
                <br/>
                <a href="https://react2.xgqfrms.xyz/tips/initial-ajax.html">https://react2.xgqfrms.xyz/tips/initial-ajax.html</a>
            </div>
        );
    }
 }

ReactDOM.render(
    <UserGist source="https://api.github.com/users/xgqfrms-github/gists" />,
    document.getElementById('example')
);


{
    // docs component-specs.html
    // https://api.jquery.com/jquery.get/
    React Ajax 教程实例
    <div id="example"></div>
}

```

```js

$(function(){
    $.get("https://api.github.com/users/xgqfrms-github/gists", function(data) {
        console.log(`data description = ${data[0].description}`);
    })
    .done(function() {
        console.log(`success!`);
    })


    $.get("https://api.github.com/users/xgqfrms-github/gists", {user: "xgqfrms", public: "false"} )
        .done(function(data) {
            console.log(`data[0] description = ${data[0].description}`);
            console.log(`data = ${data}`);
            console.log(`success!`);
        }
    );
});



// https://api.github.com/users/xgqfrms-github/gists


$(() => {
    $.get("https://api.github.com/users/xgqfrms-github/gists", (data) => {
        console.log(`data description = ${data[0].description}`);
    })
    .done(function() {
        console.log(`success!`);
    })

    $.get("https://api.github.com/users/xgqfrms-github/gists", {user: "xgqfrms", public: "false"} )
        .done((data) => {
            console.log(`data[0] description = ${data[0].description}`);
            console.log(`data = ${data}`);
            console.log(`success!`);
        }
    );
});

```


```md

.lesson__state--failed {
    background: rgba(53,69,81,0.9) url(/assets/diag-red.png);
    border: 1px solid #5a2a29;
    min-width: 460px;
}
// https://production.cdmycdn.com/assets/diag-red.png


.ui-loading__image, body.composer .backtest, .lesson-action-bar__state, .lesson__state, .widget-err-console.is-hidden {
    z-index: -1000;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease-in-out,-webkit-transform 0.25s ease-in-out,z-index 0s linear,left 0s linear;
    -webkit-transition-delay: 0s,0s,0.25s,0.25s;
    -webkit-transition: opacity 0.25s ease-in-out,-webkit-transform 0.25s ease-in-out,z-index 0s linear 0.25s,left 0s linear 0.25s;
    transition: 
        opacity 0.25s ease-in-out, 
        transform 0.25s ease-in-out, 
        z-index 0s linear 0.25s, 
        left 0s linear 0.25s;
}



```






```js
var userChoice = prompt("Do you choose rock, paper or scissors?");

if(userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors"){
    userChoice = prompt("you can just choose on of rock, paper or scissors!");
}

// repeate

if(userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors"){
    userChoice = prompt("you can just choose on of rock, paper or scissors!");
}




var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);



var compare = function(choice1,choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "rock wins";
        }
        if(choice2 === "paper"){
            return "paper wins";
        }
    }else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            return "rock wins";
        }
        if(choice2 === "paper"){
            return "scissors wins";
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "scissors"){
            return "scissors wins";
        }
        if(choice2 === "rock"){
            return "paper wins";
        }
    }
    
};

compare(userChoice, computerChoice);

```


# 无损转换（kindle）亚马逊电纸书格式 azw3转换成ePub

http://calibre-ebook.com/download

https://github.com/apprenticeharper/DeDRM_tools



https://www.tumblr.com/blog/xgqfrms


https://react2.webgeeker.xyz/docs/getting-started.html


https://www.udemy.com/nodejs-codeless-api-creation-up-and-running-with-swagger/learn/v4/t/lecture/6369188?start=0

https://egghead.io/lessons/css-add-type-safety-to-css-using-typestyle


https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/exercises/why-react



> deduped & 重复数据删除


# laod.cn

https://laod.cn/hosts/2017-google-hosts.html

https://iiio.io/download/20170528/


https://iiio.io/download/20170528/Windows%E7%B3%BB%E5%88%97%E8%B7%9F%E8%8B%B9%E6%9E%9C%E7%B3%BB%E5%88%9720170528.zip

```sh

# 提取码：laod 
# 解压密码：laod.cn

# Windows 系统hosts位于 C:\Windows\System32\drivers\etc\hosts

# Windows
# 开始 -> 运行 -> 输入cmd -> 在CMD窗口输入


$ ipconfig /flushdns

```


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes



