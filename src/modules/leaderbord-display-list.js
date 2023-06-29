export const leaderBoardDisplay = (leaderBoardList, htmlElement) => {
  htmlElement.innerHTML = '';
  leaderBoardList.forEach(({ user, score }, index) => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = `${user}: ${score}`;

    if (index % 2 !== 0) {
      paragraphElement.classList.add('para-background');
    }
    htmlElement.appendChild(paragraphElement);
  });
};
