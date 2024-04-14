// pages/TournamentSelection/CreateTournament/utils.js

const getErrorKey = (paramKey, round=null) => (
  round !== null ? `round${round}-${paramKey}` : `global-${paramKey}`
);

export { getErrorKey };