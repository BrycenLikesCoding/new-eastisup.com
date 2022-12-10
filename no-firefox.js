function checkBrowser(){
    let browser = "";
    let c = navigator.userAgent.search("Chrome");
    let f = navigator.userAgent.search("Firefox");
    let m8 = navigator.userAgent.search("MSIE 8.0");
    let m9 = navigator.userAgent.search("MSIE 9.0");
    if (c > -1) {
        browser = "Chrome";
    } else if (f > -1) {
        browser = "Firefox";
    } else if (m9 > -1) {
        browser ="MSIE 9.0";
    } else if (m8 > -1) {
        browser ="MSIE 8.0";
    }
    return browser;
}


let browser = checkBrowser();

if (browser == 'Firefox') {
    document.querySelector('html').style.display = 'none';
    document.querySelector('html').style.background = 'black';
    document.title = 'Uh Oh...';
    alert('Hello! Sorry, but this website does not work as intended on FireFox. This is because FireFox does not support the zoom css tag, and therefore does not look right. If you want, you can view this browser on another browser such as chrome, but until then this browser is not supported.');
}
