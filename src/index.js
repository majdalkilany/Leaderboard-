import './style.css';
import { leaderBoardDisplay } from './modules/leaderbord-display-list.js';
import { getScoresFromAPI, postGame } from './modules/leaderboardAPI.js'; // this line to make the file loaded to the dom

const scores = JSON.parse(localStorage.getItem('scores')) || [];

const refresh = document.querySelector('.recent-score-btn');
refresh.addEventListener('click', async () => {
  await getScoresFromAPI();
  displayLost();
});

const user = document.querySelector('.name-input');
const score = document.querySelector('.score-input');

const displayLost = () => {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const divElement = document.getElementById('score-board');
  console.log(scores);

  leaderBoardDisplay(scores, divElement);
};
displayLost();

const handleSubmitGame = (e) => {
  e.preventDefault();
  postGame(user.value, score.value);
};
const from = document.querySelector('.form-score');
from.addEventListener('submit', handleSubmitGame);
