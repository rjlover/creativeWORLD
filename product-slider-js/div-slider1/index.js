var span = document.getElementsByTagName('span');
var div = document.getElementsByTagName('div');
var l = 0;
var a = 0;

span[1].onclick = () => {
    l++;
    a = (a - 330);
    for (var i of div) {
        if (l == 0) { i.style.left = `${a}px`; }
        if (l == 1) { i.style.left = `${a}px`; }
        if (l == 2) { i.style.left = `${a}px`; }
        if (l == 3) { i.style.left = `${a}px`; }
        if (l == 4) { i.style.left = `${a}px`; }
        if (l == 5) { i.style.left = `${a}px`; }
        if (l == 6) { i.style.left = `${a}px`; }
        if (l == 7) { i.style.left = `${a}px`; }
        if (l == 8) { i.style.left = `${a}px`; }
        if (l == 9) { i.style.left = `${a}px`; }
        if (l == 10) { i.style.left = "-3300px"; }
        if (l > 10) {
            l = 10;
            a = -3300;
        }
    }
}

span[0].onclick = () => {
    l--;
    a = (a + 330);
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = `${a}px`; }
        if (l == 2) { i.style.left = `${a}px`; }
        if (l == 3) { i.style.left = `${a}px`; }
        if (l == 4) { i.style.left = `${a}px`; }
        if (l == 5) { i.style.left = `${a}px`; }
        if (l == 6) { i.style.left = `${a}px`; }
        if (l == 7) { i.style.left = `${a}px`; }
        if (l == 8) { i.style.left = `${a}px`; }
        if (l == 9) { i.style.left = `${a}px`; }
        if (l == 10) { i.style.left = "-3300px"; }
        if (l < 0) {
            l = 0;
            a = 0;
        }
    }
}
