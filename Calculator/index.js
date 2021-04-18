let stringOpr = "";
function add(value) {
    const kp = document.getElementById('result');

    stringOpr += value;
    kp.innerText = stringOpr;
}

function clears() {
    const clr = document.getElementById('clear');
    const kp = document.getElementById('result');
    stringOpr = "";
    kp.innerText = stringOpr;
}

function evals() {
    const kp = document.getElementById('result');

    kp.innerText = eval(stringOpr);
    stringOpr = "";
}

