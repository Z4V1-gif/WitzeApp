const jokeTextElement = document.querySelector('.current-joke__text');
const savedJokesContainer = document.querySelector('.saved-jokes');


// Witze Array erstellen
let savedJokesList = [];


//Export Funktion für main.js
export function loadJokesFromLocalStorage() {
    const storedJokes = localStorage.getItem('mySavedJokes');
    if (storedJokes) {
        savedJokesList = JSON.parse(storedJokes);
        renderSavedJokes();
    }
}


//Funktion für Button
export function saveCurrentJoke() {
    const currentJoke = jokeTextElement.textContent;

    if(currentJoke === 'Klicke auf den Button um einen Witz zu laden...!' || currentJoke === 'Witz wird geladen...' || currentJoke.trim() ==='') {
        alert("Es gibt noch keinen Witz zum Speichern!");
        return;
    }

    if(savedJokesList.includes(currentJoke)) {
        alert("Diesen Witz hast du schon gespeichert!");
        return;
    }

    savedJokesList.push(currentJoke);
    localStorage.setItem('mySavedJokes', JSON.stringify(savedJokesList));
    renderSavedJokes();
}


function renderSavedJokes() {
    savedJokesContainer.innerHTML = '<h2 class="header__sub">Gespeicherte Witze</h2>';

    savedJokesList.forEach((joke, index) => {
        const jokeCard = document.createElement('div');
        jokeCard.className = 'saved-jokes__jokes';

        const jokeText = document.createTextNode(joke);
        jokeCard.appendChild(jokeText);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'saved-jokes__delete';
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="saved-jokes__icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
          </svg>`;

        deleteButton.addEventListener('click', () => deleteJoke(index));

        jokeCard.appendChild(deleteButton);
        savedJokesContainer.appendChild(jokeCard);
    })
}

function deleteJoke(indexToRemove) {
    savedJokesList.splice(indexToRemove, 1);
    localStorage.setItem('mySavedJokes', JSON.stringify(savedJokesList));
    renderSavedJokes();
}