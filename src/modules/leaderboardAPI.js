// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const gameID = 'VOfUi7xKYlyLFLfpYSVH';
const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

export const getScoresFromAPI = async () => {
  try {
    const response = await axios.get(URI);
    const leaderBoardList = response.data.result;

    console.log(leaderBoardList);
    localStorage.setItem('scores', JSON.stringify(leaderBoardList));
  } catch (error) {
    console.error('Error retrieving scores:', error);
  }
};

export const postGame = async (user, score) => {
  try {
    const data = JSON.stringify({
      user,
      score,
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: URI,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    const response = await axios(config);
    console.log(response.data);
    await getScoresFromAPI();
  } catch (error) {
    console.error(error);
  }
};
