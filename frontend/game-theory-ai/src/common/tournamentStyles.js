// common/tournamentStyles.js

export const TOUR_STYLES = {
  'Round robin': {
    global: {
      numPlayers: { paramLabel: 'Number of players', paramType: 'int' },
      numTurns: { paramLabel: 'Turns per game', paramType: 'int' },
    },
  },
  'Survival round robin': {
    global: {
      numRounds: { paramLabel: 'Number of rounds', paramType: 'int' },
    },
    perRound: {
      numTurns: { paramLabel: 'Turns per game', paramType: 'int' },
      elimPercent: { paramLabel: 'Elimination percentage', paramType: 'float' },
    },
  },
  'Group round robin': {
    global: {
      numGroups: { paramLabel: 'Number of groups', paramType: 'int' },
      groupSize: { paramLabel: 'Number of players per group', paramType: 'int' },
      groupChance: { paramLabel: 'Chance of matching within group', paramType: 'float' },
      numTurns: { paramLabel: 'Turns per game', paramType: 'int' },
    },
  },
  'Survival group round robin': {
    global: {
      numRounds: { paramLabel: 'Number of rounds', paramType: 'int' },
    },
    perRound: {
      numTurns: { paramLabel: 'Turns per game', paramType: 'int' },
      elimPercent: { paramLabel: 'Elimination percentage', paramType: 'float' },
      numGroups: { paramLabel: 'Number of groups', paramType: 'int' },
      groupSize: { paramLabel: 'Number of players per group', paramType: 'int' },
      groupChance: { paramLabel: 'Chance of matching within group', paramType: 'float' },
    },
  },
}