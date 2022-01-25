let input = document.getElementById('input');
let submit = document.getElementById('submit');
let  inf=document.getElementById('inf');

let actionDocument = ['scroll', 'click', 'keypress'];
let actionInput = ['focus', 'blur', 'input'];


actionDocument.forEach(element => {
    document.addEventListener(element, e => {
        inf.insertAdjacentHTML('beforeend',`<li>${element}</li>`);
    });
});

actionInput.forEach(element => {
    document.addEventListener(element, e => {
        inf.insertAdjacentHTML('beforeend', `<li>${element}.......value is ${e.target.value} </li>`);
    });
});

