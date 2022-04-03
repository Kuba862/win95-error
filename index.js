const email = document.getElementById('email_input');
const popup = document.querySelector('.popup');
const exit = document.querySelector('.exit');

let pablo = false;
let counter = 0;
// popup.style.display = 'none';
let relative = 'relative';

const checkValue = () => {
    let emailValue = email.value;
    if (emailValue == 'san') {
       const inter = setInterval(function() {
            counter++;
            popupCreator();
            console.log(counter);
            if(counter == 10) {
                clearInterval(inter);
            }            
        }, 1000);
}
}

const popupCreator = () => {
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

const showPopup = () => {
    pablo = true;
    popup.style.display = 'flex';
}

const hidePopup = () => {
    popup.style.display = 'none';
}

email.addEventListener('keyup', checkValue);
exit.addEventListener('click', hidePopup);