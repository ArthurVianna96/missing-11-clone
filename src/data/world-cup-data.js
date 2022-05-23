const france = require('../assets/images/national-emblems/france.png');
const croatia = require('../assets/images/national-emblems/croatia.webp');
const germany = require('../assets/images/national-emblems/germany.avif');
const argentina = require('../assets/images/national-emblems/argentina.webp');
const spain = require('../assets/images/national-emblems/spain.avif');
const netherlands = require('../assets/images/national-emblems/netherlands.webp');
const italy = require('../assets/images/national-emblems/italy.webp');
const brazil = require('../assets/images/national-emblems/brazil.avif');

const worldCupData = [
  {
    year: 2018,
    games: [
      {
        id: 1,
        team: 'France',
        description: "France's 4-2 win against Croatia",
        stadium: "Luzhniki Stadium - St. Petersburg (RUS)",
        date: "15/07/2018",
        formation: '1-4-2-3-1',
        emblem:  france,
        players: [
          { id: 0, name: 'lloris' },
          { id: 1, name: 'pavard' },
          { id: 2, name: 'varane' },
          { id: 3, name: 'umtiti' },
          { id: 4, name: 'hernandez' },
          { id: 5, name: 'kante' },
          { id: 6, name: 'pogba' },
          { id: 7, name: 'mbappe' },
          { id: 8, name: 'griezmann' },
          { id: 9, name: 'matuidi' },
          { id: 10, name: 'giroud' }
        ],
      },
      {
        id: 2,
        team: 'Croatia',
        description: "Croatia's 0-1 loss against France",
        stadium: "Luzhniki Stadium - St. Petersburg (RUS)",
        date: "15/07/2018",
        formation: '1-4-1-2-3',
        emblem: croatia,
        players: [
          { id: 0, name: 'subasic' },
          { id: 1, name: 'vrsaliko' },
          { id: 2, name: 'lovren' },
          { id: 3, name: 'vida' },
          { id: 4, name: 'strinic' },
          { id: 5, name: 'brozovic' },
          { id: 6, name: 'modric' },
          { id: 7, name: 'rakitic' },
          { id: 8, name: 'rebic' },
          { id: 9, name: 'mandzukic' },
          { id: 10, name: 'perisic' }
        ],
      },
    ]
  },
  {
    year: 2014,
    games: [
      {
        id: 3,
        team: 'Germany',
        description: "Germany's 1-0 win against Argentina",
        stadium: "Maracanã - Rio de Janeiro (BRA)",
        date: "13/07/2014",
        formation: '1-4-3-3',
        emblem:  germany,
        players: [
          { id: 0, name: 'neuer' },
          { id: 1, name: 'lahm' },
          { id: 2, name: 'boateng' },
          { id: 3, name: 'hummels' },
          { id: 4, name: 'howedes' },
          { id: 5, name: 'kramer' },
          { id: 6, name: 'schweinsteiger' },
          { id: 7, name: 'kroos' },
          { id: 8, name: 'muller' },
          { id: 9, name: 'klose' },
          { id: 10, name: 'ozil' }
        ],
      },
      {
        id: 4,
        team: 'Argentina',
        description: "Argentina's 0-1 loss against Germany",
        stadium: "Maracanã - Rio de Janeiro (BRA)",
        date: "13/07/2014",
        formation: '1-4-2-3-1',
        emblem: argentina,
        players: [
          { id: 0, name: 'romero' },
          { id: 1, name: 'zabaleta' },
          { id: 2, name: 'demichelis' },
          { id: 3, name: 'garay' },
          { id: 4, name: 'rojo' },
          { id: 5, name: 'mascherano' },
          { id: 6, name: 'biglia' },
          { id: 7, name: 'perez' },
          { id: 8, name: 'messi' },
          { id: 9, name: 'lavezzi' },
          { id: 10, name: 'higuain' }
        ],
      },
    ]
  },
  {
    year: 2010,
    games: [
      {
        id: 5,
        team: 'Spain',
        description: "Spain's 1-0 win against Netherlands",
        stadium: "Soccer City - Johannesburg (RSA)",
        date: "11/07/2010",
        formation: '1-4-2-3-1',
        emblem:  spain,
        players: [
          { id: 0, name: 'casillas' },
          { id: 1, name: 'ramos' },
          { id: 2, name: 'pique' },
          { id: 3, name: 'puyol' },
          { id: 4, name: 'capdevila' },
          { id: 5, name: 'busquets' },
          { id: 6, name: 'xabi alonso' },
          { id: 7, name: 'iniesta' },
          { id: 8, name: 'xavi' },
          { id: 9, name: 'pedro' },
          { id: 10, name: 'david villa' }
        ],
      },
      {
        id: 6,
        team: 'Netherlands',
        description: "Netherlands's 0-1 loss against Spain",
        stadium: "Soccer City - Johannesburg (RSA)",
        date: "11/07/2010",
        formation: '1-4-2-3-1',
        emblem: netherlands,
        players: [
          { id: 0, name: 'stekelenburg' },
          { id: 1, name: 'van der wiel' },
          { id: 2, name: 'heitinga' },
          { id: 3, name: 'mathijsen' },
          { id: 4, name: 'van bronckhorst' },
          { id: 5, name: 'van bommel' },
          { id: 6, name: 'de jong' },
          { id: 7, name: 'robben' },
          { id: 8, name: 'sneijder' },
          { id: 9, name: 'kuyt' },
          { id: 10, name: 'van persie' }
        ],
      },
    ]
  },
  {
    year: 2006,
    games: [
      {
        id: 7,
        team: 'Italy',
        description: "Italy's 1-1 (pen. 5-3) win against france",
        stadium: "Olympiastadion - Berlim (GER)",
        date: "09/07/2006",
        formation: '1-4-4-2',
        emblem:  italy,
        players: [
          { id: 0, name: 'buffon' },
          { id: 1, name: 'zambrotta' },
          { id: 2, name: 'cannavaro' },
          { id: 3, name: 'materazzi' },
          { id: 4, name: 'grosso' },
          { id: 5, name: 'camoranesi' },
          { id: 6, name: 'gatusso' },
          { id: 7, name: 'pirlo' },
          { id: 8, name: 'perrotta' },
          { id: 9, name: 'totti' },
          { id: 10, name: 'toni' }
        ],
      },
      {
        id: 8,
        team: 'france',
        description: "france's 1-1 (pen. 3-5) loss against Italy",
        stadium: "Olympiastadion - Berlim (GER)",
        date: "09/07/2006",
        formation: '1-4-2-3-1',
        emblem: france,
        players: [
          { id: 0, name: 'barthez' },
          { id: 1, name: 'sagnol' },
          { id: 2, name: 'thuram' },
          { id: 3, name: 'gallas' },
          { id: 4, name: 'abidal' },
          { id: 5, name: 'viera' },
          { id: 6, name: 'makelele' },
          { id: 7, name: 'ribery' },
          { id: 8, name: 'zidane' },
          { id: 9, name: 'malouda' },
          { id: 10, name: 'henry' }
        ],
      },
    ]
  },
  {
    year: 2002,
    games: [
      {
        id: 9,
        team: 'Brazil',
        description: "Brazil's 2-0 win against Germany",
        stadium: "International Stadium - Yokohama (JAP)",
        date: "30/06/2002",
        formation: '1-3-4-1-2',
        emblem:  brazil,
        players: [
          { id: 0, name: 'marcos' },
          { id: 1, name: 'lucio' },
          { id: 2, name: 'edmilson' },
          { id: 3, name: 'roque junior' },
          { id: 4, name: 'cafu' },
          { id: 5, name: 'gilberto silva' },
          { id: 6, name: 'kleberson' },
          { id: 7, name: 'roberto carlos' },
          { id: 8, name: 'ronaldinho' },
          { id: 9, name: 'rivaldo' },
          { id: 10, name: 'ronaldo' }
        ],
      },
      {
        id: 10,
        team: 'Germany',
        description: "Germany's 0-2 loss against Brazil",
        stadium: "International Stadium - Yokohama (JAP)",
        date: "30/06/2002",
        formation: '1-4-2-3-1',
        emblem: germany,
        players: [
          { id: 0, name: 'kahn' },
          { id: 1, name: 'linke' },
          { id: 2, name: 'ramelow' },
          { id: 3, name: 'metzelder' },
          { id: 4, name: 'frings' },
          { id: 5, name: 'hamann' },
          { id: 6, name: 'jeremies' },
          { id: 7, name: 'bode' },
          { id: 8, name: 'schneider' },
          { id: 9, name: 'klose' },
          { id: 10, name: 'neuville' }
        ],
      },
    ]
  },
  {
    year: 1998,
    games: [
      {
        id: 11,
        team: 'France',
        description: "France's 3-0 win against Brazil",
        stadium: "Stade de France - Paris (FRA)",
        date: "12/07/1998",
        formation: '1-4-3-2-1',
        emblem:  france,
        players: [
          { id: 0, name: 'barthez' },
          { id: 1, name: 'thuram' },
          { id: 2, name: 'leboeuf' },
          { id: 3, name: 'desailly' },
          { id: 4, name: 'lizarazu' },
          { id: 5, name: 'karembeu' },
          { id: 6, name: 'deschamps' },
          { id: 7, name: 'petit' },
          { id: 8, name: 'zidane' },
          { id: 9, name: 'djorkaeff' },
          { id: 10, name: 'guivarch' }
        ],
      },
      {
        id: 12,
        team: 'Brazil',
        description: "Brazil's 0-3 loss against France",
        stadium: "Stade de France - Paris (FRA)",
        date: "12/07/1998",
        formation: '1-4-4-2',
        emblem: brazil,
        players: [
          { id: 0, name: 'taffarel' },
          { id: 1, name: 'cafu' },
          { id: 2, name: 'aldair' },
          { id: 3, name: 'junior baiano' },
          { id: 4, name: 'roberto carlos' },
          { id: 5, name: 'rivaldo' },
          { id: 6, name: 'cesar sampaio' },
          { id: 7, name: 'dunga' },
          { id: 8, name: 'leonardo' },
          { id: 9, name: 'bebeto' },
          { id: 10, name: 'ronaldo' }
        ],
      },
    ]
  },
];

export default worldCupData;