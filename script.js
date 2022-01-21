let input = document.getElementById('input');
let submit = document.getElementById('submit');

document.addEventListener('click', e => {
    console.log('click' + ' x=' + e.x + ' y=' + e.y);
});

input.addEventListener('focus', e => {
    console.log('focus ' + ' input');
});

input.addEventListener('blur', e => {
    console.log('focus ' + ' input');
});

input.addEventListener('input', e => {
    console.log('input ' + e.data);
})

document.addEventListener('keypress',e=>{
    console.log('keypress ' + e.key);
})