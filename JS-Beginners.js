const ul= document.querySelector('.items');

//ul.remove();
//ul.laastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText= 'Item2';
ul.lastElementChild.innerHTML='HELLO';

const btn= document.querySelector('.btn');
btn.style.background='red';

const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(name/InputDeviceInfo.value=== '' || emailInput.value==='') {

    } else {
        console.log('success');
    }
}