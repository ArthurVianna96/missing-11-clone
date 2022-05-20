const chelsea = require('../assets/images/emblems/chelsea.png');
const manchesterCity = require('../assets/images/emblems/manchester-city.png');
const manchesterUnited = require('../assets/images/emblems/manchester-united.png');
const liverpool = require('../assets/images/emblems/liverpool.png');
const tottenham = require('../assets/images/emblems/tottenham.png');

const realMadrid = require('../assets/images/emblems/real-madrid.png');
const atleticoMadrid = require('../assets/images/emblems/atletico-madrid.png');
const barcelona = require('../assets/images/emblems/barcelona.png');

const bayernMunich = require('../assets/images/emblems/bayern.png');
const borrusiaDortmund = require('../assets/images/emblems/borussia-dortmund.png');

const psg = require('../assets/images/emblems/psg.png');

const juventus = require('../assets/images/emblems/juventus.png');
const internazionaleMilan = require('../assets/images/emblems/internazionale-milan.png');

const worldCupData = [
  {
    year: 2021,
    games: [
      {
        id: 1,
        team: 'Chelsea',
        description: "Chelsea's 1-0 win against Manchester City",
        stadium: "Estádio do Dragão - Porto (POR)",
        date: "29/05/2021",
        formation: '1-3-4-2-1',
        emblem:  chelsea,
        players: [
          { id: 0, name: 'mendy' },
          { id: 1, name: 'azpilicueta' },
          { id: 2, name: 'thiago silva' },
          { id: 3, name: 'rudiger' },
          { id: 4, name: 'james' },
          { id: 5, name: 'kante' },
          { id: 6, name: 'jorginho' },
          { id: 7, name: 'chilwell' },
          { id: 8, name: 'havertz' },
          { id: 9, name: 'mount' },
          { id: 10, name: 'werner' }
        ],
      },
      {
        id: 2,
        team: 'Manchester City',
        description: "Manchester city's 0-1 loss against Chelsea",
        stadium: "Estádio do Dragão - Porto (POR)",
        date: "29/05/2021",
        formation: '1-4-2-1-3',
        emblem: manchesterCity,
        players: [
          { id: 0, name: 'ederson' },
          { id: 1, name: 'walker' },
          { id: 2, name: 'stones' },
          { id: 3, name: 'ruben dias' },
          { id: 4, name: 'zinchenko' },
          { id: 5, name: 'gundogan' },
          { id: 6, name: 'bernardo silva' },
          { id: 7, name: 'foden' },
          { id: 8, name: 'mahrez' },
          { id: 9, name: 'de bruyne' },
          { id: 10, name: 'sterling' }
        ],
      },
    ]
  },
  {
    year: 2020,
    games: [
      {
        id: 1,
        team: 'Bayern Munich',
        description: "Bayern Munich's 1-0 win against PSG",
        stadium: "Estádio da Luz - Lisbon (POR)",
        date: "23/08/2020",
        formation: '1-4-2-3-1',
        emblem: bayernMunich,
        players: [
          { id: 0, name: 'neuer' },
          { id: 1, name: 'kimmich' },
          { id: 2, name: 'boateng' },
          { id: 3, name: 'alaba' },
          { id: 4, name: 'davies' },
          { id: 5, name: 'goretzka' },
          { id: 6, name: 'thiago' },
          { id: 7, name: 'gnabry' },
          { id: 8, name: 'muller' },
          { id: 9, name: 'coman' },
          { id: 10, name: 'lewandowski' }
        ],
      },
      {
        id: 2,
        team: 'PSG',
        description: "PSG's 0-1 loss against Bayern Munich",
        stadium: "Estádio da Luz - Lisbon (POR)",
        date: "23/08/2020",
        formation: '1-4-1-2-3',
        emblem: psg,
        players: [
          { id: 0, name: 'navas' },
          { id: 1, name: 'bernat' },
          { id: 2, name: 'kimpembe' },
          { id: 3, name: 'thiago silva' },
          { id: 4, name: 'kehrer' },
          { id: 5, name: 'marquinhos' },
          { id: 6, name: 'herrera' },
          { id: 7, name: 'paredes' },
          { id: 8, name: 'di maria' },
          { id: 9, name: 'mbappe' },
          { id: 10, name: 'neymar' }
        ],
      }
    ]
  },
  {
    year: 2019,
    games: [
      {
        id: 1,
        team: 'Liverpool',
        description: "Liverpool's 2-0 win against Tottenham",
        stadium: "Wanda Metropolitano - Madrid (ESP)",
        date: "01/06/2019",
        formation: '1-4-3-3',
        emblem: liverpool,
        players: [
          { id: 0, name: 'alisson' },
          { id: 1, name: 'alexander arnold' },
          { id: 2, name: 'van djik' },
          { id: 3, name: 'matip' },
          { id: 4, name: 'robertson' },
          { id: 5, name: 'henderson' },
          { id: 6, name: 'fabinho' },
          { id: 7, name: 'wijnaldum' },
          { id: 8, name: 'salah' },
          { id: 9, name: 'firmino' },
          { id: 10, name: 'mane' }
          ],
      },
      {
        id: 2,
        team: 'Tottenham',
        description: "Tottenham's 0-2 loss against Liverpool",
        stadium: "Wanda Metropolitano - Madrid (ESP)",
        date: "01/06/2019",
        formation: '1-4-2-3-1',
        emblem: tottenham,
        players: [
          { id: 0, name: 'lloris' },
          { id: 1, name: 'trippier' },
          { id: 2, name: 'alderweireld' },
          { id: 3, name: 'vertonghen' },
          { id: 4, name: 'rose' },
          { id: 5, name: 'winks' },
          { id: 6, name: 'sissoko' },
          { id: 7, name: 'alli' },
          { id: 8, name: 'eriksen' },
          { id: 9, name: 'son' },
          { id: 10, name: 'kane' }
        ],
      }
    ]
  },
  {
    year: 2018,
    games: [
      {
        id: 1,
        team: 'Real Madrid',
        description: "Real Madrid's 3-1 win against Liverpool",
        stadium: "Olimpiyskiy Stadium - Keiv (RUS)",
        date: "26/05/2018",
        formation: '1-4-3-1-2',
        emblem: realMadrid,
        players: [
          { id: 0, name: 'navas' },
          { id: 1, name: 'carvajal' },
          { id: 2, name: 'varane' },
          { id: 3, name: 'ramos' },
          { id: 4, name: 'marcelo' },
          { id: 5, name: 'modric' },
          { id: 6, name: 'casemiro' },
          { id: 7, name: 'kroos' },
          { id: 8, name: 'isco' },
          { id: 9, name: 'benzema' },
          { id: 10, name: 'ronaldo' }
        ],
      },
      {
        id: 2,
        team: 'Liverpool',
        description: "Liverpool's 1-3 loss against Real Madrid",
        stadium: "Olimpiyskiy Stadium - Keiv (RUS)",
        date: "26/05/2018",
        formation: '1-4-1-2-3',
        emblem: liverpool,
        players: [
          { id: 0, name: 'karius' },
          { id: 1, name: 'alexander arnold' },
          { id: 2, name: 'lovren' },
          { id: 3, name: 'van djik' },
          { id: 4, name: 'robertson' },
          { id: 5, name: 'henderson' },
          { id: 6, name: 'milner' },
          { id: 7, name: 'wijnaldum' },
          { id: 8, name: 'salah' },
          { id: 9, name: 'firmino' },
          { id: 10, name: 'mane' }
        ],
      },
    ]
  },
  {
    year: 2017,
    games: [
      {
        id: 1,
        team: 'Real Madrid',
        description: "Real Madrid's 4-1 win against Juventus",
        stadium: "Millennium Stadium - Cardiff (WAL)",
        date: "03/06/2017",
        formation: '1-4-3-3',
        emblem: realMadrid,
        players: [
          { id: 0, name: 'navas' },
          { id: 1, name: 'carvajal' },
          { id: 2, name: 'ramos' },
          { id: 3, name: 'varane' },
          { id: 4, name: 'marcelo' },
          { id: 5, name: 'modric' },
          { id: 6, name: 'casemiro' },
          { id: 7, name: 'kroos' },
          { id: 8, name: 'isco' },
          { id: 9, name: 'benzema' },
          { id: 10, name: 'ronaldo' }
        ],
      },
      {
        id: 2,
        team: 'Juventus',
        description: "Juventus's 1-4 loss against Real Madrid",
        stadium: "Millennium Stadium - Cardiff (WAL)",
        date: "03/06/2017",
        formation: '1-3-4-1-2',
        emblem: juventus,
        players: [
          { id: 0, name: 'buffon' },
          { id: 1, name: 'barzagli' },
          { id: 2, name: 'bonucci' },
          { id: 3, name: 'chiellini' },
          { id: 4, name: 'dani alves' },
          { id: 5, name: 'pjanic' },
          { id: 6, name: 'khedira' },
          { id: 7, name: 'alex sandro' },
          { id: 8, name: 'dybala' },
          { id: 9, name: 'higuain' },
          { id: 10, name: 'madzukic' }
        ],
      },
    ]
  },
  {
    year: 2016,
    games: [
      {
        id: 1,
        team: 'Real Madrid',
        description: "Real Madrid's 3-1 win against Atletico Madrid",
        stadium: "San Siro - Milan (ITA)",
        date: "28/05/2016",
        formation: '1-4-3-3',
        emblem: realMadrid,
        players: [
          { id: 0, name: 'navas' },
          { id: 1, name: 'carvajal' },
          { id: 2, name: 'ramos' },
          { id: 3, name: 'pepe' },
          { id: 4, name: 'marcelo' },
          { id: 5, name: 'modric' },
          { id: 6, name: 'casemiro' },
          { id: 7, name: 'kroos' },
          { id: 8, name: 'bale' },
          { id: 9, name: 'benzema' },
          { id: 10, name: 'ronaldo' }
        ],
      },
      {
        id: 2,
        team: 'Atletico Madrid',
        description: "Atletico Madrid's 1-1 (pen. 5-3) win against Real Madrid",
        stadium: "San Siro - Milan (ITA)",
        date: "28/05/2016",
        formation: '1-4-4-2',
        emblem: atleticoMadrid,
        players: [
          { id: 0, name: 'oblak' },
          { id: 1, name: 'juanfran' },
          { id: 2, name: 'savic' },
          { id: 3, name: 'godin' },
          { id: 4, name: 'filipe luis' },
          { id: 5, name: 'saul' },
          { id: 6, name: 'gabi' },
          { id: 7, name: 'fernandez' },
          { id: 8, name: 'koke' },
          { id: 9, name: 'torres' },
          { id: 10, name: 'griezmann' }
        ],
      },
    ]
  },
  {
    year: 2015,
    games: [
      {
        id: 1,
        team: 'Barcelona',
        description: "Barcelona's 3-1 win against Juventus",
        stadium: "Olympiastadion - Berlim (GER)",
        date: "06/06/2015",
        formation: '1-4-1-2-3',
        emblem: barcelona,
        players: [
          { id: 0, name: 'ter stegen' },
          { id: 1, name: 'dani alves' },
          { id: 2, name: 'pique' },
          { id: 3, name: 'mascherano' },
          { id: 4, name: 'jordi alba' },
          { id: 5, name: 'busquets' },
          { id: 6, name: 'rakitic' },
          { id: 7, name: 'iniesta' },
          { id: 8, name: 'messi' },
          { id: 9, name: 'suarez' },
          { id: 10, name: 'neymar' }
        ],
      },
      {
        id: 2,
        team: 'Juventus',
        description: "Juventus's 1-3 loss against Barcelona",
        stadium: "Olympiastadion - Berlim (GER)",
        date: "06/06/2015",
        formation: '1-4-1-2-1-2',
        emblem: juventus,
        players: [
          { id: 0, name: 'buffon' },
          { id: 1, name: 'lichtseiner' },
          { id: 2, name: 'barzagli' },
          { id: 3, name: 'bonucci' },
          { id: 4, name: 'evra' },
          { id: 5, name: 'pirlo' },
          { id: 6, name: 'marchisio' },
          { id: 7, name: 'pogba' },
          { id: 8, name: 'vidal' },
          { id: 9, name: 'tevez' },
          { id: 10, name: 'morata' }
        ],
      },
    ]
  },
  {
    year: 2014,
    games: [
      {
        id: 1,
        team: 'Real Madrid',
        description: "Real Madrid's 4-1 win against Atletico Madrid",
        stadium: "Estádio da Luz - Lison (POR)",
        date: "24/05/2014",
        formation: '1-4-1-2-3',
        emblem: realMadrid,
        players: [
          { id: 0, name: 'casillas' },
          { id: 1, name: 'carvajal' },
          { id: 2, name: 'ramos' },
          { id: 3, name: 'varane' },
          { id: 4, name: 'coentrao' },
          { id: 5, name: 'khedira' },
          { id: 6, name: 'modric' },
          { id: 7, name: 'di maria' },
          { id: 8, name: 'bale' },
          { id: 9, name: 'benzema' },
          { id: 10, name: 'ronaldo' }
        ],
      },
      {
        id: 2,
        team: 'Atletico Madrid',
        description: "Atletico Madrid's 1-4 loss against Real Madrid",
        stadium: "Estádio da Luz - Lison (POR)",
        date: "24/05/2014",
        formation: '1-4-4-2',
        emblem: atleticoMadrid,
        players: [
          { id: 0, name: 'courtois' },
          { id: 1, name: 'juanfran' },
          { id: 2, name: 'miranda' },
          { id: 3, name: 'godin' },
          { id: 4, name: 'filipe luis' },
          { id: 5, name: 'raul garcia' },
          { id: 6, name: 'tiago' },
          { id: 7, name: 'gabi' },
          { id: 8, name: 'koke' },
          { id: 9, name: 'diego costa' },
          { id: 10, name: 'david villa' }
        ],
      },
    ]
  },
  {
    year: 2013,
    games: [
      {
        id: 1,
        team: 'Bayern Munich',
        description: "Bayern Munich's 4-1 win against Borussia Dortmund",
        stadium: "Wembley Stadium - London (ENG)",
        date: "25/05/2013",
        formation: '1-4-2-3-1',
        emblem: bayernMunich,
        players: [
          { id: 0, name: 'neuer' },
          { id: 1, name: 'lahm' },
          { id: 2, name: 'boateng' },
          { id: 3, name: 'dante' },
          { id: 4, name: 'alaba' },
          { id: 5, name: 'martinez' },
          { id: 6, name: 'schweinsteiger' },
          { id: 7, name: 'robben' },
          { id: 8, name: 'muller' },
          { id: 9, name: 'ribery' },
          { id: 10, name: 'mandzukic' }
        ],
      },
      {
        id: 2,
        team: 'Borussia Dortmund',
        description: "Borussia Dortmund's 1-4 loss against Bayern Munich",
        stadium: "Wembley Stadium - London (ENG)",
        date: "25/05/2013",
        formation: '1-4-4-2',
        emblem: borrusiaDortmund,
        players: [
          { id: 0, name: 'weidenfeller' },
          { id: 1, name: 'piszczek' },
          { id: 2, name: 'subotic' },
          { id: 3, name: 'hummels' },
          { id: 4, name: 'schmelzer' },
          { id: 5, name: 'bender' },
          { id: 6, name: 'gundogan' },
          { id: 7, name: 'blaszczykowski' },
          { id: 8, name: 'reus' },
          { id: 9, name: 'grosskreutz' },
          { id: 10, name: 'lewandowski' }
        ],
      },
    ]
  },
  {
    year: 2012,
    games: [
      {
        id: 1,
        team: 'Chelsea',
        description: "Chelsea's 1-1 (pen. 4-3) win against Bayern Munich",
        stadium: "Allianz Arena - Munich (GER)",
        date: "19/05/2012",
        formation: '1-4-2-3-1',
        emblem: chelsea,
        players: [
          { id: 0, name: 'cech' },
          { id: 1, name: 'bosingwa' },
          { id: 2, name: 'david luiz' },
          { id: 3, name: 'cahill' },
          { id: 4, name: 'cole' },
          { id: 5, name: 'mikel' },
          { id: 6, name: 'lampard' },
          { id: 7, name: 'kalou' },
          { id: 8, name: 'mata' },
          { id: 9, name: 'bertrand' },
          { id: 10, name: 'drogba' }
        ],
      },
      {
        id: 2,
        team: 'Bayern Munich',
        description: "Bayern Munich's 1-1 (pen. 3-4) loss against Chelsea",
        stadium: "Allianz Arena - Munich (GER)",
        date: "19/05/2012",
        formation: '1-4-2-3-1',
        emblem: bayernMunich,
        players: [
          { id: 0, name: 'neuer' },
          { id: 1, name: 'lahm' },
          { id: 2, name: 'boateng' },
          { id: 3, name: 'tymoshchuk' },
          { id: 4, name: 'contento' },
          { id: 5, name: 'schweinsteiger' },
          { id: 6, name: 'kroos' },
          { id: 7, name: 'robben' },
          { id: 8, name: 'muller' },
          { id: 9, name: 'ribery' },
          { id: 10, name: 'gomez' }
        ],
      },
    ]
  },
  {
    year: 2011,
    games: [
      {
        id: 1,
        team: 'Barcelona',
        description: "Barcelona's 3-1 win against Manchester United",
        stadium: "Wembley Stadium - London (ENG)",
        date: "28/05/2011",
        formation: '1-4-1-2-3',
        emblem: barcelona,
        players: [
          { id: 0, name: 'valdes' },
          { id: 1, name: 'dani alves' },
          { id: 2, name: 'mascherano' },
          { id: 3, name: 'pique' },
          { id: 4, name: 'abidal' },
          { id: 5, name: 'busquets' },
          { id: 6, name: 'xavi' },
          { id: 7, name: 'iniesta' },
          { id: 8, name: 'david villa' },
          { id: 9, name: 'messi' },
          { id: 10, name: 'pedro' }
        ],
      },
      {
        id: 2,
        team: 'Manchester United',
        description: "Manchester United's 1-3 loss against Barcelona",
        stadium: "Wembley Stadium - London (ENG)",
        date: "28/05/2011",
        formation: '1-4-4-1-1',
        emblem: manchesterUnited,
        players: [
          { id: 0, name: 'van der sar' },
          { id: 1, name: 'fabio' },
          { id: 2, name: 'ferdinand' },
          { id: 3, name: 'vidic' },
          { id: 4, name: 'evra' },
          { id: 5, name: 'valencia' },
          { id: 6, name: 'carrick' },
          { id: 7, name: 'giggs' },
          { id: 8, name: 'park ji sung' },
          { id: 9, name: 'rooney' },
          { id: 10, name: 'hernandez' }
        ],
      },
    ]
  },
  {
    year: 2010,
    games: [
      {
        id: 1,
        team: 'Internazionale Milan',
        description: "Internazionale Milan's 2-0 win against Bayern Munich",
        stadium: "Santiago Bernabéu - Madrid (ESP)",
        date: "22/05/2010",
        formation: '1-4-2-1-3',
        emblem: internazionaleMilan,
        players: [
          { id: 0, name: 'julio cesar' },
          { id: 1, name: 'maicon' },
          { id: 2, name: 'lucio' },
          { id: 3, name: 'samuel' },
          { id: 4, name: 'chivu' },
          { id: 5, name: 'zanetti' },
          { id: 6, name: 'cambiasso' },
          { id: 7, name: 'sneijder' },
          { id: 8, name: 'etoo' },
          { id: 9, name: 'milito' },
          { id: 10, name: 'pandev' }
        ],
      },
      {
        id: 2,
        team: 'Bayern Munich',
        description: "Bayern Munich's 0-2 loss against Internazionale Milan",
        stadium: "Santiago Bernabéu - Madrid (ESP)",
        date: "22/05/2010",
        formation: '1-4-4-2',
        emblem: bayernMunich,
        players: [
          { id: 0, name: 'butt' },
          { id: 1, name: 'lahm' },
          { id: 2, name: 'van buyten' },
          { id: 3, name: 'demichelis' },
          { id: 4, name: 'badstuber' },
          { id: 5, name: 'robben' },
          { id: 6, name: 'van bommel' },
          { id: 7, name: 'schweinsteiger' },
          { id: 8, name: 'altintop' },
          { id: 9, name: 'muller' },
          { id: 10, name: 'olic' }
        ],
      },
    ]
  },
];

export default worldCupData;