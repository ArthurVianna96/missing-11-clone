
const parseDataForPitch = (data) => {
  const { formation, players } = data;
  const formationArray = formation.split('-');
  const playersArray = [];
  let previousPosition = 0;
  formationArray.forEach((position) => {
    const finalPosition = previousPosition + parseInt(position);
    const positionArray = players.slice(previousPosition, finalPosition);
    playersArray.push(positionArray);
    previousPosition += parseInt(position);
  })
  return playersArray;
};

const parseDataForStorage = (data) => {
  const { players } = data;
  return players.map((player) => ({
    ...player,
    attempts: 0,
  }))
}

export { parseDataForPitch, parseDataForStorage };