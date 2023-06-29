export const leaderBoardDisplay = (leaderBoardList, htmlElement) => {
  leaderBoardList.forEach(({ name, score }, index) => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = `${name}: ${score}`;

    if (index % 2 !== 0) {
      paragraphElement.classList.add('para-background');
    }
    htmlElement.appendChild(paragraphElement);
  });
};
