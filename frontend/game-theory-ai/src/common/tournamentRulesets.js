// common/tournamentRulesets.js

export const TOUR_RULESETS = {
    'Reward cooperation': [[1, 1], [1, 0], [0, 1], [0, 0]],
    'Reward defection': [[0, 0], [0, 1], [1, 0], [1, 1]],
    'Reward mutual cooperation (1)': [[1, 1], [0, 1], [1, 0], [1, 1]],
    'Reward mutual cooperation (2)': [[2, 2], [0, 1], [1, 0], [1, 1]],
    'Reward exploitation': [[2, 2], [0, 3], [3, 0], [1, 1]],
    "Prisoner's dilemma": [[3, 3], [0, 5], [5, 0], [1, 1]]
  };
  