# Fullscreen API



https://developer.mozilla.org/zh-CN/docs/DOM/Using_fullscreen_mode


view-source:https://developer.mozilla.org/samples/domref/fullscreen.html


https://videos-real-origin.cdn.mozilla.net/uploads/webmademovies/Moz_Doc_0329_GetInvolved_ST.webm






function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}




