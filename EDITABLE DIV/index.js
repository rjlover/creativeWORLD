let divElm = document.createElement('div');
let text;
let val = localStorage.getItem('text');
if (val == null) {
    text = document.createTextNode('This is my element ,click to edit it');
}
else {
    text = document.createTextNode(val);
}
divElm.appendChild(text);
divElm.setAttribute('id', 'elem');
divElm.setAttribute('style', 'border:2px solid blue;width:300px;margin:20px;padding:15px;');


let cont = document.querySelector('.container');
let first = document.getElementById('myfirst')

cont.insertBefore(divElm, first);

divElm.addEventListener('click', function () {
    let noOfTextArea = document.getElementsByClassName('textarea').length;
    if (noOfTextArea == 0) {
        let html = elem.innerHTML;
        divElm.innerHTML = `<textarea class="textarea" id="txtarea" rows="5" cols="37">${html}</textarea>`;
    }

    let textarea = document.getElementById('txtarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        // localStorage.setItem('text', 'textarea.value')
        localStorage.setItem('text', 'elem.innerHTML');
    })
})
console.log(elem.innerHTML)