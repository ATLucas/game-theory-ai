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

- 