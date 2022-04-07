const email = document.getElementById('email_input');
const popup = document.querySelector('.popup');
const btn = document.querySelector('.accept_name');

let pablo = false;
let counter = 0;
let topVal = 0;

hidePopup = () => {
popup.style.display = 'none';
}
hidePopup();

const width = document.body.clientWidth;
const height = document.body.clientHeight;

const popupCreator = () => {
    const pops = document.createElement('div');
    const exit = document.createElement('div');
    const text = document.createElement('div');
    const topBlueLine = document.createElement('div');
    const errorText = document.createElement('span');
    const textBox = document.createElement('div');
    const redX = document.createElement('div');

    topBlueLine.classList.add('top_blue_line');
    errorText.classList.add('text');
    textBox.classList.add('text_box');
    redX.classList.add('x');
    pops.classList.add('popup');
    pops.classList.add('next');
    exit.classList.add('exit');
    text.classList.add('popup_text');
    text.innerHTML = 'Try to "Fix" this error.';
    errorText.innerHTML = 'error';
    pops.appendChild(topBlueLine);
    pops.appendChild(textBox);
    document.body.insertBefore(pops, popup);
    topBlueLine.appendChild(errorText);
    topBlueLine.appendChild(exit);
    textBox.appendChild(redX);
    textBox.appendChild(text);
    pops.style.position = 'absolute';
    counter+=10;
    if(counter > 100) {
    pops.style.top = `${Math.floor(Math.random() * width)}px`;
    pops.style.left = `${Math.floor(Math.random() * width)}px`;
    }
}

function welcome() {
    let popupCounter = 4;
    const welcomeBox = document.createElement('div');
    const welcomeText = document.createElement('h1');
    document.body.appendChild(welcomeBox);
    welcomeBox.appendChild(welcomeText);
    document.querySelector('.go').style.display = 'none';
    lessPopupCounter = setInterval(function() {
        popupCounter--;
        welcomeText.innerHTML = `Hello ${email.value.toUpperCase()}<br/>I know you don't like popups so it will disappear in ${popupCounter} seconds...`;
        (popupCounter === 0) ? clearInterval(lessPopupCounter) : {};
    }, 1000);
    setTimeout(function() {
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('#email_input').style.display = 'none';
        document.body.style.backgroundColor = 'green';
        welcomeText.innerHTML = `and that's it :)`;
    }, 5000);
}

function showPopup() {
    if (email.value == 'pablo') {
        inter = setInterval(function() {
            counter++;
            document.querySelector('#email_input').style.display = 'none';
            document.querySelector('.go').style.display = 'none';
            popupCreator();
            if(counter > 10000) {
                clearInterval(inter);
            }
        }, 1); 
    }
    if (email.value !== 'psantana@citizengo.net') {
        document.querySelector('.go').addEventListener('click', welcome);
    }
}

email.addEventListener('keyup', showPopup);