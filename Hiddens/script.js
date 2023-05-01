function btnclick() {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
/*  iframe.src = "https://example.com"; */
    iframe.src = "file:///home/chronos/u-a6403f850ebd9c9ddd0e13b353dd2da93a78c2d0/MyFiles/Page/unrestricted.html";
    win.document.body.appendChild(iframe);
/*  win.document.title = "alphabet"
    var abtitle = win.document.createElement('title');
    abtitle.innerHTML = "Home | ";
    win.document.body.appendChild(abtitle);
*/
}
