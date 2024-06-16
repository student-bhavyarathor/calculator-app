let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'CL') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML.trim();
            input.value = string;
        }
    });
});

function clearInput() {
    string = "";
    input.value = string;
}

function deleteLast() {
    string = string.substring(0, string.length - 1);
    input.value = string;
}

function addToInput(value) {
    string += value;
    input.value = string;
}

function calculate() {
    string = eval(string);
    input.value = string;
}
