// common/tournamentStyles.js

export const TOUR_STYLES = {
  'Round robin': {
    global: {
      'Number of players': { paramName: 'numPlayers', paramType: 'int' },
      'Turns per game': { paramName: 'numTurns', paramType: 'int' },
    },
  },
  'Survival round robin': {
    global: {
      'Number of rounds': { paramName: 'numRounds', paramType: 'int' },
    },
    perRound: {
      'Turns per game': { paramName: 'numTurns', paramType: 'int' },
      'Elimination percentage': { paramName: 'elimPercent', paramType: 'float' },
    },
  },
  'Group round robin': {
    global: {
      'Number of groups': { paramName: 'numGroups', paramType: 'int' },
      'Number of players per group': { paramName: 'groupSize', paramType: 'int' },
      'Chance of matching with a player in the same group': { paramName: 'groupChance', paramType: 'float' },
      'Turns per game': { paramName: 'numTurns', paramType: 'int' },
    },
  },
  'Survival group round robin': {
    global: {
      'Number of rounds': { paramName: 'numRounds', paramType: 'int' },
    },
    perRound: {
      'Turns per game': { paramName: 'numTurns', paramType: 'int' },
      'Elimination percentage': { paramName: 'elimPercent', paramType: 'float' },
      'Number of groups': { paramName: 'numGroups', paramType: 'int' },
      'Number of players per group': { paramName: 'groupSize', paramType: 'int' },
      'Chance of matching with a player in the same group': { paramName: 'groupChance', paramType: 'float' },
    },
  },
}