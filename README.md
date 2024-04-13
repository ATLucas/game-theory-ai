# game-theory-ai

# Design

## Conops

- UI for running game theory simulations
- Dashboard showing all tournaments you've created
- Start a new tournament
- Choose a ruleset for the new tournament
- Browse strategies available for that ruleset
- Each strategy should be assigned metadata ratings on categories like optimism, forgiveness, provokability, and trustworthiness
- Define player population to include a certain number of players for each strategy. Can be a composition of sub-populations.
- Define the structure of the tournament. What determines who plays who? Round robin, divisions, single elimination, double elimination, etc.
- Define the number of game iterations per head-to-head match...or the average number of iterations + randomness factor...or play until convergence is reached
- Simulate the tournament
- Display the tournament leaderboard and scores
- View tournament performance by category. E.g. How well did forgiveness correlate with success?

## Technical Requirements

- UI written in javascript
- Strategies implemented in python
- Strategies should include asking GPT-4 / Claude Opus / Gemini Ultra via their APIs

## TODO

- Choose ruleset for the tournament when creating it
    - Reward cooperation: [1, 1], [1, 0], [0, 1], [0, 0]
    - Reward defection: [0, 0], [0, 1], [1, 0], [1, 1]
    - Reward mutual cooperation (1): [1, 1], [0, 1], [1, 0], [1, 1]
    - Reward mutual cooperation (2): [2, 2], [0, 1], [1, 0], [1, 1]
    - Reward exploitation: [2, 2], [0, 3], [3, 0], [1, 1]
    - Prisoner's dilemma: [3, 3], [0, 5], [5, 0], [1, 1]
- Choose tournament style
    - round robin
    - single elimination
    - double elimination
    - round robin + elim
    - round robin + elim-2
    - population round robin (% chance of playing inside vs outside the population)
- PopulationSelector for each tournament, similar to TournamentSelector
- StrategySelector for each population, similar to TournamentSelector
    - Tit for Tat
    - Always defect
    - Always cooperate
    - Tit for 2 Tats
- Choose the count of players for each strategy in each population
- Run the simulation
- Display the final standings
- Add strategy categories
- Include category info in the final standings
- Add a GPT-4 strategy
- Add a Claude 3 strategy