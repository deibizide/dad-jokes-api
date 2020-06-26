const button = document.querySelector('.btn');
const jokePlaceholder = document.querySelector('.joke-placeholder');
const error = document.querySelector('.error-msg');
const endPoint = 'https://icanhazdadjoke.com/';

function getJoke() {
    fetch(endPoint, {
        headers: {
            Accept: 'application/json',
        },
    })
        .then(data => data.json())
        .then(resp => {
            jokePlaceholder.innerHTML = `<p class="joke">${resp.joke}</p>`;
        })
        .catch(error => {
            error.innerHTML = `<p>Something went wrong, error: ${error}</p>`;
        });
}

button.addEventListener('click', getJoke);
