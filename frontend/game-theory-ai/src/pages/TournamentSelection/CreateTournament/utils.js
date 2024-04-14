// pages/TournamentSelection/CreateTournament/utils.js

const getErrorKey = (paramKey, round) => (
  round ? `round${round}-${paramKey}` : `global-${paramKey}`
);

export { getErrorKey };