//HTML Elemente auswählen
const jokeTextElement = document.querySelector('.current-joke__text');
const newJokeButton = document.querySelector('.current-joke__new');
const saveJokeButton = document.querySelector('.current-joke__save');


// Fetch Funktion 
export async function fetchJoke() {
    try {
        //Ladetext

        jokeTextElement.textContent = "Witz wird geladen...";

        saveJokeButton.style.display = "none";

        //Witze-API aufrufen
        const response = await fetch ('https://witzapi.de/api/joke/');

        //Status prüfen
        if (!response.ok) {
            throw new Error(`Netzwerkfehler: ${response.status}`);
        }

        //JSON Antwort auslesen

        const data = await response.json();
        console.log(data);

        //Text aus Array auslesen
        const newJoke = data[0].text;

        //vorherigen Witz überschreiben
        jokeTextElement.textContent = newJoke;

        saveJokeButton.style.display = "flex";

    } catch (error) {
        console.error("Fehler beim Laden des Witzes:", error);
        jokeTextElement.textContent = "Ups! Da ist etwas schiefgelaufen"; 
        
    }
}

// Funktion dem Button zuweisen
newJokeButton.addEventListener('click',fetchJoke);

