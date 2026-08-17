import { fetchJoke } from '../fetch.js';
import { loadJokesFromLocalStorage, saveCurrentJoke } from '../storage.js';
import '../styles/style.scss';





const jokeTextElement = document.querySelector('.current-joke__text');
const newJokeButton = document.querySelector('.current-joke__new');
const saveJokeButton = document.querySelector('.current-joke__save');


saveJokeButton.addEventListener('click', saveCurrentJoke);



loadJokesFromLocalStorage();