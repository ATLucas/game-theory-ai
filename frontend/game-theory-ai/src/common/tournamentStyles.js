// common/tournamentStyles.js

export const TOUR_STYLES = {
  'Round robin': {
    'Number of players': { paramName: 'numPlayers', paramType: 'int' },
  },
  'Survival round robin': {
    'Number of rounds': { paramName: 'numRounds', paramType: 'int' },
    // TODO: The following should be separately configurable for each round
    'Per-round elimination percentage': { paramName: 'elimPercent', paramType: 'float' },
  },
  'Group round robin': {
    'Number of groups': { paramName: 'numGroups', paramType: 'int' },
    'Number of players per group': { paramName: 'groupSize', paramType: 'int' },
    'Chance of matching with a player in the same group': { paramName: 'groupChance', paramType: 'float' },
  },
  'Survival group round robin': {
    'Number of rounds': { paramName: 'numRounds', paramType: 'int' },
    // TODO: The following should be separately configurable for each round
    'Per-round elimination percentage': { paramName: 'elimPercent', paramType: 'float' },
    'Number of groups': { paramName: 'numGroups', paramType: 'int' },
    'Number of players per group': { paramName: 'groupSize', paramType: 'int' },
    'Chance of matching with a player in the same group': { paramName: 'groupChance', paramType: 'float' },
  },
}