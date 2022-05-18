const data = {
  formation: '1-4-3-3',
  players: [
    { id: 0, name: 'courtois' },
    { id: 1, name: 'carvajal' },
    { id: 2, name: 'militao' },
    { id: 3, name: 'alaba' },
    { id: 4, name: 'marcelo' },
    { id: 5, name: 'kroos' },
    { id: 6, name: 'casemiro' },
    { id: 7, name: 'modric' },
    { id: 8, name: 'rodrygo' },
    { id: 9, name: 'benzema' },
    { id: 10, name: 'vini jr' }
  ],
}

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