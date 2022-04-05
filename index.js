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
    pops.classList.add('popup');
    pops.classList.add('next');
    exit.classList.add('exit');
    text.classList.add('popup_text');
    text.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque quidem consequuntur praesentium consectetur debitis suscipit odit? Distinctio deserunt ea, rerum hic repudiandae recusandae, at quidem minus fugit vero quam?';
    document.body.insertBefore(pops, popup);
    pops.appendChild(exit);
    pops.appendChild(text);
    pops.style.position = 'absolute';
    pops.style.left = `${counter+=10}px`;
    pops.style.top = `${counter+=10}px`;
    if(counter > 100) {
    pops.style.top = `${Math.floor(Math.random() * width)}px`;
    pops.style.left = `${Math.floor(Math.random() * width)}px`;
    }
}


function showPopup() {
    if (email.value == 'a') {
        inter = setInterval(function() {
            counter++;
            popupCreator();
            if(counter > 10000) {
                clearInterval(inter);
            }
        }, 1);
        
    }
}

email.addEventListener('keyup', showPopup);