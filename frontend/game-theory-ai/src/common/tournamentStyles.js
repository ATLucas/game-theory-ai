// common/tournamentStyles.js

export const TOUR_STYLES = {
  'Round robin': {},
  'Multi-round round robin': {
    'Number of rounds': { paramName: 'numRounds', paramType: 'int' },
    'Per-round elimination percentage': { paramName: 'elimPercent', paramType: 'float' },
  },
  'World Cup': {
    'Number of groups': { paramName: 'numGroups', paramType: 'int' },
    'Number of players per group': { paramName: 'groupSize', paramType: 'int' },
  },
  'Multi-round group round robin': {
    'Number of groups': { paramName: 'numGroups', paramType: 'int' },
    'Number of players per group': { paramName: 'groupSize', paramType: 'int' },
    'Chance of matching with a player in the same group': { paramName: 'groupChance', paramType: 'float' },
    'Per-round elimination percentage': { paramName: 'elimPercent', paramType: 'float' },
  },
}