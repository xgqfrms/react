# Online-Offline


https://developer.mozilla.org/zh-CN/docs/Online_and_offline_events

https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorOnLine/onLine


https://html.spec.whatwg.org/#navigator.online




```

    window.addEventListener('load', function() {
        let status = document.getElementById("status");
        let log = document.getElementById("log");
        function updateOnlineStatus(event) {
            let condition = navigator.onLine ? "online" : "offline";
            status.className = condition;
            status.innerHTML = condition.toUpperCase();
            log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
        }
        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    });




    #status {
        position: fixed;
        width: 100%;
        font: bold 1em sans-serif;
        color: #FFF;
        padding: 0.5em;
    }
    #log {
        padding: 2.5em 0.5em 0.5em;
        font: 1em sans-serif;
    }
    .online {
        background: green;
    }
    .offline {
        background: red;
    }


```
