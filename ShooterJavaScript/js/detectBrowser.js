function detect() {
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (func) {
        return func.toString() === "[object SafariRemoteNotification]";
    }
    )(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    var isIE = false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

    var BrowserIs;
    if (isOpera)
        BrowserIs = 'Opera is used playing this game!';
    else if (isFirefox)
        BrowserIs = 'Firefox is used playing this game!';
    else if (isSafari)
        BrowserIs = 'Safari is used playing this game!';
    else if (isIE)
        BrowserIs = 'Internet Explorer is used used playing this game!';
    else if (isEdge)
        BrowserIs = 'Edge is used used playing this game!';
    else if (isChrome)
        BrowserIs = 'Google Chrome is used used playing this game!';
    else if (isChromium)
        BrowserIs = 'Chromium/Linux is used used playing this game!';
    return BrowserIs;
}


