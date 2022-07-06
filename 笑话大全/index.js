const jokeE1 = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
//这样写的原因是使得在页面加载时就展示文字
generateJoke();
function generateJoke() {
    config = {
        Headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeE1.innerHTML = data.joke;
        });
}
// async function generateJoke() {
//     const config = {
//         Headers: {
//             Accept: 'application/json'
//         }
//     };
//     const res = await fetch('https://icanhazdadjoke.com', config);

//     const data = await res.json();

//     jokeE1.innerHTML = data.joke;
// }
