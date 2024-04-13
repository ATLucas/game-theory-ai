// common/tournamentStyles.js

export const TOUR_STYLES = {
  'Round robin': {
    numMatchups: "int", // How many times will a given player play every other player
  },
  'Multi-round round robin': {
    numRounds: "int", // Number of rounds
  },
  'World Cup': {
    numGroups: "int", // How many groups
    groupSize: "int", // How many players per group
  },
  'Multi-round group round robin': {
    numGroups: "int", // How many groups
    groupSize: "int", // How many players per group
    groupChance: "float", // How likely is a player to be matched with a player from the same group
    elimChance: "float", // How many players are eliminated per round
  },
}