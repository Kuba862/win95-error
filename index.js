const email = document.getElementById('email_input');
const popup = document.querySelector('.popup');
const exit = document.querySelector('.exit');

let pablo = false;
let counter = 0;
let relative = 'relative';

const popupCreator = () => {
    counter++;
    const pops = document.createElement('div');
    const exit = document.createElement('div');
    const text = document.createElement('div');
    pops.classList.add('popup');
    pops.style.position = relative;
    exit.classList.add('exit');
    text.classList.add('popup_text');
    text.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque quidem consequuntur praesentium consectetur debitis suscipit odit? Distinctio deserunt ea, rerum hic repudiandae recusandae, at quidem minus fugit vero quam?';
    document.body.insertBefore(pops, popup);
    pops.appendChild(exit);
    pops.appendChild(text);
}

const hidePopup = () => {
    popup.style.display = 'none';
}
hidePopup();


email.addEventListener('keyup', checkValue);
exit.addEventListener('click', hidePopup);