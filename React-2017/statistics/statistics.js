// http://www.liulichao.com/2016/05/08/website-statistics-js.html

/*

<script type="text/javascript" src="http://statistics.abc.cn/js/statistics.js?siteMark=76413067esef92efffe1a992c04f35498ebb11


siteMark参数可以是我们后台所设置的需要统计的站点的ID，由此区分不同站点。


*/

const HOST = "https://statistics.xgqfrms.xyz";

/**
 * 设置cookieId
 */
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    var cookieStr = "\"" + c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";") + "\"";
    console.log(cookieStr);
    document.cookie = cookieStr;
}
/**
 * 获取cookieId
 */
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
/**
 * 获取当前时间戳
 */
function getTimestamp() {
    var timestamp = Date.parse(new Date());
    return timestamp;
}

/**
 * 生成statId
 */
function genStatId() {
    var cookieId = getTimestamp();
    cookieId = "bjm_statistics" + "-" + cookieId + "-" + Math.round(Math.random() * 3000000000);
    return cookieId;
}
/**
 * 设置StatId
 */
function setStatId(siteMark) {
    var cookieId = genStatId();
    setCookie(siteMark, cookieId, 1);
}
/**
 * 获取StatId
 */
function getStatId(siteMark) {
    var statId = getCookie(siteMark);
    if (statId != null && statId.length > 0) {
        return statId;
    } else {
        return null;
    }
}

/**
 * 获取页面title
 */
function getPageTitle() {
    return document.title;
}

//创建ajax get的请求
var xmlHttp;

function createxmlHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest)
        xmlHttp = new XMLHttpRequest();
}

/**
 * 获取站点mark
 * @returns
 */
function getSiteMark() {
    var js = document.getElementsByTagName("script");
    for (var i = 0; i < js.length; i++) {
        if (js[i].src.indexOf("js/statistics.js") >= 0) {
            var arraytemp = new Array();
            arraytemp = js[i].src.split('?');
            arraytemp = arraytemp[1].split('&');

            var siteMark = (arraytemp[0].split('='))[1];
            return siteMark;
        }
    }
}

/**
 * 获取当前页面url
 */
function getUrl() {
    var url = window.location.href
    return url;
}


var xmlHttp;

function createxmlHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest)
        xmlHttp = new XMLHttpRequest();
}

function doPost(url, postData) {
    createxmlHttpRequest();
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(postData);
    xmlHttp.onreadystatechange = function() {}
}

/**
 * 统计访问函数
 */
function statistics() {
    var siteMark = getSiteMark();
    if (getStatId(siteMark) == null) {
        setStatId(siteMark);
    }
    var title = getPageTitle();
    var url = getUrl();
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var cookieValue = getCookie(siteMark);

    var postData = { 'title': title, 'url': url, 'siteMark': siteMark, 'screenWidth': screenWidth, 'screenHeight': screenHeight, 'cookie': cookieValue }
    postData = (function(obj) { // 转成post需要的字符串.
        var str = "";

        for (var prop in obj) {
            str += prop + "=" + obj[prop] + "&"
        }
        return str;
    })(postData);

    doPost(HOST + 'statistics.action', postData);
}

/**
 * 窗口关闭记录时间
 */
function onWindowClose() {
    var url = getUrl();
    var siteMark = getSiteMark();
    var cookie = getCookie(siteMark);
    var postData = { 'url': url, 'cookie': cookie, 'siteMark': siteMark };
    postData = (function(obj) { // 转成post需要的字符串.
        var str = "";

        for (var prop in obj) {
            str += prop + "=" + obj[prop] + "&"
        }
        return str;
    })(postData);
    doPost(HOST + 'statistics/windowClose.action', postData);
}

/**
 *页面点击事件处理
 */
var xOffset, yOffset;
var pointX = 0;
var pointY = 0;

//detect browser
var IE = document.all ? true : false
if (!IE) {
    document.captureEvents(Event.MOUSEMOVE)
}
var firstElement = document.getElementsByTagName('body')[0].childNodes[1];

xOffset = findPosX(firstElement);
yOffset = findPosY(firstElement);
if (IE) { // In IE there's a default margin in the page body. If margin's not defined, use defaults
    var marginLeftExplorer = parseInt(document.getElementsByTagName('body')[0].style.marginLeft);
    var marginTopExplorer = parseInt(document.getElementsByTagName('body')[0].style.marginTop);
    /*assume default 10px/15px margin in explorer*/
    if (isNaN(marginLeftExplorer)) { marginLeftExplorer = 10; }
    if (isNaN(marginTopExplorer)) { marginTopExplorer = 15; }
    xOffset = xOffset + marginLeftExplorer;
    yOffset = yOffset + marginTopExplorer;
}



function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curleft += obj.offsetLeft
            obj = obj.offsetParent;
        }
    } else if (obj.x) {
        curleft += obj.x;
    }
    return curleft;
}

function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curtop += obj.offsetTop
            obj = obj.offsetParent;
        }
    } else if (obj.y) {
        curtop += obj.y;
    }
    return curtop;
}

function getMouseXY(e) {
    if (IE) {
        pointX = event.clientX + document.body.scrollLeft
        pointY = event.clientY + document.body.scrollTop
    } else {
        pointX = e.pageX
        pointY = e.pageY
    }
    pointX -= xOffset;
    pointY -= yOffset;

    var url = getUrl();
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var siteMark = getSiteMark();
    var cookie = getCookie(siteMark);

    var postData = { 'url': url, 'siteMark': siteMark, 'screenWidth': screenWidth, 'screenHeight': screenHeight, 'pointX': pointX, 'pointY': pointY, 'cookie': cookie }
    postData = (function(obj) { // 转成post需要的字符串.
        var str = "";

        for (var prop in obj) {
            str += prop + "=" + obj[prop] + "&"
        }
        return str;
    })(postData);

    doPost(HOST + 'statistics/click.action', postData);

    return true;
}

window.onbeforeunload = onWindowClose;

statistics();

document.onmousedown = getMouseXY;


















