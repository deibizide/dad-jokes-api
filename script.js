const button = document.querySelector('.btn');
const jokePlaceholder = document.querySelector('.joke-placeholder');
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
            alert(`error ${error}`);
        });
}

button.addEventListener('click', getJoke);
