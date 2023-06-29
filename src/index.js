import './style.css';
import { leaderBoardDisplay } from './modules/leaderbord-display-list.js';
import { leaderBoardList } from './modules/leaderboardAPI.js'; // this line to make the file loaded to the dom

const displayLost = () => {
  const divElement = document.getElementById('score-board');
  const scores = JSON.parse(localStorage.getItem('scores'));
  console.log(scores);

  leaderBoardDisplay(scores, divElement);
};
displayLost();
