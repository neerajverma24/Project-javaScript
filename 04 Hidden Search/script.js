const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    // console.log("After Click", btn)
    search.classList.toggle('active');
    input.focus();
    // console.log("input", input);
})