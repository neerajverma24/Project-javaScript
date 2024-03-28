const jokeBtn = document.getElementById('jokeBtn');
const jokeElement = document.getElementById('jokeElement');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() {
    // setting up a config object to pass to the fetch method and make code cleaner
    // this config object when making an HTTP request
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    };

    // storing all the data received from the api in variable result
    // We define a configuration object 'config' containing the headers needed for the request
    const data = await fetch('https://icanhazdadjoke.com', config);


    // converting the result to json format
    const result = await data.json();

    //  ----- getting our joke in console and changing innerText of the jokeElement id; ------
    // console.log(result);


    // setting the joke element to the joke received from the api
    jokeElement.innerText = result.joke;
}