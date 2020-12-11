let inputData = document.getElementById('input');
let outputdata = document.getElementById('output');

function calculate(data) {
    switch (data) {
        case 'AC':
            inputData.innerHTML = "";
            outputdata.innerHTML = 0;
            break;
        case 'C':
            let inputString = inputData.innerHTML;
            inputData.innerHTML = inputString.substr(0, inputString.length - 1);
            outputdata.innerHTML = (eval(input.innerHTML) === undefined) ? 0 : eval(input.innerHTML);   //ternary operator
            // inputData.innerHTML = inputData.innerHTML.substr(0, inputData.innerHTML.length - 1);
            break;
        case '=':
            outputdata.innerHTML = eval(input.innerHTML);
            break;
        default:
            inputData.innerHTML += data;
    }
}

//   for darkmode

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data_theme", "dark")
    }
    else {
        document.documentElement.removeAttribute("data_theme", "dark");
        // document.documentElement.setAttribute("data_theme", "light");
    }
    // console.log(e.target.checked);
}

toggleSwitch.addEventListener('change', switchTheme);

const music = document.getElementById('clickSound');
function clickPlayMusic() {
    music.play();
}

let para = document.getElementById('result');
let child = document.getElementById('child');
let btn = document.getElementById('btn');
function historyCheck() {
    let data = inputData.innerText + "=" + outputdata.innerText;
    para.innerText += `${data}\n,`;

    // console.log(data);
}

function clear() {
    // window.location.reload();
    para.innerText = "";
}
btn.addEventListener('click', clear);

// historyCheck();

let fas = document.querySelector('.fas');
let history = document.querySelector('.history');
function hide() {

    history.classList.toggle("hide_display");
}

fas.addEventListener("click", hide);